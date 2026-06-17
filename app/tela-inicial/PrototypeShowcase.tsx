"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

const prototypes = {
  title: "Protótipos de soluções que podemos construir.",
  subtitle:
    "Exemplos visuais de sistemas, automações, dashboards e produtos digitais para transformar problemas reais em software.",
  items: [
    {
      title: "SaaS Dashboard",
      category: "Painel administrativo",
      description:
        "Um painel para acompanhar clientes, métricas, receita e operação em tempo real, com visão clara para tomada de decisão.",
      image:
        "https://imgs.search.brave.com/d6Sxs5IK2xMgB3Sbqg6OEy3VXI9uD0wkHsqKjzGOkOk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zMy1m/aWdtYS1odWJmaWxl/LWltYWdlcy1wcm9k/dWN0aW9uLmZpZ21h/LmNvbS9odWIvZmls/ZS9jYXJvdXNlbC9p/bWcvMDYxOTEzNmEz/MjQ3Y2UxOTliNjll/NmIxMWE4N2MyYzg3/NWQwNTZkMw",
      size: "tall",
    },
    {
      title: "Automação com IA",
      category: "Atendimento inteligente",
      description:
        "Um fluxo para responder dúvidas, qualificar leads, registrar conversas e reduzir tarefas manuais no atendimento.",
      image:
        "https://imgs.search.brave.com/yoE47As9146XU4Goq6TXULeIRnKnIDgvaVW0o2NasB8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/bWFnbmlmaWMuY29t/L2ZyZWUtdmVjdG9y/L3RyYXZlbC1sYW5k/aW5nLXBhZ2UtdGVt/cGxhdGUtd2l0aC1p/bWFnZV81MjY4My0zMDM0NS5qcGc_c2VtZD1haXNfaHlicmlkJnc9NzQwJnE9ODA",
      size: "medium",
    },
    {
      title: "App Mobile",
      category: "Produto responsivo",
      description:
        "Uma experiência mobile para cadastro, autenticação, assinatura e área do usuário, pronta para validar um produto digital.",
      image:
        "https://imgs.search.brave.com/4pAs8O8hzl7R8S01A9vEV1bWdbhUrtTJghfcuF2Y0mw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4uZHJpYmJibGUuY29tL3VzZXJ1cGxvYWQvMTg2NzY1NzcvZmlsZS9zdGlsbC1hMDg3ZDhjNjk0OGUyNjMyMDVlNDY4MmNhYTQwNDg1Ny5wbmc_Zm9ybWF0PXdlYnAmcmVzaXplPTQwMHgzMDAmdmVydGljYWw9Y2VudGVy",
      size: "large",
    },
    {
      title: "Landing Page Premium",
      category: "Captação de clientes",
      description:
        "Uma página de venda com narrativa objetiva, visual forte, prova de valor e foco em transformar visitas em contatos.",
      image:
        "https://imgs.search.brave.com/qC--QRZ0LF86dzP1xnWbuu4a28istQ_EZWTzbK0qZSo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9uZWlscGF0ZWwuY29tL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDIzLzA2L0xhbmRpbmctUGFnZS1FeGFtcGxlcy0wMDktNzAweDM4MC5qcGc",
      size: "quote",
    },
    {
      title: "Sistema de Agendamento",
      category: "Serviços e reservas",
      description:
        "Uma central para gerenciar horários, clientes, serviços, disponibilidade e notificações sem depender de mensagens soltas.",
      image:
        "https://images.unsplash.com/photo-1555421689-491a97ff2040?auto=format&fit=crop&w=900&q=80",
      size: "small",
    },
    {
      title: "E-commerce Clean",
      category: "Loja virtual",
      description:
        "Uma loja com catálogo, carrinho, checkout e apresentação moderna para vender produtos com menos atrito.",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=900&q=80",
      size: "large",
    },
    {
      title: "Analytics Produto",
      category: "Métricas e crescimento",
      description:
        "Um painel para visualizar performance, comportamento do usuário, relatórios e pontos de melhoria do produto.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80",
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
                  Exemplo visual
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
