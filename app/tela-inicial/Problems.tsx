"use client";

import { useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";

const copy = {
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
} as const;

export function Problems() {
  const problemListRef = useRef<HTMLDivElement>(null);
  const [activeProblem, setActiveProblem] = useState(1);

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

  return (
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
  );
}
