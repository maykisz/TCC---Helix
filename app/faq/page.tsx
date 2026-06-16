import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";
import styles from "./page.module.css";

const faqs = [
  {
    question: "Preciso ter uma ideia pronta para começar?",
    answer: "Não. Podemos partir de um problema, planilha, processo manual ou oportunidade de negócio.",
  },
  {
    question: "Vocês criam SaaS do zero?",
    answer: "Sim. Ajudamos com planejamento, interface, desenvolvimento, publicação e evolução do produto.",
  },
  {
    question: "Também fazem sistemas internos?",
    answer: "Sim. Criamos painéis, áreas administrativas, fluxos operacionais e integrações sob medida.",
  },
  {
    question: "Consigo começar com uma primeira versão menor?",
    answer: "Sim. Normalmente recomendamos uma versão inicial objetiva para validar rápido e evoluir com uso real.",
  },
  {
    question: "Vocês integram IA e APIs?",
    answer: "Sim, quando faz sentido para o produto. Integramos dados, automações e recursos inteligentes.",
  },
  {
    question: "Depois da entrega vocês mantêm o projeto?",
    answer: "Podemos apoiar com ajustes, melhorias, novas integrações e evolução contínua.",
  },
];

export default function FaqPage() {
  return (
    <main className={styles.page}>
      <SiteHeader />

      <section className={styles.hero} data-nav-theme="dark">
        <span>FAQ</span>
        <h1>Perguntas frequentes antes de criar software.</h1>
      </section>

      <section className={styles.list} data-nav-theme="light">
        {faqs.map((item, index) => (
          <details key={item.question}>
            <summary>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{item.question}</strong>
              <ArrowUpRight size={18} />
            </summary>
            <p>{item.answer}</p>
          </details>
        ))}
      </section>

      <section className={styles.cta} data-nav-theme="light">
        <h2>Ainda ficou alguma dúvida?</h2>
        <Link href="/contato">Falar com a Helix</Link>
      </section>
      <SiteFooter />
    </main>
  );
}
