"use client";

import { ArrowUpRight } from "lucide-react";
import { handleNavClick } from "./utils";

const copy = {
  hero: {
    titleA: "Softwares que",
    titleB: "alavancam sua empresa",
    textA: "Criamos sites, sistemas web, plataformas SaaS e ferramentas internas",
    textB: "que transformam ideias de negócio em produtos digitais escaláveis.",
    primary: "Começar projeto",
    secondary: "Ver projetos",
  },
} as const;

export function Hero() {
  return (
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
        <a
          className="secondary-action"
          href="#projects"
          onClick={(event) => handleNavClick(event, "#projects")}
        >
          {copy.hero.secondary}
        </a>
      </div>
    </section>
  );
}
