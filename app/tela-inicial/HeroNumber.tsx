"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 32, suffix: "+", label: "empresas ajudadas" },
  { value: 58, suffix: "+", label: "projetos entregues" },
  { value: 120, suffix: "+h", label: "ganhas com automação" },
  { value: 100, suffix: "%", label: "soluções sob medida" },
] as const;

/** Anima um número de 0 até `target` durante `duration` ms */
function useCountUp(target: number, active: boolean, duration = 1400) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;

    const start = performance.now();

    function tick(now: number) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(tick);
    }

    requestAnimationFrame(tick);
  }, [active, target, duration]);

  return count;
}

interface StatItemProps {
  value: number;
  suffix: string;
  label: string;
  active: boolean;
  delay: number;
}

function StatItem({ value, suffix, label, active, delay }: StatItemProps) {
  const count = useCountUp(value, active, 1500);

  return (
    <article
      className={`hero-number-item ${active ? "is-visible" : ""}`}
      style={{ "--item-delay": `${delay}ms` } as React.CSSProperties}
    >
      <strong>
        {count}
        {suffix}
      </strong>
      <span>{label}</span>
    </article>
  );
}

export function HeroNumbers() {
  const sectionRef = useRef<HTMLElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="hero-numbers" data-nav-theme="light" ref={sectionRef}>
      <div className={`hero-numbers-card ${active ? "is-visible" : ""}`}>
        {stats.map((item, i) => (
          <StatItem
            key={item.label}
            value={item.value}
            suffix={item.suffix}
            label={item.label}
            active={active}
            delay={i * 100}
          />
        ))}
      </div>
    </section>
  );
}