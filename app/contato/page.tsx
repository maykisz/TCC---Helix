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
        <h2>Antes da conversa, pense nestes pontos.</h2>
        <div>
          <span>Qual problema você quer resolver?</span>
          <span>Quem vai usar o sistema?</span>
          <span>Existe algum fluxo ou planilha hoje?</span>
          <span>O projeto precisa vender, operar ou automatizar?</span>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
