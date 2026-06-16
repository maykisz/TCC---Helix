"use client";

import {
  ArrowUpRight,
  Check,
} from "lucide-react";
import { useEffect, useRef, useState, type MouseEvent } from "react";
import { SiteFooter } from "./components/SiteFooter";

function useScrollReveal() {
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.16, rootMargin: "0px 0px -8% 0px" },
    );

    const revealGroups = new Map<Element, number>();

    elements.forEach((element) => {
      const group = element.closest("section, footer, header") ?? document.body;
      const index = revealGroups.get(group) ?? 0;
      revealGroups.set(group, index + 1);
      element.style.setProperty("--reveal-delay", `${Math.min(index * 95, 320)}ms`);
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);
}

const copy = {
  nav: {
    home: "Início",
    services: "Serviços",
    process: "Processo",
    pricing: "Soluções",
    cases: "Projetos",
    feedbacks: "Feedbacks",
    contact: "Criar software",
  },
  hero: {
    titleA: "Softwares que",
    titleB: "alavancam sua empresa",
    textA: "Criamos sites, sistemas web, plataformas SaaS e ferramentas internas",
    textB: "que transformam ideias de negócio em produtos digitais escaláveis.",
    primary: "Começar projeto",
    secondary: "Ver projetos",
  },
  problems: {
    items: [
      {
        title: "Processos manuais demorados",
        text: "Automatize rotinas repetitivas e reduza o tempo gasto em tarefas operacionais.",
      },
      {
        title: "Planilhas desorganizadas",
        text: "Centralize dados, etapas e indicadores em uma interface clara para sua equipe.",
      },
      {
        title: "Falta de sistema interno",
        text: "Crie ferramentas sob medida para acompanhar solicitações, clientes e produção.",
      },
      {
        title: "Ideia de SaaS sem equipe técnica",
        text: "Transforme uma oportunidade em produto navegável com base pronta para evoluir.",
      },
    ],
  },
  projects: {
    title: "Projetos reais.\nProduto, operação e conversão.",
    text: "Enquanto os cases reais são selecionados, estes conceitos mostram o tipo de solução que a Helix desenvolve.",
    benefits: ["Produto navegável", "Interface sob medida", "Código evolutivo", "Pronto para publicar"],
    items: [
      {
        name: "Orion Ops",
        type: "Sistema interno",
        result: "Painel operacional para acompanhar tarefas, indicadores e solicitações em um único fluxo.",
        image: "https://cdn.dribbble.com/userupload/45592291/file/e9dde1e6c804a4bb13ae21ed0c38a46d.png?resize=1600x1200&vertical=center",
      },
      {
        name: "Genesys Cloud",
        type: "SaaS",
        result: "Plataforma demonstrativa para gestão de clientes, planos e automações recorrentes.",
        image: "https://cdn.dribbble.com/userupload/44748338/file/3c3d12a9fa8a3db1dca0ec67a49924ca.jpg?resize=1600x1200&vertical=center",
      },
      {
        name: "Lumina Launch",
        type: "Landing page",
        result: "Página de lançamento com narrativa objetiva, visual limpo e foco em conversão.",
        image: "https://cdn.dribbble.com/userupload/45592291/file/e9dde1e6c804a4bb13ae21ed0c38a46d.png?resize=1600x1200&vertical=center",
      },
      {
        name: "Atlas CRM",
        type: "Produto digital",
        result: "Fluxo comercial com visão de funil, histórico e relatórios para tomada de decisão.",
        image: "https://cdn.dribbble.com/userupload/43946026/file/original-6497e67d398898dcc44b736a5c0b62fd.png?resize=752x&vertical=center",
      },
      {
        name: "Nova Desk",
        type: "Automação",
        result: "Central de solicitações conectada a formulários, notificações e indicadores de atendimento.",
        image: "https://cdn.dribbble.com/userupload/22686344/file/original-7943f2ae38bbadff5a75f6e614ab83c9.gif",
      },
    ],
  },
  processSteps: {
    title: "Do plano à evolução.",
    items: [
      {
        title: "Diagnóstico",
        text: "Mapeamos o problema, objetivos e prioridades reais.",
      },
      {
        title: "Planejamento",
        text: "Definimos escopo, tecnologia e caminho de entrega.",
      },
      {
        title: "Design",
        text: "Criamos interfaces limpas para uso real.",
      },
      {
        title: "Desenvolvimento",
        text: "Construímos com código organizado e performance.",
      },
      {
        title: "Entrega e evolução",
        text: "Publicamos, ajustamos e evoluímos o produto.",
      },
    ],
  },
  testimonials: {
    title: "O que clientes dizem\nsobre a Helix.",
    items: [
      {
        quote: "A Helix tirou nossa operação das planilhas e transformou tudo em um painel simples. O time entendeu rápido o que era prioridade.",
        name: "Marina Duarte",
        role: "Operações, Orion Ops",
        photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=160&q=80",
      },
      {
        quote: "O projeto saiu com cara de produto de verdade. Design limpo, fluxo claro e uma base técnica pronta para crescer.",
        name: "Rafael Nunes",
        role: "Founder, Lumina Launch",
        photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=160&q=80",
      },
      {
        quote: "A entrega foi objetiva. Eles conectaram automações, área de cliente e indicadores sem complicar a rotina da equipe.",
        name: "Bianca Torres",
        role: "Diretora, Genesys Cloud",
        photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=160&q=80",
      },
    ],
  },
  faq: {
    title: "Perguntas\nfrequentes.",
    text: "Respostas rápidas para entender como a Helix transforma ideias, processos e operações em software.",
    items: [
      {
        question: "Preciso ter uma ideia pronta para começar?",
        answer: "Não. Podemos partir de um problema ou processo e ajudar a estruturar a solução junto com você.",
      },
      {
        question: "Trabalham com empresas de qualquer segmento?",
        answer: "Sim. Já desenvolvemos soluções para diferentes setores — o que muda é o contexto, não a qualidade.",
      },
      {
        question: "Como funciona o processo de desenvolvimento?",
        answer: "Começamos entendendo o problema, mapeamos os requisitos, desenvolvemos em ciclos curtos e validamos com você em cada etapa.",
      },
      {
        question: "Consigo acompanhar o andamento do projeto?",
        answer: "Sim. Mantemos comunicação ativa com atualizações regulares e acesso ao progresso em tempo real.",
      },
      {
        question: "Vocês usam inteligência artificial nos projetos?",
        answer: "Sim, quando faz sentido. Integramos IA para automação, análise de dados, atendimento e outras aplicações práticas.",
      },
      {
        question: "E se eu precisar mudar algo no meio do projeto?",
        answer: "Trabalhamos de forma flexível. Mudanças de escopo são discutidas e ajustadas sem travar o desenvolvimento.",
      },
      {
        question: "Os sistemas se integram com ferramentas que já uso?",
        answer: "Na maioria dos casos, sim. Integramos com ERPs, CRMs, APIs de pagamento, plataformas de comunicação e muito mais.",
      },
      {
        question: "Meus dados ficam seguros?",
        answer: "Sim. Seguimos boas práticas de segurança, criptografia e controle de acesso em todos os projetos.",
      },
    ],
  },
} as const;

const partnerLogos = [
  { name: "Orion", image: "/imgs/orion-logo.jpeg" },
  { name: "Lumina", image: "/imgs/lumina-logo.png" },
  { name: "GeneSys", image: "/imgs/genesys.png" },
] as const;

export default function Home() {
  const servicesShowcaseRef = useRef<HTMLDivElement>(null);
  const problemListRef = useRef<HTMLDivElement>(null);
  const hasCompletedServicesAnimationRef = useRef(false);
  const [activeProject, setActiveProject] = useState(0);
  const [activeProblem, setActiveProblem] = useState(1);
  const [servicesVideoStep, setServicesVideoStep] = useState(0);
  const [revealedProject, setRevealedProject] = useState<number | null>(null);
  const [projectTimerKey, setProjectTimerKey] = useState(0);
  const [isNavScrolled, setIsNavScrolled] = useState(false);
  const [isNavLight, setIsNavLight] = useState(false);

  useScrollReveal();

  useEffect(() => {
    const updateNav = () => {
      setIsNavScrolled(window.scrollY > 18);

      const element = document.elementFromPoint(window.innerWidth / 2, 92);
      const themedSection = element?.closest<HTMLElement>("[data-nav-theme]");
      setIsNavLight(themedSection?.dataset.navTheme === "light");
    };

    updateNav();
    window.addEventListener("scroll", updateNav, { passive: true });

    return () => window.removeEventListener("scroll", updateNav);
  }, []);

  useEffect(() => {
    const updateServicesAnimation = () => {
      const triggerElement = servicesShowcaseRef.current;

      if (!triggerElement || window.matchMedia("(max-width: 720px)").matches) {
        setServicesVideoStep(0);
        hasCompletedServicesAnimationRef.current = true;
        return;
      }

      if (hasCompletedServicesAnimationRef.current) {
        return;
      }

      const rect = triggerElement.getBoundingClientRect();
      const progress = Math.min(1, Math.max(0, (window.innerHeight * 0.62 - rect.top) / (window.innerHeight * 0.72)));

      setServicesVideoStep(progress > 0.72 ? 2 : progress > 0.34 ? 1 : 0);

      if (progress >= 1) {
        setServicesVideoStep(2);
        hasCompletedServicesAnimationRef.current = true;
      }
    };

    updateServicesAnimation();
    window.addEventListener("scroll", updateServicesAnimation, { passive: true });
    window.addEventListener("resize", updateServicesAnimation);

    return () => {
      window.removeEventListener("scroll", updateServicesAnimation);
      window.removeEventListener("resize", updateServicesAnimation);
    };
  }, []);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveProject((current) => (current + 1) % copy.projects.items.length);
      setRevealedProject(null);
    }, 3600);

    return () => window.clearInterval(timer);
  }, [projectTimerKey]);

  function selectProject(index: number) {
    setActiveProject(index);
    setRevealedProject(index);
    setProjectTimerKey((current) => current + 1);
  }

  function scrollProblemSlider(direction: "prev" | "next") {
    const list = problemListRef.current;

    if (!list) {
      return;
    }

    const card = list.querySelector<HTMLElement>(".problem-item");
    const cardWidth = card?.offsetWidth ?? list.clientWidth;
    const gap = Number.parseFloat(window.getComputedStyle(list).columnGap || "0");
    const step = cardWidth + gap;
    const nextIndex =
      direction === "next"
        ? Math.min(copy.problems.items.length - 1, activeProblem + 1)
        : Math.max(0, activeProblem - 1);

    setActiveProblem(nextIndex);
    list.scrollBy({ left: direction === "next" ? step : -step, behavior: "smooth" });
  }

  function handleNavClick(event: MouseEvent<HTMLAnchorElement>, target: string) {
    if (!target.startsWith("#")) {
      return;
    }

    event.preventDefault();

    if (target === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const element = document.querySelector<HTMLElement>(target);

    if (!element) {
      return;
    }

    const top = element.getBoundingClientRect().top + window.scrollY - 72;
    window.scrollTo({ top, behavior: "smooth" });
  }

  return (
    <main className="page-shell">
      <div className="grain" />

      <header className={`topbar ${isNavScrolled ? "is-scrolled" : ""} ${isNavLight ? "is-light" : ""}`}>
        <a className="brand" href="#" onClick={(event) => handleNavClick(event, "#")}>
          <img
            className="brand-logo"
            src={isNavLight ? "/imgs/helix-logo-black.png" : "/imgs/helix-logo-white.png"}
            alt="Helix"
          />
        </a>

        <nav className="nav-pill" aria-label="Navegação principal">
          <a className="active" href="#" onClick={(event) => handleNavClick(event, "#")}>{copy.nav.home}</a>
          <a href="#services" onClick={(event) => handleNavClick(event, "#services")}>{copy.nav.services}</a>
          <a href="#projects" onClick={(event) => handleNavClick(event, "#projects")}>{copy.nav.cases}</a>
          <a href="#process" onClick={(event) => handleNavClick(event, "#process")}>{copy.nav.process}</a>
          <a href="#problems" onClick={(event) => handleNavClick(event, "#problems")}>{copy.nav.pricing}</a>
          <a href="#testimonials" onClick={(event) => handleNavClick(event, "#testimonials")}>{copy.nav.feedbacks}</a>
        </nav>

        <div className="header-actions">
          <a className="contact-button" href="/contato">{copy.nav.contact}</a>
        </div>
      </header>

      <section className="hero" data-nav-theme="dark">
        <h1 data-reveal="up">
          <span className="hero-title-line">{copy.hero.titleA}</span>
          <span className="hero-title-line">{copy.hero.titleB}</span>
        </h1>

        <p data-reveal="up">
          {copy.hero.textA}
          <br />
          {copy.hero.textB}
        </p>

        <div className="hero-actions" data-reveal="up">
          <a className="primary-action" href="/contato">
            {copy.hero.primary}
            <ArrowUpRight size={14} />
          </a>
          <a className="secondary-action" href="#projects" onClick={(event) => handleNavClick(event, "#projects")}>{copy.hero.secondary}</a>
        </div>
      </section>

      <section className="section services-section" id="services" data-nav-theme="light">
        <div
          className={`services-showcase services-video-step-${servicesVideoStep}`}
          ref={servicesShowcaseRef}
        >
          <div className="services-pin-frame">
            <div className="services-intro">
              <h2>Do rascunho ao ar <br></br>robusto, limpo, pronto pra crescer</h2>
            </div>

            <div className="services-video-stage" aria-hidden="true">
              <div className="service-video-card service-video-primary">
                <video autoPlay muted loop playsInline preload="metadata">
                  <source src="/video/Code_compiles_website_loads_success_202606132222.mp4" type="video/mp4" />
                </video>
              </div>
              <div className="service-video-card service-video-secondary">
                <video autoPlay muted loop playsInline preload="metadata">
                  <source src="/video/Chat_to_product_development_202606132243.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
          </div>

          <div className="partners-showcase" aria-label="Parceiros">
            <div className="partners-copy">
              <h2>Parceiros</h2>
            </div>

            <div className="partners-slider">
              <div className="partners-rail partners-rail-primary">
                {[...partnerLogos, ...partnerLogos, ...partnerLogos, ...partnerLogos].map((partner, index) => (
                  <div className="partner-logo-card" key={`primary-${partner.name}-${index}`}>
                    <img src={partner.image} alt={partner.name} draggable={false} />
                  </div>
                ))}
              </div>

              <div className="partners-rail partners-rail-secondary" aria-hidden="true">
                {[...partnerLogos].reverse().concat([...partnerLogos].reverse(), [...partnerLogos].reverse(), [...partnerLogos].reverse()).map((partner, index) => (
                  <div className="partner-logo-card partner-logo-card-ghost" key={`secondary-${partner.name}-${index}`}>
                    <img src={partner.image} alt="" draggable={false} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section problems-section" id="problems" data-nav-theme="dark">
        <div className="problems-header" data-reveal="split">
          <div className="problems-copy">
            <span className="problems-kicker">Desafios que resolvemos</span>
            <h2>
              Quando o negócio cresce,
              <br />
              improvisar custa caro.
            </h2>
          </div>

          <div className="problems-aside">
            <span className="problems-counter">
              {String(activeProblem + 1).padStart(2, "0")} / {String(copy.problems.items.length).padStart(2, "0")}
            </span>
            <div className="problems-controls" aria-label="Navegar desafios">
              <button
                type="button"
                aria-label="Desafio anterior"
                onClick={() => scrollProblemSlider("prev")}
              >
                <ArrowUpRight size={16} />
              </button>
              <i />
              <button
                type="button"
                aria-label="Próximo desafio"
                onClick={() => scrollProblemSlider("next")}
              >
                <ArrowUpRight size={16} />
              </button>
            </div>
          </div>
        </div>

        <div className="problem-list" data-reveal="cards" ref={problemListRef}>
          {copy.problems.items.map((item, index) => (
            <article
              className={`problem-item ${activeProblem === index ? "active" : ""}`}
              key={item.title}
              onClick={() => setActiveProblem(index)}
              onMouseEnter={() => setActiveProblem(index)}
            >
              <span className="problem-icon">{String(index + 1).padStart(2, "0")}</span>
              <div>
                <strong>{item.title}</strong>
                <p>{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section projects-section" id="projects" data-nav-theme="light">
        <div className="section-heading projects-heading" data-reveal="zoom">
          <h2>{copy.projects.title}</h2>
          <p>{copy.projects.text}</p>
        </div>

        <div className="project-slider is-visible">
          <div className={`project-stage ${revealedProject !== null ? "project-revealed" : ""}`}>
            {copy.projects.items.map((project, index) => {
              const total = copy.projects.items.length;
              const rawOffset = (index - activeProject + total) % total;
              const position =
                rawOffset === 0 ? 0 :
                rawOffset === 1 ? 1 :
                rawOffset === 2 ? 2 :
                rawOffset === total - 1 ? -1 :
                rawOffset === total - 2 ? -2 :
                9;
              const positionClass =
                position === 0 ? "active" :
                position === 1 ? "next" :
                position === 2 ? "next-far" :
                position === -1 ? "prev" :
                position === -2 ? "prev-far" :
                "hidden";

              return (
                <article
                  className={`project-slide ${positionClass} ${revealedProject === index ? "revealed" : ""}`}
                  key={project.name}
                  aria-hidden={position !== 0}
                  onClick={() => selectProject(index)}
                >
                  <div className="project-slide-image">
                    <img src={project.image} alt="" draggable={false} />
                  </div>
                  <div className="project-slide-content">
                    <span>{project.type}</span>
                    <h3>{project.name}</h3>
                    <p>{project.result}</p>
                  </div>
                </article>
              );
            })}
          </div>

          <div className="project-benefits">
            {copy.projects.benefits.map((benefit) => (
              <span key={benefit}>
                <Check size={14} />
                {benefit}
              </span>
            ))}
          </div>

          <div className="project-dots" aria-label="Selecionar projeto">
            {copy.projects.items.map((project, index) => (
              <button
                className={activeProject === index ? "active" : ""}
                key={project.name}
                type="button"
                aria-label={project.name}
                aria-current={activeProject === index}
                onClick={() => selectProject(index)}
              >
                <span />
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="section process-section" id="process" data-nav-theme="light">
        <div className="section-heading section-heading-left">
          <h2>{copy.processSteps.title}</h2>
        </div>

        <div className="process-list is-visible">
          {copy.processSteps.items.map((step, index) => (
            <article className="process-step" key={step.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="testimonials-section" id="testimonials" data-nav-theme="dark">
        <div className="testimonials-inner" data-reveal="marquee">
          <div className="testimonials-heading">
            <h2>{copy.testimonials.title}</h2>
          </div>

          <div className="testimonial-track">
            <div className="testimonial-rail">
              {[...copy.testimonials.items, ...copy.testimonials.items].map((item, index) => (
                <article className="testimonial-card" key={`${item.name}-${index}`}>
                  <p>“{item.quote}”</p>
                  <div className="testimonial-author">
                    <span className="testimonial-photo">
                      <img src={item.photo} alt={item.name} draggable={false} />
                    </span>
                    <div>
                      <strong>{item.name}</strong>
                      <small>{item.role}</small>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section faq-section" id="faq" data-nav-theme="light">
        <div className="faq-copy" data-reveal="fade-left">
          <h2>{copy.faq.title}</h2>
          <p>{copy.faq.text}</p>
        </div>

        <div className="faq-list" data-reveal="accordion">
          {copy.faq.items.map((item, index) => (
            <details className="faq-item" key={item.question}>
              <summary>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{item.question}</strong>
                <ArrowUpRight size={18} />
              </summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
