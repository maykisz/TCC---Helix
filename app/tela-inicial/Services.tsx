"use client";

import { useEffect, useRef, useState } from "react";

const partnerLogos = [
  { name: "Orion", image: "/imgs/orion-logo.jpeg" },
  { name: "Lumina", image: "/imgs/lumina-logo.png" },
  { name: "GeneSys", image: "/imgs/genesys.png" },
] as const;

export function Services() {
  const servicesShowcaseRef = useRef<HTMLDivElement>(null);
  const hasCompletedServicesAnimationRef = useRef(false);
  const [servicesVideoStep, setServicesVideoStep] = useState(0);

  useEffect(() => {
    const updateServicesAnimation = () => {
      const triggerElement = servicesShowcaseRef.current;

      if (!triggerElement || window.matchMedia("(max-width: 720px)").matches) {
        setServicesVideoStep(0);
        hasCompletedServicesAnimationRef.current = true;
        return;
      }

      if (hasCompletedServicesAnimationRef.current) {
        return;
      }

      const rect = triggerElement.getBoundingClientRect();
      const progress = Math.min(
        1,
        Math.max(0, (window.innerHeight * 0.62 - rect.top) / (window.innerHeight * 0.72))
      );

      setServicesVideoStep(progress > 0.72 ? 2 : progress > 0.34 ? 1 : 0);

      if (progress >= 1) {
        setServicesVideoStep(2);
        hasCompletedServicesAnimationRef.current = true;
      }
    };

    updateServicesAnimation();
    window.addEventListener("scroll", updateServicesAnimation, { passive: true });
    window.addEventListener("resize", updateServicesAnimation);

    return () => {
      window.removeEventListener("scroll", updateServicesAnimation);
      window.removeEventListener("resize", updateServicesAnimation);
    };
  }, []);

  return (
    <section className="section services-section" id="services" data-nav-theme="light">
      <div
        className={`services-showcase services-video-step-${servicesVideoStep}`}
        ref={servicesShowcaseRef}
      >
        <div className="services-pin-frame">
          <div className="services-intro">
            <h2>
              Do rascunho ao ar <br />
              robusto, limpo, pronto pra crescer
            </h2>
          </div>

          <div className="services-video-stage" aria-hidden="true">
            <div className="service-video-card service-video-primary">
              <video autoPlay muted loop playsInline preload="metadata">
                <source src="/video/Code_compiles_website_loads_success_202606132222.mp4" type="video/mp4" />
              </video>
            </div>
            <div className="service-video-card service-video-secondary">
              <video autoPlay muted loop playsInline preload="metadata">
                <source src="/video/Chat_to_product_development_202606132243.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>

        <div className="partners-showcase" aria-label="Parceiros">
          <div className="partners-copy">
            <h2>Parceiros</h2>
          </div>

          <div className="partners-slider">
            <div className="partners-rail partners-rail-primary">
              {[...partnerLogos, ...partnerLogos, ...partnerLogos, ...partnerLogos].map((partner, index) => (
                <div className="partner-logo-card" key={`primary-${partner.name}-${index}`}>
                  <img src={partner.image} alt={partner.name} draggable={false} />
                </div>
              ))}
            </div>

            <div className="partners-rail partners-rail-secondary" aria-hidden="true">
              {[...partnerLogos]
                .reverse()
                .concat([...partnerLogos].reverse(), [...partnerLogos].reverse(), [...partnerLogos].reverse())
                .map((partner, index) => (
                  <div className="partner-logo-card partner-logo-card-ghost" key={`secondary-${partner.name}-${index}`}>
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
