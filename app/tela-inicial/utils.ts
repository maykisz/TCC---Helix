import type { MouseEvent } from "react";

export function handleNavClick(event: MouseEvent<HTMLAnchorElement>, target: string) {
  if (!target.startsWith("#")) {
    return;
  }

  event.preventDefault();

  if (target === "#") {
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }

  const element = document.querySelector<HTMLElement>(target);

  if (!element) {
    return;
  }

  const top = element.getBoundingClientRect().top + window.scrollY - 72;
  window.scrollTo({ top, behavior: "smooth" });
}
