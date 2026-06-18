"use client";

import { ArrowUpRight, Mail, MessageCircle } from "lucide-react";
import Link from "next/link";
import styles from "./site-chrome.module.css";

const pages = [
  { title: "Home", href: "/" },
  { title: "Sobre nós", href: "/sobre-nos" },
  { title: "Serviços", href: "/servicos" },
  { title: "Contato", href: "/contato" },
];

const services = [
  { title: "Sistemas internos", href: "/servicos" },
  { title: "Automações", href: "/servicos" },
  { title: "Sites estratégicos", href: "/servicos" },
  { title: "SaaS e produtos digitais", href: "/servicos" },
];

const whatsappHref =
  "https://wa.me/5511940895758?text=Ola%2C%20quero%20criar%20um%20software%20sob%20medida%20para%20minha%20empresa.%20Podemos%20conversar%3F";

export function SiteFooter() {
  return (
    <footer className={styles.footer} id="contact" data-nav-theme="dark">
      <div className={styles.footerMain}>
        <div className={styles.footerHero}>
          <img src="/imgs/helix-logo-white.png" alt="Helix" draggable={false} />
          <h2>Vamos transformar um processo travado em software.</h2>
          <p>
            Conte o que hoje depende de planilhas, mensagens ou trabalho manual.
            A gente ajuda a desenhar uma primeira versão viável.
          </p>
          <a className={styles.footerCta} href={whatsappHref} target="_blank" rel="noreferrer">
            Começar conversa
            <ArrowUpRight size={16} />
          </a>
        </div>

        <div className={styles.footerColumn}>
          <strong>Páginas</strong>
          {pages.map((link) => (
            <Link href={link.href} key={link.href}>
              {link.title}
            </Link>
          ))}
        </div>

        <div className={styles.footerColumn}>
          <strong>Soluções</strong>
          {services.map((link) => (
            <Link href={link.href} key={link.title}>
              {link.title}
            </Link>
          ))}
        </div>

        <div className={styles.footerColumn}>
          <strong>Contato</strong>
          <a href={whatsappHref} target="_blank" rel="noreferrer">
            <MessageCircle size={14} />
            WhatsApp
          </a>
          <a href="mailto:contato@helix.dev">
            <Mail size={14} />
            contato@helix.dev
          </a>
          <a href="/contato">
            <ArrowUpRight size={14} />
            Solicitar proposta
          </a>
        </div>

        <div className={styles.footerLine} />

        <p className={styles.footerSmall}>
          Software sob medida para empresas que querem vender melhor, economizar
          tempo e operar com mais controle.
        </p>

        <div className={styles.footerBottomLinks}>
          <span>© 2026 Helix</span>
          <Link href="/contato">Agendar conversa</Link>
        </div>
      </div>

      <div className={styles.footerVisual} aria-hidden="true">
        <img src="/imgs/footer.png" alt="" draggable={false} />
      </div>
    </footer>
  );
}
