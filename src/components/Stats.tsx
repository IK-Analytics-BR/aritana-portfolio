import { Award, Clock, Building2, Layers } from "lucide-react";

const stats = [
  {
    icon: Clock,
    value: "15+",
    label: "Anos de Experiência",
    sublabel: "em Tecnologia da Informação",
    color: "cyan",
  },
  {
    icon: Award,
    value: "16.800+",
    label: "Horas Técnicas Atestadas",
    sublabel: "por órgãos públicos estaduais",
    color: "violet",
  },
  {
    icon: Building2,
    value: "2",
    label: "Órgãos Estaduais",
    sublabel: "DETRAN/MS • SEFAZ/MS",
    color: "emerald",
  },
  {
    icon: Layers,
    value: "7+",
    label: "Plataformas Desenvolvidas",
    sublabel: "ERP, SaaS e BI corporativos",
    color: "amber",
  },
];

const colorMap: Record<string, string> = {
  cyan: "from-cyan-500/10 border-cyan-500/20 text-cyan-400",
  violet: "from-violet-500/10 border-violet-500/20 text-violet-400",
  emerald: "from-emerald-500/10 border-emerald-500/20 text-emerald-400",
  amber: "from-amber-500/10 border-amber-500/20 text-amber-400",
};

const iconBg: Record<string, string> = {
  cyan: "bg-cyan-500/10 text-cyan-400",
  violet: "bg-violet-500/10 text-violet-400",
  emerald: "bg-emerald-500/10 text-emerald-400",
  amber: "bg-amber-500/10 text-amber-400",
};

export default function Stats() {
  return (
    <section className="py-16 bg-[#0a0e1a] border-y border-[#1e2d42]/60">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className={`relative rounded-2xl border bg-gradient-to-br ${colorMap[stat.color]} p-6 text-center group hover:-translate-y-1 transition-all duration-300`}
              >
                <div
                  className={`inline-flex p-3 rounded-xl mb-4 ${iconBg[stat.color]}`}
                >
                  <Icon className="w-5 h-5" />
                </div>
                <div className="text-3xl md:text-4xl font-black text-white mb-1 tabular-nums">
                  {stat.value}
                </div>
                <div className="text-sm font-semibold text-slate-200 mb-1">
                  {stat.label}
                </div>
                <div className="text-xs text-slate-500">{stat.sublabel}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
