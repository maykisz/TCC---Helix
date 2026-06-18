"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

const prototypes = {
  title: "Protótipos de soluções que podemos construir.",
  subtitle:
    "Exemplos de telas, fluxos e produtos digitais que ajudam a transformar problemas reais em software útil.",
  items: [
    {
      title: "SaaS Dashboard",
      category: "Painel administrativo",
      description:
        "Um painel para acompanhar clientes, métricas, receita e operação em tempo real, com visão clara para tomada de decisão.",
      image: "/imgs/services-left.png",
      size: "tall",
    },
    {
      title: "Automação com IA",
      category: "Atendimento inteligente",
      description:
        "Um fluxo para responder dúvidas, qualificar leads, registrar conversas e reduzir tarefas manuais no atendimento.",
      image: "/imgs/problems/atendimento.jpg",
      size: "medium",
    },
    {
      title: "App Mobile",
      category: "Produto responsivo",
      description:
        "Uma experiência mobile para cadastro, autenticação, assinatura e área do usuário, pronta para validar um produto digital.",
      image: "/imgs/problems/saas.jpg",
      size: "large",
    },
    {
      title: "Landing Page Premium",
      category: "Captação de clientes",
      description:
        "Uma página de venda com narrativa objetiva, visual forte, prova de valor e foco em transformar visitas em contatos.",
      image: "/imgs/solucoes/web-design-desenvolvimento.png",
      size: "quote",
    },
    {
      title: "Sistema de Agendamento",
      category: "Serviços e reservas",
      description:
        "Uma central para gerenciar horários, clientes, serviços, disponibilidade e notificações sem depender de mensagens soltas.",
      image: "/imgs/problems/operacao.jpg",
      size: "small",
    },
    {
      title: "E-commerce Clean",
      category: "Loja virtual",
      description:
        "Uma loja com catálogo, carrinho, checkout e apresentação moderna para vender produtos com menos atrito.",
      image: "/imgs/solucoes/conteudo-visual.png",
      size: "large",
    },
    {
      title: "Analytics Produto",
      category: "Métricas e crescimento",
      description:
        "Um painel para visualizar performance, comportamento do usuário, relatórios e pontos de melhoria do produto.",
      image: "/imgs/problems/planilhas.jpg",
      size: "tall",
    },
  ],
} as const;

type PrototypeItem = (typeof prototypes.items)[number];

const columns = [
  [0, 4],
  [1, 2],
  [3],
  [5, 6],
] as const;

export function PrototypeShowcase() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const expandedItem = expandedIndex === null ? null : prototypes.items[expandedIndex];

  return (
    <section className="prototype-section" id="prototypes">
      <div className="prototype-inner">
        <header className="prototype-heading">
          <h2>{prototypes.title}</h2>
          <p>{prototypes.subtitle}</p>
        </header>

        <div
          className={`prototype-wall ${expandedIndex !== null ? "has-expanded" : ""}`}
          aria-label="Protótipos interativos"
        >
          {columns.map((column, columnIndex) => (
            <div className="prototype-column" key={columnIndex}>
              {column.map((itemIndex) => (
                <PrototypeCard
                  item={prototypes.items[itemIndex]}
                  key={prototypes.items[itemIndex].title}
                  selected={expandedIndex === itemIndex}
                  onSelect={() => setExpandedIndex(itemIndex)}
                />
              ))}
            </div>
          ))}

          {expandedItem ? (
            <div className="prototype-expanded-panel">
              <button
                aria-label="Fechar destaque"
                className="prototype-close"
                onClick={() => setExpandedIndex(null)}
                type="button"
              >
                ×
              </button>

              <img
                className="prototype-expanded-image"
                src={expandedItem.image}
                alt=""
                draggable={false}
              />

              <span className="prototype-expanded-shade" />

              <div className="prototype-expanded-content">
                <span>{expandedItem.category}</span>
                <h3>{expandedItem.title}</h3>
                <p>{expandedItem.description}</p>
                <small>
                  Solicitar algo parecido
                  <ArrowUpRight size={16} strokeWidth={2} />
                </small>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}

function PrototypeCard({
  item,
  selected,
  onSelect,
}: {
  item: PrototypeItem;
  selected: boolean;
  onSelect: () => void;
}) {
  return (
    <button
      aria-label={`Expandir ${item.title}`}
      aria-pressed={selected}
      className={`prototype-card prototype-card-${item.size} ${
        selected ? "is-selected" : ""
      }`}
      onClick={onSelect}
      type="button"
    >
      <img className="prototype-card-bg" src={item.image} alt="" draggable={false} />
      <span className="prototype-card-shade" />

      <span className="prototype-overlay">
        <span className="prototype-info">
          <span>{item.category}</span>
          <strong>{item.title}</strong>
        </span>
      </span>
    </button>
  );
}
