import type { Metadata } from "next";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import { ArrowRight } from "lucide-react";
import { aiWork } from "@/lib/data";

export const metadata: Metadata = {
  title: "Inteligência Artificial",
  description:
    "Trabalhos com IA: agentes autônomos, RAG, integração com GPT, análise preditiva e automação de processos com Inteligência Artificial.",
};

const useColors: Record<string, string> = {
  blue:    "from-blue-50 to-white border-blue-200",
  violet:  "from-violet-50 to-white border-violet-200",
  emerald: "from-emerald-50 to-white border-emerald-200",
  amber:   "from-amber-50 to-white border-amber-200",
  teal:    "from-teal-50 to-white border-teal-200",
};
const badgeColors: Record<string, string> = {
  blue:    "bg-blue-100 text-blue-700",
  violet:  "bg-violet-100 text-violet-700",
  emerald: "bg-emerald-100 text-emerald-700",
  amber:   "bg-amber-100 text-amber-700",
  teal:    "bg-teal-100 text-teal-700",
};

const principles = [
  {
    num: "01",
    title: "IA Aplicada ao Negócio",
    desc: "Foco em resolver problemas reais com modelos de linguagem, automação e análise preditiva — não em tecnologia pela tecnologia.",
  },
  {
    num: "02",
    title: "Explicabilidade",
    desc: "Todo modelo implantado deve ser explicável para os stakeholders. Resultados precisam ser compreensíveis e confiáveis.",
  },
  {
    num: "03",
    title: "Dados como Base",
    desc: "IA sem dados de qualidade não funciona. A governança e a engenharia de dados são pré-requisitos de qualquer projeto de IA.",
  },
  {
    num: "04",
    title: "Iteração Rápida",
    desc: "Prototipagem ágil com MVPs de IA, validação com usuários finais e evolução incremental baseada em feedback e métricas.",
  },
];

export default function IAPage() {
  return (
    <div className="bg-white pt-24 pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* HERO */}
        <AnimatedSection className="mb-16">
          <p className="text-blue-600 text-sm font-semibold uppercase tracking-widest mb-3">IA</p>
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 leading-tight">
            Inteligência Artificial
          </h1>
          <p className="text-slate-600 text-lg max-w-3xl leading-relaxed">
            Além do BI clássico, a IA passou a ser parte fundamental do portfólio da IK Analytics —
            de agentes autônomos com GPT a modelos preditivos embarcados em produtos SaaS.
          </p>
        </AnimatedSection>

        {/* AI Projects */}
        <AnimatedSection className="mb-20">
          <h2 className="text-2xl font-black text-slate-900 mb-6">Projetos & Aplicações</h2>
          <div className="space-y-4">
            {aiWork.map((item, i) => (
              <div
                key={item.title}
                className={`bg-gradient-to-r ${useColors[item.color] ?? useColors.blue} border rounded-2xl p-6 hover:scale-[1.01] transition-transform`}
              >
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-3">
                  <div>
                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${badgeColors[item.color] ?? badgeColors.blue}`}>
                      {item.category}
                    </span>
                    <h3 className="text-slate-900 font-black text-xl mt-2">{item.title}</h3>
                  </div>
                  <div className="flex-shrink-0">
                    <span className="text-xs text-slate-500 bg-slate-100 px-3 py-1.5 rounded-full border border-slate-200">
                      {item.context}
                    </span>
                  </div>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">{item.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {item.tools.map((t) => (
                    <span key={t} className="text-xs bg-white border border-slate-200 text-slate-500 px-2.5 py-1 rounded-full">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* Principles */}
        <AnimatedSection className="mb-16">
          <h2 className="text-2xl font-black text-slate-900 mb-6">Princípios de IA</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {principles.map((p) => (
              <div key={p.num} className="bg-white border border-slate-200 shadow-sm rounded-2xl p-6 hover:border-blue-300 hover:shadow-md transition-all">
                <div className="text-blue-600 font-black text-2xl mb-3">{p.num}</div>
                <h3 className="text-slate-900 font-bold mb-2">{p.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* Tools grid */}
        <AnimatedSection>
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8">
            <h2 className="text-slate-900 font-black text-xl mb-6">Ferramentas & Ecossistema</h2>
            <div className="grid sm:grid-cols-3 gap-6 text-sm">
              {[
                {
                  title: "LLMs & APIs",
                  tools: ["OpenAI GPT-4o", "Claude (Anthropic)", "Gemini", "Groq", "Mistral"],
                },
                {
                  title: "Frameworks",
                  tools: ["LangChain", "LlamaIndex", "Windsurf", "Cursor", "n8n"],
                },
                {
                  title: "Técnicas",
                  tools: ["RAG", "Fine-tuning", "Prompt Engineering", "Function Calling", "Agentes Autônomos"],
                },
              ].map((group) => (
                <div key={group.title}>
                  <h3 className="text-blue-600 font-bold mb-3">{group.title}</h3>
                  <ul className="space-y-2">
                    {group.tools.map((t) => (
                      <li key={t} className="text-slate-600 flex items-center gap-2">
                        <span className="w-1 h-1 bg-blue-500 rounded-full flex-shrink-0" />
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* ── Próximo capítulo ── */}
        <div className="mt-20 pt-10 border-t border-slate-100 text-center pb-8">
          <p className="text-slate-400 text-xs font-semibold uppercase tracking-widest mb-4">Próximo capítulo</p>
          <Link href="/contato" className="inline-flex items-center gap-3 group">
            <span className="text-2xl sm:text-3xl font-black text-slate-900 group-hover:text-blue-600 transition-colors">
              Vamos Conversar
            </span>
            <ArrowRight className="w-6 h-6 text-blue-500 group-hover:translate-x-1.5 transition-transform" />
          </Link>
          <p className="text-slate-500 text-sm mt-3 max-w-sm mx-auto">
            Entre em contato para projetos, parcerias ou uma conversa sobre dados e IA
          </p>
        </div>
      </div>
    </div>
  );
}
