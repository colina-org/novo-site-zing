// Conteúdo atual da Home, extraído verbatim dos componentes.
// Negrito original (<strong>/font-bold) representado como **texto**; <br/> como \n.

export const homeData = {
  hero: {
    title: "Plataforma de inovação completa para o **setor público**",
    description:
      "Conectamos, com o **poder da Inteligência Artificial**, os atores do ecossistema de inovação para que startups desenvolvam soluções sob medida para os **desafios reais do setor público e privado**",
    cta: { label: "Solicite uma demonstração", href: "/contato" },
    imageDesktop: "/hero-bg.png",
    imageTablet: "/image-hero-tablet-home.png",
    imageMobile: "/image-hero-mobile-home.png",
  },
  clientsTitle:
    "Escolhido por instituições públicas e empresas que **valorizam a inovação**",
  servicesSection: {
    label: "Serviços",
    title:
      "Transforme ideias em **soluções concretas**, com o apoio da **IA**",
    description:
      "Conectamos setores, estimulamos a colaboração e promovemos capacitação para criar um ecossistema público-privado mais eficiente, inovador e impactante.",
    services: [
      {
        title: "Gestão de CPSI",
        description:
          "A Zing utiliza Inteligência Artificial para automatizar e otimizar cada etapa da gestão de CPSIs, desde a publicação do edital até a seleção e avaliação das startups.",
        image: "/services/service-cpsi.png",
      },
      {
        title: "Programa de inovação aberta",
        description:
          "A Zing estrutura e executa programas de inovação aberta, utilizando Inteligência Artificial para realizar a captação, seleção e avaliação das startups mais aderentes para participação em diferentes iniciativas de aceleração.",
        image: "/services/service-inovacao-aberta.png",
      },
      {
        title: "Desafios de intraempreendedorismo",
        description:
          "Utilizamos IA para criar e gerenciar desafios que incentivam colaboradores a propor soluções inovadoras para problemas reais da empresa.",
        image: "/services/service-desafios.png",
      },
      {
        title: "Gestão de Hubs",
        description:
          "A Zing estrutura e gerencia hubs de inovação com o suporte da Inteligência Artificial, incluindo o espaço físico, conectando startups, setor público, empresas e academia para impulsionar a colaboração, o desenvolvimento de soluções e a geração de impacto.",
        image: "/services/service-hubs.png",
      },
    ],
  },
  solutionsSection: {
    label: "Para quem oferecemos",
    title: "Conheça nossas\n**soluções**",
    solutions: [
      {
        label: "Setor público",
        description:
          "Lance chamadas de CPSI e desafios de inovação para resolver problemas reais da gestão pública, testando e validando soluções com startups de forma segura, transparente e orientada a resultados.",
        image: "/img-card-setor-publico-v2.png",
        href: "/cpsi",
      },
      {
        label: "Setor privado",
        description:
          "A Zing apoia empresas na criação e execução de programas de inovação aberta, conectando startups a desafios reais do negócio. Também desenvolve desafios de intraempreendedorismo para engajar colaboradores na criação de soluções inovadoras.",
        image: "/img-card-setor-privado-v2.png",
        href: "/desafios-intraempreendedorismo",
      },
    ],
  },
  programsTitle: "Fique por dentro dos nossos\n**programas e chamadas**",
  testimonialsTitle: "Quem já **inovou** com a gente",
  faqTitle: "Tire suas **dúvidas**",
  // Logos de clientes (21) — catálogo completo (collection clients).
  clients: [
    { src: "/clients/client-01.png", alt: "Caixa" },
    { src: "/clients/client-02.png", alt: "Cemig" },
    { src: "/clients/client-03.png", alt: "Banco do Nordeste" },
    { src: "/clients/client-04.png", alt: "ABDI" },
    { src: "/clients/client-05.png", alt: "Governo de Minas Gerais" },
    {
      src: "/clients/client-06.png",
      alt: "Governo do Estado do Espírito Santo",
    },
    { src: "/clients/client-17.png", alt: "Incesa" },
    { src: "/clients/client-07.png", alt: "Prefeitura de Belo Horizonte" },
    { src: "/clients/client-08.png", alt: "SECTI Alagoas" },
    { src: "/clients/client-09.png", alt: "Hub Verde" },
    { src: "/clients/client-10.png", alt: "União Brasileira para a Qualidade" },
    { src: "/clients/client-11.png", alt: "Seed" },
    { src: "/clients/client-12.png", alt: "Fundação Renova" },
    { src: "/clients/client-18.png", alt: "Prefeitura de Guaxupé" },
    { src: "/clients/client-13.png", alt: "Suape" },
    { src: "/clients/client-14.png", alt: "Porto do Itaqui" },
    { src: "/clients/client-15.png", alt: "bh.tec" },
    { src: "/clients/client-16.png", alt: "Cataguá Construtora" },
    {
      src: "/clients/logo-fundacao-futuro.png",
      alt: "Estação Futuro",
      invert: true,
    },
    { src: "/clients/client-20.png", alt: "CDL" },
    { src: "/clients/client-21.png", alt: "Condumax" },
  ],
  // FAQ da home (group=home) — 6 itens (o 6º é duplicado do 3º, conforme original).
  faqs: [
    {
      question: "Para quem é a Zing?",
      answer:
        "A Zing é voltada para empresas, governos e instituições que desejam estruturar e executar iniciativas de inovação com mais organização, eficiência e resultados.",
    },
    {
      question: "A Zing substitui planilhas e processos manuais?",
      answer:
        "Sim. A Zing digitaliza e estrutura todas as etapas da gestão da inovação, reduzindo retrabalho e aumentando o controle sobre os processos.",
    },
    {
      question: "Quais tipos de iniciativas posso gerenciar na Zing?",
      answer:
        "Você pode gerenciar programas de inovação aberta, CPSI, hubs de inovação, desafios internos, eventos e outras iniciativas em um único ambiente.",
    },
    {
      question: "A plataforma é segura e confiável?",
      answer:
        "Sim. A Zing foi desenvolvida para garantir organização, controle de acesso e rastreabilidade das informações ao longo de todo o processo.",
    },
    {
      question: "Preciso de conhecimento técnico para usar a plataforma?",
      answer:
        "Não. A Zing possui uma interface intuitiva e é acompanhada por suporte especializado para apoiar sua implementação e uso.",
    },
    {
      question: "Quais tipos de iniciativas posso gerenciar na Zing?",
      answer:
        "Você pode gerenciar programas de inovação aberta, CPSI, hubs de inovação, desafios internos, eventos e outras iniciativas em um único ambiente.",
    },
  ],
  // Depoimentos (collection testimonials) — 9 itens.
  testimonials: [
    {
      name: "Espaço Teia",
      role: "Gestão de CPSI",
      company: "CAIXA ECONÔMICA FEDERAL",
      quote:
        "Na Caixa, a Zing acompanha o CPSI desde as primeiras edições e já apoia o 5º ciclo consecutivo, com fluxo customizado, aderência às exigências institucionais e registro completo das etapas.",
      image: "/testimonials/063cc9f2-478e-42e8-8987-76826cf241a2.jpg",
      rating: 5,
    },
    {
      name: "UBQ",
      role: "Desafios de Intraempreendedorismo",
      company: "UNIÃO BRASILEIRA DA QUALIDADE",
      quote:
        "No Grande Encontro da UBQ, a Zing gerencia por 3 anos o fluxo completo de submissão, avaliação e premiação de práticas de gestão, reunindo organizações de todo o Brasil em torno do compartilhamento de referências em qualidade, melhoria contínua e métodos ágeis.",
      image: "/testimonials/avatar-luisa-dias.png",
      rating: 5,
    },
    {
      name: "PBH",
      role: "Gestão de CPSI",
      company: "PREFEITURA DE BELO HORIZONTE",
      quote:
        "No PBH Inova, a Zing estruturou o primeiro CPSI de Belo Horizonte do edital à prova de conceito, conectando startups a desafios reais da administração pública e posicionando a cidade como referência nacional em inovação aberta.",
      image: "/testimonials/3d2e117c-abce-4212-a358-c44dd2c50e1c.jpg",
      rating: 5,
    },
    {
      name: "Espaço Teia",
      role: "Gestão de Hubs",
      company: "CAIXA ECONÔMICA FEDERAL",
      quote:
        "A Zing atua como plataforma white label, funcionando como hub digital que centraliza programas e conecta startups, setor público e parceiros em um ecossistema híbrido orientado a resultados.",
      image: "/testimonials/063cc9f2-478e-42e8-8987-76826cf241a2.jpg",
      rating: 5,
    },
    {
      name: "Porto de Suape",
      role: "Gestão de CPSI",
      company: "PERNAMBUCO",
      quote:
        "No Porto de Suape, a Zing apoiou o IEBT na estruturação inédita do modelo de CPSI da instituição — do diagnóstico regulatório à documentação técnica —, preparando a organização para contratar soluções inovadoras com segurança jurídica e aderência ao Marco Legal das Startups.",
      image: "/testimonials/6470aa14-c153-4f2f-9aa1-886324accff7.jpg",
      rating: 5,
    },
    {
      name: "Vumbora Startups",
      role: "Programa de Inovação Aberta",
      company: "BNB",
      quote:
        "No Vumbora Startups, a Zing centralizou todo o processo seletivo das 60 startups participantes — da inscrição à banca final —, conectando negócios inovadores às trilhas do programa idealizado pelo Banco do Nordeste.",
      image: "/testimonials/603cb4f9-1380-4691-bb2e-0f79df3af933.jpg",
      rating: 5,
    },
    {
      name: "Programa Conexões",
      role: "Programa de Inovação Aberta",
      company: "BH TEC",
      quote:
        "No Conexões, a Zing operacionalizou a segunda edição do primeiro programa de pós-aceleração de Minas Gerais, viabilizando a interação entre startups, mentores e parceiros estratégicos e dando escala à iniciativa do Sebrae Minas e BH-TEC.",
      image: "/testimonials/9a5f7e80-33b2-4d9f-839d-99f12da0986d.jpg",
      rating: 5,
    },
    {
      name: "Porto do Itaqui",
      role: "Gestão de CPSI",
      company: "MARANHÃO",
      quote:
        "No Porto do Itaqui, a Zing atuou na seleção de soluções inovadoras para o primeiro CPSI do Maranhão, conectando startups e empresas a desafios reais da operação portuária e marcando um avanço pioneiro no uso do Marco Legal das Startups no estado.",
      image: "/testimonials/3f38b367-b2e3-48b1-bbac-b4e47d8ad25e.jpg",
      rating: 5,
    },
    {
      name: "Programa Sementes",
      role: "Programa de Inovação Aberta",
      company: "GOVERNO DO ESPÍRITO SANTO",
      quote:
        "No Programa Sementes, realizado pelo Governo do Espírito Santo com apoio da Zing, foram investidos R$ 7,6 milhões em 50 startups captadas, com atuação em 9 municípios.",
      image: "/testimonials/b48ce8b6-a005-4c29-abf6-40028d425880.jpg",
      rating: 5,
    },
  ],
  community: {
    title: "Faça parte da nossa comunidade",
    description: "A Zing é uma plataforma que impulsiona a inovação",
    cta: { label: "Falar com especialista", href: "/contato" },
  },
};
