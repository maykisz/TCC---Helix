"use client";

import { useEffect, useState } from "react";
import type { CSSProperties } from "react";

const copy = {
  testimonials: {
    title: "Resultados esperados quando o software entra na rotina.",
    text: "Cenários comuns em projetos sob medida: menos informação espalhada, mais previsibilidade e fluxos que deixam de depender de cobrança manual.",
    items: [
      {
        quote:
          "Solicitações, responsáveis e prazos deixam de ficar em conversas soltas e passam a aparecer em uma fila única de trabalho.",
        result: "A operação ganhou mais clareza para acompanhar solicitações e indicadores.",
        name: "Operação interna",
        detail: "Controle de tarefas e indicadores",
        photo: "/imgs/problems/operacao.jpg",
      },
      {
        quote:
          "Uma ideia de SaaS pode sair do rascunho com fluxo navegável, telas claras e uma base técnica preparada para evoluir.",
        result: "A primeira versão ficou pronta para apresentar, validar e evoluir.",
        name: "Produto digital",
        detail: "Protótipo e MVP SaaS",
        photo: "/imgs/problems/saas.jpg",
      },
      {
        quote:
          "Atendimentos repetitivos podem ser qualificados, registrados e encaminhados automaticamente para o próximo passo.",
        result: "Menos tarefas manuais e mais visibilidade sobre o atendimento.",
        name: "Atendimento",
        detail: "Automação e triagem",
        photo: "/imgs/problems/atendimento.jpg",
      },
      {
        quote:
          "O escopo fica mais direto quando começa pelo processo real: quem faz, onde trava, o que precisa ser medido e o que pode automatizar.",
        result: "O escopo ficou mais enxuto, com foco no que precisava rodar primeiro.",
        name: "Diagnóstico",
        detail: "Mapeamento de fluxo",
        photo: "/imgs/problems/sistema.jpg",
      },
      {
        quote:
          "Planilhas continuam úteis, mas deixam de ser o centro da operação quando dados críticos passam para um painel organizado.",
        result: "Mais controle sobre tarefas, responsáveis e próximos passos.",
        name: "Gestão",
        detail: "Dados centralizados",
        photo: "/imgs/problems/planilhas.jpg",
      },
    ],
  },
} as const;

const SLIDE_DURATION = 7200;

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(1);
  const sliderItems = [
    copy.testimonials.items[copy.testimonials.items.length - 1],
    ...copy.testimonials.items,
    ...copy.testimonials.items,
  ];

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % copy.testimonials.items.length);
    }, SLIDE_DURATION);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <section className="testimonials-section" id="testimonials" data-nav-theme="light">
      <div className="testimonials-inner" data-reveal="marquee">
        <header className="testimonials-heading">
          <h2>{copy.testimonials.title}</h2>
          <p>{copy.testimonials.text}</p>
        </header>

        <div className="testimonial-slider" aria-label="Depoimentos">
          <div
            className="testimonial-track"
            style={{ "--testimonial-active": activeIndex + 1 } as CSSProperties}
          >
            {sliderItems.map((item, index) => {
              const realIndex =
                (index - 1 + copy.testimonials.items.length) %
                copy.testimonials.items.length;
              const isActive = realIndex === activeIndex;

              return (
                <article
                  className={`testimonial-card ${isActive ? "is-active" : ""}`}
                  key={`${item.name}-${index}`}
                  onClick={() => setActiveIndex(realIndex)}
                >
                  <div className="testimonial-photo">
                    <img src={item.photo} alt={item.name} draggable={false} />
                  </div>

                  <div className="testimonial-copy">
                    <span>
                      {item.name}
                      <small>{item.detail}</small>
                    </span>

                    <p>“{item.quote}”</p>
                    <small>{item.result}</small>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        <div className="testimonial-progress" aria-label="Progresso do slider">
          {copy.testimonials.items.map((item, index) => (
            <button
              aria-current={activeIndex === index}
              aria-label={`Ir para depoimento ${index + 1}`}
              className={activeIndex === index ? "active" : ""}
              key={item.name}
              onClick={() => setActiveIndex(index)}
              type="button"
            >
              <span key={activeIndex === index ? activeIndex : undefined} />
            </button>
          ))}
          <small>
            {activeIndex + 1} / {copy.testimonials.items.length}
          </small>
        </div>
      </div>
    </section>
  );
}
