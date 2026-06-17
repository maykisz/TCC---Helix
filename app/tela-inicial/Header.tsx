"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { handleNavClick } from "./utils";

const copy = {
  nav: {
    home: "Início",
    about: "Sobre nós",
    contactPage: "Contato",
    contact: "Criar software",
  },
} as const;

const whatsappHref =
  "https://wa.me/5511940895758?text=Ola%2C%20quero%20criar%20um%20software%20sob%20medida%20para%20minha%20empresa.%20Podemos%20conversar%3F";

export function Header() {
  const [isNavScrolled, setIsNavScrolled] = useState(false);
  const [isNavLight, setIsNavLight] = useState(false);

  useEffect(() => {
    const updateNav = () => {
      setIsNavScrolled(window.scrollY > 18);

      const elements = document.elementsFromPoint(window.innerWidth / 2, 92);

      const themedElement = elements.find((element) => {
        const isHeader = element.closest(".topbar");
        const themedSection = element.closest("[data-nav-theme]");

        return !isHeader && themedSection;
      });

      const themedSection = themedElement?.closest<HTMLElement>("[data-nav-theme]");

      setIsNavLight(themedSection?.dataset.navTheme === "light");
    };

    updateNav();

    window.addEventListener("scroll", updateNav, { passive: true });
    window.addEventListener("resize", updateNav);

    return () => {
      window.removeEventListener("scroll", updateNav);
      window.removeEventListener("resize", updateNav);
    };
  }, []);

  return (
    <header
      className={`topbar ${isNavScrolled ? "is-scrolled" : ""} ${
        isNavLight ? "is-light" : "is-dark"
      }`}
    >
      <a
        className="brand"
        href="#"
        aria-label="Voltar para o início"
        onClick={(event) => handleNavClick(event, "#")}
      >
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

        <a href="/sobre-nos">
          {copy.nav.about}
        </a>

        <a href="/contato">
          {copy.nav.contactPage}
        </a>
      </nav>

      <div className="header-actions">
        <a className="contact-button" href={whatsappHref} target="_blank" rel="noreferrer">
          <span>{copy.nav.contact}</span>
          <ArrowUpRight size={14} />
        </a>
      </div>
    </header>
  );
}
