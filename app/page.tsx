"use client";

import { useEffect } from "react";
import { SiteFooter } from "./components/SiteFooter";
import { Header } from "./tela-inicial/Header";
import { Hero } from "./tela-inicial/Hero";
import { Services } from "./tela-inicial/Services";
import { Problems } from "./tela-inicial/Problems";
import { Projects } from "./tela-inicial/Projects";
import { Process } from "./tela-inicial/Process";
import { Testimonials } from "./tela-inicial/Testimonials";
import { Faq } from "./tela-inicial/Faq";
import { HeroNumbers } from "./tela-inicial/HeroNumber";
import { PrototypeShowcase } from "./tela-inicial/PrototypeShowcase";

// Imports de estilos locais das seções
import "./tela-inicial/header.css";
import "./tela-inicial/hero.css";
import "./tela-inicial/services.css";
import "./tela-inicial/problems.css";
import "./tela-inicial/projects.css";
import "./tela-inicial/process.css";
import "./tela-inicial/testimonials.css";
import "./tela-inicial/faq.css";
import "./tela-inicial/heronumber.css";
import "./tela-inicial/PrototypeShowcase.css";  

function useScrollReveal() {
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add  ("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.16, rootMargin: "0px 0px -8% 0px" },
    );

    const revealGroups = new Map<Element, number>();

    elements.forEach((element) => {
      const group = element.closest("section, footer, header") ?? document.body;
      const index = revealGroups.get(group) ?? 0;
      revealGroups.set(group, index + 1);
      element.style.setProperty("--reveal-delay", `${Math.min(index * 95, 320)}ms`);
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);
}

export default function Home() {
  useScrollReveal();

  return (
    <main className="page-shell">
      <div className="grain" />

      <Header />
      <Hero />
      <HeroNumbers />
      <Services />
      <Problems />
      <PrototypeShowcase />
      <Process />
      <Testimonials />
      <Faq />
      <SiteFooter />
    </main>
  );
}
