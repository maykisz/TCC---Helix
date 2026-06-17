"use client";

import { ArrowUpRight } from "lucide-react";
import { handleNavClick } from "./utils";

const copy = {
  hero: {
    titleA: "Sistemas web sob medida",
    titleB: "para automatizar sua operação",
    description:
      "Criamos sistemas internos, automações e plataformas SaaS para empresas que precisam organizar processos, centralizar dados e crescer com mais controle.",
    primary: "Tirar ideia do papel",
    secondary: "Ver protótipos",
  },
} as const;

export function Hero() {
  return (
    <section className="hero" data-nav-theme="dark">
      <div className="hero-atmosphere" />

      <div className="hero-inner">
        <div className="hero-content">
          <h1 data-reveal="up">
            <span className="hero-title-line">{copy.hero.titleA}</span>
            <span className="hero-title-line">{copy.hero.titleB}</span>
          </h1>

          <p className="hero-description" data-reveal="up">
            {copy.hero.description}
          </p>

          <div className="hero-actions" data-reveal="up">
            <a className="primary-action" href="/contato">
              <span>{copy.hero.primary}</span>
              <ArrowUpRight size={16} />
            </a>

            <a
              className="secondary-action"
              href="#prototypes"
              onClick={(event) => handleNavClick(event, "#prototypes")}
            >
              {copy.hero.secondary}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
