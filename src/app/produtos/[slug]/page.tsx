import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { products } from "@/lib/data";
import AnimatedSection from "@/components/AnimatedSection";
import { ExternalLink, ArrowLeft, Check } from "lucide-react";

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const product = products.find((p) => p.slug === params.slug);
  if (!product) return { title: "Produto não encontrado" };
  return {
    title: product.name,
    description: product.description,
  };
}

const colorMap: Record<string, { hero: string; badge: string; tagBg: string; highlight: string; checkDot: string }> = {
  blue:    { hero: "from-blue-50 to-white",    badge: "bg-blue-100 text-blue-700 border border-blue-200",    tagBg: "bg-blue-100 border-blue-200 text-blue-700",    highlight: "bg-blue-50 border-blue-200",   checkDot: "text-blue-600"    },
  violet:  { hero: "from-violet-50 to-white",  badge: "bg-violet-100 text-violet-700 border border-violet-200", tagBg: "bg-violet-100 border-violet-200 text-violet-700", highlight: "bg-violet-50 border-violet-200", checkDot: "text-violet-600"  },
  emerald: { hero: "from-emerald-50 to-white", badge: "bg-emerald-100 text-emerald-700 border border-emerald-200",tagBg:"bg-emerald-100 border-emerald-200 text-emerald-700",highlight:"bg-emerald-50 border-emerald-200",checkDot:"text-emerald-600"},
  amber:   { hero: "from-amber-50 to-white",   badge: "bg-amber-100 text-amber-700 border border-amber-200",   tagBg: "bg-amber-100 border-amber-200 text-amber-700",   highlight: "bg-amber-50 border-amber-200",   checkDot: "text-amber-600"   },
  teal:    { hero: "from-teal-50 to-white",    badge: "bg-teal-100 text-teal-700 border border-teal-200",    tagBg: "bg-teal-100 border-teal-200 text-teal-700",    highlight: "bg-teal-50 border-teal-200",   checkDot: "text-teal-600"    },
  green:   { hero: "from-green-50 to-white",   badge: "bg-green-100 text-green-700 border border-green-200",   tagBg: "bg-green-100 border-green-200 text-green-700",   highlight: "bg-green-50 border-green-200",   checkDot: "text-green-600"   },
};

export default function ProductPage({ params }: Props) {
  const product = products.find((p) => p.slug === params.slug);
  if (!product) notFound();

  const c = colorMap[product.color] ?? colorMap.blue;

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className={`pt-24 pb-16 bg-gradient-to-b ${c.hero} border-b border-slate-100`}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <AnimatedSection>
            <Link
              href="/produtos"
              className="inline-flex items-center gap-1.5 text-slate-500 hover:text-slate-900 text-sm mb-8 transition-colors group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Todos os produtos
            </Link>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className={`text-xs font-semibold px-3 py-1.5 rounded-full ${c.badge}`}>
                {product.category}
              </span>
              <span className="text-xs bg-emerald-50 border border-emerald-200 text-emerald-700 px-3 py-1.5 rounded-full">
                {product.status}
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-3 leading-tight">
              {product.name}
            </h1>
            <p className="text-slate-500 text-xl italic mb-6">{product.tagline}</p>
            <p className="text-slate-600 text-lg max-w-3xl leading-relaxed">{product.description}</p>
          </AnimatedSection>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 pb-20">

        {/* KPI Highlights */}
        <AnimatedSection className="grid grid-cols-3 gap-4 mb-14 -mt-4">
          {product.highlights.map((h) => (
            <div key={h.label} className={`${c.highlight} border rounded-2xl p-5 text-center`}>
              <div className="text-slate-900 font-black text-2xl sm:text-3xl">{h.value}</div>
              <div className="text-slate-500 text-xs mt-1">{h.label}</div>
            </div>
          ))}
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-10">

            {/* Long description */}
            <AnimatedSection>
              <h2 className="text-slate-900 font-black text-2xl mb-4">Sobre o Produto</h2>
              <p className="text-slate-600 leading-relaxed">{product.description}</p>
            </AnimatedSection>

            {/* Features */}
            <AnimatedSection>
              <h2 className="text-slate-900 font-black text-2xl mb-5">Funcionalidades</h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {product.features.map((f) => (
                  <div key={f} className="flex items-start gap-3 bg-white border border-slate-200 shadow-sm rounded-xl p-3.5">
                    <Check className={`w-4 h-4 ${c.checkDot} flex-shrink-0 mt-0.5`} />
                    <span className="text-slate-700 text-sm">{f}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            {/* Architecture */}
            {product.architecture.length > 0 && (
              <AnimatedSection>
                <h2 className="text-slate-900 font-black text-2xl mb-4">Pipeline de Arquitetura</h2>
                <div className="flex flex-wrap items-center gap-2">
                  {product.architecture.map((layer, idx) => (
                    <div key={layer} className="flex items-center gap-2">
                      <span className="bg-slate-100 border border-slate-200 text-slate-700 text-sm px-3 py-1.5 rounded-xl">
                        {layer}
                      </span>
                      {idx < product.architecture.length - 1 && (
                        <span className="text-slate-400">→</span>
                      )}
                    </div>
                  ))}
                </div>
              </AnimatedSection>
            )}
          </div>

          {/* Sidebar */}
          <AnimatedSection direction="right" className="space-y-5">
            {/* Tech stack */}
            <div className="bg-white border border-slate-200 shadow-sm rounded-2xl p-6">
              <h3 className="text-slate-900 font-bold text-sm uppercase tracking-wider mb-4">Stack Tecnológico</h3>
              <div className="flex flex-wrap gap-2">
                {product.techStack.map((t) => (
                  <span key={t} className={`text-xs px-2.5 py-1 rounded-full border ${c.tagBg}`}>{t}</span>
                ))}
              </div>
            </div>

            {/* Tags */}
            <div className="bg-white border border-slate-200 shadow-sm rounded-2xl p-6">
              <h3 className="text-slate-900 font-bold text-sm uppercase tracking-wider mb-4">Categorias</h3>
              <div className="flex flex-wrap gap-1.5">
                {product.tags.map((t) => (
                  <span key={t} className="text-xs bg-slate-100 border border-slate-200 text-slate-500 px-2.5 py-1 rounded-full">{t}</span>
                ))}
              </div>
            </div>

            {/* CTA */}
            <a
              href={product.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-3.5 rounded-2xl transition-colors text-sm"
            >
              <ExternalLink className="w-4 h-4" />
              Acessar Plataforma
            </a>
          </AnimatedSection>
        </div>

        {/* Related products */}
        <AnimatedSection className="mt-16">
          <h2 className="text-slate-900 font-black text-2xl mb-6">Outros Produtos</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {products
              .filter((p) => p.slug !== product.slug)
              .slice(0, 3)
              .map((p) => (
                <Link
                  key={p.slug}
                  href={`/produtos/${p.slug}`}
                  className="bg-white border border-slate-200 hover:border-blue-300 hover:shadow-sm rounded-2xl p-4 transition-all"
                >
                  <span className="text-xs text-slate-500">{p.category}</span>
                  <p className="text-slate-900 font-bold mt-1">{p.name}</p>
                  <p className="text-slate-500 text-xs mt-1 line-clamp-2">{p.tagline}</p>
                </Link>
              ))}
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
