"use client";

import { useEffect, useRef, useState } from "react";

const benefits = [
  {
    value: 10,
    suffix: "h+",
    label: "rotinas que podem deixar de ser manuais",
  },
  {
    value: 70,
    suffix: "%",
    label: "menos dispersão quando dados ficam centralizados",
  },
  {
    value: 1,
    suffix: "",
    label: "sistema sob medida para conectar a operação",
  },
  {
    value: 24,
    suffix: "/7",
    label: "fluxos digitais disponíveis no automático",
  },
] as const;

function useCountUp(target: number, active: boolean, delay = 0, duration = 1300) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      setCount(target);
      return;
    }

    let frameId = 0;
    let timeoutId = 0;

    timeoutId = window.setTimeout(() => {
      const start = performance.now();

      function tick(now: number) {
        const elapsed = now - start;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);

        setCount(Math.round(eased * target));

        if (progress < 1) {
          frameId = requestAnimationFrame(tick);
        }
      }

      frameId = requestAnimationFrame(tick);
    }, delay);

    return () => {
      window.clearTimeout(timeoutId);
      cancelAnimationFrame(frameId);
    };
  }, [active, delay, duration, target]);

  return count;
}

interface BenefitItemProps {
  value: number;
  suffix: string;
  label: string;
  active: boolean;
  delay: number;
}

function BenefitItem({ value, suffix, label, active, delay }: BenefitItemProps) {
  const count = useCountUp(value, active, delay);

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
      { threshold: 0.3 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="hero-numbers" data-nav-theme="light" ref={sectionRef}>
      <div className={`hero-numbers-card ${active ? "is-visible" : ""}`}>
        {benefits.map((item, i) => (
          <BenefitItem
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
