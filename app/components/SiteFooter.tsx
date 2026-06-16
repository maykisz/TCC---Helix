"use client";

import { ArrowUpRight, Instagram, Mail, Youtube } from "lucide-react";
import Link from "next/link";
import styles from "./site-chrome.module.css";

const pages = [
  { title: "Sobre nós", href: "/sobre-nos" },
  { title: "Serviços", href: "/servicos" },
  { title: "Projetos", href: "/projetos" },
  { title: "FAQ", href: "/faq" },
];

const focus = [
  { title: "SaaS", href: "/servicos" },
  { title: "Sistemas internos", href: "/servicos" },
  { title: "Landing pages", href: "/servicos" },
  { title: "Automações", href: "/servicos" },
];

const company = [
  { title: "Processo", href: "/sobre-nos" },
  { title: "Contato", href: "/contato" },
  { title: "Criar software", href: "/contato" },
];

export function SiteFooter() {
  return (
    <footer className={styles.footer} id="contact" data-nav-theme="dark">
      <div className={styles.footerMain}>
        <div className={styles.footerContact}>
          <div className={styles.socials} aria-hidden="true">
            <span><Instagram size={18} /></span>
            <span><Mail size={18} /></span>
            <span><Youtube size={18} /></span>
          </div>
          <p>Atendimento remoto para empresas no Brasil</p>
          <a href="mailto:contato@helix.dev">contato@helix.dev</a>
          <a href="tel:+5511999990000">+55 11 99999-0000</a>
        </div>

        <div className={styles.footerColumn}>
          <strong>Páginas</strong>
          {pages.map((link) => (
            <Link href={link.href} key={link.href}>{link.title}</Link>
          ))}
        </div>

        <div className={styles.footerColumn}>
          <strong>Foco</strong>
          {focus.map((link) => (
            <Link href={link.href} key={link.title}>{link.title}</Link>
          ))}
        </div>

        <div className={styles.footerColumn}>
          <strong>Empresa</strong>
          {company.map((link) => (
            <Link href={link.href} key={link.title}>{link.title}</Link>
          ))}
          <Link className={styles.footerPill} href="/contato">
            Agendar conversa
            <ArrowUpRight size={14} />
          </Link>
        </div>

        <div className={styles.footerLine} />
        <p className={styles.footerSmall}>
          Da ideia ao produto, criamos software com direção, clareza e evolução contínua.
        </p>
        <div className={styles.footerBottomLinks}>
          <Link href="/">Helix</Link>
          <Link href="/servicos">Soluções digitais</Link>
        </div>
      </div>
      <div className={styles.footerVisual} aria-hidden="true">
        <img src="/imgs/footer.png" alt="" draggable={false} />
      </div>
    </footer>
  );
}
