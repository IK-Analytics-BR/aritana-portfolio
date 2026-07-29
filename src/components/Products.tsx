import { ArrowUpRight } from "lucide-react";

const products = [
  {
    name: "IK Flow",
    category: "ERP Corporativo",
    status: "Produção",
    color: "cyan",
    description:
      "ERP corporativo para empresas de médio e grande porte com operações multinacionais. Integra produção, logística, financeiro, fiscal, comercial, estoque e BI em um único ambiente.",
    highlights: [
      "Arquitetura multinacional",
      "Multi-moeda e fiscal multi-país",
      "IA embarcada",
      "Workflow inteligente",
      "Dashboards estratégicos",
    ],
    tags: ["ERP", "Multinacional", "BI Integrado", "IA"],
  },
  {
    name: "IK Commerce",
    category: "Plataforma de Varejo",
    status: "Produção",
    color: "violet",
    description:
      "Plataforma corporativa para empresas com operações distribuídas. Gestão integrada do ambiente comercial com controle de lojas, equipes, carteira de clientes e indicadores de desempenho.",
    highlights: [
      "CRM e carteira de clientes",
      "Performance comercial",
      "Gestão de unidades",
      "Dashboards executivos",
      "Suporte multimoeda",
    ],
    tags: ["Varejo", "CRM", "Multinacional", "BI"],
  },
  {
    name: "Cobratto",
    category: "SaaS Imobiliário",
    status: "Produção",
    color: "emerald",
    description:
      "Plataforma SaaS para gestão imobiliária que automatiza todo o ciclo operacional — do cadastro dos imóveis à cobrança automatizada, documentos fiscais e comunicação com locadores e locatários.",
    highlights: [
      "PIX automático e QR Code dinâmico",
      "Assinatura eletrônica (ClickSign)",
      "NFS-e integrada e SPED Fiscal",
      "Portal do Inquilino e do Proprietário",
      "IA embarcada",
    ],
    tags: ["SaaS", "Imobiliário", "PIX", "NFS-e", "IA"],
  },
  {
    name: "DataVoto",
    category: "Inteligência Eleitoral",
    status: "Produção",
    color: "amber",
    description:
      "Plataforma de Inteligência Eleitoral com dados oficiais. Integra automaticamente TSE, IBGE, DATASUS, INEP, IPEADATA, IPS Brasil e outras bases nacionais para análises estratégicas e georreferenciamento.",
    highlights: [
      "Dados oficiais TSE, IBGE, DATASUS",
      "Cruzamentos estatísticos e territoriais",
      "Georreferenciamento automático",
      "Análise de tendências",
      "Diagnósticos estratégicos",
    ],
    tags: ["Eleitoral", "Geoprocessamento", "BI", "Analytics"],
  },
  {
    name: "MAP Gest360",
    category: "Inteligência Territorial",
    status: "Produção",
    color: "teal",
    description:
      "Plataforma de Inteligência Territorial para implantação da cultura de dados na administração pública municipal. Integra Saúde, Educação, Arrecadação, Infraestrutura e Assistência Social.",
    highlights: [
      "Integração de sistemas municipais",
      "Mapas temáticos e análise espacial",
      "Dados Abertos e imagens de satélite",
      "Governança da informação",
      "Dashboards executivos",
    ],
    tags: ["Municipal", "QGIS", "PostGIS", "Dados Abertos", "Geoprocessamento"],
  },
  {
    name: "BIAgri",
    category: "Inteligência para Agronegócio",
    status: "Produção",
    color: "lime",
    description:
      "Plataforma de Inteligência para o Agronegócio que integra sistemas privados, dados de campo e bases públicas governamentais — CAR, INCRA, dados climáticos, cobertura vegetal e imagens de satélite.",
    highlights: [
      "APIs corporativas e WhatsApp",
      "Cadastro Ambiental Rural (CAR)",
      "Dados climáticos e imagens de satélite",
      "Indicadores para produtores e cooperativas",
      "Dashboards analíticos",
    ],
    tags: ["Agronegócio", "SaaS", "GeoData", "Analytics"],
  },
  {
    name: "Portal de Desenvolvimento e Investimentos",
    category: "Governo Estadual",
    status: "Em desenvolvimento",
    color: "orange",
    description:
      "Projeto estratégico para o Governo do Estado reunindo informações econômicas, produtivas, fiscais e territoriais para secretarias estaduais, investidores e formuladores de políticas públicas.",
    highlights: [
      "Inteligência Territorial",
      "Cadeias produtivas e desenvolvimento regional",
      "Dados de NF-e SEFAZ",
      "Oportunidades de investimento",
      "Apoio a políticas públicas",
    ],
    tags: ["Governo", "BI", "Territorial", "Econômico"],
  },
];

const colorMap: Record<string, { badge: string; title: string; border: string; status: string }> = {
  cyan:    { badge: "bg-cyan-500/10 text-cyan-300",    title: "text-cyan-400",    border: "hover:border-cyan-500/40",    status: "bg-emerald-500/10 text-emerald-300" },
  violet:  { badge: "bg-violet-500/10 text-violet-300", title: "text-violet-400", border: "hover:border-violet-500/40",  status: "bg-emerald-500/10 text-emerald-300" },
  emerald: { badge: "bg-emerald-500/10 text-emerald-300", title: "text-emerald-400", border: "hover:border-emerald-500/40", status: "bg-emerald-500/10 text-emerald-300" },
  amber:   { badge: "bg-amber-500/10 text-amber-300",   title: "text-amber-400",   border: "hover:border-amber-500/40",   status: "bg-emerald-500/10 text-emerald-300" },
  teal:    { badge: "bg-teal-500/10 text-teal-300",     title: "text-teal-400",    border: "hover:border-teal-500/40",    status: "bg-emerald-500/10 text-emerald-300" },
  lime:    { badge: "bg-lime-500/10 text-lime-300",     title: "text-lime-400",    border: "hover:border-lime-500/40",    status: "bg-emerald-500/10 text-emerald-300" },
  orange:  { badge: "bg-orange-500/10 text-orange-300", title: "text-orange-400",  border: "hover:border-orange-500/40",  status: "bg-amber-500/10 text-amber-300" },
};

export default function Products() {
  return (
    <section id="produtos" className="py-24 bg-[#0a0e1a]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 text-cyan-400 text-sm font-medium mb-4">
            <div className="w-8 h-px bg-cyan-400" />
            PRODUTOS & SOLUÇÕES
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
            Plataformas Desenvolvidas
          </h2>
          <p className="text-slate-400 max-w-2xl">
            Soluções próprias desenvolvidas pela IK Analytics para diferentes
            segmentos — do setor público ao agronegócio, do varejo ao mercado
            imobiliário.
          </p>
        </div>

        {/* Products grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {products.map((product) => {
            const colors = colorMap[product.color];
            return (
              <div
                key={product.name}
                className={`bg-[#0f1629] border border-[#1e2d42] rounded-2xl p-6 transition-all group ${colors.border} flex flex-col`}
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span
                        className={`text-xs font-medium px-2.5 py-1 rounded-full ${colors.badge}`}
                      >
                        {product.category}
                      </span>
                      <span
                        className={`text-xs px-2.5 py-1 rounded-full ${colors.status}`}
                      >
                        {product.status}
                      </span>
                    </div>
                    <h3 className={`font-black text-xl ${colors.title}`}>
                      {product.name}
                    </h3>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-slate-600 group-hover:text-slate-400 transition-colors flex-shrink-0 mt-1" />
                </div>

                {/* Description */}
                <p className="text-slate-400 text-sm leading-relaxed mb-5 flex-grow">
                  {product.description}
                </p>

                {/* Highlights */}
                <ul className="space-y-1.5 mb-5">
                  {product.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2 text-xs text-slate-300">
                      <span className="w-1 h-1 rounded-full bg-slate-500 mt-1.5 flex-shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {product.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-[#141d2e] border border-[#1e2d42] text-slate-500 px-2.5 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
