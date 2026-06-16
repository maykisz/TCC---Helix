import {
  ArrowUpRight,
  Bot,
  Code2,
  LayoutPanelTop,
  Layers3,
  Workflow,
} from "lucide-react";
import Link from "next/link";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";
import styles from "./page.module.css";

const services = [
  {
    icon: Code2,
    title: "Sistemas web sob medida",
    text: "Painéis, áreas administrativas, portais e fluxos internos para tirar sua operação de planilhas soltas.",
    image: "/imgs/solucoes/web-design-desenvolvimento.png",
  },
  {
    icon: Layers3,
    title: "Plataformas SaaS",
    text: "Estrutura de produto, interface e base técnica para transformar uma ideia recorrente em negócio escalável.",
    image: "/imgs/solucoes/design-ui-ux.png",
  },
  {
    icon: LayoutPanelTop,
    title: "Sites e landing pages",
    text: "Páginas institucionais e páginas de conversão para explicar sua oferta e gerar contato com clareza.",
    image: "/imgs/solucoes/identidade-visual.png",
  },
  {
    icon: Workflow,
    title: "Automações de processos",
    text: "Integrações, formulários, notificações e rotinas para reduzir trabalho manual e acelerar decisões.",
    image: "/imgs/solucoes/direcao-criativa.png",
  },
  {
    icon: Bot,
    title: "IA e APIs",
    text: "Recursos inteligentes conectados aos seus sistemas, dados e ferramentas para criar novas capacidades.",
    image: "/imgs/solucoes/conteudo-visual.png",
  },
];

export default function ServicosPage() {
  return (
    <main className={styles.page}>
      <SiteHeader />

      <section className={styles.hero} data-nav-theme="dark">
        <div className={styles.heroCopy}>
          <h1>Softwares que alavancam sua empresa</h1>
          <p>
            Criamos sites, sistemas web, plataformas SaaS e ferramentas internas
            que transformam ideias de negócio em produtos digitais escaláveis.
          </p>
          <div className={styles.heroActions}>
            <Link href="/contato">
              Começar projeto
              <ArrowUpRight size={16} />
            </Link>
            <Link href="/projetos">Ver projetos</Link>
          </div>
        </div>
      </section>

      <section className={styles.servicesSection} data-nav-theme="light">
        <div className={styles.sectionHeading}>
          <span>O que construímos</span>
          <h2>Escolha o ponto que mais trava sua empresa.</h2>
          <p>
            Em vez de vender uma lista solta de serviços, desenhamos a solução
            em torno do que precisa melhorar: venda, operação, escala ou
            automação.
          </p>
        </div>

        <div className={styles.serviceShowcase}>
          <article className={styles.serviceFeature}>
            <img src={services[0].image} alt="" />
            <div>
              <span>01</span>
              <h3>{services[0].title}</h3>
              <p>{services[0].text}</p>
              <Link href="/contato">
                Conversar sobre isso
                <ArrowUpRight size={16} />
              </Link>
            </div>
          </article>

          <div className={styles.serviceDeck}>
            {services.slice(1).map((service, index) => {
              const Icon = service.icon;
              return (
                <article key={service.title}>
                  <div className={styles.serviceThumb}>
                    <img src={service.image} alt="" />
                  </div>
                  <div className={styles.serviceContent}>
                    <div className={styles.serviceTop}>
                      <span>{String(index + 2).padStart(2, "0")}</span>
                      <Icon size={22} />
                    </div>
                    <h3>{service.title}</h3>
                    <p>{service.text}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className={styles.deliverySection} data-nav-theme="dark">
        <div>
          <span>Como entregamos</span>
          <h2>Uma rota clara, sem complicar sua rotina.</h2>
        </div>

        <div className={styles.deliveryList}>
          {["Entender o cenário", "Definir o escopo", "Criar a interface", "Desenvolver", "Publicar e evoluir"].map((item, index) => (
            <article key={item}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{item}</strong>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.cta} data-nav-theme="light">
        <div>
          <h2>Tem uma operação, ideia ou processo que precisa virar software?</h2>
          <p>
            Vamos entender o que você precisa vender, organizar ou automatizar e
            transformar isso em uma primeira versão clara.
          </p>
        </div>
        <Link href="/contato">
          Falar sobre meu projeto
          <ArrowUpRight size={16} />
        </Link>
      </section>

      <SiteFooter />
    </main>
  );
}
