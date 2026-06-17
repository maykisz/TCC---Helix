"use client";

import { ArrowUpRight, Instagram } from "lucide-react";

const prototypes = {
  title: "Protótipos criados para negócios reais.",
  subtitle:
    "Uma seleção de interfaces pensadas para SaaS, automações, dashboards e produtos digitais.",
  items: [
    {
      title: "SaaS Dashboard",
      category: "Painel administrativo",
      description:
        "Dashboard completo para acompanhar clientes, métricas, receita e operação em tempo real.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80",
      miniImage:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=220&q=80",
      size: "tall",
    },
    {
      title: "Automação com IA",
      category: "Atendimento inteligente",
      description:
        "Protótipo para chatbot com respostas automáticas, histórico de conversas e análise de leads.",
      image:
        "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=900&q=80",
      miniImage:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=220&q=80",
      size: "medium",
    },
    {
      title: "App Mobile",
      category: "Produto responsivo",
      description:
        "Interface mobile para fluxo de cadastro, autenticação, assinatura e área do usuário.",
      image:
        "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=900&q=80",
      miniImage:
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=220&q=80",
      size: "large",
    },
    {
      title: "Landing Page Premium",
      category: "Captação de clientes",
      description:
        "Página de venda com estrutura visual forte, seções comerciais e foco em conversão.",
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80",
      miniImage:
        "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=220&q=80",
      size: "quote",
    },
    {
      title: "Sistema de Agendamento",
      category: "Serviços e reservas",
      description:
        "Protótipo para gerenciar horários, clientes, serviços, disponibilidade e notificações.",
      image:
        "https://images.unsplash.com/photo-1555421689-491a97ff2040?auto=format&fit=crop&w=900&q=80",
      miniImage:
        "https://images.unsplash.com/photo-1506784365847-bbad939e9335?auto=format&fit=crop&w=220&q=80",
      size: "small",
    },
    {
      title: "E-commerce Clean",
      category: "Loja virtual",
      description:
        "Interface para catálogo, carrinho, checkout e apresentação moderna de produtos.",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=900&q=80",
      miniImage:
        "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?auto=format&fit=crop&w=220&q=80",
      size: "dog",
    },
    {
      title: "Analytics Produto",
      category: "Métricas e crescimento",
      description:
        "Protótipo focado em indicadores, performance, comportamento do usuário e relatórios.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80",
      miniImage:
        "https://images.unsplash.com/photo-1543286386-713bdd548da4?auto=format&fit=crop&w=220&q=80",
      size: "tall",
    },
  ],
  decoImages: [
    {
      title: "Design System",
      image:
        "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=700&q=80",
    },
    {
      title: "Produto Digital",
      image:
        "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=700&q=80",
    },
  ],
} as const;

export function PrototypeShowcase() {
  return (
    <section className="prototype-section" id="prototypes">
      <div className="prototype-inner">
        <header className="prototype-heading">
          <h2>{prototypes.title}</h2>
          <p>{prototypes.subtitle}</p>
        </header>

        <div className="prototype-wall">
          <div className="prototype-column prototype-column-left">
            <PrototypeCard item={prototypes.items[0]} />
            <PrototypeImageCard item={prototypes.decoImages[0]} />
          </div>

          <div className="prototype-column prototype-column-mid-left">
            <PrototypeCard item={prototypes.items[1]} />
            <PrototypeCard item={prototypes.items[2]} />
          </div>

          <div className="prototype-column prototype-column-center">
            <PrototypeCard item={prototypes.items[3]} featured />
            <PrototypeCard item={prototypes.items[4]} />
          </div>

          <div className="prototype-column prototype-column-mid-right">
            <PrototypeCard item={prototypes.items[5]} />
            <PrototypeCard item={prototypes.items[6]} />
          </div>

          <div className="prototype-column prototype-column-right">
            <PrototypeCard item={prototypes.items[1]} />
            <PrototypeImageCard item={prototypes.decoImages[1]} />
          </div>
        </div>
      </div>
    </section>
  );
}

type PrototypeItem = (typeof prototypes.items)[number];

function PrototypeCard({
  item,
  featured = false,
}: {
  item: PrototypeItem;
  featured?: boolean;
}) {
  return (
    <article
      className={`prototype-card prototype-card-${item.size} ${
        featured ? "prototype-card-featured" : ""
      }`}
    >
      <img
        className="prototype-card-bg"
        src={item.image}
        alt={item.title}
        draggable={false}
      />

      <div className="prototype-overlay">
        <div className="prototype-thumb">
          <img src={item.miniImage} alt="" draggable={false} />
        </div>

        <div className="prototype-info">
          <span>{item.category}</span>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </div>

        <div className="prototype-link">
          <span>Ver detalhes</span>
          <ArrowUpRight size={16} strokeWidth={2} />
        </div>
      </div>
    </article>
  );
}

function PrototypeImageCard({
  item,
}: {
  item: (typeof prototypes.decoImages)[number];
}) {
  return (
    <article className="prototype-deco-card prototype-photo-card">
      <img
        className="prototype-deco-image"
        src={item.image}
        alt={item.title}
        draggable={false}
      />

      <div className="prototype-deco-overlay">
        <span>{item.title}</span>
      </div>
    </article>
  );
}