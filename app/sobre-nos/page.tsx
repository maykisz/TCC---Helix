"use client";

import {
  ArrowUpRight,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Compass,
  MessagesSquare,
  ShieldCheck,
} from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState, type CSSProperties } from "react";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";
import styles from "./page.module.css";

const whatsappHref =
  "https://wa.me/5511940895758?text=Ola%2C%20quero%20criar%20um%20software%20sob%20medida%20para%20minha%20empresa.%20Podemos%20conversar%3F";

const capabilities = [
  {
    eyebrow: "Operação",
    title: "Sistemas internos",
    text: "Painéis e áreas administrativas para acompanhar tarefas, clientes, prazos e indicadores em um só lugar.",
    image: "/imgs/problems/sistema.jpg",
  },
  {
    eyebrow: "Automação",
    title: "Automações",
    text: "Integrações, notificações e fluxos automáticos para tirar trabalho repetitivo da rotina da equipe.",
    image: "/imgs/problems/atendimento.jpg",
  },
  {
    eyebrow: "Produto",
    title: "Produtos SaaS",
    text: "MVPs e plataformas web com base pronta para validar mercado, vender e evoluir sem recomeçar do zero.",
    image: "/imgs/problems/saas.jpg",
  },
];

const principles = [
  {
    icon: Compass,
    title: "Clareza primeiro",
    text: "Antes de escrever código, entendemos o fluxo, o usuário e a prioridade real.",
  },
  {
    icon: ShieldCheck,
    title: "Base confiável",
    text: "Construímos pensando em manutenção, segurança, performance e crescimento.",
  },
  {
    icon: MessagesSquare,
    title: "Comunicação direta",
    text: "O projeto precisa ser acompanhável, com decisões visíveis e linguagem simples.",
  },
];

const workflow = [
  "Diagnóstico do processo",
  "Escopo da primeira versão",
  "Protótipo validável",
  "Desenvolvimento e publicação",
];

const team = [
  {
    name: "Desenvolvedor 01",
    title: "Produto e interface",
    text: "Transforma processos confusos em telas claras, fluxos simples e uma experiência que funciona na rotina.",
    image: "/imgs/problems/sistema.jpg",
  },
  {
    name: "Desenvolvedor 02",
    title: "Código e arquitetura",
    text: "Constrói a base técnica, integra ferramentas, publica o sistema e prepara o produto para evoluir.",
    image: "/imgs/problems/atendimento.jpg",
  },
  {
    name: "Desenvolvedor 03",
    title: "Operação e melhoria",
    text: "Acompanha ajustes, automações e próximos passos para o software continuar útil depois da entrega.",
    image: "/imgs/problems/saas.jpg",
  },
  {
    name: "Desenvolvedor 04",
    title: "Frontend e experiência",
    text: "Cuida da interação, responsividade e acabamento visual para a interface ficar clara em qualquer tela.",
    image: "/imgs/problems/operacao.jpg",
  },
  {
    name: "Desenvolvedor 05",
    title: "Backend e integrações",
    text: "Organiza regras de negócio, APIs, bancos de dados e integrações para o sistema funcionar com consistência.",
    image: "/imgs/problems/planilhas.jpg",
  },
  {
    name: "Desenvolvedor 06",
    title: "Automação de processos",
    text: "Desenha fluxos automáticos para reduzir tarefas manuais, retrabalho e dependência de ferramentas soltas.",
    image: "/imgs/solucoes/web-design-desenvolvimento.png",
  },
  {
    name: "Desenvolvedor 07",
    title: "Design de produto",
    text: "Traduz necessidades do negócio em jornadas simples, telas úteis e decisões visuais com propósito.",
    image: "/imgs/solucoes/design-ui-ux.png",
  },
  {
    name: "Desenvolvedor 08",
    title: "Arquitetura e evolução",
    text: "Prepara a base técnica para manutenção, novas versões e crescimento sem recomeçar do zero.",
    image: "/imgs/solucoes/direcao-criativa.png",
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

function clamp(value: number, min = 0, max = 1) {
  return Math.min(Math.max(value, min), max);
}

function easeOutCubic(value: number) {
  return 1 - Math.pow(1 - value, 3);
}

function easeInCubic(value: number) {
  return value * value * value;
}

function useScrollSceneProgress() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let frameId = 0;
    let targetProgress = 0;
    let smoothProgress = 0;

    const updateTarget = () => {
      const section = sectionRef.current;
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const pinStart = 88;
      const scrollDistance = Math.max(rect.height - window.innerHeight, 1);
      targetProgress = clamp((pinStart - rect.top) / scrollDistance);
    };

    const animate = () => {
      smoothProgress += (targetProgress - smoothProgress) * 0.12;
      setProgress(smoothProgress);

      if (Math.abs(targetProgress - smoothProgress) > 0.001) {
        frameId = window.requestAnimationFrame(animate);
      } else {
        smoothProgress = targetProgress;
        setProgress(targetProgress);
        frameId = 0;
      }
    };

    const requestUpdate = () => {
      updateTarget();
      if (!frameId) frameId = window.requestAnimationFrame(animate);
    };

    requestUpdate();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    return () => {
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
      if (frameId) window.cancelAnimationFrame(frameId);
    };
  }, []);

  return { progress, sectionRef };
}

export default function SobreNosPage() {
  useAboutReveal();
  const { progress: capabilityProgress, sectionRef: capabilitySectionRef } =
    useScrollSceneProgress();
  const [teamStartIndex, setTeamStartIndex] = useState(0);
  const visibleTeam = [0, 1, 2].map((offset) => team[(teamStartIndex + offset) % team.length]);

  const showPreviousTeam = () => {
    setTeamStartIndex((current) => (current - 1 + team.length) % team.length);
  };

  const showNextTeam = () => {
    setTeamStartIndex((current) => (current + 1) % team.length);
  };

  return (
    <main className={styles.page}>
      <section className={styles.shell}>
        <SiteHeader theme="dark" />

        <section className={styles.hero} data-nav-theme="dark">
          <div className={styles.heroMedia} aria-hidden="true" />
          <div className={styles.heroShade} aria-hidden="true" />

          <div className={styles.heroCopy}>
            <span className={`${styles.kicker} ${styles.reveal}`} data-about-reveal="text">
              Home / Sobre nós
            </span>
            <h1 className={styles.reveal} data-about-reveal="title">
              Construímos software para operações que precisam sair do improviso.
            </h1>
            <p className={styles.reveal} data-about-reveal="text">
              A Helix transforma processos, ideias e gargalos de negócio em sistemas
              web sob medida, automações e produtos digitais com direção clara.
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

        <section
          className={styles.statementSection}
          data-nav-theme="light"
          ref={capabilitySectionRef}
        >
          <div className={styles.statementInner}>
            <h2 className={styles.reveal} data-about-reveal="title">
              Do processo solto ao sistema funcionando.
            </h2>
            <p className={`${styles.statementLead} ${styles.reveal}`} data-about-reveal="text">
              Organizamos dados, automatizamos rotinas e desenhamos produtos digitais
              com uma base clara para crescer.
            </p>

            <div className={styles.capabilityScene}>
              <div className={styles.capabilityStage} aria-label="Soluções Helix">
                {capabilities.map((item, index) => {
                  const rawProgress = capabilityProgress * capabilities.length - index;
                  const enter = clamp(rawProgress / 0.72);
                  const settle = clamp((rawProgress - 0.52) / 0.22);
                  const exit = clamp((rawProgress - 1.06) / 0.5);
                  const easedEnter = easeOutCubic(enter);
                  const easedExit = easeInCubic(exit);
                  const panelStyle = {
                    "--card-y": `${(1 - easedEnter) * 118 - easedExit * 64}%`,
                    "--card-scale": 0.34 + easedEnter * 0.66 - easedExit * 0.06,
                    "--card-opacity": Math.max(0, Math.min(1, enter * 1.8) * (1 - exit * 0.96)),
                    "--card-z": String(20 + index),
                    "--card-radius": `${26 - settle * 14}px`,
                    "--label-opacity": settle * (1 - exit),
                  } as CSSProperties;

                  return (
                    <figure
                      className={styles.capabilityCard}
                      key={item.title}
                      style={panelStyle}
                    >
                      <img src={item.image} alt={item.title} draggable={false} />
                      <figcaption>
                        <span>{String(index + 1).padStart(2, "0")}</span>
                        {item.eyebrow}
                      </figcaption>
                    </figure>
                  );
                })}
              </div>

              <div className={styles.capabilityCopyStack}>
                {capabilities.map((item, index) => {
                  const rawProgress = capabilityProgress * capabilities.length - index;
                  const enter = easeOutCubic(clamp((rawProgress - 0.74) / 0.34));
                  const exit = easeInCubic(clamp((rawProgress - 1.08) / 0.38));
                  const textStyle = {
                    "--copy-opacity": Math.max(0, Math.min(1, enter * 1.25) * (1 - exit)),
                    "--copy-y": `${(1 - enter) * 24 - exit * 18}px`,
                  } as CSSProperties;

                  return (
                    <article
                      className={styles.capabilityCopy}
                      key={item.title}
                      style={textStyle}
                    >
                      <span>{item.eyebrow}</span>
                      <h3>{item.title}</h3>
                      <p>{item.text}</p>
                    </article>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section className={styles.valuesSection} data-nav-theme="dark">
          <div className={styles.splitHeading}>
            <span className={`${styles.sectionEyebrow} ${styles.reveal}`} data-about-reveal="text">
              Princípios de projeto
            </span>
            <div>
              <h2 className={styles.reveal} data-about-reveal="slide-left">
                O que defendemos
              </h2>
              <p className={styles.reveal} data-about-reveal="slide-right">
                Software bom nasce quando estratégia, interface e desenvolvimento caminham
                juntos. O visual importa, mas a operação precisa ficar mais simples.
              </p>
            </div>
          </div>

          <div className={styles.principleGrid}>
            {principles.map((item, index) => {
              const Icon = item.icon;
              return (
                <article
                  className={styles.reveal}
                  data-about-reveal="card"
                  key={item.title}
                  style={{ "--reveal-delay": `${index * 90}ms` } as CSSProperties}
                >
                  <div className={styles.principleTop}>
                    <Icon size={20} />
                    <span>{String(index + 1).padStart(2, "0")}</span>
                  </div>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <section className={styles.impactSection} data-nav-theme="dark">
          <div className={styles.impactCopy}>
            <h2 className={styles.reveal} data-about-reveal="slide-left">
              Soluções sob medida, resultado na rotina.
            </h2>
            <p className={styles.reveal} data-about-reveal="text">
              Entramos onde planilhas, mensagens e ferramentas soltas já não dão conta.
              O objetivo é deixar o processo visível, rastreável e mais fácil de operar.
            </p>
            <div className={styles.workflowList}>
              {workflow.map((item, index) => (
                <span
                  className={styles.reveal}
                  data-about-reveal="chip"
                  key={item}
                  style={{ "--reveal-delay": `${index * 80}ms` } as CSSProperties}
                >
                  <CheckCircle2 size={16} />
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className={`${styles.systemPreview} ${styles.reveal}`} data-about-reveal="fade">
            <div className={styles.previewGlow} aria-hidden="true" />
            <figure>
              <img src="/imgs/about-impact-dashboard.png" alt="Painel de sistema sob medida" draggable={false} />
              <figcaption>
                <span>Preview operacional</span>
                <strong>Fluxo, dados e rotina em um só painel.</strong>
              </figcaption>
            </figure>
            <div className={styles.previewBadge}>
              <span>+ clareza</span>
              <strong>Processo rastreável</strong>
            </div>
            <div className={styles.previewMetric}>
              <span>04 etapas</span>
              <strong>da ideia ao produto</strong>
            </div>
          </div>
        </section>

        <section className={styles.teamSection} data-nav-theme="dark">
          <div className={styles.teamHeader}>
            <div className={styles.sectionTitle}>
              <h2 className={styles.reveal} data-about-reveal="title">
                As frentes por trás da Helix
              </h2>
              <p className={styles.reveal} data-about-reveal="text">
                Produto, design e desenvolvimento trabalhando como um único fluxo.
              </p>
            </div>

            <div className={styles.carouselControls} aria-label="Controle do carrossel de desenvolvedores">
              <span>
                {String(teamStartIndex + 1).padStart(2, "0")} / {String(team.length).padStart(2, "0")}
              </span>
              <button type="button" onClick={showPreviousTeam} aria-label="Ver desenvolvedores anteriores">
                <ChevronLeft size={18} />
              </button>
              <button type="button" onClick={showNextTeam} aria-label="Ver próximos desenvolvedores">
                <ChevronRight size={18} />
              </button>
            </div>
          </div>

          <div className={styles.teamCarousel} aria-live="polite">
            {visibleTeam.map((member) => (
              <article
                key={member.name}
              >
                <div className={styles.memberPhoto}>
                  <img src={member.image} alt={member.name} draggable={false} />
                </div>
                <div className={styles.memberInfo}>
                  <span>{member.name}</span>
                  <h3>{member.title}</h3>
                  <p>{member.text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.clientSection} data-nav-theme="dark">
          <div className={styles.clientHeading}>
            <h2 className={styles.reveal} data-about-reveal="title">
              Quando faz sentido chamar a Helix
            </h2>
            <p className={styles.reveal} data-about-reveal="text">
              Se a operação depende de esforço manual demais, o próximo passo pode ser
              transformar esse conhecimento em sistema.
            </p>
          </div>

          <article className={`${styles.clientCard} ${styles.reveal}`} data-about-reveal="card">
            <div>
              <span>Diagnóstico</span>
              <strong>Processos travados por planilhas, mensagens ou retrabalho.</strong>
            </div>
            <p>
              Mapeamos o fluxo atual, identificamos onde o software pode gerar impacto e
              desenhamos uma primeira versão possível antes de partir para desenvolvimento.
            </p>
            <Link href="/contato">
              Enviar briefing
              <ArrowUpRight size={15} />
            </Link>
          </article>
        </section>

        <section className={styles.cta} data-nav-theme="dark">
          <h2 className={styles.reveal} data-about-reveal="title">
            Vamos transformar um processo travado em software?
          </h2>
          <p className={styles.reveal} data-about-reveal="text">
            Conte o que precisa vender, operar ou automatizar. A gente organiza o caminho.
          </p>
          <a
            className={styles.reveal}
            data-about-reveal="pop"
            href={whatsappHref}
            target="_blank"
            rel="noreferrer"
          >
            Falar no WhatsApp
            <ArrowUpRight size={16} />
          </a>
        </section>
      </section>

      <SiteFooter />
    </main>
  );
}
