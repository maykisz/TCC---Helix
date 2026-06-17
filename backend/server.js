import cors from "cors";
import "dotenv/config";
import express from "express";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import nodemailer from "nodemailer";

const app = express();
const port = Number(process.env.PORT ?? 4000);
const frontendOrigin = process.env.FRONTEND_ORIGIN ?? "http://localhost:3000";
const gmailUser = process.env.GMAIL_USER ?? "contactushelix@gmail.com";
const gmailAppPassword = process.env.GMAIL_APP_PASSWORD?.replace(/\s/g, "");
const contactToEmail = process.env.CONTACT_TO_EMAIL ?? gmailUser;
const dataDir = path.join(process.cwd(), "data");
const dataFile = path.join(dataDir, "contact-messages.json");

app.use(cors({ origin: frontendOrigin }));
app.use(express.json({ limit: "64kb" }));

function clean(value) {
  return typeof value === "string" ? value.trim() : "";
}

function isEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

async function readMessages() {
  try {
    const file = await readFile(dataFile, "utf8");
    return JSON.parse(file);
  } catch {
    return [];
  }
}

async function saveMessage(message) {
  const messages = await readMessages();
  messages.unshift(message);

  await mkdir(dataDir, { recursive: true });
  await writeFile(dataFile, `${JSON.stringify(messages, null, 2)}\n`, "utf8");
}

function createTransporter() {
  if (!gmailAppPassword) {
    throw new Error("GMAIL_APP_PASSWORD nao foi configurada.");
  }

  return nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: gmailUser,
      pass: gmailAppPassword,
    },
  });
}

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function buildEmailHtml(message) {
  return `
    <h1>Novo briefing recebido</h1>
    <p><strong>Nome:</strong> ${escapeHtml(message.name)}</p>
    <p><strong>Email:</strong> ${escapeHtml(message.email)}</p>
    <p><strong>Telefone:</strong> ${escapeHtml(message.phone || "Nao informado")}</p>
    <p><strong>Empresa:</strong> ${escapeHtml(message.company || "Nao informada")}</p>
    <p><strong>Tipo de projeto:</strong> ${escapeHtml(message.projectType)}</p>
    <p><strong>Mensagem:</strong></p>
    <p>${escapeHtml(message.message).replaceAll("\n", "<br />")}</p>
    <p><small>Recebido em ${escapeHtml(message.createdAt)}</small></p>
  `;
}

async function sendContactEmail(message) {
  const transporter = createTransporter();

  await transporter.sendMail({
    from: `"Helix Site" <${gmailUser}>`,
    to: contactToEmail,
    replyTo: message.email,
    subject: `Novo briefing Helix - ${message.name}`,
    text: [
      "Novo briefing recebido",
      `Nome: ${message.name}`,
      `Email: ${message.email}`,
      `Telefone: ${message.phone || "Nao informado"}`,
      `Empresa: ${message.company || "Nao informada"}`,
      `Tipo de projeto: ${message.projectType}`,
      "",
      message.message,
    ].join("\n"),
    html: buildEmailHtml(message),
  });
}

app.get("/health", (_request, response) => {
  response.json({ status: "ok" });
});

app.post("/api/contact", async (request, response) => {
  const name = clean(request.body?.name);
  const email = clean(request.body?.email);
  const phone = clean(request.body?.phone);
  const company = clean(request.body?.company);
  const projectType = clean(request.body?.projectType);
  const message = clean(request.body?.message);

  if (!name || !email || !projectType || !message) {
    return response.status(400).json({ message: "Preencha os campos obrigatorios." });
  }

  if (!isEmail(email)) {
    return response.status(400).json({ message: "Informe um email valido." });
  }

  const contactMessage = {
    id: crypto.randomUUID(),
    name,
    email,
    phone: phone || undefined,
    company: company || undefined,
    projectType,
    message,
    createdAt: new Date().toISOString(),
  };

  try {
    await sendContactEmail(contactMessage);
    await saveMessage(contactMessage);
  } catch (error) {
    console.error(error);
    return response.status(500).json({ message: "Nao foi possivel enviar o email agora." });
  }

  return response.status(201).json({ message: "Mensagem enviada com sucesso.", id: contactMessage.id });
});

app.listen(port, () => {
  console.log(`Backend Helix rodando em http://localhost:${port}`);
});
