import { lazy, Suspense, type ReactNode } from "react";
import { siteConfig } from "@/content/site.config";
import { FloatingWhatsApp } from "@/components/layout/FloatingWhatsApp";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { About } from "@/components/sections/About";
import { Audience } from "@/components/sections/Audience";
import { Differentials } from "@/components/sections/Differentials";
import { Faq } from "@/components/sections/Faq";
import { FinalCta } from "@/components/sections/FinalCta";
import { Hero } from "@/components/sections/Hero";
import { HowToOrder } from "@/components/sections/HowToOrder";
import { ServiceArea } from "@/components/sections/ServiceArea";
import { Services } from "@/components/sections/Services";
import { SocialProof } from "@/components/sections/SocialProof";
import { TrustBar } from "@/components/sections/TrustBar";
import { Pending } from "@/components/shared/Pending";
import { getMenuItems, getSectionPendingPath, isSectionVisible, SECTION_DEFINITIONS, type SectionId } from "@/lib/sections";
import { withCity } from "@/lib/seo";
import { buildTrustItems } from "@/lib/trust";

// Seção com carrossel, lightbox e comparador: carregada sob demanda
const Works = lazy(() => import("@/components/sections/Works/Works").then((module) => ({ default: module.Works })));

const renderSection = (id: SectionId): ReactNode => {
  const { empresa, hero, textos, midia } = siteConfig;
  // Serviço com oculto: true some do site e do formulário; a grade de 3 colunas fecha certinho com 6 cards
  const servicos = siteConfig.servicos.filter((service) => !service.oculto);
  switch (id) {
    case "hero":
      return (
        <Hero
          heading={withCity(hero.tituloBase, siteConfig.seo.cidade)}
          subtitle={empresa.proposta}
          slogan={empresa.slogan}
          image={midia.hero}
          primaryLabel={hero.ctaPrimario}
          secondaryLabel={hero.ctaSecundario}
        />
      );
    case "confianca":
      return <TrustBar items={buildTrustItems(siteConfig)} />;
    case "servicos":
      return <Services services={servicos} texts={textos.servicos} />;
    case "publico":
      return <Audience items={siteConfig.publicoAtendido} texts={textos.publico} />;
    case "diferenciais":
      return (
        <Differentials
          items={siteConfig.diferenciais}
          equipment={siteConfig.equipamentos}
          truckPhoto={midia.fotoCaminhao}
          texts={textos.diferenciais}
          ctaLabel={hero.ctaPrimario}
        />
      );
    case "quem-somos":
      return empresa.responsavel ? (
        <About
          responsible={empresa.responsavel}
          role={empresa.cargoResponsavel}
          formation={empresa.formacaoResponsavel}
          photo={midia.fotoResponsavel}
          yearsActive={empresa.tempoAtuacao}
          treesPruned={siteConfig.numeros.arvoresPodadas}
          valueProposition={empresa.proposta}
          story={empresa.historia}
          team={siteConfig.equipeTecnica}
          texts={textos["quem-somos"]}
        />
      ) : null;
    case "trabalhos":
      return (
        <Suspense fallback={null}>
          <Works media={midia} texts={textos.trabalhos} />
        </Suspense>
      );
    case "clientes":
      return (
        <SocialProof
          clients={siteConfig.clientesCitaveis}
          testimonials={siteConfig.depoimentos}
          google={siteConfig.google}
          texts={textos.clientes}
        />
      );
    case "como-pedir":
      return <HowToOrder steps={siteConfig.orcamento.passos} texts={textos["como-pedir"]} />;
    case "regiao":
      return <ServiceArea area={siteConfig.regiao} texts={textos.regiao} />;
    case "perguntas":
      return <Faq questions={siteConfig.faq} texts={textos.perguntas} />;
    case "contato":
      return (
        <FinalCta
          slogan={empresa.slogan}
          texts={textos.contato}
          ctaLabel={hero.ctaPrimario}
          contact={siteConfig.contato}
          serviceNames={servicos.map((service) => service.nome)}
        />
      );
  }
};

const App = () => {
  const menuItems = getMenuItems(siteConfig);

  return (
    <>
      <Header companyName={siteConfig.empresa.nome} ctaLabel={siteConfig.hero.ctaPrimario} menuItems={menuItems} />
      <main>
        {SECTION_DEFINITIONS.map(({ id }) => {
          if (isSectionVisible(id, siteConfig)) return <div key={id}>{renderSection(id)}</div>;
          const pendingPath = getSectionPendingPath(id);
          return pendingPath ? <Pending key={id} path={pendingPath} /> : null;
        })}
      </main>
      <Footer
        empresa={siteConfig.empresa}
        credenciais={siteConfig.credenciais}
        contato={siteConfig.contato}
        endereco={siteConfig.regiao.endereco}
        redes={siteConfig.redes}
        menuItems={menuItems}
      />
      <FloatingWhatsApp />
    </>
  );
};

export default App;
