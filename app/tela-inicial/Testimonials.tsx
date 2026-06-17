"use client";

import { useEffect, useState } from "react";
import type { CSSProperties } from "react";

const copy = {
  testimonials: {
    title: "Resultados que aparecem na rotina de quem usa.",
    text: "Depoimentos de clientes e parceiros que passaram a operar com mais clareza depois de transformar processos em software.",
    items: [
      {
        quote:
          "A Helix tirou nossa operação das planilhas e transformou tudo em um painel simples. O time entendeu rápido o que era prioridade.",
        result: "A operação ganhou mais clareza para acompanhar solicitações e indicadores.",
        name: "Marina Duarte",
        detail: "Operações, Orion Ops",
        photo:
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=900&q=80",
      },
      {
        quote:
          "O projeto saiu com cara de produto de verdade. Design limpo, fluxo claro e uma base técnica pronta para crescer.",
        result: "A primeira versão ficou pronta para apresentar, validar e evoluir.",
        name: "Rafael Nunes",
        detail: "Founder, Lumina Launch",
        photo:
          "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80",
      },
      {
        quote:
          "A entrega foi objetiva. Eles conectaram automações, área de cliente e indicadores sem complicar a rotina da equipe.",
        result: "Menos tarefas manuais e mais visibilidade sobre o atendimento.",
        name: "Bianca Torres",
        detail: "Diretora, Genesys Cloud",
        photo:
          "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=900&q=80",
      },
      {
        quote:
          "A conversa começou pelo nosso problema, não pela tecnologia. Isso deixou o projeto mais direto e fácil de acompanhar.",
        result: "O escopo ficou mais enxuto, com foco no que precisava rodar primeiro.",
        name: "Lucas Almeida",
        detail: "Comercial, parceiro Helix",
        photo:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=900&q=80",
      },
      {
        quote:
          "O sistema organizou informações que antes ficavam espalhadas. Ficou mais fácil entender o que estava parado e o que precisava de atenção.",
        result: "Mais controle sobre tarefas, responsáveis e próximos passos.",
        name: "Camila Rocha",
        detail: "Gestão, cliente Helix",
        photo:
          "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=900&q=80",
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
