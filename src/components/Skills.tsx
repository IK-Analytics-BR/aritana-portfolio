const skillCategories = [
  {
    title: "Business Intelligence",
    color: "cyan",
    skills: [
      "Tableau", "Qlik Sense", "QlikView", "Qlik NPrinting",
      "MicroStrategy", "Power BI", "Dashboards Executivos",
      "Dashboards Operacionais", "Scorecards", "KPIs Corporativos",
      "Business Analytics", "Indicadores Estratégicos",
    ],
  },
  {
    title: "Engenharia de Dados",
    color: "violet",
    skills: [
      "ETL", "ELT", "Data Warehouse", "Data Lake",
      "Modelagem Dimensional", "Integração de Dados",
      "APIs REST", "Qualidade de Dados", "Catálogo de Dados",
      "Padronização de Dados", "Processamento em Larga Escala",
    ],
  },
  {
    title: "Bancos de Dados",
    color: "emerald",
    skills: [
      "PostgreSQL", "PostGIS", "SQL Server", "Firebird",
      "MariaDB", "Modelagem Relacional", "Modelagem Dimensional",
      "Procedures", "Views", "Tuning SQL", "Administração de BD",
    ],
  },
  {
    title: "Linguagens",
    color: "amber",
    skills: ["SQL", "Python", "R", "JavaScript", "HTML", "CSS"],
  },
  {
    title: "Geotecnologias",
    color: "teal",
    skills: [
      "QGIS", "PostGIS", "Arquivos SHP", "GeoJSON",
      "Dados Espaciais", "Imagens de Satélite",
      "Cartografia Digital", "Análise Espacial",
      "Inteligência Territorial", "Mapas Temáticos",
    ],
  },
  {
    title: "Inteligência Artificial",
    color: "pink",
    skills: [
      "IA Generativa", "LLMs", "Agentes Inteligentes",
      "Chatbots Corporativos", "Engenharia de Prompt",
      "IA aplicada ao Governo Digital", "IA para BI",
      "IA para Analytics", "Automação Inteligente",
      "Machine Learning (aplicado)",
    ],
  },
  {
    title: "Governança & Estratégia",
    color: "slate",
    skills: [
      "Governança de Dados", "Dados Abertos",
      "Transparência Pública", "Gestão da Informação",
      "LGPD (boas práticas)", "Qualidade da Informação",
      "Documentação Técnica", "Planejamento Estratégico",
      "Indicadores Institucionais",
    ],
  },
  {
    title: "Cloud & Metodologias",
    color: "orange",
    skills: [
      "Amazon Web Services (AWS)", "Git", "Scrum", "Kanban",
      "Gestão Ágil", "Gestão de Projetos",
      "Arquitetura em Nuvem", "Infraestrutura Analítica",
    ],
  },
];

const colorVariants: Record<string, { badge: string; title: string; border: string }> = {
  cyan:    { badge: "bg-cyan-500/10 text-cyan-300 border border-cyan-500/20",    title: "text-cyan-400",    border: "border-cyan-500/20 hover:border-cyan-500/40" },
  violet:  { badge: "bg-violet-500/10 text-violet-300 border border-violet-500/20", title: "text-violet-400", border: "border-violet-500/20 hover:border-violet-500/40" },
  emerald: { badge: "bg-emerald-500/10 text-emerald-300 border border-emerald-500/20", title: "text-emerald-400", border: "border-emerald-500/20 hover:border-emerald-500/40" },
  amber:   { badge: "bg-amber-500/10 text-amber-300 border border-amber-500/20",   title: "text-amber-400",   border: "border-amber-500/20 hover:border-amber-500/40" },
  teal:    { badge: "bg-teal-500/10 text-teal-300 border border-teal-500/20",     title: "text-teal-400",    border: "border-teal-500/20 hover:border-teal-500/40" },
  pink:    { badge: "bg-pink-500/10 text-pink-300 border border-pink-500/20",     title: "text-pink-400",    border: "border-pink-500/20 hover:border-pink-500/40" },
  slate:   { badge: "bg-slate-500/10 text-slate-300 border border-slate-500/20",  title: "text-slate-400",   border: "border-slate-600/30 hover:border-slate-500/50" },
  orange:  { badge: "bg-orange-500/10 text-orange-300 border border-orange-500/20", title: "text-orange-400", border: "border-orange-500/20 hover:border-orange-500/40" },
};

export default function Skills() {
  return (
    <section id="competencias" className="py-24 bg-[#0a0e1a]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 text-cyan-400 text-sm font-medium mb-4">
            <div className="w-8 h-px bg-cyan-400" />
            COMPETÊNCIAS TÉCNICAS
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
            Stack Tecnológico
          </h2>
          <p className="text-slate-400 max-w-2xl">
            Mais de 10 anos dedicados exclusivamente a Business Intelligence,
            Engenharia de Dados e Analytics, com domínio em todo o ciclo de vida
            dos dados.
          </p>
        </div>

        {/* Skills grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {skillCategories.map((category) => {
            const colors = colorVariants[category.color];
            return (
              <div
                key={category.title}
                className={`bg-[#0f1629] border rounded-2xl p-6 transition-all ${colors.border}`}
              >
                <h3 className={`font-bold text-sm uppercase tracking-wider mb-4 ${colors.title}`}>
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className={`text-xs px-3 py-1.5 rounded-full font-medium ${colors.badge}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Sectors */}
        <div className="mt-12 bg-[#0f1629] border border-[#1e2d42] rounded-2xl p-8">
          <h3 className="text-white font-bold text-lg mb-6">
            Setores de Atuação
          </h3>
          <div className="flex flex-wrap gap-2">
            {[
              "Governo Estadual", "Governo Municipal", "Secretarias de Estado",
              "Fazenda Pública", "Trânsito", "Desenvolvimento Econômico",
              "Inteligência Territorial", "Agronegócio", "Mercado Imobiliário",
              "Indústria", "Comércio e Varejo", "Tecnologia da Informação",
              "Inteligência Eleitoral", "Transformação Digital", "SaaS", "ERP Corporativo",
            ].map((sector) => (
              <span
                key={sector}
                className="bg-[#141d2e] border border-[#1e2d42] text-slate-400 text-xs px-3 py-1.5 rounded-full hover:text-slate-300 hover:border-slate-600 transition-colors"
              >
                {sector}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
