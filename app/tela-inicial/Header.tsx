"use client";

import { useEffect, useState } from "react";
import { handleNavClick } from "./utils";

const copy = {
  nav: {
    home: "Início",
    services: "Serviços",
    process: "Processo",
    pricing: "Soluções",
    cases: "Projetos",
    feedbacks: "Feedbacks",
    contact: "Criar software",
  },
} as const;

export function Header() {
  const [isNavScrolled, setIsNavScrolled] = useState(false);
  const [isNavLight, setIsNavLight] = useState(false);

  useEffect(() => {
    const updateNav = () => {
      setIsNavScrolled(window.scrollY > 18);

      const element = document.elementFromPoint(window.innerWidth / 2, 92);
      const themedSection = element?.closest<HTMLElement>("[data-nav-theme]");
      setIsNavLight(themedSection?.dataset.navTheme === "light");
    };

    updateNav();
    window.addEventListener("scroll", updateNav, { passive: true });

    return () => window.removeEventListener("scroll", updateNav);
  }, []);

  return (
    <header className={`topbar ${isNavScrolled ? "is-scrolled" : ""} ${isNavLight ? "is-light" : ""}`}>
      <a className="brand" href="#" onClick={(event) => handleNavClick(event, "#")}>
        <img
          className="brand-logo"
          src={isNavLight ? "/imgs/helix-logo-black.png" : "/imgs/helix-logo-white.png"}
          alt="Helix"
        />
      </a>

      <nav className="nav-pill" aria-label="Navegação principal">
        <a className="active" href="#" onClick={(event) => handleNavClick(event, "#")}>
          {copy.nav.home}
        </a>
        <a href="#services" onClick={(event) => handleNavClick(event, "#services")}>
          {copy.nav.services}
        </a>
        <a href="#projects" onClick={(event) => handleNavClick(event, "#projects")}>
          {copy.nav.cases}
        </a>
        <a href="#process" onClick={(event) => handleNavClick(event, "#process")}>
          {copy.nav.process}
        </a>
        <a href="#problems" onClick={(event) => handleNavClick(event, "#problems")}>
          {copy.nav.pricing}
        </a>
        <a href="#testimonials" onClick={(event) => handleNavClick(event, "#testimonials")}>
          {copy.nav.feedbacks}
        </a>
      </nav>

      <div className="header-actions">
        <a className="contact-button" href="/contato">
          {copy.nav.contact}
        </a>
      </div>
    </header>
  );
}
