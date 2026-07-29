import type { Metadata } from "next";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import { ArrowRight } from "lucide-react";
import { skillGroups } from "@/lib/data";

export const metadata: Metadata = {
  title: "Tecnologias",
  description:
    "Stack tecnológico completo: BI, Bancos de Dados, Cloud, DevOps, Linguagens de Programação e Geoespacial.",
};

const groupColors: Record<string, { header: string; tag: string; dot: string }> = {
  blue:    { header: "border-blue-200 bg-blue-50",    tag: "bg-blue-100 border-blue-200 text-blue-700",    dot: "bg-blue-500"    },
  violet:  { header: "border-violet-200 bg-violet-50", tag: "bg-violet-100 border-violet-200 text-violet-700", dot: "bg-violet-500"  },
  emerald: { header: "border-emerald-200 bg-emerald-50",tag: "bg-emerald-100 border-emerald-200 text-emerald-700",dot: "bg-emerald-500"},
  amber:   { header: "border-amber-200 bg-amber-50",   tag: "bg-amber-100 border-amber-200 text-amber-700",   dot: "bg-amber-500"   },
  teal:    { header: "border-teal-200 bg-teal-50",     tag: "bg-teal-100 border-teal-200 text-teal-700",     dot: "bg-teal-500"    },
  rose:    { header: "border-rose-200 bg-rose-50",     tag: "bg-rose-100 border-rose-200 text-rose-700",     dot: "bg-rose-500"    },
  cyan:    { header: "border-cyan-200 bg-cyan-50",     tag: "bg-cyan-100 border-cyan-200 text-cyan-700",     dot: "bg-cyan-500"    },
  slate:   { header: "border-slate-200 bg-slate-50",   tag: "bg-slate-100 border-slate-200 text-slate-700",  dot: "bg-slate-500"   },
};

export default function TecnologiasPage() {
  return (
    <div className="bg-white pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        <AnimatedSection className="mb-14">
          <p className="text-blue-600 text-sm font-semibold uppercase tracking-widest mb-3">Stack</p>
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">
            Tecnologias & Ferramentas
          </h1>
          <p className="text-slate-600 text-lg max-w-2xl leading-relaxed">
            30+ tecnologias dominadas ao longo de 15 anos — de bancos de dados a ferramentas
            de Business Intelligence, linguagens de programação e infraestrutura cloud.
          </p>
        </AnimatedSection>

        {/* Summary counts */}
        <AnimatedSection className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-14">
          {[
            { value: "10+", label: "Ferramentas de BI" },
            { value: "8+",  label: "Bancos de Dados"   },
            { value: "6+",  label: "Linguagens"        },
            { value: "30+", label: "Total de Skills"   },
          ].map((s) => (
            <div key={s.label} className="bg-white border border-slate-200 shadow-sm rounded-2xl p-5 text-center">
              <div className="text-slate-900 font-black text-3xl">{s.value}</div>
              <div className="text-slate-500 text-xs mt-1">{s.label}</div>
            </div>
          ))}
        </AnimatedSection>

        {/* Skill groups */}
        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
          {skillGroups.map((group, i) => {
            const c = groupColors[group.color] ?? groupColors.slate;
            return (
              <AnimatedSection key={group.title} delay={i * 0.07}>
                <div className="bg-white border border-slate-200 shadow-sm rounded-2xl overflow-hidden hover:border-blue-300 hover:shadow-md transition-all h-full">
                  {/* Header */}
                  <div className={`px-6 py-4 border-b ${c.header}`}>
                    <h2 className="text-slate-900 font-black text-lg">{group.title}</h2>
                    <p className="text-slate-500 text-xs mt-0.5">{group.skills.length} tecnologias</p>
                  </div>
                  {/* Skills */}
                  <div className="p-5">
                    <div className="flex flex-wrap gap-2">
                      {group.skills.map((skill) => (
                        <span
                          key={skill.name}
                          className={`text-xs font-medium px-3 py-1.5 rounded-full border ${c.tag} flex items-center gap-1.5`}
                        >
                          <span className={`w-1 h-1 rounded-full ${c.dot} flex-shrink-0`} />
                          {skill.name}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>

        {/* Context note */}
        <AnimatedSection className="mt-14">
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8">
            <h2 className="text-slate-900 font-black text-xl mb-4">Contexto de Aplicação</h2>
            <div className="grid sm:grid-cols-3 gap-6 text-sm">
              {[
                {
                  title: "Setor Público",
                  desc: "PostgreSQL, PostGIS, QGIS, Qlik Sense, Tableau, Python — em DETRAN/MS e SEFAZ/MS para dashboards de trânsito, fiscais e dados abertos.",
                },
                {
                  title: "Produtos SaaS",
                  desc: "Python, Flask, MySQL, React, Chart.js, APIs REST, Docker — nos produtos IK Flow, IK Commerce, Cobratto e BIAgri.",
                },
                {
                  title: "Inteligência Artificial",
                  desc: "OpenAI GPT, LangChain, Claude, prompting avançado, RAG, fine-tuning, automação de código e análise de dados com LLMs.",
                },
              ].map((ctx) => (
                <div key={ctx.title}>
                  <h3 className="text-blue-600 font-bold mb-2">{ctx.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{ctx.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
        {/* ── Próximo capítulo ── */}
        <div className="mt-20 pt-10 border-t border-slate-100 text-center pb-8">
          <p className="text-slate-400 text-xs font-semibold uppercase tracking-widest mb-4">Próximo capítulo</p>
          <Link href="/ia" className="inline-flex items-center gap-3 group">
            <span className="text-2xl sm:text-3xl font-black text-slate-900 group-hover:text-blue-600 transition-colors">
              Inteligência Artificial
            </span>
            <ArrowRight className="w-6 h-6 text-blue-500 group-hover:translate-x-1.5 transition-transform" />
          </Link>
          <p className="text-slate-500 text-sm mt-3 max-w-sm mx-auto">
            Agentes autônomos, RAG, GPT e IA aplicada a problemas reais
          </p>
        </div>
      </div>
    </div>
  );
}
