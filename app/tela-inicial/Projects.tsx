"use client";

import { useEffect, useState } from "react";
import { Check } from "lucide-react";

const copy = {
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
} as const;

export function Projects() {
  const [activeProject, setActiveProject] = useState(0);
  const [revealedProject, setRevealedProject] = useState<number | null>(null);
  const [projectTimerKey, setProjectTimerKey] = useState(0);

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

  return (
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
  );
}
