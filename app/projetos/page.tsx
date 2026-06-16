import { ArrowUpRight, Check } from "lucide-react";
import Link from "next/link";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";
import styles from "./page.module.css";

const projects = [
  {
    name: "Orion Ops",
    type: "Sistema interno",
    text: "Painel para acompanhar tarefas, solicitações e indicadores operacionais.",
    image: "/imgs/orion-logo.jpeg",
  },
  {
    name: "GeneSys Cloud",
    type: "SaaS",
    text: "Base demonstrativa para clientes, planos e automações recorrentes.",
    image: "/imgs/genesys.png",
  },
  {
    name: "Lumina Launch",
    type: "Landing page",
    text: "Página de lançamento com narrativa objetiva e foco em conversão.",
    image: "/imgs/lumina-logo.png",
  },
];

export default function ProjetosPage() {
  return (
    <main className={styles.page}>
      <SiteHeader />

      <section className={styles.hero} data-nav-theme="dark">
        <span>Projetos</span>
        <h1>Produto, operação e conversão em experiências digitais publicáveis.</h1>
        <p>Uma seleção de conceitos e frentes que mostram o tipo de solução que a Helix constrói.</p>
      </section>

      <section className={styles.projects} data-nav-theme="light">
        {projects.map((project) => (
          <article key={project.name}>
            <div className={styles.logoBox}>
              <img src={project.image} alt={project.name} />
            </div>
            <div>
              <span>{project.type}</span>
              <h2>{project.name}</h2>
              <p>{project.text}</p>
            </div>
          </article>
        ))}
      </section>

      <section className={styles.benefits} data-nav-theme="light">
        {["Produto navegável", "Interface sob medida", "Código evolutivo", "Pronto para publicar"].map((item) => (
          <span key={item}>
            <Check size={15} />
            {item}
          </span>
        ))}
      </section>

      <section className={styles.cta} data-nav-theme="dark">
        <h2>Seu projeto pode ser o próximo case.</h2>
        <Link href="/contato">
          Conversar com a Helix
          <ArrowUpRight size={16} />
        </Link>
      </section>
      <SiteFooter />
    </main>
  );
}
