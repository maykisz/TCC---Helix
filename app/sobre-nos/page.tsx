"use client";

import { ArrowUpRight, CheckCircle2, Plus } from "lucide-react";
import Link from "next/link";
import { useEffect, type CSSProperties } from "react";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";
import styles from "./page.module.css";

const partners = [
  { name: "Orion", image: "/imgs/orion-logo.jpeg" },
  { name: "Lumina", image: "/imgs/lumina-logo.png" },
  { name: "GeneSys", image: "/imgs/genesys.png" },
];

const principles = [
  "Mais controle da operação",
  "Mais confiança para vender",
  "Base pronta para crescer",
];

const team = [
  {
    name: "Marina Duarte",
    role: "Direção de produto",
    photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=700&q=82",
  },
  {
    name: "Rafael Nunes",
    role: "Engenharia web",
    photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=700&q=82",
  },
  {
    name: "Bianca Torres",
    role: "Design de interfaces",
    photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=700&q=82",
  },
];

function useAboutReveal() {
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>("[data-about-reveal]"));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.revealVisible);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.16, rootMargin: "0px 0px -8% 0px" },
    );

    elements.forEach((element, index) => {
      element.style.setProperty("--reveal-delay", `${Math.min(index * 55, 360)}ms`);
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);
}

export default function SobreNosPage() {
  useAboutReveal();

  return (
    <main className={styles.page}>
      <section className={styles.shell}>
        <SiteHeader />

        <section className={styles.hero} data-nav-theme="light">
          <div className={styles.heroCopy}>
            <h1 className={styles.reveal} data-about-reveal="title">Sobre nós</h1>
            <p className={styles.reveal} data-about-reveal="text">
              Criamos software sob medida para empresas que precisam operar melhor,
              vender com mais confiança e crescer com estrutura.
            </p>
            <div className={`${styles.heroActions} ${styles.reveal}`} data-about-reveal="pop">
              <Link href="/contato">
                Começar projeto
                <ArrowUpRight size={16} />
              </Link>
              <Link href="/projetos">Ver projetos</Link>
            </div>
          </div>
        </section>

        <section className={styles.trust} data-nav-theme="light">
          <div className={`${styles.trustCopy} ${styles.reveal}`} data-about-reveal="slide-left">
            <h2>Parceiros e projetos</h2>
          </div>

          <div className={`${styles.partnersSlider} ${styles.reveal}`} data-about-reveal="fade">
            <div className={`${styles.partnersRail} ${styles.partnersRailPrimary}`}>
              {[...partners, ...partners, ...partners, ...partners].map((partner, index) => (
                <div className={styles.partnerLogoCard} key={`primary-${partner.name}-${index}`}>
                  <img src={partner.image} alt={partner.name} draggable={false} />
                </div>
              ))}
            </div>

            <div className={`${styles.partnersRail} ${styles.partnersRailSecondary}`} aria-hidden="true">
              {[...partners].reverse().concat([...partners].reverse(), [...partners].reverse(), [...partners].reverse()).map((partner, index) => (
                <div className={`${styles.partnerLogoCard} ${styles.partnerLogoCardGhost}`} key={`secondary-${partner.name}-${index}`}>
                  <img src={partner.image} alt="" draggable={false} />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.story} data-nav-theme="light">
          <article className={`${styles.storyMain} ${styles.reveal}`} data-about-reveal="card">
            <h2>Mais clareza para operar, vender e evoluir.</h2>
            <p>
              Trabalhamos com empresas que precisam organizar dados, reduzir tarefas
              manuais, validar produtos digitais e criar experiências que continuem
              úteis depois do lançamento.
            </p>
          </article>

          <article className={`${styles.metricCard} ${styles.reveal}`} data-about-reveal="slide-right">
            <div className={styles.avatars}>
              {team.map((person) => (
                <img src={person.photo} alt="" key={person.name} />
              ))}
              <span><Plus size={20} /></span>
            </div>
            <strong>150k+</strong>
            <p>usuários impactados por interfaces, fluxos e automações.</p>
          </article>

          <article className={`${styles.noteCard} ${styles.reveal}`} data-about-reveal="card">
            <p>
              Não vendemos apenas telas. Entregamos estrutura para que uma empresa
              consiga operar melhor, vender com mais confiança e evoluir o produto
              com menos atrito.
            </p>
            <Link href="/projetos">Ver projetos</Link>
          </article>
        </section>

        <section className={styles.principles} data-nav-theme="light">
          {principles.map((item, index) => (
            <span
              className={styles.reveal}
              data-about-reveal="chip"
              key={item}
              style={{ "--reveal-delay": `${index * 95}ms` } as CSSProperties}
            >
              <CheckCircle2 size={18} />
              {item}
            </span>
          ))}
        </section>

        <section className={styles.teamSection} data-nav-theme="light">
          <div className={`${styles.sectionTitle} ${styles.reveal}`} data-about-reveal="title">
            <h2>Pessoas por trás da Helix.</h2>
            <p>Produto, engenharia e design trabalhando juntos para construir software com propósito.</p>
          </div>

          <div className={styles.teamGrid}>
            {team.map((person, index) => (
              <article
                className={styles.reveal}
                data-about-reveal="photo"
                key={person.name}
                style={{ "--reveal-delay": `${index * 110}ms` } as CSSProperties}
              >
                <img src={person.photo} alt={person.name} />
                <h3>{person.name}</h3>
                <p>{person.role}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.cta} data-nav-theme="light">
          <div className={`${styles.dealCard} ${styles.reveal}`} data-about-reveal="slide-left" aria-hidden="true">
            <span>Pronto para fechar</span>
            <strong>+ velocidade</strong>
            <p>Uma proposta clara para transformar seu gargalo em um produto digital publicável.</p>
            <small>Software, SaaS, automações e páginas de conversão.</small>
          </div>
          <div className={styles.reveal} data-about-reveal="slide-right">
            <h2>Vamos tirar seu software do papel?</h2>
            <p>Conte o que precisa vender, operar ou automatizar. A Helix organiza o caminho e constrói com foco em resultado.</p>
            <Link href="/contato">
              Fechar uma conversa
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </section>
      </section>

      <SiteFooter />
    </main>
  );
}
