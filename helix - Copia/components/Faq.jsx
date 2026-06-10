"use client";

import { useState } from "react";
import Icon from "@/components/Icon";
import Reveal from "@/components/Reveal";

const questions = [
  {
    question: "Como a Hélix cria sites e sistemas personalizados?",
    answer:
      "Utilizamos as melhores tecnologias do mercado e uma metodologia ágil para entregar soluções modernas, seguras e escaláveis. Do planejamento à entrega, garantimos qualidade, performance e foco em resultados."
  },
  {
    question: "Quais tecnologias vocês utilizam?",
    answer:
      "HTML, CSS, JavaScript, React, Next.js, Node.js, PHP, Laravel, MySQL e muito mais."
  },
  {
    question: "Meu site será responsivo?",
    answer:
      "Sim. Todos os projetos são desenvolvidos para desktop, tablets e smartphones."
  },
  {
    question: "Vocês oferecem manutenção?",
    answer: "Sim. Possuímos planos de suporte e manutenção contínua."
  },
  {
    question: "Quanto tempo leva para desenvolver um projeto?",
    answer: "O prazo depende da complexidade do projeto."
  }
];

export default function Faq() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="faq" id="faq">
      <div className="faq-container">
        <Reveal className="faq-left" variant="slide-left" distance={56}>
          <span className="faq-badge">FAQ</span>

          <h2>
            Perguntas
            <span>Frequentes</span>
          </h2>

          <p>
            Tire suas dúvidas sobre nossos serviços de desenvolvimento de sites e
            sistemas.
          </p>

          <div className="help-card">
            <h3>Ainda precisa de ajuda?</h3>
            <p>
              Nossa equipe está pronta para atender e encontrar a melhor solução
              para o seu projeto.
            </p>
            <a href="#contato" className="faq-btn">
              Falar com um especialista
              <Icon name="arrowRight" />
            </a>
          </div>
        </Reveal>

        <Reveal className="faq-right" delay={140} distance={56} variant="slide-right">
          {questions.map((item, index) => {
            const isActive = activeIndex === index;

            return (
              <div
                className={`faq-item${isActive ? " active" : ""}`}
                key={item.question}
              >
                <button
                  className="faq-question"
                  type="button"
                  onClick={() => setActiveIndex(isActive ? -1 : index)}
                  aria-expanded={isActive}
                >
                  {item.question}
                  <span>
                    <Icon name={isActive ? "minus" : "plus"} />
                  </span>
                </button>
                <div className="faq-answer">{item.answer}</div>
              </div>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
