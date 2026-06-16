"use client";

import { ArrowUpRight } from "lucide-react";
import { handleNavClick } from "./utils";

const copy = {
  hero: {
    titleA: "Sistemas web para empresas",
    titleB: "que crescem sem improviso",
    description:
      "Desenvolvemos sites, sistemas internos e plataformas SaaS para empresas que precisam automatizar processos, organizar dados e crescer com mais controle.",
    primary: "Tirar ideia do papel",
    secondary: "Ver projetos",
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
              href="#projects"
              onClick={(event) => handleNavClick(event, "#projects")}
            >
              {copy.hero.secondary}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}