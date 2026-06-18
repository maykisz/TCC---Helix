"use client";

import { ArrowUpRight } from "lucide-react";

const copy = {
  faq: {
    title: "Perguntas\nfrequentes.",
    text: "Respostas rápidas para entender como a Helix transforma ideias, processos e operações em software.",
    items: [
      {
        question: "Preciso ter uma ideia pronta para começar?",
        answer: "Não. Podemos partir de um problema ou processo e ajudar a estruturar a solução junto com você.",
      },
      {
        question: "Trabalham com empresas de qualquer segmento?",
        answer: "Sim. O ponto de partida é entender o fluxo, as regras e as ferramentas que a operação já usa para desenhar uma solução adequada ao contexto.",
      },
      {
        question: "Como funciona o processo de desenvolvimento?",
        answer: "Começamos entendendo o problema, mapeamos os requisitos, desenvolvemos em ciclos curtos e validamos com você em cada etapa.",
      },
      {
        question: "Quanto tempo leva para ter uma primeira versão?",
        answer: "Depende do escopo, mas a primeira etapa sempre busca reduzir incerteza: diagnóstico, prioridades e um caminho claro para uma versão inicial utilizável.",
      },
      {
        question: "Vocês dão suporte depois da entrega?",
        answer: "Sim. Podemos combinar manutenção, melhorias evolutivas, ajustes de uso e acompanhamento técnico conforme a necessidade do projeto.",
      },
      {
        question: "Consigo acompanhar o andamento do projeto?",
        answer: "Sim. Mantemos comunicação ativa com atualizações regulares e acesso ao progresso em tempo real.",
      },
      {
        question: "Vocês usam inteligência artificial nos projetos?",
        answer: "Sim, quando faz sentido. Integramos IA para automação, análise de dados, atendimento e outras aplicações práticas.",
      },
      {
        question: "E se eu precisar mudar algo no meio do projeto?",
        answer: "Trabalhamos de forma flexível. Mudanças de escopo são discutidas e ajustadas sem travar o desenvolvimento.",
      },
      {
        question: "Os sistemas se integram com ferramentas que já uso?",
        answer: "Na maioria dos casos, sim. Integramos com ERPs, CRMs, APIs de pagamento, plataformas de comunicação e muito mais.",
      },
      {
        question: "Meus dados ficam seguros?",
        answer: "Sim. Seguimos boas práticas de segurança, criptografia e controle de acesso em todos os projetos.",
      },
    ],
  },
} as const;

export function Faq() {
  return (
    <section className="section faq-section" id="faq" data-nav-theme="light">
      <div className="faq-copy" data-reveal="fade-left">
        <h2>{copy.faq.title}</h2>
        <p>{copy.faq.text}</p>
      </div>

      <div className="faq-list" data-reveal="accordion">
        {copy.faq.items.map((item, index) => (
          <details className="faq-item" key={item.question}>
            <summary>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{item.question}</strong>
              <ArrowUpRight size={18} />
            </summary>
            <p>{item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
