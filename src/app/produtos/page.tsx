import type { Metadata } from "next";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import { products } from "@/lib/data";
import { ExternalLink, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Produtos",
  description:
    "Plataformas desenvolvidas pela IK Analytics: IK Flow, IK Commerce, Cobratto, DataVoto, MAP Gest360, BIAgri.",
};

const colorMap: Record<string, { card: string; badge: string; btn: string }> = {
  blue:    { card: "border-blue-200 hover:border-blue-400 hover:shadow-md",    badge: "bg-blue-100 text-blue-700",    btn: "bg-blue-50 hover:bg-blue-100 text-blue-700"    },
  violet:  { card: "border-violet-200 hover:border-violet-400 hover:shadow-md", badge: "bg-violet-100 text-violet-700", btn: "bg-violet-50 hover:bg-violet-100 text-violet-700"  },
  emerald: { card: "border-emerald-200 hover:border-emerald-400 hover:shadow-md",badge:"bg-emerald-100 text-emerald-700",btn:"bg-emerald-50 hover:bg-emerald-100 text-emerald-700"},
  amber:   { card: "border-amber-200 hover:border-amber-400 hover:shadow-md",   badge: "bg-amber-100 text-amber-700",   btn: "bg-amber-50 hover:bg-amber-100 text-amber-700"   },
  teal:    { card: "border-teal-200 hover:border-teal-400 hover:shadow-md",     badge: "bg-teal-100 text-teal-700",     btn: "bg-teal-50 hover:bg-teal-100 text-teal-700"     },
  green:   { card: "border-green-200 hover:border-green-400 hover:shadow-md",   badge: "bg-green-100 text-green-700",   btn: "bg-green-50 hover:bg-green-100 text-green-700"   },
};

export default function ProdutosPage() {
  return (
    <div className="bg-white pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        <AnimatedSection className="mb-14">
          <p className="text-blue-600 text-sm font-semibold uppercase tracking-widest mb-3">
            Produtos & Plataformas
          </p>
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">
            Soluções Desenvolvidas
          </h1>
          <p className="text-slate-600 text-lg max-w-2xl leading-relaxed">
            Seis plataformas corporativas construídas pela IK Analytics — do ERP multinacional à
            inteligência geoespacial para o governo municipal.
          </p>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
          {products.map((p, i) => {
            const c = colorMap[p.color] ?? colorMap.blue;
            return (
              <AnimatedSection key={p.slug} delay={i * 0.07}>
                <div className={`h-full flex flex-col bg-white border ${c.card} rounded-2xl overflow-hidden shadow-sm transition-all group`}>
                  {/* Card header */}
                  <div className="p-6 pb-4">
                    <div className="flex items-start justify-between mb-4">
                      <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${c.badge}`}>
                        {p.category}
                      </span>
                      <span className="text-xs bg-emerald-50 text-emerald-700 border border-emerald-200 px-2 py-0.5 rounded-full">
                        {p.status}
                      </span>
                    </div>
                    <h2 className="text-slate-900 font-black text-2xl mb-1">{p.name}</h2>
                    <p className="text-slate-500 text-sm italic">{p.tagline}</p>
                  </div>

                  {/* Description */}
                  <div className="px-6 pb-4 flex-1">
                    <p className="text-slate-600 text-sm leading-relaxed line-clamp-4">{p.description}</p>
                  </div>

                  {/* Highlights */}
                  <div className="px-6 py-4 border-t border-slate-100">
                    <div className="grid grid-cols-3 gap-3">
                      {p.highlights.map((h) => (
                        <div key={h.label} className="text-center">
                          <div className="text-slate-900 font-black text-sm">{h.value}</div>
                          <div className="text-slate-600 text-xs leading-tight mt-0.5">{h.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="px-6 pb-4">
                    <div className="flex flex-wrap gap-1.5">
                      {p.tags.slice(0, 4).map((t) => (
                        <span key={t} className="text-xs bg-slate-100 border border-slate-200 text-slate-500 px-2 py-0.5 rounded-full">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="px-6 pb-6 flex gap-2">
                    <Link
                      href={`/produtos/${p.slug}`}
                      className="flex-1 inline-flex items-center justify-center gap-1.5 bg-blue-50 hover:bg-blue-100 text-blue-700 text-sm font-semibold py-2.5 rounded-xl transition-colors"
                    >
                      Ver detalhes <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                    <a
                      href={p.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-2.5 rounded-xl ${c.btn} transition-colors`}
                      title="Acessar plataforma"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>

        {/* ── Próximo capítulo ── */}
        <div className="mt-20 pt-10 border-t border-slate-100 text-center pb-8">
          <p className="text-slate-400 text-xs font-semibold uppercase tracking-widest mb-4">Próximo capítulo</p>
          <Link href="/tecnologias" className="inline-flex items-center gap-3 group">
            <span className="text-2xl sm:text-3xl font-black text-slate-900 group-hover:text-blue-600 transition-colors">
              Stack Tecnológico
            </span>
            <ArrowRight className="w-6 h-6 text-blue-500 group-hover:translate-x-1.5 transition-transform" />
          </Link>
          <p className="text-slate-500 text-sm mt-3 max-w-sm mx-auto">
            As tecnologias, ferramentas e linguagens que sustentam cada solução
          </p>
        </div>
      </div>
    </div>
  );
}
