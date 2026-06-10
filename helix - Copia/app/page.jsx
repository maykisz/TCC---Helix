import Faq from "@/components/Faq";
import Icon from "@/components/Icon";
import Reveal from "@/components/Reveal";

const metrics = [
  ["500+", "Projetos entregues"],
  ["98%", "Satisfação"],
  ["24h", "Tempo de resposta"]
];

const projects = [
  {
    image: "/img/ondas.jpeg",
    title: "FitZone",
    description: "Plataforma de treinos e acompanhamento.",
    type: "Web App"
  },
  {
    image: "/img/tabela.png",
    title: "Lumina",
    description: "E-commerce de móveis e decoração.",
    type: "E-commerce"
  },
  {
    image: "/img/notebook.png",
    title: "TechFlow",
    description: "Plataforma de automações e integrações.",
    type: "SaaS"
  }
];

const steps = [
  {
    icon: "search",
    title: "Discovery & Alinhamento",
    description: "Entendimento do negócio, requisitos e objetivos.",
    time: "1-2 semanas"
  },
  {
    icon: "ruler",
    title: "Prototipação",
    description: "Wireframes e validações antes do desenvolvimento.",
    time: "2-3 semanas"
  },
  {
    icon: "code",
    title: "Desenvolvimento",
    description: "Construção da solução com foco em performance.",
    time: "4-12 semanas"
  },
  {
    icon: "zap",
    title: "Escala & Suporte",
    description: "Monitoramento contínuo após a entrega.",
    time: "Contínuo"
  }
];

const stats = [
  ["clock", "8+", "Anos de Experiência", "Desenvolvendo soluções digitais de alta qualidade."],
  ["users", "50+", "Clientes Satisfeitos", "Empresas que confiam e recomendam nosso trabalho."],
  ["code", "500+", "Projetos Entregues", "Soluções completas entregues com sucesso."],
  ["shield", "99%", "Taxa de Sucesso", "Compromisso com resultados e satisfação dos clientes."]
];

const footerColumns = [
  {
    title: "Serviços",
    links: [
      "Criação de Sites",
      "Landing Pages",
      "SaaS Personalizados",
      "Loja Virtual (e-commerce)",
      "Manutenção & Suporte",
      "Hospedagem & Domínios"
    ]
  },
  {
    title: "Soluções",
    links: [
      "Sistemas Web",
      "Painéis Administrativos",
      "Automação de Processos",
      "Integrações & APIs",
      "Dashboards & Relatórios",
      "Aplicações Escaláveis"
    ]
  },
  {
    title: "Recursos",
    links: ["Blog", "Documentação", "Guias & Tutoriais", "Modelos", "FAQ", "Academy"]
  }
];

const footerTags = [
  ["zap", "Tecnologia de ponta"],
  ["code", "Código limpo"],
  ["chart", "Performance"],
  ["cloud", "Escalabilidade"]
];

export default function Home() {
  return (
    <>
      <header>
        <a className="logo" href="#home" aria-label="Hélix Software">
          <img src="/img/logoHelix.png" alt="Hélix Software" className="logo-icon" />
        </a>

        <nav className="nav-links" aria-label="Navegação principal">
          <a href="#home">Home</a>
          <div className="dividerNav" />
          <a href="#solucoes">Soluções</a>
          <div className="dividerNav" />
          <a href="#projetos">Projetos</a>
          <div className="dividerNav" />
          <a href="#faq">FAQ</a>
          <div className="dividerNav" />
          <a href="#contato">Sobre</a>
        </nav>

        <div className="nav-buttons" aria-hidden="true">
          <span />
          <span />
        </div>
      </header>

      <main id="home">
        <div className="main-bg">
          <section className="hero">
            <Reveal className="hero-content" variant="pop" duration={850} distance={42}>
              <h1>
                Software que transforma sua
                <span>empresa em resultados</span>
              </h1>
              <p>
                Soluções tecnológicas sob medida para empresas que buscam
                crescimento acelerado.
              </p>
              <a className="cta" href="#contato">
                Quero meu software
                <Icon name="arrowRight" />
              </a>
            </Reveal>
          </section>
        </div>

        <section className="metrics">
          {metrics.map(([value, label], index) => (
            <div className="metric-group" key={label}>
              <Reveal className="metric-card" delay={index * 120} variant="fade-down">
                <h2>{value}</h2>
                <p>{label}</p>
              </Reveal>
              {index < metrics.length - 1 && <div className="divider" />}
            </div>
          ))}
        </section>

        <section className="solutions" id="solucoes">
          <section className="arc-spacer" aria-hidden="true">
            <div className="arc-container">
              <img src="/img/arco.jpeg" alt="" className="imgArco" />
            </div>
          </section>

          <div className="solutions-container">
            <Reveal variant="slide-left" distance={52}>
              <span className="solutions-badge">
                <Icon name="dot" size={16} />
                SOLUÇÕES DIGITAIS
              </span>

              <h2>
                Transformo ideias em <br />
                soluções que geram <span>resultados.</span>
              </h2>

              <p>
                Desenvolvimento de sistemas, sites e automações que otimizam
                processos e impulsionam negócios.
              </p>

              <div className="solutions-buttons">
                <a href="#projetos" className="btn-blue">
                  Ver projetos
                  <Icon name="arrowRight" />
                </a>
                <a href="#contato" className="btn-outline">
                  Falar comigo
                </a>
              </div>
            </Reveal>

            <Reveal className="dashboard-mockup-container" delay={180} duration={900} variant="slide-right" distance={70}>
              <div className="glow-effect" />
              <img src="/img/notebook.png" alt="Dashboard em notebook" className="imgMockup" />
            </Reveal>
          </div>
        </section>

        <section className="projects" id="projetos">
          <Reveal variant="fade-up" distance={58}>
            <span className="section-tag">
              <Icon name="dot" size={16} />
              PROJETOS
            </span>
            <h2>Alguns projetos recentes</h2>
          </Reveal>

          <div className="projects-grid">
            {projects.map((project, index) => (
              <Reveal
                as="article"
                className="project-card"
                delay={index * 140}
                distance={58}
                key={project.title}
                variant={index % 2 === 0 ? "slide-left" : "slide-right"}
              >
                <img src={project.image} alt={project.title} />
                <div className="project-info">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-footer">
                    <span>{project.type}</span>
                    <a href="#contato" aria-label={`Abrir projeto ${project.title}`}>
                      <Icon name="externalLink" />
                    </a>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="process">
          <Reveal variant="fade-up" distance={46}>
            <h2>Do zero ao deploy em 4 etapas</h2>
            <p>
              Metodologia ágil comprovada para entregar projetos de alta qualidade
              no menor tempo possível.
            </p>
          </Reveal>

          <Reveal className="timeline" aria-hidden="true" delay={140} variant="line">
            <div className="line" />
            {steps.map((_, index) => (
              <div className="step" key={index + 1}>
                {String(index + 1).padStart(2, "0")}
              </div>
            ))}
          </Reveal>

          <div className="steps-grid">
            {steps.map((step, index) => (
              <Reveal as="article" className="step-card" delay={index * 120} key={step.title} variant="flip">
                <div className="icon">
                  <Icon name={step.icon} size={32} />
                </div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
                <span>{step.time}</span>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="stats-highlight">
          <div className="stats-box">
            {stats.map(([icon, value, title, description], index) => (
              <Reveal as="article" className="stat-item" delay={index * 110} key={title} variant="zoom">
                <div className="stat-icon">
                  <Icon name={icon} />
                </div>
                <h3>{value}</h3>
                <h4>{title}</h4>
                <p>{description}</p>
              </Reveal>
            ))}
          </div>
        </section>

        <Faq />

        <Reveal as="section" className="social-proof" variant="pop" distance={44}>
          <p>Empresas que confiam no nosso trabalho</p>
          <div className="logo-grid">
            <span>Google</span>
            <span>Microsoft</span>
            <span>AWS</span>
            <span>DigitalOcean</span>
            <span>Vercel</span>
            <span>Stripe</span>
          </div>
        </Reveal>
      </main>

      <footer id="contato">
        <Reveal className="footer-content" variant="fade-up" distance={48}>
          <div className="footer-grid">
            {footerColumns.map((column) => (
              <div className="footer-col" key={column.title}>
                <h3>{column.title}</h3>
                {column.links.map((link) => (
                  <a href="#" key={link}>
                    {link}
                  </a>
                ))}
              </div>
            ))}

            <div className="footer-col">
              <h3>Newsletter</h3>
              <p>
                Receba conteúdos, novidades e dicas exclusivas sobre
                desenvolvimento web.
              </p>
              <form className="newsletter-input">
                <input type="email" placeholder="Seu melhor e-mail" aria-label="Seu melhor e-mail" />
                <button type="submit">Assinar</button>
              </form>
              <small className="secure-note">
                <Icon name="lock" size={14} />
                Sem spam. Cancele quando quiser.
              </small>
            </div>
          </div>
        </Reveal>

        <div className="footer-bottom1" />

        <div className="footer-brand">
          <a className="logo" href="#home" aria-label="Hélix Software">
            <img src="/img/logoHelix.png" alt="Hélix Software" className="logo-iconFooter" />
          </a>
          <p className="textFooter">
            Soluções digitais que transformam ideias
            <br />
            em produtos de alto impacto.
          </p>
          <div className="footer-tags">
            {footerTags.map(([icon, label]) => (
              <span key={label}>
                <Icon name={icon} size={15} />
                {label}
              </span>
            ))}
          </div>
          <div className="social-icons">
            <a href="#" aria-label="GitHub">
              <img src="/img/placa-do-github.png" alt="" />
            </a>
            <a href="#" aria-label="LinkedIn">
              <img src="/img/linkedin (1).png" alt="" />
            </a>
            <a href="#" aria-label="Instagram">
              <img src="/img/instagram.png" alt="" />
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2026 Hélix Software. Todos os direitos reservados.</p>
          <div className="footer-legal">
            <a href="#">Política de Privacidade</a>
            <a href="#">Termos de Uso</a>
          </div>
        </div>
      </footer>
    </>
  );
}
