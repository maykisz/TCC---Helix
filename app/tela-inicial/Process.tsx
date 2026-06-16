"use client";

const copy = {
  processSteps: {
    title: "Do plano à evolução.",
    items: [
      {
        title: "Diagnóstico",
        text: "Mapeamos o problem, objetivos e prioridades reais.",
      },
      {
        title: "Planejamento",
        text: "Definimos escopo, tecnologia e caminho de entrega.",
      },
      {
        title: "Design",
        text: "Criamos interfaces limpas para uso real.",
      },
      {
        title: "Desenvolvimento",
        text: "Construímos com código organizado e performance.",
      },
      {
        title: "Entrega e evolução",
        text: "Publicamos, ajustamos e evoluímos o produto.",
      },
    ],
  },
} as const;

export function Process() {
  return (
    <section className="section process-section" id="process" data-nav-theme="light">
      <div className="section-heading section-heading-left">
        <h2>{copy.processSteps.title}</h2>
      </div>

      <div className="process-list is-visible">
        {copy.processSteps.items.map((step, index) => (
          <article className="process-step" key={step.title}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <h3>{step.title}</h3>
            <p>{step.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
