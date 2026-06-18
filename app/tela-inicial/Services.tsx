"use client";

import { useEffect, useRef, useState } from "react";
import type { CSSProperties } from "react";
import { ArrowUpRight } from "lucide-react";
import { handleNavClick } from "./utils";

const partnerLogos = [
  { name: "Orion", image: "/imgs/orion-logo.jpeg" },
  { name: "Lumina", image: "/imgs/lumina-logo.png" },
  { name: "GeneSys", image: "/imgs/genesys.png" },
] as const;

const partnerLogoLoop = Array.from({ length: 8 }, () => partnerLogos).flat();
const partnerLogoReverseLoop = Array.from({ length: 8 }, () => [...partnerLogos].reverse()).flat();

const serviceTypes = [
  {
    value: "01",
    label: "Sistemas internos para centralizar a operação",
  },
  {
    value: "02",
    label: "Automações para reduzir tarefas repetitivas",
  },
  {
    value: "03",
    label: "Sites, dashboards e SaaS para vender e escalar",
  },
] as const;

export function Services() {
  const [partnerShift, setPartnerShift] = useState({ primary: 0, secondary: 0 });
  const [isPartnerStepping, setIsPartnerStepping] = useState(false);
  const lastScrollYRef = useRef(0);
  const stepTimeoutRef = useRef<number | null>(null);
  const tickingRef = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      if (tickingRef.current) {
        return;
      }

      tickingRef.current = true;

      window.requestAnimationFrame(() => {
        const currentScrollY = window.scrollY;
        const direction = currentScrollY >= lastScrollYRef.current ? 1 : -1;

        if (Math.abs(currentScrollY - lastScrollYRef.current) > 1) {
          setPartnerShift((current) => ({
            primary: current.primary + direction * 5,
            secondary: current.secondary - direction * 5,
          }));
          setIsPartnerStepping(true);

          if (stepTimeoutRef.current) {
            window.clearTimeout(stepTimeoutRef.current);
          }

          stepTimeoutRef.current = window.setTimeout(() => {
            setIsPartnerStepping(false);
          }, 440);
        }

        lastScrollYRef.current = currentScrollY;
        tickingRef.current = false;
      });
    };

    lastScrollYRef.current = window.scrollY;

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);

      if (stepTimeoutRef.current) {
        window.clearTimeout(stepTimeoutRef.current);
      }
    };
  }, []);

  return (
    <section className="services-section" id="services" data-nav-theme="light">
      <div className="services-about">
        <div className="services-image-wrap" data-reveal="fade-left">
          <img
            src="imgs/services-left.png"
            alt="Interface de sistema web em desenvolvimento"
            draggable={false}
          />
        </div>

        <div className="services-content">
          <span className="services-kicker" data-reveal="up">
            Soluções sob medida
          </span>

          <h2 data-reveal="up">
            <span className="services-title-line">Do processo travado</span>
            <span className="services-title-line">ao software em uso.</span>
          </h2>

          <p data-reveal="up">
            Criamos sistemas internos, automações, sites estratégicos e produtos
            SaaS para empresas que querem vender melhor, economizar tempo e
            operar com mais controle.
          </p>

          <div className="services-stats" data-reveal="up">
            {serviceTypes.map((service) => (
              <div className="service-stat" key={service.label}>
                <strong>{service.value}</strong>
                <span>{service.label}</span>
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

      <div
        className={`partners-showcase${isPartnerStepping ? " is-partner-stepping" : ""}`}
        style={
          {
            "--partner-primary-shift": `${partnerShift.primary}px`,
            "--partner-secondary-shift": `${partnerShift.secondary}px`,
          } as CSSProperties
        }
        aria-label="Parceiros"
      >
        <div className="partners-copy">
          <span>Referências visuais e projetos</span>
          <h2>Marcas, produtos e operações que inspiram o nível de entrega.</h2>
        </div>

        <div className="partners-slider">
          <div className="partners-rail-step partners-rail-step-primary">
            <div className="partners-rail partners-rail-primary">
              {partnerLogoLoop.map((partner, index) => (
                <div className="partner-logo-card" key={`primary-${partner.name}-${index}`}>
                  <img src={partner.image} alt={partner.name} draggable={false} />
                </div>
              ))}
            </div>
          </div>

          <div className="partners-rail-step partners-rail-step-secondary" aria-hidden="true">
            <div className="partners-rail partners-rail-secondary">
              {partnerLogoReverseLoop.map((partner, index) => (
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
      </div>
    </section>
  );
}
