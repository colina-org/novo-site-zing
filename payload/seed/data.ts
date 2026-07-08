export const seedData = {
  sobre: {
    historia: {
      title:
        "Uma trajetória construída\ncom **método, evolução e escala**",
      description:
        "Da inovação inicial à consolidação em grandes programas, evoluímos com consistência, ampliando impacto e entregando resultados de alto valor para a sociedade.",
      bottomBadge: "Atuação com grandes corporações, como Cemig, CAIXA, BNB",
      video: "/sobre/video-exemple.mp4",
      timeline: [
        {
          year: "2022",
          text: "Um time com mais de 30 especialistas construiu a plataforma para gestão da inovação.",
        },
        {
          year: "2024",
          text: "Lançamento e operacionalização dos maiores contratos de CPSI e dos principais Hubs do Brasil.",
        },
        {
          year: "2026",
          text: "Torna-se a plataforma completa para atender o setor público.",
        },
      ],
      sectors: [
        "Setor público",
        "Setor financeiro",
        "Inovação e tecnologia",
        "Mineração e siderurgia",
        "Energia/Óleo e Gás",
        "Logística e infraestrutura",
      ],
    },
    oQueFazemos: {
      title: "O que fazemos na **ZING?**",
      description:
        "**Conectamos estratégia, inovação e execução para gerar resultados concretos.**\nAtuamos no desenvolvimento e na gestão de iniciativas que simplificam a inovação em organizações públicas e privadas.",
      items: [
        {
          image: "/sobre/oquefazemos-cpsi.jpg",
          title: "Chamadas CPSI",
          description:
            "Referência na gestão de editais de Contrato Público para Soluções Inovadoras.",
        },
        {
          image: "/sobre/oquefazemos-programas.jpg",
          title: "Programas de Inovação Aberta",
          description:
            "Conectamos startups a grandes organizações do setor público e privado para responder a desafios reais.",
        },
        {
          image: "/sobre/oquefazemos-desafios.jpg",
          title: "Desafios de Intraempreendedorismo",
          description:
            "Mobilizamos colaboradores para transformar ideias em soluções estruturadas.",
        },
        {
          image: "/sobre/oquefazemos-hubs.jpg",
          title: "Gestão de Hubs",
          description:
            "Integramos operação, articulação do ecossistema e governança em um único ambiente.",
        },
      ],
    },
    casesDestaque: {
      label: "Cases em destaque",
      title:
        "Experiências que mostram\nnossa **capacidade de entrega**",
      description:
        "Estruturamos operações de inovação aberta, plataformas white label e programas escaláveis para organizações de grande porte.",
    },
    proximoPasso: {
      title:
        "Vamos construir a próxima fase da sua **estratégia de inovação.**",
      cta: { label: "Falar com especialista", href: "/contato" },
      stats: [
        { value: 3000, label: "startups no ecossistema" },
        { value: 300, label: "avaliadores cadastrados" },
        { value: 80, label: "organizações envolvidas" },
        { value: 30, label: "programas executados" },
      ],
    },
    iebt: {
      label: "Conheça o fundador: IEBT Innovation",
      title:
        "Consultoria de tecnologia\ne inovação **impulsionada por IA**",
      description:
        "Há mais de 16 anos, a IEBT Innovation atua na interseção entre estratégia, inovação, dados, cultura e digital, apoiando organizações em transformações consistentes e duradouras.",
      backgroundImage: "/sobre/iebt-team.jpg",
      cta: { label: "Conheça o IEBT", href: "https://www.iebtinnovation.com/" },
      stats: [
        { display: "16 anos", label: "no mercado" },
        { prefix: "+", value: 200, suffix: "", label: "profissionais de tech e inovação" },
        { prefix: "", value: 7000, suffix: "", label: "organizações avaliadas para clientes" },
        { prefix: "", value: 1000, suffix: "", label: "negócios acelerados" },
        { display: "R$ 500mi", label: "captados para parceiros e clientes" },
        { prefix: "", value: 300, suffix: "", label: "clientes diretamente impactados" },
      ],
    },
  },

  cpsi: {
    hero: {
      title:
        "Plataforma líder na **gestão de CPSI** impulsionada por IA",
      description:
        "Da preparação institucional à seleção das propostas e ao acompanhamento dos projetos, a Zing centraliza a jornada do CPSI em uma única plataforma.",
      cta: { label: "Quero fazer CPSI", href: "#cpsi-steps" },
      imageDesktop: "/image-hero-cpsi2.png",
      imageTablet: "/cpsi/image-hero-nova.png",
      imageMobile: "/cpsi/image-hero-mobile.png",
    },
    about: {
      title: "O que é **CPSI**?",
      description:
        "O CPSI (Contrato Público para Solução Inovadora) é um instrumento jurídico que permite ao setor público **contratar, testar e validar** soluções inovadoras para desafios reais da gestão, com **segurança jurídica, transparência e foco em resultados**.",
      backgroundImage: "/cpsi/image-about-zing.png",
    },
    calls: {
      title: "Como é feito na **ZING**",
      description:
        "Preparamos a instituição para executar o CPSI desde a primeira vez e impulsionamos instituições que já fazem o CPSI.",
      steps: [
        {
          image: "/cpsi/1608b6ee36751d3daf6811b56a58a2cebe960969.png",
          title: "Preparação da instituição",
          description:
            "Diagnóstico de maturidade institucional, geração automática de documentos jurídicos e governança estruturada desde o início.",
        },
        {
          image: "/cpsi/e30bfe5f80fb1a56bec244516a17341c21edb941.png",
          title: "Chamada pública",
          description:
            "Edital com segurança jurídica embutida, match com startups via IA e gestão completa das inscrições.",
        },
        {
          image: "/cpsi/57f22c8281d0390378764f974585fdb45399bd1b.png",
          title: "Seleção de proposta",
          description:
            "Comparação de propostas com apoio de IA, redução de subjetividade e registro auditável de cada decisão.",
        },
        {
          image: "/cpsi/a372e4097f1c5ca52da82ca80a59d7d7c488c069.png",
          title: "Acompanhamento dos projetos",
          description:
            "Gestão de sprints, checkpoints Go/No-Go e rastreabilidade total da execução.",
        },
        {
          image: "/cpsi/019b18447b324230dbc4c126192f20644a99184f.png",
          title: "Contrato de fornecimento",
          description:
            "Contrato gerado com histórico completo do processo — do edital ao fornecimento, tudo documentado e sob controle.",
        },
      ],
    },
    quiz: {
      title: "**CPSI** é para mim?",
      description:
        "Responda as perguntas para receber apoio na decisão sobre a modalidade ou instrumento mais adequado para contratação.",
      steps: [
        {
          kind: "quiz",
          question:
            'Você já ouviu falar em "Contrato Público para Solução Inovadora (CPSI)"?',
          options: [
            "Nunca ouvi falar",
            "Já ouvi falar, mas não conheço em detalhes",
            "Tenho conhecimento básico sobre o tema",
            "Já participei ou conduzi algum processo CPSI",
          ],
        },
        {
          kind: "quiz",
          question:
            "Qual dessas opções representa melhor o interesse atual do seu órgão?",
          options: [
            "Entender o que é e como aplicar o CPSI",
            "Receber capacitação sobre o tema",
            "Estruturar um projeto piloto de contratação de inovação",
            "Escalar e institucionalizar o modelo de CPSI",
          ],
        },
        {
          kind: "contact",
          question: "Em breve alguém da nossa equipe entrará em contato",
          helper:
            "Os principais estudos sobre compras públicas para inovação indicam a necessidade de se dedicar tempo e atenção para descrever o desafio a ser enfrentado pela Administração Pública.",
        },
      ],
    },
    whenCpsi: {
      title: "Quando o **CPSI** faz sentido?",
      bullets: [
        "Quando o problema público não é bem resolvido por soluções prontas.",
        "Quando é preciso testar ou validar alternativas inovadoras.",
        "Quando a instituição busca mais método, governança e evidências no processo.",
      ],
      image: "/cpsi/new-image-faz-sentido.png",
      ebookCta: {
        label: "Baixe nosso e-book completo",
        href: "https://guiadefinitivoparainovarnogoverno.framer.ai/",
      },
    },
    whyUse: {
      title: "Por que usar a **ZING**?",
      cards: [
        {
          image: "/cpsi/whyuse-1.jpg",
          title: "Rastreabilidade",
          description:
            "Histórico completo, organizado e auditável de todo o processo.",
        },
        {
          image: "/cpsi/whyuse-2.jpg",
          title: "Transparência",
          description: "Visibilidade e clareza em todas as etapas da contratação.",
        },
        {
          image: "/cpsi/whyuse-3.jpg",
          title: "Isonomia",
          description: "Tratamento equânime e competição justa entre os proponentes.",
        },
        {
          image: "/cpsi/whyuse-4.jpg",
          title: "Segurança jurídica",
          description: "Processos estruturados com respaldo legal em cada etapa.",
        },
        {
          image: "/cpsi/whyuse-5.jpg",
          title: "Eficiência processual",
          description:
            "Fluxos otimizados que reduzem burocracia e aceleram resultados.",
        },
        {
          image: "/cpsi/whyuse-6.jpg",
          title: "Gestão integrada",
          description:
            "Visão unificada de todos os projetos e indicadores em um só lugar.",
        },
      ],
    },
    casesHeader: {
      title: "Cases **de sucesso**",
      description:
        "Onde a inovação pública já aconteceu, com segurança e impacto.",
    },
    clientsTitle: "Clientes que fazem\n**CPSI na ZING**",
    clients: [
      { src: "/clients/client-01.png", alt: "Caixa" },
      { src: "/clients/client-02.png", alt: "Cemig" },
      { src: "/clients/client-07.png", alt: "Prefeitura de belo horizonte" },
      { src: "/clients/client-13.png", alt: "Suape" },
      { src: "/clients/client-14.png", alt: "Porto do Itaqui" },
    ],
    faqTitle: "Tire suas **dúvidas**",
    faqs: [
      {
        question: "O que é o CPSI e quando devo utilizar?",
        answer:
          "O CPSI é um instrumento jurídico que permite ao setor público contratar soluções inovadoras para desafios reais. Ele é ideal quando há incerteza tecnológica e necessidade de testar soluções antes da contratação em larga escala.",
      },
      {
        question:
          "Minha instituição pode executar um CPSI mesmo sem experiência?",
        answer:
          "Sim. A Zing prepara sua instituição desde a primeira execução, estruturando o processo legal, operacional e metodológico.",
      },
      {
        question: "Como a Zing apoia na execução do CPSI?",
        answer:
          "Apoiamos desde a estruturação do edital até a seleção, contratação e acompanhamento das startups, em um ambiente único e rastreável.",
      },
      {
        question: "A plataforma garante transparência e segurança jurídica?",
        answer:
          "Sim. Todo o processo é estruturado com critérios claros, registros e rastreabilidade das decisões, garantindo conformidade e transparência.",
      },
      {
        question: "É possível acompanhar os resultados dos projetos?",
        answer:
          "Sim. A plataforma oferece dashboards, relatórios e acompanhamento contínuo dos projetos contratados.",
      },
      {
        question:
          "Como a Zing prepara o CPSI para o uso de Inteligência Artificial?",
        answer:
          "A Zing centraliza todas as etapas do CPSI — inscrições, avaliações, contratos e acompanhamento — em um único ambiente estruturado. Isso cria uma base de dados organizada e rastreável, essencial para evoluções com Inteligência Artificial e análises mais avançadas no futuro.",
      },
    ],
  },

  programas: {
    searchTitle:
      "Suporte completo para resolver \n**desafios públicos** com inovação.",
    casesHeader: {
      title: "Cases **de sucesso**",
      description:
        "Onde a inovação pública já aconteceu, com segurança e impacto.",
    },
  },

  programs: [
    {
      slug: "cpsi-porto-itaqui-2-fase",
      category: "ESPAÇO TEIA - CAIXA",
      title: "CPSI CAIXA | Startups que Transformam o Jurídico",
      description:
        "A CAIXA lançou um novo CPSI voltado à modernização da atuação jurídica, especialmente ...",
      badge: "Inscrições: 23 fev 2026 à 03 mar 2026",
      image: "/programs/6b164d99a5de176fb761c76bfe99fc58c586d69d.png",
      href: "/programas/cpsi-porto-itaqui-2-fase",
      inscricoes: "23 fev 2026 à 03 mar 2026",
      inscricoesLink:
        "https://licitacoes.caixa.gov.br/sicve-web/public/visualizar.jsf?lote=201421",
      avaliacoes: [
        { label: "Etapa inicial", period: "17 nov 2025 à 17 dez 2025" },
        { label: "Etapa intermediária", period: "17 nov 2025 à 17 dez 2025" },
        { label: "Etapa final", period: "17 nov 2025 à 17 dez 2025" },
      ],
      content: [
        "O desafio é direcionado a startups e empresas inovadoras que utilizem tecnologias emergentes como: inteligência artificial (IA), machine learning, Big Data e automação avançada.",
        "O objetivo do CPSI é desenvolver e testar soluções que ajudem a CAIXA a: mitigar riscos jurídicos e operacionais, combater fraudes e litigância predatória, qualificar e acelerar a defesa judicial, automatizar e personalizar manifestações jurídicas e aumentar eficiência em alto volume de processos. Tudo isso sem substituir o advogado, mas apoiando a atuação humana com tecnologia.",
        "A solução proposta deve ser capaz de:\n- Analisar documentos em múltiplos formatos (texto, PDF, imagem, áudio, vídeo);\n- Classificar processos judiciais automaticamente;\n- Identificar inconsistências e riscos;\n- Gerar minutas e peças jurídicas fundamentadas, prontas para revisão;\n- Apoiar decisões estratégicas com base em dados históricos e preditivos.",
        "Perfil ideal das startups\n\nO edital é especialmente aderente a startups que atuam com:\n- Legaltech;\n- GovTech;\n- IA aplicada ao Direito;\n- Análise de dados jurídicos;\n- Automação documental;\n- NLP (Processamento de Linguagem Natural).",
        "Soluções já existentes ou em estágio avançado têm vantagem competitiva.",
        "O CPSI deixa claro que: a proposta precisa demonstrar aplicabilidade real, escalabilidade e segurança, especialmente considerando o volume, a criticidade e a responsabilidade institucional da CAIXA.",
      ],
    },
    {
      slug: "cpsi-porto-suape-logistica",
      category: "Inova Cemig.Lab",
      title: "Inova Cemig.Lab - Ciclo 4",
      description:
        "Buscamos startups com soluções inovadoras para participar de 08 desafios estratégicos da Cemig.",
      badge: "Inscrições: 18 dez 2025 à 01 jan 2026",
      image: "/programs/80c1f706d174bdad924ab385022ccb6f20d6654f.png",
      href: "/programas/cpsi-porto-suape-logistica",
      inscricoes: "18 dez 2025 à 01 jan 2026",
      avaliacoes: [
        { label: "Etapa inicial", period: "17 nov 2025 à 17 dez 2025" },
        { label: "Etapa intermediária", period: "17 nov 2025 à 17 dez 2025" },
        { label: "Etapa final", period: "17 nov 2025 à 17 dez 2025" },
      ],
      content: [
        'Inscreva sua startup no Inova Cemig.Lab – Ciclo 4!\n\nBuscamos startups com soluções inovadoras para participar de 08 desafios estratégicos da Cemig.\n\nComo participar?\n- Acesse o Anexo 2 do edital para conhecer os 08 desafios disponíveis e identificar onde sua solução pode gerar impacto.\n- Na página atual, clique no botão "Inscreva-se" ao lado do título.\n- Preencha os dados solicitados no formulário de cadastro da Zing e clique em "Cadastrar". Em seguida, faça seu login.\n- Se sua startup já for cadastrada, basta rolar até o final da página de cadastro e clicar em "Login" diretamente.\n- Na área logada da plataforma, localize o projeto "Inova Cemig.Lab" e clique em "Inscreva-se".\n- Preencha o formulário de inscrições disponível.\n- Se preferir preencher apenas uma parcela do formulário e continuar depois, clique em "salvar" e pode sair da página. O rascunho ficará disponível em "Minhas inscrições".\n- Quando você finalizar o preenchimento por completo, clique em "Publicar". A partir desse momento, não será mais possível editar os campos da inscrição.\n- Importante: lembre-se de clicar em "Publicar" sua inscrição antes do prazo final (25/01). Inscrições salvas como rascunho não serão consideradas válidas após o encerramento do período de submissão.\n- Caso deseje se inscrever em mais de um desafio, é necessário preencher um formulário separado para cada desafio.',
        "Por que participar?\nStartups selecionadas terão acesso a:\n- Investimento de até R$1,6 milhão por projeto\n- Contrato Público para Solução Inovadora (CPSI), com recursos regulados da ANEEL para desenvolvimento em 12 meses\n- Possibilidade de se tornar fornecedora da Cemig por até 4 anos, sem novo processo licitatório após o programa\n- Entrada qualificada no mercado de energia, cocriando com uma das maiores empresas do setor: visibilidade e potencial de escala",
      ],
    },
    {
      slug: "2-desafio-inovaserra",
      category: "ESPAÇO TEIA - CAIXA",
      title: "Teia Startups Ciclo 2",
      description:
        "O Programa TEIA Startups conecta startups ao setor público, promovendo oportunidades reais...",
      badge: "Inscrições: 18 mar 2026 à 17 ago 2026",
      image: "/programs/10798df5a590d60f10440e507d9fc39a0f77b8e7.png",
      href: "/programas/2-desafio-inovaserra",
      inscricoes: "18 mar 2026 à 17 ago 2026",
      avaliacoes: [
        { label: "Etapa inicial", period: "17 nov 2025 à 17 dez 2025" },
        { label: "Etapa intermediária", period: "17 nov 2025 à 17 dez 2025" },
        { label: "Etapa final", period: "17 nov 2025 à 17 dez 2025" },
      ],
    },
  ],

  inovacao: {
    hero: {
      title:
        "Programas estruturados de **inovação aberta**",
      description:
        "A Zing seleciona e avalia as startups mais aderentes para responder à dor da instituição.",
      cta: { label: "Falar com especialista", href: "/contato" },
      imageDesktop: "/inovacao-aberta/59cefc48e3cf11ad91991c4ab1347fabcfe6842e.png",
      imageTablet: "/inovacao-aberta/image-hero-inovacao-tablet.png",
      imageMobile: "/inovacao-aberta/image-hero-inovacao-mobile.png",
    },
    about: {
      title: "O que é um \n**Programa de inovação**?",
      description:
        "Programas de inovação aberta **conectam organizações a startups, pesquisadores e outros agentes do ecossistema ** para resolver desafios reais de negócio.",
      backgroundImage: "/inovacao-aberta/oque-e-programa-inovacao-nova.png",
    },
    whyZing: {
      title: "Por que fazer com a **ZING**?",
      description:
        "Em um **único ambiente**, a plataforma centraliza inscrições, propostas e avaliações, garantindo critérios claros, **rastreabilidade** das decisões e **processos mais ágeis e confiáveis**.",
      cards: [
        {
          image: "/inovacao-aberta/d2401b3c083b7b06003c93c1b1fea9e50621e949.png",
          title: "Criação de programas",
          description:
            "A organização configura o programa de inovação na plataforma, definindo a iniciativa, desafios, documentos e formulário de inscrição.",
        },
        {
          image: "/inovacao-aberta/e3c82ecdcd76de9f4543665ac5be3705324924e4.png",
          title: "Submissão de soluções",
          description:
            "Os solucionadores se inscrevem diretamente na ZING, enquanto a organização estabelece critérios, pesos e a banca avaliadora.",
        },
        {
          image: "/inovacao-aberta/5af11ceb6a11e510e8c792bbd819e363c7ee2ba5.png",
          title: "Avaliações",
          description:
            "A plataforma centraliza a avaliação, consolida notas e classifica as propostas para a tomada de decisão.",
        },
      ],
    },
    clientsTitle: "Clientes que inovam com a** ZING**",
    clients: [
      { src: "/clients/client-02.png", alt: "Cemig" },
      { src: "/clients/client-08.png", alt: "SECTI Alagoas" },
      { src: "/clients/client-15.png", alt: "bh.tec" },
      { src: "/clients/client-03.png", alt: "Banco do Nordeste" },
      {
        src: "/clients/client-06.png",
        alt: "Governo do Estado do Espírito Santo",
      },
    ],
    faqTitle: "Tire suas **dúvidas**",
    faqs: [
      {
        question: "O que é um programa de inovação aberta?",
        answer:
          "É uma iniciativa que conecta organizações a startups, pesquisadores e parceiros para resolver desafios reais de negócio.",
      },
      {
        question: "Como a Zing apoia esses programas?",
        answer:
          "Centraliza inscrições, propostas e avaliações em um único ambiente, tornando o processo mais ágil e confiável.",
      },
      {
        question: "A plataforma ajuda na seleção de startups?",
        answer:
          "Sim. Permite divulgar desafios, receber propostas e avaliar startups com critérios estruturados.",
      },
      {
        question: "É possível lançar múltiplos desafios ao mesmo tempo?",
        answer:
          "Sim. A plataforma permite gerenciar vários desafios e programas simultaneamente.",
      },
      {
        question: "Como garantir decisões justas e transparentes?",
        answer:
          "O sistema registra todas as etapas e avaliações, garantindo rastreabilidade e critérios claros de seleção.",
      },
      {
        question:
          "A Zing ajuda a conectar organizações a startups com soluções em IA?",
        answer:
          "Sim. A plataforma foi desenvolvida para operar programas de inovação aberta com gestão de inscrições, recebimento de propostas e avaliação das soluções. Isso permite que organizações lancem desafios relacionados a temas estratégicos, inclusive IA, com critérios claros, agilidade e rastreabilidade em todo o processo. ",
      },
    ],
  },

  hubs: {
    hero: {
      title: "Gestão completa de \n**Hubs de inovação**",
      description:
        "Da operação do espaço físico à articulação do ecossistema, a Zing oferece gestão integrada \n**e potencializada por Inteligência Artificial** para hubs orientados a resultados.",
      cta: { label: "Fale com especialista", href: "/contato" },
      imageDesktop: "/hubs/image-hero-hubs.jpg",
      imageTablet: "/hubs/hero-hubs-tablet.png",
      imageMobile: "/hubs/hero-hubs-mobile.png",
    },
    about: {
      title: "O que é **Hub de inovação**?",
      description:
        "Um **hub de inovação** é um ambiente — físico, digital ou híbrido — criado para **conectar pessoas, organizações e conhecimentos** em torno do desenvolvimento de soluções inovadoras.",
      backgroundImage: "/hubs/abouthubsnew.png",
    },
    whyZing: {
      title: "Por que fazer com a **ZING**?",
      description:
        "A Zing oferece uma **gestão completa, estruturada e orientada a resultados para hubs de inovação**. A plataforma integra a operação do espaço físico, a articulação do ecossistema e a governança dos programas em um **único ambiente,** garantindo **organização, transparência e eficiência.**",
      cards: [
        {
          image: "/hubs/whyzing-1.jpg",
          title: "Gestão de espaço físico",
          description:
            "Operação completa do hub físico, com organização dos espaços, serviços e experiências.",
        },
        {
          image: "/hubs/whyzing-2.jpg",
          title: "Gestão de programas e desafios de inovação",
          description:
            "Planejamento e execução de programas e desafios que conectam negócios, soluções e oportunidades.",
        },
        {
          image: "/hubs/whyzing-3.jpg",
          title: "Gestão de trilhas de inovação",
          description:
            "Estruturação de jornadas de conteúdo e aprendizagem para impulsionar a inovação no ecossistema.",
        },
      ],
    },
    clientsTitle: "Hubs que a **ZING **atende",
    clients: [
      { src: "/hubs/hub-estacao-futuro.png", alt: "Estação Futuro" },
      { src: "/hubs/hub-teia.png", alt: "Espaço Teia Caixa" },
      {
        src: "/hubs/ef6f8885-2310-402d-827b-7b586e6d980c.jpg",
        alt: "Prefeitura de Guaxupé",
      },
      {
        src: "/hubs/7ace8e24-4dea-4014-8bca-418093544975.jpg",
        alt: "CDL Belo Horizonte",
      },
    ],
    caseSandbox: {
      title: "Case de sucesso — **Espaço TEIA CAIXA**",
      description:
        "No Espaço TEIA CAIXA, a Zing atua como hub digital complementar ao espaço físico de inovação, centralizando programas, eventos e trilhas de capacitação em uma única plataforma e conectando startups, instituições públicas e parceiros em um ecossistema híbrido orientado a resultados.",
      image: "/hubs/case-teia-hubs.png",
      cta: { label: "Falar com especialista", href: "/contato" },
    },
    faqTitle: "Tire suas **dúvidas**",
    faqs: [
      {
        question: "O que é um hub de inovação?",
        answer:
          "É um ambiente que conecta pessoas, organizações e conhecimento para gerar inovação, podendo ser físico, digital ou híbrido.",
      },
      {
        question: "A Zing gerencia apenas o espaço físico do hub?",
        answer:
          "Não. A gestão é completa: inclui operação do espaço, programas, eventos e articulação do ecossistema.",
      },
      {
        question: "Como a plataforma ajuda na organização do hub?",
        answer:
          "Centraliza reservas, eventos, conexões entre atores e indicadores em um único sistema, garantindo eficiência e transparência.",
      },
      {
        question: "É possível integrar diferentes atores do ecossistema?",
        answer:
          "Sim. A plataforma conecta startups, empresas, e especialistas em um mesmo ambiente colaborativo.",
      },
      {
        question: "Consigo acompanhar o uso e resultados do hub?",
        answer:
          "Sim. Há dashboards com métricas de uso, participação e impacto das iniciativas.",
      },
    ],
  },

  desafios: {
    hero: {
      title:
        "Desafios de intraempreendedorismo: \n**inovação que nasce de dentro**",
      description:
        "Crie desafios que fomentam a inovação em empresas públicas e privadas e transformam a experiência dos colaboradores em ideias estruturadas.",
      cta: { label: "Falar com especialista", href: "/contato" },
      imageDesktop: "/desafios/c9d003e5169a292534ec763e91603f190031fac3.png",
      imageTablet: "/desafios/image-hero-tablet.png",
      imageMobile: "/desafios/image-hero-mobile.png",
    },
    about: {
      title:
        "O que é um **desafio de intraempreendedorismo**?",
      description:
        "Os **desafios de intraempreendedorismo** permitem que a organização convide seus próprios colaboradores a propor **soluções para problemas reais** do dia a dia.",
      backgroundImage: "/desafios/image-about-desafio-nova.png",
    },
    whyZing: {
      title: "Por que fazer com a **ZING**?",
      description:
        "Com a Zing, empresas estruturam e gerenciam desafios de intraempreendedorismo, mobilizando colaboradores a propor soluções inovadoras para desafios estratégicos do negócio.",
      cards: [
        {
          image: "/desafios/b1c02cf5af8e441803fcc1ebe2bec9e03e7206db.png",
          title: "Cadastro dos colaboradores",
          description:
            "Centralize o registro de todos os colaboradores em um só lugar.",
        },
        {
          image: "/desafios/61e858700560bce85d843fec94e824553e3f7131.png",
          title: "Submissão estruturada de ideias",
          description:
            "Organize o envio de ideias com clareza, padrão e praticidade.",
        },
        {
          image: "/desafios/191c32917fefe972a943cd2dc63971a53255f9f8.png",
          title: "Avaliações por banca",
          description:
            "Conduza avaliações com critérios definidos e decisões mais consistentes.",
        },
      ],
    },
    clientsTitle: "Clientes que inovam com a **ZING**",
    clients: [
      { src: "/clients/client-01.png", alt: "Caixa" },
      {
        src: "/clients/client-10.png",
        alt: "UBQ - União Brasileira para a Qualidade",
      },
    ],
    caseSandbox: {
      title: "Case de sucesso — **UBQ**",
      description:
        "Na UBQ, a ZING garante organização, segurança e rastreabilidade na avaliação do “O Grande Encontro – Equipes de Alta Performance”, tornando a experiência dos avaliadores mais fluida e os resultados mais profissionais.Conta com a participação de empresas como Vale, Vallourec, Cemig, Anglo American e outras grandes corporações.",
      image: "/desafios/0ee06c8768d0a082aa56bf9ff3632b97da230eb0.png",
      cta: { label: "Falar com especialista", href: "/contato" },
    },
    faqTitle: "Tire suas **dúvidas**",
    faqs: [
      {
        question: "O que são desafios de intraempreendedorismo?",
        answer:
          "São iniciativas que incentivam colaboradores a propor soluções para problemas reais da organização.",
      },
      {
        question: "Quem pode participar desses desafios?",
        answer:
          "Colaboradores da própria organização, independentemente da área ou nível hierárquico.",
      },
      {
        question: "Como a Zing estrutura esses desafios?",
        answer:
          "A plataforma organiza inscrições, ideias, avaliações e evolução das propostas em um único fluxo.",
      },
      {
        question: "Como estimular a participação interna?",
        answer:
          "Com campanhas estruturadas, critérios claros e acompanhamento das ideias, aumentando o engajamento dos colaboradores.",
      },
      {
        question: "É possível acompanhar a evolução das ideias?",
        answer:
          "Sim. A plataforma permite monitorar o progresso, avaliações e resultados das iniciativas internas.",
      },
    ],
  },

  contato: {
    title:
      "Dê o próximo passo na sua **jornada de inovação**",
    description:
      "Nossa equipe entrará em contato para entender seus desafios e mostrar, na prática, como transformar ideias em impacto.",
    cargoOptions: [
      { value: "c-level", label: "C-Level / Diretoria" },
      { value: "gerencia", label: "Gerência" },
      { value: "coordenacao", label: "Coordenação" },
      { value: "analista", label: "Analista" },
      { value: "outro", label: "Outro" },
    ],
    servicoOptions: [
      { value: "cpsi", label: "CPSI" },
      { value: "inovacao-aberta", label: "Inovação Aberta" },
      { value: "intraempreendedorismo", label: "Intraempreendedorismo" },
      { value: "hubs-de-inovacao", label: "Hubs de Inovação" },
      { value: "outro", label: "Outro" },
    ],
    contatoOptions: [
      { value: "whatsapp", label: "WhatsApp" },
      { value: "email", label: "E-mail" },
      { value: "ligacao", label: "Ligação" },
    ],
  },

  header: {
    logo: "/logo-header.svg",
    serviceItems: [
      { label: "Chamadas CPSI", href: "/cpsi" },
      { label: "Programas", href: "/programa-inovacao-aberta" },
      { label: "Desafios de intra...", href: "/desafios-intraempreendedorismo" },
      { label: "Gestão de Hubs", href: "/gestao-de-hubs" },
    ],
    sectorItems: [
      { label: "Setor público" },
      { label: "Setor Privado" },
      { label: "Startups" },
    ],
    contentItems: [
      { label: "Cases" },
      { label: "Podcasts" },
    ],
    navItems: [{ label: "Programas", href: "/programas" }],
    loginCta: { label: "Entrar", href: "https://www.zinginnovation.com/login" },
    demoCta: { label: "Solicite uma demonstração", href: "/contato" },
    assistantCta: {
      label: "Zing Assistente IA",
      href: "https://zingassistente.lovable.app/",
    },
  },

  footer: {
    logoZing: "/logo-header.svg",
    logoIebt: "/iebt-logo.png",
    address:
      "R. Professor José Vieira de Mendonça, 770 Belo Horizonte - MG",
    copyright: "© 2025 ZING. Todos os direitos reservados.",
    socials: [
      { network: "LinkedIn", url: "https://www.linkedin.com/company/iebt/" },
      { network: "Instagram", url: "https://www.instagram.com/iebtinnovation/" },
    ],
  },

  caseStudies: {
    cpsi: [
      {
        title:
          "CAIXA: A jornada da CAIXA na criação de chamadas de startups via contratação pública de solução inovadora (CPSI)",
        badge: "CPSI",
        image: "/cpsi/cases-main.png",
      },
      {
        title: "Cemig: Conectando desafios e soluções",
        badge: "Inovação aberta",
        image: "/cpsi/cases-sm1.png",
      },
      {
        title: "PBH Inova: Um marco nacional em inovação pública",
        badge: "Inovação aberta",
        image: "/cpsi/cases-sm2.png",
      },
    ],
    programas: [
      {
        title:
          "GOV RD: Conheça o programa de capacitação de gestores públicos em Mariana",
        badge: "Inovação",
        image: "/cpsi/cases-main.png",
      },
      {
        title: "Segundo case de sucesso em contratação pública inovadora",
        badge: "Inovação",
        image: "/cpsi/cases-sm1.png",
      },
      {
        title: "Terceiro case de sucesso em contratação pública inovadora",
        badge: "Inovação",
        image: "/cpsi/cases-sm2.png",
      },
    ],
    sobre: [
      {
        title: "Porto de SUAPE",
        description:
          "Estruturação legal e operacional, priorização de desafios, capacitação do time, lançamento de editais e acompanhamento dos projetos contratados.",
        image: "/sobre/cases-suape.jpg",
      },
      {
        title: "CAIXA - TEIA",
        description:
          "Customização de plataforma, lançamento de desafios, gestão de inscrições de startups e suporte à comissão avaliadora.",
        image: "/sobre/cases-caixa-teia.jpg",
      },
      {
        title: "CEMIG Lab",
        description:
          "Gestão completa do programa com escala, governança e apoio à contratação, apoiando a evolução do ecossistema.",
        image: "/sobre/cases-cemig.jpg",
      },
    ],
  },
};
