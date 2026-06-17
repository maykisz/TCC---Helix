"use client";

import { ArrowUpRight } from "lucide-react";
import { handleNavClick } from "./utils";

const partnerLogos = [
  { name: "Orion", image: "/imgs/orion-logo.jpeg" },
  { name: "Lumina", image: "/imgs/lumina-logo.png" },
  { name: "GeneSys", image: "/imgs/genesys.png" },
] as const;

const stats = [
  {
    value: "03",
    label: "tipos de solução",
  },
  {
    value: "04",
    label: "etapas de entrega",
  },
  {
    value: "100%",
    label: "sob medida",
  },
] as const;

export function Services() {
  return (
    <section className="services-section" id="services" data-nav-theme="light">
      <div className="services-about">
        <div className="services-image-wrap" data-reveal="fade-left">
          <img
            src="imgs/services-left.png"
            alt="Ilustração de sistema web em desenvolvimento"
            draggable={false}
          />
        </div>

        <div className="services-content">
          <span className="services-kicker" data-reveal="up">
            Sobre o processo
          </span>

          <h2 data-reveal="up">
            <span className="services-title-line">Do rascunho ao ar,</span>
            <span className="services-title-line">com estrutura para crescer.</span>
          </h2>

          <p data-reveal="up">
            Combinamos estratégia, design e desenvolvimento para transformar ideias,
            processos manuais e operações desorganizadas em sistemas web claros,
            eficientes e prontos para uso.
          </p>

          <div className="services-stats" data-reveal="up">
            {stats.map((stat) => (
              <div className="service-stat" key={stat.label}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>

          <a
            href="#process"
            className="services-link"
            onClick={(event) => handleNavClick(event, "#process")}
            data-reveal="up"
          >
            Ver processo
            <ArrowUpRight size={14} />
          </a>
        </div>
      </div>

      <div className="partners-showcase" aria-label="Parceiros">
        <div className="partners-copy">
          <h2>Parceiros</h2>
        </div>

        <div className="partners-slider">
          <div className="partners-rail partners-rail-primary">
            {[...partnerLogos, ...partnerLogos, ...partnerLogos, ...partnerLogos].map(
              (partner, index) => (
                <div className="partner-logo-card" key={`primary-${partner.name}-${index}`}>
                  <img src={partner.image} alt={partner.name} draggable={false} />
                </div>
              )
            )}
          </div>

          <div className="partners-rail partners-rail-secondary" aria-hidden="true">
            {[...partnerLogos]
              .reverse()
              .concat([...partnerLogos].reverse(), [...partnerLogos].reverse(), [
                ...partnerLogos,
              ].reverse())
              .map((partner, index) => (
                <div
                  className="partner-logo-card partner-logo-card-ghost"
                  key={`secondary-${partner.name}-${index}`}
                >
                  <img src={partner.image} alt="" draggable={false} />
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}