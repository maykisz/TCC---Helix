"use client";

import { useState } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";

const problems = [
  {
    number: "01",
    title: "Processos manuais demorados",
    text: "Automatize rotinas repetitivas, reduza retrabalho e devolva tempo operacional para a equipe.",
    image: "/imgs/problems/operacao.jpg",
  },
  {
    number: "02",
    title: "Planilhas desorganizadas",
    text: "Centralize indicadores, etapas e dados em uma interface clara para acompanhar tudo sem confusão.",
    image: "/imgs/problems/planilhas.jpg",
  },
  {
    number: "03",
    title: "Falta de sistema interno",
    text: "Crie ferramentas sob medida para acompanhar solicitações, clientes, produção e fluxos internos.",
    image: "/imgs/problems/sistema.jpg",
  },
  {
    number: "04",
    title: "Ideia de SaaS sem equipe técnica",
    text: "Transforme uma oportunidade em produto navegável com base pronta para evoluir e escalar.",
    image: "/imgs/problems/saas.jpg",
  },
  {
    number: "05",
    title: "Operação sem clareza",
    text: "Visualize etapas, responsáveis e indicadores para tomar decisões com mais segurança.",
    image: "/imgs/problems/operacao.jpg",
  },
  {
    number: "06",
    title: "Atendimento desorganizado",
    text: "Padronize fluxos, respostas e solicitações para melhorar a experiência do cliente.",
    image: "/imgs/problems/atendimento.jpg",
  },
] as const;

const stats = [
  {
    value: "12+",
    text: "Projetos digitais estruturados para empresas e operações reais.",
  },
  {
    value: "300h+",
    text: "Horas economizadas com automações, sistemas e processos internos.",
  },
  {
    value: "95%",
    text: "Mais clareza na gestão de dados, tarefas e acompanhamento operacional.",
  },
  {
    value: "40%",
    text: "Menos retrabalho usando ferramentas digitais sob medida.",
  },
] as const;

export function Problems() {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeProblem = problems[activeIndex];

  const goToPrev = () => {
    setActiveIndex((current) =>
      current === 0 ? problems.length - 1 : current - 1
    );
  };

  const goToNext = () => {
    setActiveIndex((current) =>
      current === problems.length - 1 ? 0 : current + 1
    );
  };

  return (
    <section className="problems-section" id="problems" data-nav-theme="light">
      <div className="problems-wrapper">
        <div className="problems-intro" data-reveal="up">
          <p>
            Sistemas, automações e produtos digitais sob medida. Para empresas que querem operar com clareza, velocidade e controle.
          </p>

          <div className="problems-stats">
            {stats.map((stat) => (
              <div className="problem-stat-card" key={stat.value}>
                <span className="problem-stat-value">{stat.value}</span>
                <span className="problem-stat-text">{stat.text}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="problems-showcase" data-reveal="cards">
          <div className="problems-track">
            {problems.map((problem, index) => (
              <article
                key={problem.number}
                className={`problem-slide ${
                  index === activeIndex ? "is-active" : ""
                }`}
                aria-hidden={index !== activeIndex}
              >
                <div className="problem-image-wrap">
                  <img
                    src={problem.image}
                    alt={problem.title}
                    draggable={false}
                  />
                </div>

                <div className="problem-slide-shade" />

                <div className="problem-slide-content">
                  <span className="problem-number">{problem.number}</span>

                  <h3>{problem.title}</h3>

                  <p>{problem.text}</p>

                  <a href="/contato" className="problem-link">
                    Ver solução
                    <ArrowUpRight size={15} />
                  </a>
                </div>
              </article>
            ))}
          </div>

          <div className="problems-counter">
            <span>{activeProblem.number}</span>
            <small>/ {String(problems.length).padStart(2, "0")}</small>
          </div>

          <div className="problems-controls">
            <button type="button" onClick={goToPrev} aria-label="Voltar slide">
              <ArrowLeft size={18} />
            </button>

            <button type="button" onClick={goToNext} aria-label="Avançar slide">
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}