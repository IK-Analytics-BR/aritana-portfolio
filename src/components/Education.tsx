import { GraduationCap, Award, Trophy } from "lucide-react";

const education = [
  {
    degree: "MBA em Tecnologia para Negócios",
    emphasis: "Inteligência Artificial, Data Science e Big Data",
    description:
      "Especialização voltada à aplicação estratégica de IA, Engenharia de Dados, Ciência de Dados, Analytics e Transformação Digital.",
    icon: "🎓",
    level: "Pós-Graduação",
  },
  {
    degree: "Bacharelado em Administração",
    emphasis: "Gestão Organizacional e Planejamento Estratégico",
    description:
      "Formação voltada à gestão organizacional, planejamento estratégico, gestão financeira, gestão de projetos e liderança de equipes.",
    icon: "📊",
    level: "Graduação",
  },
  {
    degree: "Bacharelado em Ciências Contábeis",
    emphasis: "Controladoria, Finanças e Auditoria",
    description:
      "Formação direcionada à contabilidade, controladoria, finanças corporativas, auditoria, análise financeira e legislação tributária.",
    icon: "📈",
    level: "Graduação",
  },
  {
    degree: "Técnico em Informática",
    emphasis: "Desenvolvimento de Sistemas e Banco de Dados",
    description:
      "Base técnica voltada ao desenvolvimento de sistemas, infraestrutura, banco de dados, redes de computadores e suporte tecnológico.",
    icon: "💻",
    level: "Técnico",
  },
];

const certGroups = [
  {
    title: "Business Intelligence",
    color: "cyan",
    certs: ["Qlik Sense", "QlikView", "Qlik NPrinting", "Tableau", "MicroStrategy"],
  },
  {
    title: "Engenharia de Dados",
    color: "violet",
    certs: ["PostgreSQL", "SQL Avançado", "Modelagem de Dados", "ETL", "Data Warehouse"],
  },
  {
    title: "Inteligência Artificial",
    color: "pink",
    certs: ["IA aplicada aos negócios", "IA Generativa", "Engenharia de Prompt", "Data Science", "Big Data"],
  },
  {
    title: "Gestão & Metodologias",
    color: "amber",
    certs: ["Scrum Product Owner", "Scrum Fundamentals", "Gestão Ágil de Projetos", "Empreendedorismo", "Liderança"],
  },
  {
    title: "Instituições",
    color: "emerald",
    certs: ["Fundação Getulio Vargas (FGV)", "SENAC", "Endeavor", "Microsoft"],
  },
];

const colorMap: Record<string, string> = {
  cyan:    "bg-cyan-500/10 text-cyan-300 border border-cyan-500/20",
  violet:  "bg-violet-500/10 text-violet-300 border border-violet-500/20",
  pink:    "bg-pink-500/10 text-pink-300 border border-pink-500/20",
  amber:   "bg-amber-500/10 text-amber-300 border border-amber-500/20",
  emerald: "bg-emerald-500/10 text-emerald-300 border border-emerald-500/20",
};

const titleColor: Record<string, string> = {
  cyan: "text-cyan-400", violet: "text-violet-400", pink: "text-pink-400",
  amber: "text-amber-400", emerald: "text-emerald-400",
};

export default function Education() {
  return (
    <section id="formacao" className="py-24 bg-[#080c14]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 text-cyan-400 text-sm font-medium mb-4">
            <div className="w-8 h-px bg-cyan-400" />
            FORMAÇÃO & CERTIFICAÇÕES
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
            Formação Acadêmica
          </h2>
        </div>

        {/* Education grid */}
        <div className="grid md:grid-cols-2 gap-4 mb-16">
          {education.map((edu) => (
            <div
              key={edu.degree}
              className="bg-[#0f1629] border border-[#1e2d42] rounded-2xl p-6 hover:border-slate-600 transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="text-3xl flex-shrink-0">{edu.icon}</div>
                <div>
                  <span className="text-xs bg-slate-800 text-slate-400 px-2.5 py-1 rounded-full mb-2 inline-block">
                    {edu.level}
                  </span>
                  <h3 className="text-white font-bold text-lg leading-tight mb-1">
                    {edu.degree}
                  </h3>
                  <p className="text-cyan-400 text-sm mb-2">{edu.emphasis}</p>
                  <p className="text-slate-400 text-sm leading-relaxed">{edu.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="mb-16">
          <h3 className="text-white font-bold text-xl mb-8 flex items-center gap-3">
            <Award className="w-5 h-5 text-cyan-400" />
            Certificações & Capacitações
          </h3>
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
            {certGroups.map((group) => (
              <div
                key={group.title}
                className="bg-[#0f1629] border border-[#1e2d42] rounded-xl p-5"
              >
                <h4 className={`text-sm font-bold uppercase tracking-wider mb-3 ${titleColor[group.color]}`}>
                  {group.title}
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {group.certs.map((cert) => (
                    <span
                      key={cert}
                      className={`text-xs px-2.5 py-1 rounded-full ${colorMap[group.color]}`}
                    >
                      {cert}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Award */}
        <div className="bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-amber-500/20 rounded-2xl p-8">
          <div className="flex items-start gap-5">
            <div className="bg-amber-500/15 p-4 rounded-xl flex-shrink-0">
              <Trophy className="w-7 h-7 text-amber-400" />
            </div>
            <div>
              <div className="text-amber-400 text-xs font-semibold uppercase tracking-wider mb-1">
                Premiação Nacional
              </div>
              <h3 className="text-white font-bold text-xl mb-2">
                3º Lugar Nacional — Desafio Empreendedor Anhanguera
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Reconhecimento nacional pela criação de solução tecnológica
                inovadora voltada ao mercado corporativo, evidenciando capacidade
                de empreendedorismo e inovação em tecnologia.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
