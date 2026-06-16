"use client";

const copy = {
  testimonials: {
    title: "O que clientes dizem\nsobre a Helix.",
    items: [
      {
        quote: "A Helix tirou nossa operação das planilhas e transformou tudo em um painel simples. O time entendeu rápido o que era prioridade.",
        name: "Marina Duarte",
        role: "Operações, Orion Ops",
        photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=160&q=80",
      },
      {
        quote: "O projeto saiu com cara de produto de verdade. Design limpo, fluxo claro e uma base técnica pronta para crescer.",
        name: "Rafael Nunes",
        role: "Founder, Lumina Launch",
        photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=160&q=80",
      },
      {
        quote: "A entrega foi objetiva. Eles conectaram automações, área de cliente e indicadores sem complicar a rotina da equipe.",
        name: "Bianca Torres",
        role: "Diretora, Genesys Cloud",
        photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=160&q=80",
      },
    ],
  },
} as const;

export function Testimonials() {
  return (
    <section className="testimonials-section" id="testimonials" data-nav-theme="dark">
      <div className="testimonials-inner" data-reveal="marquee">
        <div className="testimonials-heading">
          <h2>{copy.testimonials.title}</h2>
        </div>

        <div className="testimonial-track">
          <div className="testimonial-rail">
            {[...copy.testimonials.items, ...copy.testimonials.items].map((item, index) => (
              <article className="testimonial-card" key={`${item.name}-${index}`}>
                <p>“{item.quote}”</p>
                <div className="testimonial-author">
                  <span className="testimonial-photo">
                    <img src={item.photo} alt={item.name} draggable={false} />
                  </span>
                  <div>
                    <strong>{item.name}</strong>
                    <small>{item.role}</small>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
