import type { Metadata } from "next";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import { experiences } from "@/lib/data";
import { ExternalLink, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Experiência",
  description: "Trajetória profissional completa: DETRAN/MS, SEFAZ/MS, IK Analytics, Bluetrix e D.F. Moura.",
};

const MIN_YEAR = 2009;
const MAX_YEAR = 2026;
const YEAR_RANGE = MAX_YEAR - MIN_YEAR;
const YEAR_MARKERS = [2009, 2011, 2013, 2015, 2017, 2019, 2021, 2023, 2025];

const ganttItems = [
  { label: "D.F. Moura Informática", role: "Diretor Comercial",       start: 2009, end: 2013, bg: "bg-slate-400"   },
  { label: "IK Analytics",          role: "Fundador & CEO",           start: 2013, end: 2026, bg: "bg-blue-500"    },
  { label: "SEFAZ/MS · Digix",      role: "Especialista BI",          start: 2015, end: 2017, bg: "bg-amber-400"   },
  { label: "DETRAN/MS · Inovvati",  role: "Coord. Técnico de Dados",  start: 2018, end: 2025, bg: "bg-emerald-400" },
  { label: "Bluetrix Tecnologia",   role: "Consultor BI",             start: 2021, end: 2026, bg: "bg-violet-500"  },
];

const colorMap: Record<string, { card: string; badge: string; dot: string; year: string }> = {
  blue:    { card: "border-blue-200 hover:border-blue-400 hover:shadow-md",    badge: "bg-blue-100 text-blue-700",    dot: "bg-blue-500",    year: "text-blue-600"    },
  violet:  { card: "border-violet-200 hover:border-violet-400 hover:shadow-md", badge: "bg-violet-100 text-violet-700", dot: "bg-violet-500",  year: "text-violet-600"  },
  emerald: { card: "border-emerald-200 hover:border-emerald-400 hover:shadow-md",badge: "bg-emerald-100 text-emerald-700",dot: "bg-emerald-400",year: "text-emerald-600"  },
  amber:   { card: "border-amber-200 hover:border-amber-400 hover:shadow-md",   badge: "bg-amber-100 text-amber-700",   dot: "bg-amber-400",   year: "text-amber-600"   },
  slate:   { card: "border-slate-200 hover:border-slate-400 hover:shadow-md",   badge: "bg-slate-100 text-slate-700",   dot: "bg-slate-400",   year: "text-slate-600"   },
};

export default function ExperienciaPage() {
  return (
    <div className="bg-white pt-24 pb-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">

        <AnimatedSection className="mb-10">
          <p className="text-blue-600 text-sm font-semibold uppercase tracking-widest mb-3">Trajetória</p>
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">
            Experiência Profissional
          </h1>
          <p className="text-slate-600 text-lg max-w-2xl leading-relaxed">
            15+ anos de carreira em BI, Engenharia de Dados e Arquitetura de Soluções —
            do setor comercial a Secretarias Estaduais e produtos SaaS próprios.
          </p>
        </AnimatedSection>

        {/* ── GANTT TIMELINE ─────────────────────────────── */}
        <AnimatedSection className="mb-14">
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8">
            <h2 className="text-slate-900 font-bold text-base mb-1">Linha do Tempo Visual</h2>
            <p className="text-slate-500 text-xs mb-6">Barras sobrepostas indicam atuação simultânea em múltiplos órgãos</p>

            <div className="overflow-x-auto">
              <div className="min-w-[520px]">

                {/* Year axis */}
                <div className="flex mb-3">
                  <div className="w-40 flex-shrink-0" />
                  <div className="flex-1 relative h-4">
                    {YEAR_MARKERS.map((y) => (
                      <span
                        key={y}
                        style={{ left: `${((y - MIN_YEAR) / YEAR_RANGE) * 100}%` }}
                        className="absolute text-xs text-slate-400 -translate-x-1/2 select-none"
                      >
                        {y}
                      </span>
                    ))}
                    <span className="absolute right-0 text-xs text-emerald-600 font-semibold translate-x-0 select-none">
                      Atual
                    </span>
                  </div>
                </div>

                {/* Rows */}
                <div className="space-y-2">
                  {ganttItems.map((item) => {
                    const left  = ((item.start - MIN_YEAR) / YEAR_RANGE) * 100;
                    const width = ((item.end   - MIN_YEAR) / YEAR_RANGE) * 100 - left;
                    const isActive = item.end === MAX_YEAR;
                    return (
                      <div key={item.label} className="flex items-center gap-2">
                        {/* Label */}
                        <div className="w-40 flex-shrink-0 text-right pr-3">
                          <p className="text-slate-800 font-semibold text-xs leading-tight">{item.label}</p>
                          <p className="text-slate-400 text-xs">{item.role}</p>
                        </div>

                        {/* Bar track */}
                        <div className="flex-1 relative h-10">
                          {/* Grid lines */}
                          {YEAR_MARKERS.map((y) => (
                            <div
                              key={y}
                              style={{ left: `${((y - MIN_YEAR) / YEAR_RANGE) * 100}%` }}
                              className="absolute inset-y-0 w-px bg-slate-200"
                            />
                          ))}

                          {/* Bar */}
                          <div
                            style={{ left: `${left}%`, width: `${width}%` }}
                            className={`absolute top-1/2 -translate-y-1/2 h-7 ${
                              item.bg
                            } ${
                              isActive ? "rounded-l-full" : "rounded-full"
                            } flex items-center justify-between px-2.5 overflow-hidden`}
                          >
                            <span className="text-white text-xs font-bold whitespace-nowrap">{item.start}</span>
                            {width > 9 && (
                              <span className="text-white text-xs font-bold whitespace-nowrap">
                                {isActive ? "►" : item.end}
                              </span>
                            )}
                          </div>

                          {/* Active pulse dot */}
                          {isActive && (
                            <div
                              style={{ left: `${left + width}%` }}
                              className="absolute top-1/2 -translate-y-1/2 -translate-x-1 w-2 h-7 rounded-r-full opacity-40 bg-current"
                            />
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Bottom axis line */}
                <div className="flex mt-2">
                  <div className="w-40 flex-shrink-0" />
                  <div className="flex-1 h-px bg-slate-200" />
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <div className="space-y-5">
          {experiences.map((exp, i) => {
            const c = colorMap[exp.color] ?? colorMap.slate;
            return (
              <AnimatedSection key={exp.company} delay={i * 0.08}>
                <div className={`bg-white border ${c.card} rounded-2xl p-6 sm:p-8 shadow-sm transition-all`}>
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-5">
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${c.badge}`}>
                          {exp.type}
                        </span>
                        <span className={`text-xs font-bold px-2.5 py-1 rounded-full bg-slate-100 ${c.year}`}>
                          {exp.badge}
                        </span>
                      </div>
                      <h2 className="text-slate-900 font-black text-xl mt-2">{exp.company}</h2>
                      <p className="text-blue-600 font-semibold text-sm mt-0.5">{exp.role}</p>
                      <p className="text-slate-500 text-xs mt-0.5">{exp.subtitle}</p>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <p className="text-slate-500 text-sm font-medium">{exp.period}</p>
                      {exp.attestation && (
                        <div className="mt-2 bg-emerald-50 border border-emerald-200 rounded-xl px-3 py-1.5">
                          <p className="text-emerald-700 text-xs font-semibold">{exp.attestation}</p>
                        </div>
                      )}
                    </div>
                  </div>

                  <p className="text-slate-600 text-sm leading-relaxed mb-5">{exp.description}</p>

                  <div>
                    <p className="text-slate-600 text-xs uppercase tracking-wider font-semibold mb-3">
                      Principais Entregas
                    </p>
                    <ul className="space-y-2">
                      {exp.highlights.map((h) => (
                        <li key={h} className="flex items-start gap-2.5">
                          <div className={`w-1.5 h-1.5 rounded-full ${c.dot} mt-1.5 flex-shrink-0`} />
                          <span className="text-slate-600 text-sm">{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {(exp as any).achievements?.length > 0 && (
                    <div className="mt-5 pt-5 border-t border-slate-100">
                      <p className="text-slate-600 text-xs uppercase tracking-wider font-semibold mb-3">
                        Casos de Sucesso
                      </p>
                      <div className="space-y-2">
                        {(exp as any).achievements.map((a: { label: string; url?: string }) => (
                          a.url ? (
                            <a
                              key={a.label}
                              href={a.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-start gap-2.5 group"
                            >
                              <ExternalLink className="w-3.5 h-3.5 text-emerald-500 mt-0.5 flex-shrink-0 group-hover:text-emerald-700 transition-colors" />
                              <span className="text-emerald-700 text-sm font-medium group-hover:underline underline-offset-2">{a.label}</span>
                            </a>
                          ) : (
                            <p key={a.label} className="text-emerald-700 text-sm font-medium">{a.label}</p>
                          )
                        ))}
                      </div>
                    </div>
                  )}

                  {exp.products.length > 0 && (
                    <div className="mt-5 pt-5 border-t border-slate-100">
                      <p className="text-slate-600 text-xs uppercase tracking-wider font-semibold mb-3">
                        Produtos Desenvolvidos
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {exp.products.map((p) => (
                          <span
                            key={p}
                            className="text-xs bg-blue-50 border border-blue-200 text-blue-700 px-3 py-1 rounded-full"
                          >
                            {p}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </AnimatedSection>
            );
          })}
        </div>

        {/* Total hours */}
        <AnimatedSection className="mt-10">
          <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <p className="text-blue-600 text-xs font-semibold uppercase tracking-widest mb-1">
                Horas Técnicas Comprovadas
              </p>
              <p className="text-slate-900 font-black text-3xl">16.800+</p>
              <p className="text-slate-600 text-sm mt-1">
                Atestadas por órgãos públicos estaduais (DETRAN/MS e SEFAZ/MS)
              </p>
            </div>
            <div className="text-right">
              <p className="text-slate-500 text-xs">DETRAN/MS: ~13.200h</p>
              <p className="text-slate-500 text-xs">SEFAZ/MS: ~3.600h</p>
            </div>
          </div>
        </AnimatedSection>
      </div>

      {/* ── Próximo capítulo ── */}
      <div className="mt-20 pt-10 border-t border-slate-100 text-center pb-8">
        <p className="text-slate-400 text-xs font-semibold uppercase tracking-widest mb-4">Próximo capítulo</p>
        <Link href="/produtos" className="inline-flex items-center gap-3 group">
          <span className="text-2xl sm:text-3xl font-black text-slate-900 group-hover:text-blue-600 transition-colors">
            Produtos & Plataformas
          </span>
          <ArrowRight className="w-6 h-6 text-blue-500 group-hover:translate-x-1.5 transition-transform" />
        </Link>
        <p className="text-slate-500 text-sm mt-3 max-w-sm mx-auto">
          7 produtos próprios criados pela IK Analytics — do ERP ao SaaS com IA
        </p>
      </div>
    </div>
  );
}
