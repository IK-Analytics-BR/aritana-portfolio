import { CheckCircle2, Target, Users, Lightbulb } from "lucide-react";

const differentials = [
  "Mais de 15 anos de experiência em Tecnologia da Informação",
  "Mais de 10 anos dedicados exclusivamente a BI, Engenharia de Dados e Analytics",
  "Implantação completa de áreas de Business Intelligence em organizações públicas",
  "Especialista em transformação digital baseada em dados",
  "Experiência na liderança técnica de equipes multidisciplinares",
  "Desenvolvimento de plataformas SaaS e ERP",
  "Especialista em Arquitetura, Engenharia e Governança de Dados",
  "Especialista em Inteligência Artificial aplicada à gestão pública e privada",
  "Especialista em Geoprocessamento aplicado à tomada de decisão",
  "Desenvolvimento de indicadores estratégicos para alta gestão",
  "Forte atuação em integração entre sistemas legados",
  "Desenvolvimento de soluções para Dados Abertos e transparência pública",
  "Desenvolvimento de soluções para inteligência territorial e eleitoral",
  "Atuação comprovada por ~16.800 horas técnicas em atestados oficiais",
];

const pillars = [
  {
    icon: Target,
    title: "Visão Estratégica",
    description:
      "Transforma dados em inteligência estratégica, conectando tecnologia às necessidades reais de negócio e gestão pública.",
  },
  {
    icon: Lightbulb,
    title: "Inovação Aplicada",
    description:
      "Pesquisa e desenvolve soluções com IA Generativa, LLMs e agentes inteligentes aplicados a casos reais de uso corporativo.",
  },
  {
    icon: Users,
    title: "Liderança Técnica",
    description:
      "Lidera equipes multidisciplinares desde a concepção da arquitetura até a entrega final de plataformas escaláveis.",
  },
];

export default function About() {
  return (
    <section id="sobre" className="py-24 bg-[#080c14]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 text-cyan-400 text-sm font-medium mb-4">
            <div className="w-8 h-px bg-cyan-400" />
            SOBRE
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-white mb-6">
            Perfil Executivo
          </h2>
          <p className="text-slate-400 text-lg leading-relaxed max-w-4xl">
            Executivo de Tecnologia da Informação, especialista em Business
            Intelligence, Engenharia de Dados, Inteligência Artificial e
            Arquitetura de Soluções, com mais de{" "}
            <span className="text-white font-medium">quinze anos</span> de
            experiência liderando projetos estratégicos de transformação digital
            para{" "}
            <span className="text-cyan-400 font-medium">
              órgãos públicos e empresas privadas
            </span>
            .
          </p>
        </div>

        {/* Three pillars */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="bg-[#0f1629] border border-[#1e2d42] rounded-2xl p-6 hover:border-cyan-500/30 transition-all group"
              >
                <div className="bg-cyan-500/10 w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:bg-cyan-500/15 transition-colors">
                  <Icon className="w-6 h-6 text-cyan-400" />
                </div>
                <h3 className="text-white font-bold text-lg mb-3">{pillar.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Summary text */}
        <div className="bg-[#0f1629] border border-[#1e2d42] rounded-2xl p-8 mb-12">
          <p className="text-slate-300 leading-relaxed mb-4">
            Fundador da{" "}
            <span className="text-cyan-400 font-semibold">IK Analytics</span>,
            empresa especializada no desenvolvimento de soluções de BI,
            Inteligência Artificial, Analytics, Engenharia de Dados e Sistemas
            Corporativos para o setor público e privado.
          </p>
          <p className="text-slate-400 leading-relaxed mb-4">
            Participou da modernização tecnológica de instituições públicas como
            a{" "}
            <span className="text-white font-medium">SEFAZ/MS</span> e o{" "}
            <span className="text-white font-medium">DETRAN/MS</span>, além de
            atuar na implantação de soluções para administrações municipais,
            projetos estaduais e empresas privadas.
          </p>
          <p className="text-slate-400 leading-relaxed">
            Seu perfil combina{" "}
            <span className="text-violet-400 font-medium">
              visão estratégica de negócios
            </span>
            , profundo conhecimento técnico e capacidade de liderar projetos
            complexos, apoiando gestores na tomada de decisão baseada em dados.
          </p>
        </div>

        {/* Differentials */}
        <div>
          <h3 className="text-white font-bold text-xl mb-6">
            Principais Diferenciais
          </h3>
          <div className="grid sm:grid-cols-2 gap-3">
            {differentials.map((item) => (
              <div key={item} className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                <span className="text-slate-300 text-sm leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
