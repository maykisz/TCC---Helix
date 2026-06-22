import { ArrowUpRight, Mail, MessageCircle, Phone } from "lucide-react";
import Link from "next/link";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";
import { ContactForm } from "./ContactForm";
import styles from "./page.module.css";

const contact = [
  { icon: Mail, title: "Email", text: "contato@helix.dev", href: "mailto:contato@helix.dev" },
  { icon: Phone, title: "Telefone", text: "+55 11 99999-0000", href: "tel:+5511999990000" },
  { icon: MessageCircle, title: "Briefing", text: "Conte o que precisa virar software", href: "mailto:contato@helix.dev" },
];

const briefingItems = [
  {
    title: "Problema principal",
    text: "Qual gargalo mais atrapalha hoje: retrabalho, planilhas, atendimento lento, falta de controle ou vendas sem acompanhamento?",
  },
  {
    title: "Pessoas envolvidas",
    text: "Quem vai usar o sistema no dia a dia e quem precisa acompanhar indicadores, aprovar etapas ou receber notificações?",
  },
  {
    title: "Fluxo atual",
    text: "Como o processo funciona agora? Vale citar ferramentas, planilhas, mensagens, documentos e etapas que já existem.",
  },
  {
    title: "Resultado esperado",
    text: "O projeto precisa vender, operar, automatizar ou validar uma ideia? Isso ajuda a definir a primeira versão certa.",
  },
];

export default function ContatoPage() {
  return (
    <main className={styles.page}>
      <SiteHeader theme="dark" />

      <section className={styles.hero} data-nav-theme="dark">
        <span>Contato</span>
        <h1>Vamos entender o que precisa sair do papel.</h1>
        <p>
          Fale sobre sua ideia, processo, sistema interno ou SaaS. A primeira conversa serve para organizar o cenário e encontrar o melhor próximo passo.
        </p>
      </section>

      <section className={styles.contactGrid} data-nav-theme="dark">
        {contact.map((item) => {
          const Icon = item.icon;
          return (
            <a href={item.href} key={item.title}>
              <Icon size={22} />
              <span>{item.title}</span>
              <strong>{item.text}</strong>
              <ArrowUpRight size={16} />
            </a>
          );
        })}
      </section>

      <section className={styles.formSection} data-nav-theme="dark">
        <div>
          <span>Briefing</span>
          <h2>Envie os detalhes do projeto.</h2>
          <p>
            A mensagem fica salva no backend local do projeto para organizar os leads e próximos contatos.
          </p>
        </div>
        <ContactForm />
      </section>

      <section className={styles.briefing} data-nav-theme="light">
        <div className={styles.briefingHeader}>
          <span>Preparação</span>
          <h2>Antes da conversa, pense nestes pontos.</h2>
          <p>
            Não precisa chegar com escopo fechado. Essas respostas ajudam a transformar
            uma ideia solta em uma primeira versão possível, clara e priorizada.
          </p>
        </div>
        <div className={styles.briefingGrid}>
          {briefingItems.map((item, index) => (
            <article key={item.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
