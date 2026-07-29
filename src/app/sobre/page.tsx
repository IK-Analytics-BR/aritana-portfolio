import type { Metadata } from "next";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import { timeline } from "@/lib/data";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Sobre",
  description:
    "A história profissional de Aritana Brito — como surgiu a IK Analytics, os projetos de governo e a trajetória em dados e IA.",
};

const timelineDots: Record<string, string> = {
  slate: "bg-slate-400", blue: "bg-blue-500",
  amber: "bg-amber-400", emerald: "bg-emerald-400", violet: "bg-violet-500",
};
const timelineBorders: Record<string, string> = {
  slate: "border-slate-200", blue: "border-blue-200",
  amber: "border-amber-200", emerald: "border-emerald-200", violet: "border-violet-200",
};

const pillars = [
  {
    title: "Dados como Ativo Estratégico",
    desc: "Transformar dados brutos em inteligência organizacional, sustentando decisões com evidências sólidas e análises confiáveis.",
  },
  {
    title: "Arquitetura que Escala",
    desc: "Projetar soluções que crescem com a organização — do protótipo ao ambiente produtivo, com segurança e governança.",
  },
  {
    title: "Impacto Real e Mensurável",
    desc: "Entregar valor tangível: redução de tempo, aumento de precisão, transparência e melhora de indicadores reais.",
  },
  {
    title: "IA com Responsabilidade",
    desc: "Aplicar Inteligência Artificial de forma ética, explicável e conectada às necessidades reais do negócio.",
  },
];

export default function SobrePage() {
  return (
    <div className="bg-white pt-24 pb-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">

        {/* HERO */}
        <AnimatedSection className="mb-16">
          <p className="text-blue-600 text-sm font-semibold uppercase tracking-widest mb-3">Sobre</p>
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 leading-tight">
            Uma trajetória de{" "}
            <span className="gradient-text">15 anos</span> em dados
          </h1>
          <p className="text-slate-600 text-lg leading-relaxed max-w-3xl">
            Não é um currículo. É uma história de como dados podem transformar organizações —
            do interior do Mato Grosso do Sul até secretarias estaduais e produtos SaaS reconhecidos
            no mercado nacional.
          </p>
        </AnimatedSection>

        {/* NARRATIVE */}
        <div className="grid md:grid-cols-3 gap-10 mb-20">
          <AnimatedSection direction="left" className="md:col-span-2 space-y-5 text-slate-600 leading-relaxed">
            <p>
              A história começa em <span className="text-slate-900 font-medium">2009</span>, na{" "}
              <span className="text-slate-900 font-medium">D.F. Moura Informática</span>, onde a
              gestão comercial e a administração de banco de dados SQL Server plantaram a semente
              de uma carreira dedicada à tecnologia e à inteligência em dados.
            </p>
            <p>
              Em <span className="text-slate-900 font-medium">2013</span>, surgiu a{" "}
              <span className="text-blue-600 font-semibold">IK Analytics</span>. O objetivo era claro:
              criar uma empresa que unisse rigor técnico com visão estratégica, capaz de entregar
              soluções de dados de alto impacto tanto para o setor público quanto para empresas privadas.
            </p>
            <p>
              O grande salto veio em <span className="text-slate-900 font-medium">2015</span>, com a chegada
              à <span className="text-slate-900 font-medium">SEFAZ/MS</span> — Secretaria de Estado de
              Fazenda do Mato Grosso do Sul. Ali foi construída a modernização completa do ambiente de
              BI da Secretaria, com migração de MicroStrategy para Qlik Sense e Tableau, dashboards
              de arrecadação e inteligência fiscal.
            </p>
            <p>
              Em <span className="text-slate-900 font-medium">2018</span>, veio o projeto mais desafiador:
              o <span className="text-slate-900 font-medium">DETRAN/MS</span>. O ambiente de BI foi
              evoluído com migração de MicroStrategy para Tableau e depois para Qlik Sense, com
              reformulação completa das cargas ETL. Em 7 anos foram{" "}
              <span className="text-slate-900 font-medium">13.200+ horas técnicas atestadas</span>.
              O RENAEST coordenado tornou-se o melhor processo de envio de dados do país —{" "}
              <span className="text-blue-600 font-semibold">reconhecido pelo SENATRAN com Selo de Excelência</span>{" "}
              por vários anos consecutivos. Também foram entregues o MAC (Monitoramento Anti-Corrupção),
              Portal de Transparência, Dados Abertos e inteligência territorial com PostGIS e QGIS.
            </p>
            <p>
              Em paralelo, a IK Analytics evoluiu para um portfólio de{" "}
              <span className="text-slate-900 font-medium">7 produtos próprios</span> e atendeu clientes
              como a <span className="text-slate-900 font-medium">Prefeitura de Corumbá/MS</span> com
              inteligência territorial e dados municipais — do ERP multinacional ao SaaS imobiliário
              com IA, passando por plataformas de inteligência eleitoral, territorial e agronegócio.
            </p>
            <p>
              Ainda em <span className="text-slate-900 font-medium">2021</span>, em paralelo ao DETRAN/MS,
              iniciou consultoria na{" "}
              <span className="text-slate-900 font-medium">Bluetrix Tecnologia</span> — atendendo
              secretarias estaduais de <span className="text-slate-900 font-medium">Rondônia</span> e{" "}
              <span className="text-slate-900 font-medium">Mato Grosso do Sul</span> com o ERP Xadrez
              e soluções de BI governamental. A atuação simultânea em três frentes (IK Analytics,
              DETRAN/MS e Bluetrix) evidencia a capacidade de gestão paralela de projetos de alto impacto.
            </p>
          </AnimatedSection>

          <AnimatedSection direction="right" className="space-y-4">
            {/* Formação */}
            <div className="bg-white border border-slate-200 shadow-sm rounded-2xl p-6">
              <h3 className="text-slate-900 font-bold text-sm mb-4 uppercase tracking-wider">
                Formação
              </h3>
              <ul className="space-y-3 text-sm">
                {[
                  { degree: "Administração", inst: "Centro Universitário Anhanguera" },
                  { degree: "Ciências Contábeis", inst: "Centro Universitário Anhanguera" },
                  { degree: "Técnico em Informática", inst: "SENAC/MS" },
                  { degree: "MBA em Inteligência Artificial", inst: "PUC Minas" },
                ].map((f) => (
                  <li key={f.degree}>
                    <p className="text-slate-900 font-medium">{f.degree}</p>
                    <p className="text-slate-500 text-xs">{f.inst}</p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Prêmio */}
            <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6">
              <p className="text-amber-600 text-xs font-semibold uppercase tracking-widest mb-2">
                Prêmio
              </p>
              <p className="text-slate-900 font-bold text-sm">
                Desafio Empreendedor Anhanguera
              </p>
              <p className="text-slate-600 text-xs mt-1">
                Reconhecimento pela Aliança Empreendedora pelo projeto de impacto
                social e inovação em negócios — edição nacional.
              </p>
            </div>

            {/* Destaque DETRAN/MS */}
            <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6">
              <p className="text-emerald-600 text-xs font-semibold uppercase tracking-widest mb-2">
                Destaque DETRAN/MS
              </p>
              <p className="text-slate-900 font-bold text-sm">
                Reconhecimento SENATRAN — Selo de Excelência
              </p>
              <p className="text-slate-600 text-xs mt-1">
                Processo de envio de dados estatísticos do RENAEST/MS considerado
                o melhor do país pelo SENATRAN por vários anos consecutivos.
              </p>
            </div>

            {/* Destaque Transparência */}
            <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6">
              <p className="text-blue-600 text-xs font-semibold uppercase tracking-widest mb-2">
                Destaque Transparência DETRAN/MS
              </p>
              <p className="text-slate-900 font-bold text-sm">
                Portal de Transparência & Dados Abertos
              </p>
              <p className="text-slate-600 text-xs mt-1">
                Desenvolvimento e publicação do portal de transparência, dados
                abertos e MAC (Monitoramento Anti-Corrupção) do DETRAN/MS.
              </p>
            </div>
          </AnimatedSection>
        </div>

        {/* PILLARS */}
        <AnimatedSection className="mb-20">
          <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-8">Pilares de Trabalho</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {pillars.map((p, i) => (
              <div
                key={p.title}
                className="bg-white border border-slate-200 shadow-sm rounded-2xl p-6 hover:border-blue-300 hover:shadow-md transition-all"
              >
                <div className="text-blue-600 font-black text-2xl mb-2">0{i + 1}</div>
                <h3 className="text-slate-900 font-bold mb-2">{p.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* TIMELINE */}
        <AnimatedSection className="mb-16">
          <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-8">Linha do Tempo</h2>
          <div className="space-y-0">
            {timeline.map((item, i) => (
              <div key={item.year} className="flex gap-5">
                <div className="flex flex-col items-center">
                  <div className={`w-3 h-3 rounded-full flex-shrink-0 ${timelineDots[item.color]} mt-1.5`} />
                  {i < timeline.length - 1 && (
                    <div className="w-px flex-1 bg-slate-200 my-2 min-h-[3rem]" />
                  )}
                </div>
                <div className={`pb-8 flex-1 border-l-0`}>
                  <div className={`bg-white border shadow-sm ${timelineBorders[item.color]} rounded-2xl p-5 mb-0`}>
                    <span className="text-blue-600 font-black text-lg">{item.year}</span>
                    <h3 className="text-slate-900 font-bold mt-0.5">{item.label}</h3>
                    <p className="text-slate-500 text-sm mt-1">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* CTA */}
        {/* Curiosidade: Origens */}
        <AnimatedSection className="mb-10">
          <Link
            href="/origens"
            className="group flex flex-col sm:flex-row items-center gap-4 bg-amber-50 border border-amber-200 hover:border-amber-400 hover:bg-amber-100 rounded-2xl p-6 transition-all"
          >
            <div className="w-12 h-12 rounded-xl bg-amber-400 flex items-center justify-center text-white text-xl font-black flex-shrink-0">
              ✦
            </div>
            <div className="text-center sm:text-left flex-1">
              <p className="text-amber-700 text-xs font-semibold uppercase tracking-widest mb-1">Curiosidade</p>
              <p className="text-slate-900 font-black text-lg">A história que nenhum currículo conta</p>
              <p className="text-slate-500 text-sm mt-0.5">
                De engraxate aos 10 anos a destaque nacional — tudo que ficou de fora do LinkedIn.
              </p>
            </div>
            <ArrowRight className="w-5 h-5 text-amber-500 group-hover:translate-x-1 transition-transform flex-shrink-0" />
          </Link>
        </AnimatedSection>

        <AnimatedSection className="text-center">
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/experiencia"
              className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold px-8 py-3.5 rounded-full transition-colors text-sm"
            >
              Ver Experiência Completa <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/produtos"
              className="inline-flex items-center justify-center gap-2 border border-slate-200 hover:border-blue-300 hover:bg-blue-50 text-slate-600 hover:text-blue-600 font-semibold px-8 py-3.5 rounded-full transition-all text-sm"
            >
              Ver Produtos
            </Link>
          </div>
        </AnimatedSection>

      </div>
    </div>
  );
}
