import { Briefcase, MapPin, ExternalLink } from "lucide-react";

const experiences = [
  {
    company: "IK Analytics Ltda.",
    role: "Fundador • CEO • Arquiteto de Soluções",
    subtitle: "Business Intelligence • Engenharia de Dados • Inteligência Artificial",
    period: "Nov 2013 – Atual",
    badge: "atual",
    location: "Mato Grosso do Sul",
    type: "Fundador",
    color: "cyan",
    description:
      "Fundador e responsável pela direção estratégica da IK Analytics. Lidera a concepção, arquitetura e desenvolvimento de plataformas tecnológicas para iniciativa privada e setor público. Responsável pela arquitetura dos produtos, definição tecnológica, modelagem de dados, coordenação técnica e gestão de inovação.",
    highlights: [
      "Definição da arquitetura de soluções corporativas e sistemas distribuídos",
      "Desenvolvimento de plataformas SaaS e sistemas ERP",
      "Engenharia de Dados, BI e Inteligência Artificial aplicada aos negócios",
      "Data Warehouse, Modelagem Dimensional e processos ETL",
      "Gestão de equipes multidisciplinares e projetos",
      "P&D com IA Generativa, LLMs e agentes inteligentes",
    ],
    products: ["IK Flow", "IK Commerce", "Cobratto", "DataVoto", "MAP Gest360", "BIAgri"],
  },
  {
    company: "Bluetrix Tecnologia",
    role: "Consultor Especialista em Dados e Business Intelligence (PJ)",
    subtitle: "ERP Xadrez • Órgãos Públicos Estaduais",
    period: "2025 – Atual",
    badge: "atual",
    location: "Mato Grosso do Sul",
    type: "PJ",
    color: "violet",
    description:
      "Prestação de serviços especializados voltados à evolução do ERP Xadrez e ao desenvolvimento de soluções estratégicas para órgãos públicos estaduais. Atuação focada em Engenharia de Dados, Business Intelligence, arquitetura analítica e integração de grandes volumes de dados governamentais.",
    highlights: [
      "Evolução da arquitetura analítica do ERP Xadrez",
      "Desenvolvimento do Portal de Desenvolvimento e Investimentos",
      "Integração entre bases governamentais e Dados Abertos",
      "Desenvolvimento de indicadores econômicos e dashboards executivos",
      "Inteligência Territorial e apoio à formulação de políticas públicas",
    ],
    products: [],
  },
  {
    company: "Inovvati Tecnologia (ant. PSG Tecnologia)",
    role: "Especialista em BI • Coordenador Técnico de Dados • Analista de BD Sênior N-VIII",
    subtitle: "Cliente: DETRAN/MS — Departamento Estadual de Trânsito do MS",
    period: "Set 2018 – Set 2025",
    badge: "~7 anos",
    location: "Mato Grosso do Sul",
    type: "CLT → PJ",
    color: "emerald",
    description:
      "Responsável pela estruturação, consolidação e evolução da área de Business Intelligence do DETRAN/MS por aproximadamente 7 anos. Participou da transformação da cultura organizacional baseada em dados, centralizando informações dispersas em um único ambiente de inteligência.",
    highlights: [
      "Implantação e coordenação técnica da área de Business Intelligence",
      "Arquitetura de Dados, Engenharia de Dados e Data Warehouse",
      "RENAEST — Registro Nacional de Estatísticas de Trânsito (base estadual)",
      "Implantação e evolução do Portal da Transparência e Dados Abertos",
      "Inteligência Territorial com PostGIS, QGIS e geoprocessamento avançado",
      "Desenvolvimento de APIs de integração e conexão com bases nacionais",
      "Suporte estratégico à alta administração, Tribunal de Contas, MPMS e Assembleia",
    ],
    attestation: "Atestado técnico: ~13.200 horas especializadas",
    products: [],
  },
  {
    company: "Digix Tecnologia S.A. (ant. DigithoBrasil)",
    role: "Especialista em Business Intelligence",
    subtitle: "Cliente: SEFAZ/MS — Secretaria de Estado de Fazenda do MS",
    period: "Abr 2015 – Jul 2017",
    badge: "~2 anos",
    location: "Mato Grosso do Sul",
    type: "PJ",
    color: "amber",
    description:
      "Atuação junto à Superintendência de Tecnologia da Informação em projetos estratégicos de modernização do ambiente de Business Intelligence da SEFAZ/MS. Apoio às áreas de arrecadação, fiscalização, auditoria e gestão tributária.",
    highlights: [
      "Modernização e evolução da arquitetura analítica da Secretaria",
      "Migração de plataformas MicroStrategy → Qlik Sense / Tableau",
      "Desenvolvimento de dashboards para arrecadação e fiscalização tributária",
      "Construção de processos ETL e modelagem analítica",
      "Estruturação de bases voltadas à inteligência tributária",
    ],
    attestation: "Atestado técnico: ~3.600 horas especializadas",
    products: [],
  },
  {
    company: "D.F. Moura Informática Ltda.",
    role: "Diretor Comercial e Gestor de Tecnologia",
    subtitle: "Automação comercial • Gestão empresarial • SQL Server",
    period: "2009 – 2013",
    badge: "~4 anos",
    location: "Mato Grosso do Sul",
    type: "CLT",
    color: "slate",
    description:
      "Atuação na gestão comercial e técnica da empresa, responsável pelo relacionamento com clientes, implantação de soluções de automação comercial e coordenação das operações.",
    highlights: [
      "Gestão comercial, financeira e planejamento estratégico",
      "Implantação de sistemas de automação comercial",
      "Administração de banco de dados SQL Server",
      "Liderança de equipes e atendimento corporativo",
    ],
    products: [],
  },
];

const colorMap: Record<string, { dot: string; badge: string; border: string; text: string }> = {
  cyan:    { dot: "bg-cyan-400",    badge: "bg-cyan-500/10 text-cyan-300",    border: "border-l-cyan-500",    text: "text-cyan-400" },
  violet:  { dot: "bg-violet-400",  badge: "bg-violet-500/10 text-violet-300", border: "border-l-violet-500", text: "text-violet-400" },
  emerald: { dot: "bg-emerald-400", badge: "bg-emerald-500/10 text-emerald-300", border: "border-l-emerald-500", text: "text-emerald-400" },
  amber:   { dot: "bg-amber-400",   badge: "bg-amber-500/10 text-amber-300",   border: "border-l-amber-500",   text: "text-amber-400" },
  slate:   { dot: "bg-slate-400",   badge: "bg-slate-500/10 text-slate-300",   border: "border-l-slate-500",   text: "text-slate-400" },
};

export default function Experience() {
  return (
    <section id="experiencia" className="py-24 bg-[#080c14]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 text-cyan-400 text-sm font-medium mb-4">
            <div className="w-8 h-px bg-cyan-400" />
            EXPERIÊNCIA PROFISSIONAL
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
            Trajetória Profissional
          </h2>
          <p className="text-slate-400 max-w-2xl">
            15+ anos de atuação técnica e gerencial em projetos de transformação
            digital para órgãos públicos estaduais e empresas privadas.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500/50 via-[#1e2d42] to-transparent hidden md:block" />

          <div className="space-y-8">
            {experiences.map((exp, idx) => {
              const colors = colorMap[exp.color];
              return (
                <div key={idx} className="relative md:pl-16">
                  {/* Timeline dot */}
                  <div
                    className={`absolute left-4 top-6 w-4 h-4 rounded-full border-2 border-[#080c14] ${colors.dot} hidden md:block z-10`}
                  />

                  <div
                    className={`bg-[#0f1629] border border-[#1e2d42] border-l-2 ${colors.border} rounded-2xl p-6 md:p-8 hover:border-opacity-80 transition-all group`}
                  >
                    {/* Header */}
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                      <div>
                        <div className="flex flex-wrap items-center gap-2 mb-1">
                          <span
                            className={`text-xs font-semibold px-2.5 py-1 rounded-full ${colors.badge}`}
                          >
                            {exp.badge}
                          </span>
                          <span className="text-xs text-slate-500 bg-slate-800/60 px-2.5 py-1 rounded-full">
                            {exp.type}
                          </span>
                        </div>
                        <h3 className="text-white font-bold text-xl mt-2">
                          {exp.company}
                        </h3>
                        <p className={`text-sm font-semibold mt-1 ${colors.text}`}>
                          {exp.role}
                        </p>
                        <p className="text-slate-500 text-sm mt-0.5">{exp.subtitle}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-slate-300 text-sm font-medium">{exp.period}</p>
                        <div className="flex items-center justify-end gap-1 mt-1 text-slate-500 text-xs">
                          <MapPin className="w-3 h-3" />
                          {exp.location}
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-slate-400 text-sm leading-relaxed mb-5">
                      {exp.description}
                    </p>

                    {/* Highlights */}
                    <ul className="space-y-2 mb-4">
                      {exp.highlights.map((h) => (
                        <li key={h} className="flex items-start gap-2 text-sm text-slate-300">
                          <span className={`w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 ${colors.dot}`} />
                          {h}
                        </li>
                      ))}
                    </ul>

                    {/* Attestation */}
                    {exp.attestation && (
                      <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-4 py-1.5 mt-2 mb-4">
                        <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full" />
                        <span className="text-emerald-300 text-xs font-medium">
                          {exp.attestation}
                        </span>
                      </div>
                    )}

                    {/* Products */}
                    {exp.products.length > 0 && (
                      <div>
                        <p className="text-slate-500 text-xs mb-2 uppercase tracking-wider">
                          Produtos desenvolvidos
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {exp.products.map((p) => (
                            <span
                              key={p}
                              className="text-xs bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 px-3 py-1 rounded-full"
                            >
                              {p}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
