"use client";

import { Send } from "lucide-react";
import { useState, type FormEvent } from "react";
import styles from "./page.module.css";

const initialStatus = {
  type: "idle",
  message: "",
} as const;

const contactApiUrl = process.env.NEXT_PUBLIC_CONTACT_API_URL ?? "http://localhost:4000/api/contact";

type Status =
  | typeof initialStatus
  | {
      type: "success" | "error";
      message: string;
    };

export function ContactForm() {
  const [status, setStatus] = useState<Status>(initialStatus);
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus(initialStatus);

    const form = event.currentTarget;
    const formData = new FormData(form);

    const response = await fetch(contactApiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: formData.get("name"),
        email: formData.get("email"),
        phone: formData.get("phone"),
        company: formData.get("company"),
        projectType: formData.get("projectType"),
        message: formData.get("message"),
      }),
    }).catch(() => null);

    setIsSubmitting(false);

    if (!response) {
      setStatus({ type: "error", message: "Nao foi possivel conectar ao backend agora." });
      return;
    }

    const data = (await response.json().catch(() => null)) as { message?: string } | null;

    if (!response.ok) {
      setStatus({ type: "error", message: data?.message ?? "Revise os dados e tente novamente." });
      return;
    }

    form.reset();
    setStatus({ type: "success", message: "Mensagem enviada. O email foi disparado automaticamente." });
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label>
        Nome
        <input name="name" type="text" placeholder="Seu nome" required />
      </label>

      <label>
        Email
        <input name="email" type="email" placeholder="voce@empresa.com" required />
      </label>

      <label>
        Telefone
        <input name="phone" type="tel" placeholder="+55 11 99999-0000" />
      </label>

      <label>
        Empresa
        <input name="company" type="text" placeholder="Nome da empresa" />
      </label>

      <label>
        Tipo de projeto
        <select name="projectType" defaultValue="" required>
          <option value="" disabled>
            Selecione
          </option>
          <option value="Site institucional">Site institucional</option>
          <option value="Sistema interno">Sistema interno</option>
          <option value="Plataforma SaaS">Plataforma SaaS</option>
          <option value="Automacao">Automacao</option>
        </select>
      </label>

      <label>
        Briefing
        <textarea name="message" placeholder="Conte o que precisa virar software" rows={6} required />
      </label>

      <button type="submit" disabled={isSubmitting}>
        <Send size={18} />
        {isSubmitting ? "Enviando" : "Enviar briefing"}
      </button>

      {status.message ? <p className={styles[status.type]}>{status.message}</p> : null}
    </form>
  );
}
