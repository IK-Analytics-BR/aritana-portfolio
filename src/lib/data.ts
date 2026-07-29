export const kpis = [
  { label: "Anos de Experiência",         value: 15,    suffix: "+", icon: "clock"     },
  { label: "Horas Técnicas Comprovadas",  value: 16800, suffix: "+", icon: "award"     },
  { label: "Produtos Desenvolvidos",      value: 7,     suffix: "+", icon: "layers"    },
  { label: "Órgãos Públicos Atendidos",   value: 15,    suffix: "+", icon: "building2" },
  { label: "Tecnologias Dominadas",       value: 30,    suffix: "+", icon: "cpu"       },
  { label: "Projetos Estratégicos",       value: 20,    suffix: "+", icon: "target"    },
  { label: "Anos em BI & Dados",          value: 10,    suffix: "+", icon: "bar-chart" },
  { label: "Bases de Dados Integradas",   value: 100,   suffix: "+", icon: "database"  },
];

export type Product = {
  slug: string;
  name: string;
  category: string;
  tagline: string;
  description: string;
  features: string[];
  techStack: string[];
  liveUrl: string;
  color: string;
  status: string;
  highlights: { label: string; value: string }[];
  architecture: string[];
  tags: string[];
};

export const products: Product[] = [
  {
    slug: "ik-flow",
    name: "IK Flow",
    category: "ERP Corporativo",
    tagline: "ERP para empresas com operações multinacionais",
    description:
      "ERP corporativo desenvolvido para empresas de médio e grande porte com operações em múltiplos países. Integra produção, logística, financeiro, fiscal, comercial, estoque e Business Intelligence em um único ambiente corporativo, com suporte nativo a múltiplas moedas e regras fiscais por país.",
    features: [
      "Arquitetura preparada para operações multinacionais",
      "Suporte nativo a múltiplas moedas",
      "Parametrização de regras fiscais por país",
      "Módulos integrados: produção, logística, financeiro, estoque",
      "Dashboards estratégicos e indicadores corporativos",
      "Inteligência Artificial embarcada",
      "Workflow inteligente entre módulos",
      "Gestão operacional em tempo real",
    ],
    techStack: ["Python", "Flask", "MySQL", "PostgreSQL", "React", "Chart.js", "APIs REST", "Docker"],
    liveUrl: "https://ikanalytics.com.br/ikflow/",
    color: "blue",
    status: "Produção",
    highlights: [
      { label: "Módulos integrados", value: "8+" },
      { label: "Países suportados", value: "Multi" },
      { label: "Moedas", value: "Multi" },
    ],
    architecture: ["Dados", "ETL", "Data Warehouse", "APIs REST", "Dashboards", "IA"],
    tags: ["ERP", "Multinacional", "BI Integrado", "IA", "Multi-moeda"],
  },
  {
    slug: "ik-commerce",
    name: "IK Commerce",
    category: "Plataforma de Varejo",
    tagline: "Gestão integrada para varejo distribuído",
    description:
      "Plataforma corporativa voltada ao varejo, construída sobre a mesma arquitetura do IK Flow. Oferece gestão integrada do ambiente comercial para empresas com operações distribuídas — controle de lojas, equipes, carteira de clientes, indicadores de desempenho e operação financeira.",
    features: [
      "Gestão comercial e CRM completo",
      "Carteira de clientes e performance comercial",
      "Gestão de unidades e franquias",
      "Operação multinacional com suporte multimoeda",
      "Dashboards executivos integrados",
      "Business Intelligence nativo",
      "Indicadores estratégicos de vendas",
    ],
    techStack: ["Python", "Flask", "MySQL", "React", "Chart.js", "APIs REST"],
    liveUrl: "https://ikanalytics.com.br/ik-commerce/",
    color: "violet",
    status: "Produção",
    highlights: [
      { label: "CRM integrado", value: "Sim" },
      { label: "Multimoeda", value: "Sim" },
      { label: "BI nativo", value: "Sim" },
    ],
    architecture: ["PDV", "CRM", "Estoque", "Financeiro", "BI", "Dashboard"],
    tags: ["Varejo", "CRM", "Multinacional", "BI", "SaaS"],
  },
  {
    slug: "cobratto",
    name: "Cobratto",
    category: "SaaS Imobiliário",
    tagline: "Plataforma SaaS para gestão imobiliária completa",
    description:
      "Plataforma SaaS multi-tenant para gestão imobiliária que automatiza todo o ciclo operacional — do cadastro dos imóveis à cobrança automatizada, emissão de documentos fiscais, gestão financeira e comunicação digital com locadores e locatários.",
    features: [
      "Gestão completa de contratos, imóveis, locadores e locatários",
      "PIX automático com QR Code dinâmico",
      "Assinatura eletrônica via ClickSign",
      "NFS-e integrada e SPED Fiscal",
      "Portal do Inquilino e Portal do Proprietário",
      "WhatsApp integrado para comunicação",
      "Chamados digitais e gestão de manutenções",
      "Inteligência Artificial embarcada (gpt-4o-mini)",
      "Webhook bancário (PagBank / ASAAS)",
    ],
    techStack: ["PHP 8", "MySQL", "Bootstrap 5", "Chart.js", "OpenAI", "PagBank API", "ClickSign API"],
    liveUrl: "https://ikanalytics.com.br/cobratto/",
    color: "emerald",
    status: "Produção",
    highlights: [
      { label: "Multi-tenant", value: "Sim" },
      { label: "PIX automático", value: "Sim" },
      { label: "IA embarcada", value: "GPT-4o" },
    ],
    architecture: ["Imóvel", "Contrato", "Cobrança PIX", "NFS-e", "Portal", "IA"],
    tags: ["SaaS", "Imobiliário", "PIX", "NFS-e", "IA", "PHP"],
  },
  {
    slug: "datavoto",
    name: "DataVoto",
    category: "Inteligência Eleitoral",
    tagline: "Inteligência eleitoral com dados oficiais integrados",
    description:
      "Plataforma de Inteligência Eleitoral baseada exclusivamente em dados oficiais. Integra automaticamente TSE, IBGE, DATASUS, SNIS, INEP, IPEADATA, IPS Brasil e outras bases nacionais para análises estratégicas, georreferenciamento e apoio à tomada de decisão em campanhas e gestão pública.",
    features: [
      "Integração automática com bases do TSE, IBGE, DATASUS",
      "Cruzamentos estatísticos e territoriais",
      "Georreferenciamento automático de dados eleitorais",
      "Análise de tendências por município e estado",
      "Diagnósticos estratégicos para campanhas",
      "Mapas temáticos eleitorais interativos",
      "Integração com SNIS, INEP, IPEADATA, IPS Brasil",
    ],
    techStack: ["Python", "PostgreSQL", "PostGIS", "QGIS", "Tableau", "APIs Governamentais", "GeoJSON"],
    liveUrl: "https://ikanalytics.com.br/datavoto/",
    color: "amber",
    status: "Produção",
    highlights: [
      { label: "Bases integradas", value: "8+" },
      { label: "Municípios", value: "5.570" },
      { label: "Dados geoespaciais", value: "Sim" },
    ],
    architecture: ["TSE/IBGE", "ETL", "PostgreSQL/PostGIS", "Análise Espacial", "Dashboard", "Mapas"],
    tags: ["Eleitoral", "Geoprocessamento", "BI", "Analytics", "Dados Abertos"],
  },
  {
    slug: "map-gest360",
    name: "MAP Gest360",
    category: "Inteligência Territorial Municipal",
    tagline: "Plataforma de inteligência territorial para governo municipal",
    description:
      "Plataforma de Inteligência Territorial para implantação da cultura de dados na administração pública municipal. Integra Saúde, Educação, Arrecadação, Infraestrutura, Assistência Social, Dados Abertos e imagens de satélite em uma única visão gerencial.",
    features: [
      "Integração entre sistemas municipais (Saúde, Educação, Arrecadação)",
      "Mapas temáticos e análise espacial com PostGIS",
      "Dados Abertos e imagens de satélite integradas",
      "Governança da informação e qualidade de dados",
      "Dashboards executivos para gestores municipais",
      "Indicadores estratégicos por secretaria",
      "Arquivos SHP e GeoJSON integrados",
    ],
    techStack: ["Python", "PostgreSQL", "PostGIS", "QGIS", "GeoServer", "Qlik Sense", "Imagens de Satélite"],
    liveUrl: "https://ikanalytics.com.br/map-gest360/",
    color: "teal",
    status: "Produção",
    highlights: [
      { label: "Secretarias integradas", value: "5+" },
      { label: "Geoprocessamento", value: "PostGIS" },
      { label: "Dados Abertos", value: "Sim" },
    ],
    architecture: ["Sistemas Municipais", "ETL", "PostGIS", "QGIS", "Dashboards", "Mapas"],
    tags: ["Municipal", "QGIS", "PostGIS", "Dados Abertos", "Geoprocessamento"],
  },
  {
    slug: "biagri",
    name: "BIAgri",
    category: "Inteligência para Agronegócio",
    tagline: "Business Intelligence para o agronegócio brasileiro",
    description:
      "Plataforma SaaS de Inteligência para o Agronegócio que integra sistemas privados, dados coletados em campo e bases públicas governamentais. Gera indicadores estratégicos, dashboards analíticos e automações para produtores, cooperativas e empresas do setor agroindustrial.",
    features: [
      "Integração com APIs corporativas e WhatsApp",
      "Cadastro Ambiental Rural (CAR) integrado",
      "Dados do INCRA e cobertura fundiária",
      "Dados climáticos e índices agrometeorológicos",
      "Imagens de satélite e cobertura vegetal (NDVI)",
      "Indicadores para produtores, cooperativas e agroindústrias",
      "Dashboards analíticos e relatórios automatizados",
    ],
    techStack: ["Python", "PostgreSQL", "PostGIS", "APIs Gov", "Satellite APIs", "Qlik Sense", "WhatsApp API"],
    liveUrl: "https://ikanalytics.com.br/biagri/",
    color: "green",
    status: "Produção",
    highlights: [
      { label: "Satélite integrado", value: "Sim" },
      { label: "CAR/INCRA", value: "Sim" },
      { label: "WhatsApp integrado", value: "Sim" },
    ],
    architecture: ["CAR/INCRA", "Satélite", "WhatsApp", "ETL", "PostGIS", "Dashboards"],
    tags: ["Agronegócio", "SaaS", "GeoData", "Analytics", "Satélite"],
  },
];

export const experiences = [
  {
    company:    "IK Analytics Ltda.",
    role:       "Fundador • CEO • Arquiteto de Soluções",
    subtitle:   "BI • Engenharia de Dados • IA",
    period:     "Nov 2013 – Atual",
    badge:      "Atual",
    type:       "Fundador",
    color:      "blue",
    year:       "2013",
    description:
      "Fundador e responsável pela direção estratégica da IK Analytics. Lidera a concepção, arquitetura e desenvolvimento de plataformas para o setor público e privado.",
    highlights: [
      "Arquitetura de soluções ERP, SaaS e sistemas distribuídos",
      "Desenvolvimento de 7+ plataformas corporativas",
      "Business Intelligence, Engenharia de Dados e IA aplicada",
      "Prefeitura de Corumbá/MS — inteligência territorial e dados municipais",
      "Gestão de equipes multidisciplinares e projetos estratégicos",
      "P&D com IA Generativa, LLMs e agentes inteligentes",
    ],
    products: ["IK Flow", "IK Commerce", "Cobratto", "DataVoto", "MAP Gest360", "BIAgri"],
    attestation: null,
    achievements: [
      {
        label: "🚀 Desafio Empreendedor Anhanguera — IK Analytics entre os destaques da competição",
        url: "https://aliancaempreendedora.org.br/desafio-empreendedor-anhanguera-chega-ao-fim-com-surpresas/",
      },
    ],
  },
  {
    company:    "Bluetrix Tecnologia",
    role:       "Consultor Especialista em Dados e BI (PJ)",
    subtitle:   "ERP Xadrez • Secretarias Estaduais RO & MS",
    period:     "2021 – Atual",
    badge:      "Atual",
    type:       "PJ",
    color:      "violet",
    year:       "2021",
    description:
      "Consultoria em BI e Engenharia de Dados para o ERP Xadrez, atendendo secretarias estaduais de Rondônia e Mato Grosso do Sul. Atuou em paralelo ao DETRAN/MS (Inovvati) de 2021 a 2025, acumulando experiência simultânea em órgãos públicos de dois estados.",
    highlights: [
      "Secretaria de Estado de Rondônia — BI e análise de dados governamentais",
      "Secretaria de Estado do Mato Grosso do Sul — ERP Xadrez",
      "Portal de Desenvolvimento e Investimentos (Gov. Estado)",
      "Integração entre bases governamentais e Dados Abertos",
      "Indicadores econômicos e inteligência territorial",
    ],
    products: [],
    attestation: null,
  },
  {
    company:    "Inovvati Tecnologia (ant. PSG Tecnologia)",
    role:       "Especialista BI • Coordenador Técnico de Dados • Analista BD Sênior N-VIII",
    subtitle:   "Cliente: DETRAN/MS",
    period:     "Set 2018 – Set 2025",
    badge:      "~7 anos",
    type:       "CLT → PJ",
    color:      "emerald",
    year:       "2018",
    description:
      "Liderou a evolução completa do ambiente de BI do DETRAN/MS: migração de MicroStrategy para Tableau e posteriormente para Qlik Sense, reformulação de todas as cargas ETL, validação e estruturação de modelos analíticos. Coordenou o fluxo RENAEST — reconhecido pelo SENATRAN como o melhor do país por vários anos consecutivos.",
    highlights: [
      "Migração de MicroStrategy → Tableau → Qlik Sense com reformulação completa das cargas ETL",
      "Coordenador do RENAEST/MS — fluxo de dados criado e supervisionado pelo analista",
      "MAC — Monitoramento Anti-Corrupção: desenvolvimento e publicação do painel",
      "Portal da Transparência e Dados Abertos do DETRAN/MS",
      "Inteligência Territorial com PostGIS e QGIS",
      "Apoio estatístico para formulação e aprovação de leis de trânsito",
      "Suporte estratégico ao Tribunal de Contas, MPMS e Assembleia Legislativa",
    ],
    products: [],
    attestation: "~13.200 horas técnicas atestadas",
    achievements: [
      {
        label: "🏆 Selo de Excelência SENATRAN — MS 1º lugar em transparência e estatísticas de trânsito",
        url: "https://www.detran.ms.gov.br/ms-recebe-selo-de-excelencia-da-senatran-por-atuacao-integrada-de-transparencia-nas-estatisticas-de-transito/",
      },
      {
        label: "🏅 DETRAN/MS destaque nacional — processo de envio de dados reconhecido como melhor do país pelo SENATRAN",
        url: "https://www.detran.ms.gov.br/detran-apresenta-em-brasilia-o-processo-de-envio-de-dados-estatisticos-destacado-como-melhor-do-pais-pelo-senatran/",
      },
      {
        label: "📊 9 anos de análise de dados moderna — DETRAN/MS lidera em licenciamentos adimplentes no estado",
        url: "https://www.detran.ms.gov.br/ha-nove-anos-detran-ms-utiliza-analise-de-dados-moderna-e-mes-de-julho-contabiliza-o-maior-numero-de-licenciamentos-adimplentes-do-estado/",
      },
    ],
  },
  {
    company:    "Digix Tecnologia S.A. (ant. DigithoBrasil)",
    role:       "Especialista em Business Intelligence",
    subtitle:   "Cliente: SEFAZ/MS",
    period:     "Abr 2015 – Jul 2017",
    badge:      "~2 anos",
    type:       "PJ",
    color:      "amber",
    year:       "2015",
    description:
      "Modernização do ambiente de BI da Secretaria de Estado de Fazenda. Migração de MicroStrategy para Qlik Sense/Tableau. Apoio às áreas de arrecadação, fiscalização e auditoria tributária.",
    highlights: [
      "Migração MicroStrategy → Qlik Sense / Tableau",
      "Dashboards para arrecadação e fiscalização tributária",
      "Auxílio e execução de processos ETL e modelagem analítica",
      "Inteligência tributária para auditoria fiscal",
    ],
    products: [],
    attestation: "~3.600 horas técnicas atestadas",
  },
  {
    company:    "D.F. Moura Informática Ltda.",
    role:       "Diretor Comercial e Gestor de Tecnologia",
    subtitle:   "Automação Comercial • SQL Server",
    period:     "2009 – 2013",
    badge:      "~4 anos",
    type:       "CLT",
    color:      "slate",
    year:       "2009",
    description:
      "Gestão comercial e técnica da empresa. Implantação de soluções de automação comercial, administração de banco de dados SQL Server, liderança de equipes e atendimento corporativo.",
    highlights: [
      "Gestão comercial, financeira e planejamento estratégico",
      "Implantação de sistemas de automação comercial",
      "Administração de banco de dados SQL Server",
    ],
    products: [],
    attestation: null,
  },
];

export const skillGroups = [
  {
    title: "Business Intelligence",
    color: "blue",
    skills: [
      { name: "Tableau",         level: 95 },
      { name: "Qlik Sense",      level: 95 },
      { name: "QlikView",        level: 90 },
      { name: "Qlik NPrinting",  level: 85 },
      { name: "MicroStrategy",   level: 75 },
      { name: "Power BI",        level: 70 },
    ],
  },
  {
    title: "Engenharia de Dados",
    color: "violet",
    skills: [
      { name: "ETL / ELT",          level: 95 },
      { name: "Data Warehouse",      level: 95 },
      { name: "Modelagem Dimensional", level: 90 },
      { name: "APIs REST",           level: 85 },
      { name: "Data Lake",           level: 80 },
      { name: "Catálogo de Dados",   level: 80 },
    ],
  },
  {
    title: "Bancos de Dados",
    color: "emerald",
    skills: [
      { name: "PostgreSQL",    level: 95 },
      { name: "PostGIS",       level: 90 },
      { name: "SQL Server",    level: 85 },
      { name: "MariaDB",       level: 80 },
      { name: "Firebird",      level: 75 },
    ],
  },
  {
    title: "Linguagens",
    color: "amber",
    skills: [
      { name: "SQL",        level: 98 },
      { name: "Python",     level: 85 },
      { name: "R",          level: 75 },
      { name: "JavaScript", level: 70 },
      { name: "PHP",        level: 80 },
    ],
  },
  {
    title: "Geotecnologias",
    color: "teal",
    skills: [
      { name: "PostGIS",           level: 90 },
      { name: "QGIS",              level: 88 },
      { name: "Análise Espacial",   level: 85 },
      { name: "GeoJSON / SHP",     level: 85 },
      { name: "Imagens de Satélite", level: 75 },
    ],
  },
  {
    title: "Inteligência Artificial",
    color: "pink",
    skills: [
      { name: "IA Generativa",       level: 85 },
      { name: "Engenharia de Prompt", level: 90 },
      { name: "LLMs / GPT",          level: 85 },
      { name: "Agentes Inteligentes", level: 80 },
      { name: "Machine Learning",     level: 72 },
    ],
  },
];

export const timeline = [
  { year: "2009", label: "D.F. Moura Informática",   color: "slate",   desc: "Diretor Comercial e Gestor de TI" },
  { year: "2013", label: "Fundação da IK Analytics",  color: "blue",    desc: "CEO • Arquiteto de Soluções" },
  { year: "2015", label: "SEFAZ/MS",                  color: "amber",   desc: "Especialista BI — DIGIX Tecnologia" },
  { year: "2018", label: "DETRAN/MS",                 color: "emerald", desc: "Coordenador Técnico de Dados — Inovvati" },
  { year: "2021", label: "Bluetrix Tecnologia",        color: "violet",  desc: "Consultor BI — ERP Xadrez • Secretarias RO & MS (paralelo DETRAN)" },
];

export type AIWork = {
  title: string;
  category: string;
  description: string;
  context: string;
  tools: string[];
  color: string;
  tags: string[];
};

export const aiWork: AIWork[] = [
  {
    title: "Assistentes Corporativos com RAG",
    category: "Chatbot & NLP",
    description: "Chatbots especializados em dados governamentais e corporativos com RAG (Retrieval-Augmented Generation). O assistente responde perguntas com base em documentos oficiais, portarias, legislações e dados históricos da organização.",
    context: "IK Analytics — Produto Interno",
    tools: ["OpenAI GPT-4o", "LangChain", "ChromaDB", "Embeddings", "Python", "Flask"],
    color: "blue",
    tags: ["LLM", "RAG", "OpenAI", "Embeddings"],
  },
  {
    title: "BI com Linguagem Natural (Text-to-SQL)",
    category: "Analytics com IA",
    description: "Interface de linguagem natural conectada a Data Warehouses. O usuário faz uma pergunta em português e a IA gera automaticamente a query SQL, executa e apresenta o resultado com explicação dos indicadores.",
    context: "IK Flow / IK Analytics",
    tools: ["GPT-4o", "Text-to-SQL", "PostgreSQL", "Python", "Pandas", "API REST"],
    color: "violet",
    tags: ["Text-to-SQL", "GPT-4o", "Analytics"],
  },
  {
    title: "IA para Análise de Imagens em Vistorias Veiculares",
    category: "Visão Computacional",
    description: "POC desenvolvida para o DETRAN/MS: leitura automatizada de imagens coletadas nas vistoriadoras, cruzamento com o cadastro veicular e análise por IA para identificar possíveis alterações estruturais, adulterações ou discrepâncias entre o veículo físico e o registro oficial.",
    context: "DETRAN/MS — Vistorias",
    tools: ["OpenAI Vision", "Python", "PostgreSQL", "OCR", "Cadastro Veicular"],
    color: "emerald",
    tags: ["Visão Computacional", "POC", "DETRAN", "Segurança Veicular"],
  },
  {
    title: "IA Embarcada em Produtos SaaS",
    category: "Produto SaaS",
    description: "Integração de IA nos produtos IK Flow e Cobratto: geração automática de relatórios, análise preditiva de inadimplência, sugestão de ações comerciais e detecção de anomalias em dados financeiros.",
    context: "IK Flow · Cobratto",
    tools: ["OpenAI API", "Python", "Flask", "MySQL", "Pandas", "Scikit-learn"],
    color: "amber",
    tags: ["Gov Digital", "Automação", "BI com IA"],
  },
  {
    title: "Engenharia de Prompt Especializada",
    category: "Prompt Engineering",
    description: "Desenvolvimento de sistemas de prompt para BI, análise de dados governamentais, relatórios técnicos e automação de tarefas analíticas — incluindo few-shot learning, chain-of-thought e structured outputs.",
    context: "Consultoria & Projetos",
    tools: ["GPT-4o", "Claude", "Gemini", "Few-shot", "Chain-of-thought", "JSON mode"],
    color: "blue",
    tags: ["Prompt Engineering", "Few-shot", "Chain-of-thought"],
  },
];
