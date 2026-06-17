"use client";

import {
  ArrowUpRight,
  CheckCircle2,
  Code2,
  LayoutDashboard,
  MessagesSquare,
  Rocket,
  ShieldCheck,
  Workflow,
} from "lucide-react";
import Link from "next/link";
import { useEffect, type CSSProperties } from "react";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";
import styles from "./page.module.css";

const whatsappHref =
  "https://wa.me/5511940895758?text=Ola%2C%20quero%20criar%20um%20software%20sob%20medida%20para%20minha%20empresa.%20Podemos%20conversar%3F";

const solutions = [
  {
    icon: LayoutDashboard,
    title: "Sistemas internos",
    text: "Painéis, áreas administrativas e fluxos para organizar a operação sem depender de planilhas soltas.",
  },
  {
    icon: Rocket,
    title: "Produtos SaaS",
    text: "MVPs e plataformas com base preparada para evoluir, vender e receber novas funcionalidades.",
  },
  {
    icon: Workflow,
    title: "Automações",
    text: "Integrações, formulários, notificações e rotinas que reduzem trabalho manual.",
  },
];

const principles = [
  "Clareza antes do código",
  "Interface simples de usar",
  "Base pronta para evoluir",
  "Comunicação direta",
];

const workflow = [
  {
    icon: MessagesSquare,
    title: "Entendemos o cenário",
    text: "Mapeamos problema, rotina, usuário, prioridade e o que precisa gerar resultado primeiro.",
  },
  {
    icon: Code2,
    title: "Desenhamos a solução",
    text: "Transformamos o escopo em telas, regras e arquitetura para o desenvolvimento não virar improviso.",
  },
  {
    icon: ShieldCheck,
    title: "Construímos para durar",
    text: "Entregamos uma base organizada, publicável e preparada para manutenção, ajustes e crescimento.",
  },
];

const members = [
  {
    initials: "UI",
    name: "Design de Produto",
    role: "Experiência, interface e direção visual",
    text: "Transforma processos confusos em telas simples, fluxos claros e uma experiência que parece feita para o dia a dia da empresa.",
  },
  {
    initials: "DEV",
    name: "Desenvolvimento",
    role: "Arquitetura, código e publicação",
    text: "Constrói a base técnica do sistema, integra ferramentas, publica a aplicação e prepara o produto para evoluir depois da primeira versão.",
  },
];

function useAboutReveal() {
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>("[data-about-reveal]"));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.revealVisible);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.16, rootMargin: "0px 0px -8% 0px" },
    );

    elements.forEach((element, index) => {
      element.style.setProperty("--reveal-delay", `${Math.min(index * 55, 360)}ms`);
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);
}

export default function SobreNosPage() {
  useAboutReveal();

  return (
    <main className={styles.page}>
      <section className={styles.shell}>
        <SiteHeader />

        <section className={styles.hero} data-nav-theme="dark">
          <div className={styles.heroAtmosphere} />
          <div className={styles.heroCopy}>
            <span className={`${styles.kicker} ${styles.reveal}`} data-about-reveal="text">
              Sobre a Helix
            </span>
            <h1 className={styles.reveal} data-about-reveal="title">
              <span>Software sob medida</span>
              <span>sem improviso</span>
            </h1>
            <p className={styles.reveal} data-about-reveal="text">
              Criamos software sob medida para transformar processos confusos em
              sistemas claros, úteis e prontos para crescer com a empresa.
            </p>
            <div className={`${styles.heroActions} ${styles.reveal}`} data-about-reveal="pop">
              <a href={whatsappHref} target="_blank" rel="noreferrer">
                Falar no WhatsApp
                <ArrowUpRight size={16} />
              </a>
              <Link href="/contato">Enviar briefing</Link>
            </div>
          </div>
        </section>

        <section className={styles.trust} data-nav-theme="light">
          <div className={`${styles.trustCopy} ${styles.reveal}`} data-about-reveal="slide-left">
            <span>O que fazemos</span>
            <h2>Software para vender, operar e automatizar com mais controle.</h2>
          </div>

          <div className={`${styles.solutionGrid} ${styles.reveal}`} data-about-reveal="fade">
            {solutions.map((solution) => {
              const Icon = solution.icon;
              return (
                <article key={solution.title}>
                  <Icon size={24} />
                  <h3>{solution.title}</h3>
                  <p>{solution.text}</p>
                </article>
              );
            })}
          </div>
        </section>

        <section className={styles.story} data-nav-theme="light">
          <article className={`${styles.storyMain} ${styles.reveal}`} data-about-reveal="card">
            <h2>A Helix existe para tirar software do improviso.</h2>
            <p>
              Muitas empresas sabem o que precisam melhorar, mas travam entre
              ferramentas prontas demais, planilhas frágeis e ideias que nunca viram
              produto. A Helix entra para organizar esse caminho: entendemos o
              problema, desenhamos a solução e construímos software com foco em uso real.
            </p>
          </article>

          <article className={`${styles.metricCard} ${styles.reveal}`} data-about-reveal="slide-right">
            <span>Direção</span>
            <strong>Do briefing ao produto</strong>
            <p>Estratégia, interface, desenvolvimento e evolução em uma rota clara.</p>
          </article>

          <article className={`${styles.noteCard} ${styles.reveal}`} data-about-reveal="card">
            <p>
              Não vendemos apenas telas. Entregamos sistemas que precisam fazer
              sentido para quem usa, para quem opera e para quem vai continuar
              evoluindo o produto depois da primeira versão.
            </p>
            <Link href="/contato">Enviar briefing</Link>
          </article>
        </section>

        <section className={styles.principles} data-nav-theme="light">
          {principles.map((item, index) => (
            <span
              className={styles.reveal}
              data-about-reveal="chip"
              key={item}
              style={{ "--reveal-delay": `${index * 95}ms` } as CSSProperties}
            >
              <CheckCircle2 size={18} />
              {item}
            </span>
          ))}
        </section>

        <section className={styles.teamSection} data-nav-theme="light">
          <div className={`${styles.sectionTitle} ${styles.reveal}`} data-about-reveal="title">
            <h2>Nossa forma de trabalhar.</h2>
            <p>Produto, design e desenvolvimento caminham juntos para o sistema nascer com direção, não como uma lista solta de tarefas.</p>
          </div>

          <div className={styles.teamGrid}>
            {workflow.map((item, index) => {
              const Icon = item.icon;
              return (
              <article
                className={styles.reveal}
                data-about-reveal="photo"
                key={item.title}
                style={{ "--reveal-delay": `${index * 110}ms` } as CSSProperties}
              >
                <span>
                  <Icon size={24} />
                </span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
              );
            })}
          </div>
        </section>

        <section className={styles.membersSection} data-nav-theme="dark">
          <div className={`${styles.membersIntro} ${styles.reveal}`} data-about-reveal="title">
            <span>Integrantes</span>
            <h2>Duas frentes trabalhando como um só produto.</h2>
            <p>
              A Helix une olhar de produto e execução técnica para que cada sistema
              seja bonito, claro, publicável e pronto para evoluir.
            </p>
          </div>

          <div className={styles.membersGrid}>
            {members.map((member, index) => (
              <article
                className={styles.reveal}
                data-about-reveal="card"
                key={member.name}
                style={{ "--reveal-delay": `${index * 120}ms` } as CSSProperties}
              >
                <div className={styles.memberAvatar}>{member.initials}</div>
                <div>
                  <h3>{member.name}</h3>
                  <strong>{member.role}</strong>
                  <p>{member.text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.cta} data-nav-theme="light">
          <div className={`${styles.dealCard} ${styles.reveal}`} data-about-reveal="slide-left" aria-hidden="true">
            <span>Próximo passo</span>
            <strong>Clareza para construir</strong>
            <p>Uma conversa objetiva para entender o gargalo, definir prioridade e indicar o melhor caminho.</p>
            <small>Sistemas internos, SaaS, automações e páginas de conversão.</small>
          </div>
          <div className={styles.reveal} data-about-reveal="slide-right">
            <h2>Vamos tirar seu software do papel?</h2>
            <p>Conte o que precisa vender, operar ou automatizar. A Helix organiza o caminho e constrói com foco em resultado.</p>
            <a href={whatsappHref} target="_blank" rel="noreferrer">
              Falar no WhatsApp
              <ArrowUpRight size={16} />
            </a>
          </div>
        </section>
      </section>

      <SiteFooter />
    </main>
  );
}
