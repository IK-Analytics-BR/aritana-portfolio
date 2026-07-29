import type { Metadata } from "next";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Origens",
  description:
    "A história que nenhum currículo conta — de engraxate aos 10 anos a destaque nacional em tecnologia. A trajetória completa de Aritana Brito.",
};

const chapters = [
  {
    age: "10 anos",
    title: "O primeiro emprego",
    place: "Campo Grande, MS — Salão de Beleza",
    color: "amber",
    icon: "✦",
    content: [
      "Antes de qualquer banco de dados, dashboard ou sistema, havia uma criança de 10 anos com escova e graxa nas mãos. Foi em um salão de beleza que tudo começou: engraxando sapatos, de forma informal, enquanto estudava.",
      "Por sete anos esse ritmo de estudar e trabalhar ao mesmo tempo não foi exceção — foi regra. A disciplina de conciliar escola e trabalho cedo moldaria, sem que soubesse ainda, tudo que viria depois.",
    ],
  },
  {
    age: "10–17 anos",
    title: "Muitos empregos, uma só determinação",
    place: "Campo Grande, MS — Trabalhos paralelos",
    color: "slate",
    icon: "◈",
    content: [
      "Nessa época o trabalho não tinha horário fixo. No intervalo do almoço, a bicicleta cruzava o Jardim dos Estados entregando marmitas de um restaurante caseiro da vizinhança. Nos fins de semana, quando precisavam de reforço, era no lava-jato. Entre um turno e outro, uma passagem pela conveniência de bebidas e festas.",
      "Múltiplos empregos, uma só determinação: sempre em frente.",
    ],
  },
  {
    age: "17 anos",
    title: "O escritório de advocacia",
    place: "Campo Grande, MS",
    color: "blue",
    icon: "◆",
    content: [
      "Aos 17 anos veio a primeira experiência formal em ambiente de escritório — um breve período em um escritório de advocacia. Curto, mas formador: foi o primeiro contato com rotina profissional estruturada, documentos, prazos e responsabilidade institucional.",
    ],
  },
  {
    age: "Jovem adulto",
    title: "São Paulo — A grande aventura",
    place: "São Paulo, SP — Feiras e Produção",
    color: "emerald",
    icon: "★",
    content: [
      "Com a mochila nas costas e a cabeça cheia de planos, São Paulo foi o próximo destino. Para estudar. Para crescer. Para provar que dava certo.",
      "O trabalho veio logo: uma empresa familiar de pastéis e caldo de cana. Familiar não significava pequena — eram 10 barracas espalhadas pelas feiras da cidade, cada dia em um lugar diferente. Mais de 5.000 pastéis saíam da produção diariamente. Era uma operação de verdade, e nela aprendeu sobre produção em escala, logística, atendimento ao público e liderança na prática, bem antes de qualquer sala de aula ensiná-las.",
      "Destacou-se rapidamente e acabou atuando em todas as áreas da empresa — da produção ao atendimento.",
      "Na última semana do curso, foi contratado pela JN Moura Informática — a D.F. Moura — iniciando como suporte técnico. O esforço de estudar e trabalhar ao mesmo tempo finalmente se convertia em uma oportunidade formal na área de tecnologia.",
    ],
  },
  {
    age: "São Paulo",
    title: "O preço da cidade grande",
    place: "São Paulo, SP — D.F. Moura",
    color: "rose",
    icon: "⚡",
    content: [
      "São Paulo cobrou seu preço. Já trabalhando na D.F. Moura, foram mais de sete assaltos ao longo desse período na cidade. No último, não ficou parado — revidou.",
      "Tudo que havia conquistado, a violência havia levado. Era hora de voltar para Campo Grande.",
    ],
  },
  {
    age: "Retorno",
    title: "A proposta que mudou tudo",
    place: "Campo Grande, MS — D.F. Moura Informática",
    color: "blue",
    icon: "◉",
    content: [
      "O chefe sabia do que era capaz. Ao invés de uma despedida comum, fez uma proposta que mudaria o rumo de tudo:",
      null, // quote
      "Voltou. Sem clientes. Sem carteira estabelecida. Com uma meta de 1 ano e a mesma determinação dos 10 anos de graxa nas mãos.",
    ],
    quote: "\"Você não vai voltar de mão vazia. Vou te dar a oportunidade de abrir a filial em Campo Grande.\"",
  },
  {
    age: "6 meses",
    title: "Meta de 1 ano — batida em 6 meses",
    place: "Campo Grande, MS — Destaque Nacional",
    color: "emerald",
    icon: "🏆",
    content: [
      "O que veio depois foi destaque nacional: maior volume de novos clientes e contratos com ticket médio entre os mais altos da empresa em todo o Brasil.",
      "Não por acaso. Por tudo que veio antes — cada feira, cada entrega de marmita, cada fim de semana no lava-jato e cada sapato engraxado tinham construído, tijolo a tijolo, a disciplina, a resiliência e o instinto comercial que nenhum treinamento corporativo substitui.",
    ],
  },
];

const colorMap: Record<string, { bg: string; border: string; badge: string; icon: string }> = {
  amber:   { bg: "bg-amber-50",   border: "border-amber-200",   badge: "bg-amber-100 text-amber-700",   icon: "text-amber-500"   },
  slate:   { bg: "bg-slate-50",   border: "border-slate-200",   badge: "bg-slate-100 text-slate-600",   icon: "text-slate-400"   },
  blue:    { bg: "bg-blue-50",    border: "border-blue-200",    badge: "bg-blue-100 text-blue-700",     icon: "text-blue-500"    },
  emerald: { bg: "bg-emerald-50", border: "border-emerald-200", badge: "bg-emerald-100 text-emerald-700",icon: "text-emerald-500" },
  rose:    { bg: "bg-rose-50",    border: "border-rose-200",    badge: "bg-rose-100 text-rose-700",     icon: "text-rose-500"    },
  violet:  { bg: "bg-violet-50",  border: "border-violet-200",  badge: "bg-violet-100 text-violet-700", icon: "text-violet-500"  },
};

export default function OrigensPage() {
  return (
    <div className="bg-white pt-24 pb-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <AnimatedSection className="mb-14 text-center">
          <span className="inline-flex items-center gap-2 bg-amber-50 border border-amber-200 text-amber-700 text-xs font-semibold px-4 py-2 rounded-full mb-6 uppercase tracking-wider">
            ✦ Curiosidade
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-slate-900 leading-tight mb-4">
            A História que Nenhum<br />
            <span className="text-amber-500">Currículo Conta</span>
          </h1>
          <p className="text-slate-500 text-lg max-w-xl mx-auto leading-relaxed">
            De engraxate aos 10 anos a destaque nacional em tecnologia — a trajetória completa,
            com tudo que ficou de fora do LinkedIn.
          </p>
        </AnimatedSection>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-slate-100 hidden sm:block" />

          <div className="space-y-8">
            {chapters.map((ch, i) => {
              const c = colorMap[ch.color] ?? colorMap.slate;
              return (
                <AnimatedSection key={ch.title} delay={i * 0.07}>
                  <div className="sm:pl-16 relative">
                    {/* Timeline dot */}
                    <div className={`hidden sm:flex absolute left-0 top-5 w-12 h-12 rounded-full border-2 ${c.border} ${c.bg} items-center justify-center text-lg ${c.icon} font-black z-10`}>
                      {ch.icon}
                    </div>

                    <div className={`border ${c.border} ${c.bg} rounded-2xl p-6 shadow-sm`}>
                      {/* Badge */}
                      <div className="flex flex-wrap items-center gap-2 mb-3">
                        <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${c.badge}`}>
                          {ch.age}
                        </span>
                        <span className="text-xs text-slate-400">{ch.place}</span>
                      </div>

                      <h2 className="text-slate-900 font-black text-xl mb-3">{ch.title}</h2>

                      <div className="space-y-3">
                        {ch.content.map((p, j) =>
                          p === null ? (
                            ch.quote && (
                              <blockquote
                                key={j}
                                className="border-l-4 border-blue-400 pl-4 italic text-slate-700 text-sm leading-relaxed my-3"
                              >
                                {ch.quote}
                              </blockquote>
                            )
                          ) : (
                            <p key={j} className="text-slate-600 text-sm leading-relaxed">
                              {p}
                            </p>
                          )
                        )}
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>

        {/* Closing note */}
        <AnimatedSection className="mt-14">
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 text-center">
            <p className="text-slate-400 text-xs uppercase tracking-widest mb-4">E o que veio depois…</p>
            <p className="text-white font-black text-2xl sm:text-3xl mb-3">
              Você já conhece.
            </p>
            <p className="text-slate-300 text-sm leading-relaxed max-w-md mx-auto">
              De volta a Campo Grande vieram mais faculdades, a fundação da IK Analytics,
              7 anos no DETRAN/MS, projetos em três estados e mais de 15 anos transformando
              dados em decisões para órgãos públicos e empresas privadas.
            </p>
          </div>
        </AnimatedSection>

        {/* Next chapter CTA */}
        <div className="mt-16 pt-10 border-t border-slate-100 text-center pb-4">
          <p className="text-slate-400 text-xs font-semibold uppercase tracking-widest mb-4">Próximo capítulo</p>
          <Link href="/experiencia" className="inline-flex items-center gap-3 group">
            <span className="text-2xl sm:text-3xl font-black text-slate-900 group-hover:text-blue-600 transition-colors">
              Trajetória Profissional
            </span>
            <ArrowRight className="w-6 h-6 text-blue-500 group-hover:translate-x-1.5 transition-transform" />
          </Link>
          <p className="text-slate-500 text-sm mt-3 max-w-sm mx-auto">
            15+ anos de atuação em BI, dados e tecnologia — agora com datas, empresas e resultados
          </p>
        </div>

      </div>
    </div>
  );
}
