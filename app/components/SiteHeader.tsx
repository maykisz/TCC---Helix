"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "./site-chrome.module.css";

type SiteHeaderProps = {
  theme?: "light" | "dark";
};

const navLinks = [
  { title: "Sobre nós", href: "/sobre-nos" },
  { title: "Serviços", href: "/servicos" },
  { title: "Projetos", href: "/projetos" },
  { title: "FAQ", href: "/faq" },
];

export function SiteHeader({ theme = "light" }: SiteHeaderProps) {
  const [isLight, setIsLight] = useState(theme === "light");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const updateHeader = () => {
      setIsScrolled(window.scrollY > 18);

      const element = document.elementFromPoint(window.innerWidth / 2, 92);
      const themedSection = element?.closest<HTMLElement>("[data-nav-theme]");

      if (themedSection?.dataset.navTheme) {
        setIsLight(themedSection.dataset.navTheme === "light");
        return;
      }

      setIsLight(theme === "light");
    };

    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });
    window.addEventListener("resize", updateHeader);

    return () => {
      window.removeEventListener("scroll", updateHeader);
      window.removeEventListener("resize", updateHeader);
    };
  }, [theme]);

  return (
    <header className={`${styles.header} ${isLight ? styles.headerLight : styles.headerDark} ${isScrolled ? styles.headerScrolled : ""}`}>
      <Link className={styles.brand} href="/">
        <img
          src={isLight ? "/imgs/helix-logo-black.png" : "/imgs/helix-logo-white.png"}
          alt="Helix"
        />
      </Link>

      <nav className={styles.nav} aria-label="Navegação principal">
        {navLinks.map((link) => (
          <Link href={link.href} key={link.href}>
            {link.title}
          </Link>
        ))}
      </nav>

      <Link className={styles.action} href="/contato">
        Criar software
      </Link>
    </header>
  );
}
