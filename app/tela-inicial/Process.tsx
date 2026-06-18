"use client";

const copy = {
  processSteps: {
    kicker: "Processo",
    title: "Da conversa inicial ao sistema rodando.",
    text: "Sem excesso de etapas. Primeiro entendemos o problema, depois desenhamos uma primeira versão possível e construímos com você por perto.",
    items: [
      {
        title: "Diagnóstico",
        text: "Entendemos o problema, o fluxo atual e onde a tecnologia pode gerar mais impacto.",
      },
      {
        title: "Escopo",
        text: "Definimos funcionalidades, prioridades e o melhor caminho para a primeira versão.",
      },
      {
        title: "Protótipo validável",
        text: "Desenhamos telas claras para validar a experiência antes de avançar para o desenvolvimento.",
      },
      {
        title: "Desenvolvimento",
        text: "Construímos o sistema com foco em uso real, performance e evolução.",
      },
      {
        title: "Entrega e ajustes",
        text: "Publicamos, testamos com você e ajustamos o produto para começar a rodar.",
      },
    ],
  },
} as const;

export function Process() {
  return (
    <section className="section process-section" id="process" data-nav-theme="light">
      <div className="process-heading">
        <span>{copy.processSteps.kicker}</span>
        <h2>{copy.processSteps.title}</h2>
        <p>{copy.processSteps.text}</p>
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

      <a className="process-cta" href="/contato">
        Diagnosticar meu processo
      </a>
    </section>
  );
}
