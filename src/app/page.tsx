import type { ComponentType } from "react";
import Image from "next/image";
import Link from "next/link";
import AnimatedCounter from "@/components/AnimatedCounter";
import AnimatedSection from "@/components/AnimatedSection";
import { kpis, products } from "@/lib/data";
import {
  Clock, Award, Layers, Building2, Cpu, Target, BarChart2, Database,
  ArrowRight, ExternalLink, ChevronRight,
} from "lucide-react";

const iconMap: Record<string, ComponentType<{ className?: string }>> = {
  clock: Clock, award: Award, layers: Layers, building2: Building2,
  cpu: Cpu, target: Target, "bar-chart": BarChart2, database: Database,
};

const productColors: Record<string, string> = {
  blue:    "from-blue-50 to-white border-blue-200 hover:border-blue-400 hover:shadow-md",
  violet:  "from-violet-50 to-white border-violet-200 hover:border-violet-400 hover:shadow-md",
  emerald: "from-emerald-50 to-white border-emerald-200 hover:border-emerald-400 hover:shadow-md",
  amber:   "from-amber-50 to-white border-amber-200 hover:border-amber-400 hover:shadow-md",
  teal:    "from-teal-50 to-white border-teal-200 hover:border-teal-400 hover:shadow-md",
  green:   "from-green-50 to-white border-green-200 hover:border-green-400 hover:shadow-md",
};
const productBadge: Record<string, string> = {
  blue: "bg-blue-100 text-blue-700", violet: "bg-violet-100 text-violet-700",
  emerald: "bg-emerald-100 text-emerald-700", amber: "bg-amber-100 text-amber-700",
  teal: "bg-teal-100 text-teal-700", green: "bg-green-100 text-green-700",
};


export default function HomePage() {
  return (
    <div className="bg-white">

      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center pt-16 pb-10 overflow-hidden bg-white">
        {/* Subtle dot pattern */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{ backgroundImage: "radial-gradient(circle, #2563EB 1px, transparent 1px)", backgroundSize: "32px 32px" }}
        />
        {/* Top-right gradient accent */}
        <div className="absolute top-0 right-0 w-[600px] h-[500px] bg-gradient-to-bl from-blue-50 via-white to-transparent pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 w-full">
          <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center">

            {/* ── Left: Text ── */}
            <div>
              <AnimatedSection delay={0.1}>
                <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-semibold px-4 py-2 rounded-full mb-8 uppercase tracking-wider">
                  <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
                  Disponível para projetos estratégicos
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.2}>
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-slate-900 leading-[1.05] tracking-tight mb-5">
                  Aritana{" "}<br />
                  <span className="gradient-text">Brito</span>
                </h1>
              </AnimatedSection>

              <AnimatedSection delay={0.3}>
                <p className="text-slate-500 text-lg sm:text-xl font-light mb-4 tracking-wide">
                  Executivo de TI &nbsp;·&nbsp; BI &nbsp;·&nbsp; Engenharia de Dados &nbsp;·&nbsp; IA
                </p>
              </AnimatedSection>

              <AnimatedSection delay={0.4}>
                <p className="text-slate-600 text-base max-w-lg mb-8 leading-relaxed">
                  Fundador da{" "}
                  <span className="text-blue-600 font-semibold">IK Analytics</span>.
                  Mais de 15 anos liderando projetos de transformação digital para{" "}
                  <span className="text-slate-900 font-medium">órgãos públicos e empresas privadas</span>.
                </p>
              </AnimatedSection>

              <AnimatedSection delay={0.5}>
                <div className="flex flex-wrap gap-3">
                  <Link
                    href="/produtos"
                    className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold px-7 py-3.5 rounded-full transition-colors shadow-lg shadow-blue-200 text-sm"
                  >
                    Ver Portfólio <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    href="/contato"
                    className="inline-flex items-center gap-2 border border-slate-300 hover:border-blue-300 hover:bg-blue-50 text-slate-700 hover:text-blue-700 font-semibold px-7 py-3.5 rounded-full transition-all text-sm"
                  >
                    Fale Comigo
                  </Link>
                  <a
                    href="https://wa.me/5567981750909?text=Ol%C3%A1%20Aritana%2C%20gostaria%20de%20receber%20seu%20curr%C3%ADculo."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 border border-slate-200 hover:border-slate-400 text-slate-500 hover:text-slate-700 font-medium px-5 py-3.5 rounded-full transition-all text-sm"
                  >
                    Solicitar CV
                  </a>
                </div>
              </AnimatedSection>
            </div>

            {/* ── Right: Photo ── */}
            <AnimatedSection delay={0.3} direction="right">
              <div className="flex justify-center md:justify-end mt-8 md:mt-0">
                <div className="relative">
                  {/* Photo circle */}
                  <div className="w-44 h-44 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-[340px] lg:h-[340px] rounded-full overflow-hidden border-4 border-white shadow-2xl shadow-slate-200 relative">
                    <Image
                      src="/foto.png"
                      alt="Aritana Brito"
                      fill
                      className="object-cover object-top"
                      priority
                    />
                  </div>
                  {/* Badge: anos — desktop only */}
                  <div className="hidden md:flex absolute -top-3 -right-3 w-20 h-20 bg-blue-600 rounded-2xl items-center justify-center shadow-lg shadow-blue-200 rotate-3">
                    <div className="text-white text-center leading-tight">
                      <div className="font-black text-lg">15+</div>
                      <div className="text-xs font-medium opacity-90">anos</div>
                    </div>
                  </div>
                  {/* Badge: horas — desktop only */}
                  <div className="hidden md:flex absolute -bottom-3 -left-3 w-24 h-20 bg-emerald-500 rounded-2xl items-center justify-center shadow-lg shadow-emerald-200 -rotate-2">
                    <div className="text-white text-center leading-tight">
                      <div className="font-black text-lg">16k+</div>
                      <div className="text-xs font-medium opacity-90">horas proj.</div>
                    </div>
                  </div>
                  {/* Decorative ring */}
                  <div className="absolute inset-0 rounded-full border-2 border-dashed border-slate-200 scale-110 pointer-events-none" />
                </div>
              </div>
            </AnimatedSection>

          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-400">
          <span className="text-xs tracking-widest uppercase">scroll</span>
          <div className="w-px h-10 bg-gradient-to-b from-slate-400 to-transparent" />
        </div>
      </section>

      {/* ── KPI DASHBOARD ────────────────────────────────── */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <AnimatedSection className="text-center mb-12">
            <p className="text-blue-600 text-sm font-semibold uppercase tracking-widest mb-3">Painel de Indicadores</p>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900">Dimensão da Experiência</h2>
          </AnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {kpis.map((kpi, i) => {
              const Icon = iconMap[kpi.icon] ?? Award;
              return (
                <AnimatedSection key={kpi.label} delay={i * 0.07} className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 hover:border-blue-300 hover:shadow-md transition-all group">
                  <div className="flex items-start justify-between mb-3">
                    <div className="bg-blue-50 p-2.5 rounded-xl group-hover:bg-blue-100 transition-colors">
                      <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
                    </div>
                  </div>
                  <div className="text-3xl sm:text-4xl font-black text-slate-900 mb-1">
                    <AnimatedCounter to={kpi.value} suffix={kpi.suffix} />
                  </div>
                  <p className="text-slate-500 text-xs sm:text-sm leading-tight">{kpi.label}</p>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── PRODUTOS PREVIEW ─────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <AnimatedSection className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <div>
              <p className="text-blue-600 text-sm font-semibold uppercase tracking-widest mb-2">Produtos & Plataformas</p>
              <h2 className="text-3xl md:text-4xl font-black text-slate-900">Soluções Desenvolvidas</h2>
              <p className="text-slate-500 mt-2 max-w-xl">Do setor público ao agronegócio — plataformas SaaS, ERP e Analytics construídas pela IK Analytics.</p>
            </div>
            <Link
              href="/produtos"
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 text-sm font-semibold transition-colors flex-shrink-0"
            >
              Ver todos <ChevronRight className="w-4 h-4" />
            </Link>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {products.map((p, i) => (
              <AnimatedSection key={p.slug} delay={i * 0.08}>
                <div className={`h-full bg-gradient-to-b ${productColors[p.color]} border rounded-2xl p-6 flex flex-col group transition-all shadow-sm`}>
                  <div className="mb-4">
                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${productBadge[p.color]}`}>
                      {p.category}
                    </span>
                  </div>
                  <h3 className="text-slate-900 font-black text-xl mb-2">{p.name}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed flex-grow mb-5 line-clamp-3">
                    {p.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {p.tags.slice(0, 3).map((t) => (
                      <span key={t} className="text-xs bg-slate-100 border border-slate-200 text-slate-500 px-2.5 py-1 rounded-full">
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                    <Link
                      href={`/produtos/${p.slug}`}
                      className="flex-1 text-center text-sm font-semibold text-blue-600 bg-blue-50 hover:bg-blue-100 py-2.5 rounded-xl transition-colors"
                    >
                      Ver detalhes
                    </Link>
                    <a
                      href={p.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 text-slate-500 hover:text-blue-600 bg-slate-100 hover:bg-blue-50 rounded-xl transition-all"
                      title="Ver plataforma"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── TIMELINE ────────────────────────────────────── */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <AnimatedSection className="text-center mb-10">
            <p className="text-blue-600 text-sm font-semibold uppercase tracking-widest mb-2">Trajetória</p>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900">15+ Anos de Carreira</h2>
            <p className="text-slate-500 text-sm mt-2">Barras sobrepostas revelam atuação simultânea em múltiplos órgãos e projetos</p>
          </AnimatedSection>

          {/* Mobile: simplified vertical list */}
          <AnimatedSection className="md:hidden">
            <div className="grid grid-cols-2 gap-2 mb-4">
              {([
                { label: "D.F. Moura",   type: "CLT",      years: "4 anos",   period: "2009–2013", bar: "bg-slate-400",   border: "border-slate-200", bg: "bg-slate-50"    },
                { label: "IK Analytics", type: "Fundador",  years: "13+ anos", period: "2013–Atual",bar: "bg-blue-500",    border: "border-blue-200",  bg: "bg-blue-50"     },
                { label: "SEFAZ/MS",     type: "PJ",        years: "2 anos",   period: "2015–2017", bar: "bg-amber-400",   border: "border-amber-200", bg: "bg-amber-50"    },
                { label: "DETRAN/MS",    type: "CLT→PJ",    years: "7 anos",   period: "2018–2025", bar: "bg-emerald-500", border: "border-emerald-200",bg: "bg-emerald-50" },
                { label: "Bluetrix",     type: "PJ",        years: "5+ anos",  period: "2021–Atual",bar: "bg-violet-500",  border: "border-violet-200", bg: "bg-violet-50"  },
              ] as const).map((k) => (
                <div key={k.label} className={`border ${k.border} ${k.bg} rounded-xl overflow-hidden`}>
                  <div className={`h-1.5 w-full ${k.bar}`} />
                  <div className="px-3 py-2.5">
                    <p className="font-black text-sm text-slate-900">{k.years}</p>
                    <p className="text-xs font-semibold text-slate-700 mt-0.5">{k.label}</p>
                    <p className="text-[10px] text-slate-400 mt-0.5">{k.type} · {k.period}</p>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>

          {/* Desktop: full Gantt chart */}
          <AnimatedSection className="hidden md:block">
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-8 overflow-x-auto">
              <div className="min-w-[480px]">

                {/* KPI Cards — alinhadas ao track via mesmo w-40 spacer */}
                <div className="flex gap-2 mb-5">
                  <div className="w-40 flex-shrink-0" />
                  <div className="flex gap-2 flex-1">
                    {([
                      { label: "D.F. Moura",   type: "CLT",      years: "4 anos",   bar: "bg-slate-400",   border: "border-slate-200",  bg: "bg-slate-50"   },
                      { label: "IK Analytics", type: "Fundador",  years: "13+ anos", bar: "bg-blue-500",    border: "border-blue-200",   bg: "bg-blue-50"    },
                      { label: "SEFAZ/MS",     type: "PJ",        years: "2 anos",   bar: "bg-amber-400",   border: "border-amber-200",  bg: "bg-amber-50"   },
                      { label: "DETRAN/MS",    type: "CLT→PJ",    years: "7 anos",   bar: "bg-emerald-500", border: "border-emerald-200",bg: "bg-emerald-50" },
                      { label: "Bluetrix",     type: "PJ",        years: "5+ anos",  bar: "bg-violet-500",  border: "border-violet-200", bg: "bg-violet-50"  },
                    ] as const).map((k) => (
                      <div key={k.label} className={`flex-1 border ${k.border} ${k.bg} rounded-xl overflow-hidden`}>
                        <div className={`h-1.5 w-full ${k.bar}`} />
                        <div className="px-1.5 py-2 text-center">
                          <p className="font-black text-sm text-slate-900 leading-none">{k.years}</p>
                          <p className="text-[10px] font-semibold text-slate-600 mt-1 leading-tight">{k.label}</p>
                          <p className="text-[9px] text-slate-400 mt-0.5">{k.type}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Year axis */}
                <div className="flex mb-4">
                  <div className="w-40 flex-shrink-0" />
                  <div className="flex-1 relative h-5">
                    {[2009,2011,2013,2015,2017,2019,2021,2023,2025].map((y) => (
                      <span
                        key={y}
                        style={{ left: `${((y - 2009) / 17) * 100}%` }}
                        className="absolute text-xs text-slate-400 -translate-x-1/2 select-none font-medium"
                      >{y}</span>
                    ))}
                    <span className="absolute right-0 text-xs text-emerald-600 font-bold select-none">Atual</span>
                  </div>
                </div>

                {/* Bars */}
                <div className="space-y-2">
                  {([
                    { label: "D.F. Moura Informática", role: "Diretor Comercial",    start: 2009, end: 2013, bg: "bg-slate-400"   },
                    { label: "IK Analytics",           role: "Fundador & CEO",       start: 2013, end: 2026, bg: "bg-blue-500"    },
                    { label: "SEFAZ/MS · Digix",       role: "Especialista BI",      start: 2015, end: 2017, bg: "bg-amber-400"   },
                    { label: "DETRAN/MS · Inovvati",   role: "Coord. Técnico Dados", start: 2018, end: 2025, bg: "bg-emerald-500" },
                    { label: "Bluetrix Tecnologia",    role: "Consultor BI",         start: 2021, end: 2026, bg: "bg-violet-500"  },
                  ] as const).map((item) => {
                    const left     = ((item.start - 2009) / 17) * 100;
                    const width    = ((item.end   - 2009) / 17) * 100 - left;
                    const isActive = item.end === 2026;
                    return (
                      <div key={item.label} className="flex items-center gap-2">
                        <div className="w-40 flex-shrink-0 text-right pr-3">
                          <p className="text-slate-800 font-semibold text-xs leading-snug">{item.label}</p>
                          <p className="text-slate-400 text-xs">{item.role}</p>
                        </div>
                        <div className="flex-1 relative h-10">
                          {[2009,2011,2013,2015,2017,2019,2021,2023,2025].map((y) => (
                            <div key={y} style={{ left: `${((y-2009)/17)*100}%` }} className="absolute inset-y-0 w-px bg-slate-100" />
                          ))}
                          <div
                            style={{ left: `${left}%`, width: `${width}%` }}
                            className={`absolute top-1/2 -translate-y-1/2 h-8 ${item.bg} ${
                              isActive ? "rounded-l-full" : "rounded-full"
                            } flex items-center justify-between px-3 overflow-hidden shadow-sm`}
                          >
                            <span className="text-white/90 text-xs font-bold">{item.start}</span>
                            {width > 8 && (
                              <span className="text-white/90 text-xs font-bold">{isActive ? "▶" : item.end}</span>
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Bottom axis */}
                <div className="flex mt-3">
                  <div className="w-40 flex-shrink-0" />
                  <div className="flex-1 h-px bg-slate-100" />
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection className="text-center mt-8 md:mt-8">
            <Link
              href="/experiencia"
              className="inline-flex items-center gap-2 border border-slate-200 hover:border-blue-300 hover:bg-blue-50 text-slate-600 hover:text-blue-600 text-sm font-semibold px-7 py-3 rounded-full transition-all"
            >
              Ver experiência completa <ChevronRight className="w-4 h-4" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* ── ABOUT SNIPPET ────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <AnimatedSection direction="left">
              <p className="text-blue-600 text-sm font-semibold uppercase tracking-widest mb-3">Sobre</p>
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-6 leading-tight">
                Transformando dados em{" "}
                <span className="gradient-text">inteligência estratégica</span>
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Executivo de TI com mais de 15 anos de experiência em Business Intelligence,
                Engenharia de Dados e IA. Fundador da{" "}
                <span className="text-blue-600 font-semibold">IK Analytics</span>, responsável
                pela transformação digital de órgãos públicos estaduais como{" "}
                <span className="text-slate-900 font-medium">DETRAN/MS</span> e{" "}
                <span className="text-slate-900 font-medium">SEFAZ/MS</span>.
              </p>
              <p className="text-slate-500 leading-relaxed mb-8">
                Especialista em projetos que conectam tecnologia, dados e decisão — desde
                arquitetura de Data Warehouses até o desenvolvimento de plataformas SaaS
                com Inteligência Artificial embarcada.
              </p>
              <Link
                href="/sobre"
                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold transition-colors group"
              >
                Ler história completa
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "IK Analytics", desc: "Fundador & CEO", color: "blue" },
                  { label: "DETRAN/MS",    desc: "~7 anos • 13.200h", color: "emerald" },
                  { label: "SEFAZ/MS",     desc: "BI Tributário", color: "amber" },
                  { label: "Bluetrix",     desc: "Gov. do Estado", color: "violet" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="bg-slate-50 border border-slate-200 rounded-2xl p-5 hover:border-blue-200 hover:shadow-sm transition-all"
                  >
                    <div className="text-slate-900 font-bold text-sm mb-1">{item.label}</div>
                    <div className="text-slate-500 text-xs">{item.desc}</div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────── */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
              Vamos trabalhar juntos?
            </h2>
            <p className="text-slate-400 text-lg mb-10 leading-relaxed">
              Disponível para projetos de BI, Engenharia de Dados, IA e Transformação Digital
              para organizações públicas e privadas.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/contato"
                className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold px-10 py-4 rounded-full transition-colors shadow-lg shadow-blue-900/40 text-base"
              >
                Entrar em Contato
              </Link>
              <Link
                href="/produtos"
                className="inline-flex items-center justify-center gap-2 border border-slate-700 hover:border-blue-500 text-slate-300 hover:text-white font-semibold px-10 py-4 rounded-full transition-all text-base"
              >
                Ver Produtos
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

    </div>
  );
}
