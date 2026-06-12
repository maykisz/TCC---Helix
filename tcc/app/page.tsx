"use client";

import {
  ArrowUpRight,
  ChevronDown,
  Code2,
  KanbanSquare,
  Sparkles,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

function AmbientScene() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);

    const uniforms = {
      uTime: { value: 0 },
      uResolution: { value: new THREE.Vector2(1, 1) },
    };

    const geometry = new THREE.PlaneGeometry(2, 2);
    const material = new THREE.ShaderMaterial({
      uniforms,
      transparent: true,
      vertexShader: `
        varying vec2 vUv;

        void main() {
          vUv = uv;
          gl_Position = vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        precision highp float;

        uniform float uTime;
        uniform vec2 uResolution;
        varying vec2 vUv;

        float beam(float x, float center, float width) {
          return exp(-pow(abs(x - center) / width, 2.0));
        }

        void main() {
          vec2 uv = vUv;
          float aspect = uResolution.x / max(uResolution.y, 1.0);
          float x = (uv.x - 0.5) * aspect + 0.5;
          float y = uv.y;
          float t = uTime * 0.42;

          float columns = 0.0;
          columns += beam(x + sin(t + y * 4.2) * 0.012, 0.08, 0.038);
          columns += beam(x + sin(t * 1.2 + y * 5.6) * 0.016, 0.22, 0.052);
          columns += beam(x + sin(t * 0.9 + y * 3.4) * 0.019, 0.39, 0.045);
          columns += beam(x + sin(t * 1.35 + y * 5.1) * 0.013, 0.58, 0.056);
          columns += beam(x + sin(t * 1.1 + y * 4.8) * 0.017, 0.74, 0.043);
          columns += beam(x + sin(t * 0.8 + y * 3.8) * 0.014, 0.91, 0.05);

          float lowerGlow = smoothstep(0.94, 0.02, y);
          float horizon = exp(-pow((y - 0.22) / 0.18, 2.0));
          float topFade = smoothstep(1.0, 0.34, y);
          float waveA = sin((x * 11.0) + t * 2.0 + sin(y * 6.0)) * 0.5 + 0.5;
          float waveB = sin((x * 21.0) - t * 1.4 + y * 4.0) * 0.5 + 0.5;
          float ribbons = pow(waveA, 2.5) * 0.28 + pow(waveB, 4.0) * 0.18;
          float sideBloom = exp(-pow((x - 0.12) / 0.18, 2.0)) + exp(-pow((x - 0.88) / 0.18, 2.0));

          vec3 ink = vec3(0.0, 0.0, 0.0);
          vec3 aqua = vec3(0.42, 0.86, 1.0);
          vec3 blue = vec3(0.55, 0.74, 1.0);
          vec3 cyan = vec3(0.66, 0.93, 1.0);

          vec3 color = ink;
          color += aqua * columns * lowerGlow * topFade * 0.62;
          color += blue * horizon * (0.55 + columns * 0.45);
          color += cyan * lowerGlow * 0.46;
          color += aqua * ribbons * lowerGlow * 0.42;
          color += blue * sideBloom * lowerGlow * 0.18;

          float vignette = smoothstep(0.95, 0.32, distance(uv, vec2(0.5, 0.52)));
          color *= vignette;

          float alpha = clamp((lowerGlow * 0.88 + horizon * 0.52 + columns * 0.36) * topFade, 0.0, 1.0);
          gl_FragColor = vec4(color, alpha);
        }
      `,
    });

    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    const resize = () => {
      const width = mount.clientWidth;
      const height = mount.clientHeight;
      renderer.setSize(width, height, false);
      uniforms.uResolution.value.set(width, height);
    };

    let frame = 0;
    const clock = new THREE.Clock();
    const animate = () => {
      uniforms.uTime.value = clock.getElapsedTime();
      renderer.render(scene, camera);
      frame = requestAnimationFrame(animate);
    };

    resize();
    animate();
    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(frame);
      geometry.dispose();
      material.dispose();
      renderer.dispose();
      renderer.domElement.remove();
    };
  }, []);

  return <div ref={mountRef} className="ambient-scene" aria-hidden="true" />;
}

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
      {
        threshold: 0.16,
        rootMargin: "0px 0px -8% 0px",
      },
    );

    elements.forEach((element, index) => {
      element.style.setProperty("--reveal-delay", `${Math.min(index * 45, 260)}ms`);
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);
}

type Lang = "pt" | "en";

const copy = {
  pt: {
    nav: {
      home: "Início",
      services: "Serviços",
      process: "Processo",
      pricing: "Planos",
      cases: "Projetos",
      contact: "Agendar conversa",
    },
    hero: {
      eyebrow: "Estúdio de Desenvolvimento Web",
      titleA: "Softwares",
      titleMuted: "que",
      titleB: "alavancam sua empresa",
      textA: "Criamos sites, sistemas web, plataformas SaaS e ferramentas internas",
      textB: "que transformam ideias de negócio em produtos digitais escaláveis.",
      primary: "Começar projeto",
      secondary: "Ver projetos",
    },
    mockup: {
      navGroupA: "Favoritos",
      overview: "Visão geral",
      projects: "Projetos",
      navGroupB: "Painéis",
      analytics: "Análises",
      clients: "Clientes",
      deployments: "Publicações",
      dashboards: "Painéis",
      build: "SaaS do cliente",
      search: "Buscar",
      today: "Hoje",
      pages: "Páginas",
      components: "Componentes",
      routes: "Rotas API",
      notifications: "Notificações",
      notificationA: "Landing aprovada.",
      notificationB: "Checkout publicado.",
      notificationC: "Novo feedback do cliente.",
      activity: "Atividade",
      activityA: "Design system atualizado.",
    },
    trusted: {
      kicker: "Parceiros",
      titleA: "Economize tempo e mantenha",
      titleB: "seus projetos em movimento",
      milestone: "Marco",
      review: "Revisão de design do cliente",
      outline: "Escopo",
      activity: "Atividade",
      sprint: "Escopo da sprint",
      wireframes: "Wireframes",
      api: "Notas da API",
      launch: "Plano de lançamento",
      day: "Dia 12 de 52",
      completed: "Concluído",
      tasks: "38 tarefas",
      nextReview: "Próxima revisão",
      friday: "Sexta-feira",
    },
  },
  en: {
    nav: {
      home: "Home",
      services: "Services",
      process: "Process",
      pricing: "Pricing",
      cases: "Cases",
      contact: "Book Call",
    },
    hero: {
      eyebrow: "Web Development Studio",
      titleA: "Custom Software",
      titleMuted: "for",
      titleB: "Growing Companies",
      textA: "We design and build fast web apps, SaaS platforms and internal tools",
      textB: "that turn business ideas into scalable digital products.",
      primary: "Start a Project",
      secondary: "View Case Studies",
    },
    mockup: {
      navGroupA: "Favorites",
      overview: "Overview",
      projects: "Projects",
      navGroupB: "Dashboards",
      analytics: "Analytics",
      clients: "Clients",
      deployments: "Deployments",
      dashboards: "Dashboards",
      build: "Client SaaS Build",
      search: "Search",
      today: "Today",
      pages: "Pages",
      components: "Components",
      routes: "API Routes",
      notifications: "Notifications",
      notificationA: "Landing approved.",
      notificationB: "Checkout deployed.",
      notificationC: "New client feedback.",
      activity: "Activity",
      activityA: "Design system updated.",
    },
    trusted: {
      kicker: "Partners",
      titleA: "Save time and keep",
      titleB: "projects moving",
      milestone: "Milestone",
      review: "Client Design Review",
      outline: "Outline",
      activity: "Activity",
      sprint: "Sprint scope",
      wireframes: "Wireframes",
      api: "API notes",
      launch: "Launch plan",
      day: "Day 12 of 52",
      completed: "Completed",
      tasks: "38 tasks",
      nextReview: "Next review",
      friday: "Friday",
    },
  },
} as const;

export default function Home() {
  const [lang, setLang] = useState<Lang>("pt");
  const t = copy[lang];

  useScrollReveal();

  useEffect(() => {
    document.documentElement.lang = lang === "pt" ? "pt-BR" : "en";
  }, [lang]);

  return (
    <main className="page-shell">
      <AmbientScene />
      <div className="grain" />
      <header className="topbar" data-reveal="down">
        <a className="brand" href="#">
          <img className="brand-logo" src="/helix.svg" alt="Helix" />
        </a>

        <nav className="nav-pill" aria-label={lang === "pt" ? "Navegação principal" : "Primary navigation"}>
          <a className="active" href="#">{t.nav.home}</a>
          <a href="#">{t.nav.services}</a>
          <a href="#">{t.nav.process}</a>
          <a href="#">{t.nav.pricing}</a>
          <a href="#">{t.nav.cases}</a>
        </nav>

        <div className="header-actions">
          <label className="language-select" aria-label={lang === "pt" ? "Trocar idioma" : "Change language"}>
            <select value={lang} onChange={(event) => setLang(event.target.value as Lang)}>
              <option value="pt">Português</option>
              <option value="en">English</option>
            </select>
            <ChevronDown size={13} aria-hidden="true" />
          </label>
          <a className="contact-button" href="#">{t.nav.contact}</a>
        </div>
      </header>

      <section className="hero">
        <div className="eyebrow" data-reveal="up">
          <Sparkles size={12} fill="currentColor" />
          <span>{t.hero.eyebrow}</span>
        </div>

        <h1 data-reveal="up">
          {t.hero.titleA} <span>{t.hero.titleMuted}</span>
          <br />
          {t.hero.titleB}
        </h1>

        <p data-reveal="up">
          {t.hero.textA}
          <br />
          {t.hero.textB}
        </p>

        <div className="hero-actions" data-reveal="up">
          <a className="primary-action" href="#">
            {t.hero.primary}
            <ArrowUpRight size={14} />
          </a>
          <a className="secondary-action" href="#">{t.hero.secondary}</a>
        </div>

        <div
          className="prototype-visual"
          aria-label={lang === "pt" ? "Prévia de protótipo de sistema web" : "Dark web app prototype preview"}
          data-reveal="zoom"
        >
          <div className="prototype-glow" />
          <div className="prototype-card prototype-card-left" />
          <div className="prototype-card prototype-card-right" />
          <div className="dashboard-image">
            <aside className="dash-sidebar">
              <div className="dash-logo">
                <Code2 size={17} />
                Helix
              </div>
              <span>{t.mockup.navGroupA}</span>
              <a className="active" href="#">{t.mockup.overview}</a>
              <a href="#">{t.mockup.projects}</a>
              <span>{t.mockup.navGroupB}</span>
              <a href="#">{t.mockup.analytics}</a>
              <a href="#">{t.mockup.clients}</a>
              <a href="#">{t.mockup.deployments}</a>
            </aside>

            <div className="dash-main">
              <div className="dash-topbar">
                <span>{t.mockup.dashboards}</span>
                <strong>{t.mockup.build}</strong>
                <div className="dash-search">{t.mockup.search}</div>
              </div>

              <div className="dash-content">
                <div className="dash-heading">
                  <span>{t.mockup.overview}</span>
                  <strong>{t.mockup.today}</strong>
                </div>

                <div className="metric-grid">
                  <div>
                    <small>{t.mockup.pages}</small>
                    <strong>24</strong>
                    <span>+18%</span>
                  </div>
                  <div>
                    <small>{t.mockup.components}</small>
                    <strong>86</strong>
                    <span>+31%</span>
                  </div>
                  <div>
                    <small>{t.mockup.routes}</small>
                    <strong>17</strong>
                    <span>+12%</span>
                  </div>
                </div>

                <div className="chart-panel">
                  <div className="chart-line" />
                  <div className="chart-bars">
                    <span />
                    <span />
                    <span />
                    <span />
                    <span />
                    <span />
                  </div>
                </div>
              </div>
            </div>

            <aside className="dash-activity">
              <strong>{t.mockup.notifications}</strong>
              <div>
                <span />
                {t.mockup.notificationA}
              </div>
              <div>
                <span />
                {t.mockup.notificationB}
              </div>
              <div>
                <span />
                {t.mockup.notificationC}
              </div>
              <strong>{t.mockup.activity}</strong>
              <div>
                <span />
                {t.mockup.activityA}
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="trusted-section">
        <p className="trusted-kicker" data-reveal="up">{t.trusted.kicker}</p>

        <div
          className="logo-strip"
          aria-label={lang === "pt" ? "Parceiros" : "Partners"}
          data-reveal="up"
        >
          <div className="logo-track">
            {Array.from({ length: 4 }).map((_, index) => (
              <div className="partner-set" key={index} aria-hidden={index > 0}>
                <img src="/genesys.svg" alt={index === 0 ? "Genesys" : ""} />
                <img src="/lumina.svg" alt={index === 0 ? "Lumina" : ""} />
                <img src="/img_7268.svg" alt={index === 0 ? "IMG 7268" : ""} />
              </div>
            ))}
          </div>
        </div>

        <h2 data-reveal="up">
          {t.trusted.titleA}
          <br />
          {t.trusted.titleB}
        </h2>

        <div className="review-card" data-reveal="zoom">
          <div className="review-glow" />
          <div className="review-window">
            <div className="review-topbar">
              <div>
                <span className="tiny-status">{t.trusted.milestone}</span>
                <strong>{t.trusted.review}</strong>
              </div>
              <div className="window-actions">
                <span />
                <span />
              </div>
            </div>

            <div className="review-tabs">
              <span className="active">{t.trusted.outline}</span>
              <span>{t.trusted.activity}</span>
            </div>

            <div className="review-body">
              <aside className="review-sidebar">
                <div className="sidebar-item active">
                  <KanbanSquare size={13} />
                  {t.trusted.sprint}
                </div>
                <div className="sidebar-item">{t.trusted.wireframes}</div>
                <div className="sidebar-item">{t.trusted.api}</div>
                <div className="sidebar-item">{t.trusted.launch}</div>
              </aside>

              <div className="review-content">
                <div className="progress-row">
                  <span>{t.trusted.day}</span>
                  <strong>74%</strong>
                </div>
                <div className="progress-track">
                  <span />
                </div>
                <div className="task-grid">
                  <div>
                    <small>{t.trusted.completed}</small>
                    <strong>{t.trusted.tasks}</strong>
                  </div>
                  <div>
                    <small>{t.trusted.nextReview}</small>
                    <strong>{t.trusted.friday}</strong>
                  </div>
                </div>
                <div className="timeline">
                  <span />
                  <span />
                  <span />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
