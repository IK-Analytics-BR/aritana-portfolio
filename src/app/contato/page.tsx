import type { Metadata } from "next";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import { Mail, Linkedin, MapPin, Globe, ArrowRight, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Contato",
  description:
    "Entre em contato com Aritana Brito para projetos de BI, Engenharia de Dados, IA e Transformação Digital.",
};

const contactCards = [
  {
    icon: Mail,
    label: "E-mail",
    value: "aritana@ikanalytics.com.br",
    href: "mailto:aritana@ikanalytics.com.br",
    cta: "Enviar e-mail",
    color: "blue",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "(67) 98175-0909",
    href: "https://wa.me/5567981750909",
    cta: "Enviar mensagem",
    color: "emerald",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/aritanabrito",
    href: "https://linkedin.com/in/aritanabrito",
    cta: "Ver perfil",
    color: "blue",
  },
  {
    icon: Globe,
    label: "IK Analytics",
    value: "ikanalytics.com.br",
    href: "https://ikanalytics.com.br",
    cta: "Visitar site",
    color: "violet",
  },
  {
    icon: MapPin,
    label: "Localização",
    value: "Campo Grande, MS — Brasil",
    href: null,
    cta: null,
    color: "emerald",
  },
];

const colorMap: Record<string, { card: string; icon: string; btn: string }> = {
  blue:    { card: "border-blue-200 hover:border-blue-400 hover:shadow-sm",    icon: "bg-blue-50 text-blue-600",    btn: "bg-blue-600 hover:bg-blue-700"    },
  violet:  { card: "border-violet-200 hover:border-violet-400 hover:shadow-sm", icon: "bg-violet-50 text-violet-600", btn: "bg-violet-600 hover:bg-violet-700"  },
  emerald: { card: "border-emerald-200 hover:border-emerald-400 hover:shadow-sm",icon: "bg-emerald-50 text-emerald-600",btn: "bg-emerald-600 hover:bg-emerald-700"},
};

const services = [
  "Business Intelligence & Analytics",
  "Engenharia de Dados & Data Warehouse",
  "Inteligência Artificial Aplicada",
  "Arquitetura de Soluções de Dados",
  "Transformação Digital — Setor Público",
  "Consultoria em Dados & Governança",
  "Desenvolvimento de Plataformas SaaS",
  "Automação com IA & Agentes",
];

export default function ContatoPage() {
  return (
    <div className="bg-white pt-24 pb-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">

        {/* Hero */}
        <AnimatedSection className="mb-14">
          <p className="text-blue-600 text-sm font-semibold uppercase tracking-widest mb-3">Contato</p>
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">
            Vamos Trabalhar Juntos?
          </h1>
          <p className="text-slate-600 text-lg max-w-2xl leading-relaxed">
            Disponível para projetos estratégicos, consultorias e parcerias em BI, Dados, IA e
            Transformação Digital — tanto para o setor público quanto para empresas privadas.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-10">

          {/* Left: Contact cards */}
          <AnimatedSection direction="left" className="space-y-4">
            <h2 className="text-slate-900 font-black text-xl mb-5">Canais de Contato</h2>
            {contactCards.map((card) => {
              const Icon = card.icon;
              const c = colorMap[card.color] ?? colorMap.blue;
              return (
                <div
                  key={card.label}
                  className={`bg-white border ${c.card} rounded-2xl p-5 transition-all flex items-center gap-4`}
                >
                  <div className={`${c.icon} p-3 rounded-xl flex-shrink-0`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-slate-500 text-xs uppercase tracking-wider">{card.label}</p>
                    <p className="text-slate-900 font-semibold text-sm mt-0.5 truncate">{card.value}</p>
                  </div>
                  {card.href && card.cta && (
                    <a
                      href={card.href}
                      target={card.href.startsWith("http") ? "_blank" : undefined}
                      rel={card.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className={`flex-shrink-0 ${c.btn} text-white text-xs font-bold px-4 py-2 rounded-xl transition-colors`}
                    >
                      {card.cta}
                    </a>
                  )}
                </div>
              );
            })}

            {/* Quote */}
            <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6 mt-6">
              <p className="text-slate-700 italic text-sm leading-relaxed">
                &ldquo;Transformar dados em decisões estratégicas não é um luxo — é uma necessidade
                para organizações que querem liderar no século XXI.&rdquo;
              </p>
              <p className="text-blue-600 text-xs font-semibold mt-3">— Aritana Brito</p>
            </div>
          </AnimatedSection>

          {/* Right: Services + availability */}
          <AnimatedSection direction="right" className="space-y-6">

            {/* Availability badge */}
            <div className="flex items-center gap-3 bg-emerald-50 border border-emerald-200 rounded-2xl p-4">
              <span className="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-pulse flex-shrink-0" />
              <div>
                <p className="text-emerald-700 font-bold text-sm">Disponível para novos projetos</p>
                <p className="text-slate-500 text-xs mt-0.5">Aceita propostas presenciais e remotas</p>
              </div>
            </div>

            {/* Services */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6">
              <h3 className="text-slate-900 font-bold text-sm uppercase tracking-wider mb-4">
                Áreas de Atuação
              </h3>
              <ul className="space-y-2">
                {services.map((s) => (
                  <li key={s} className="flex items-center gap-2.5 text-sm text-slate-600">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full flex-shrink-0" />
                    {s}
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            <div className="space-y-3">
              <a
                href="mailto:aritana@ikanalytics.com.br"
                className="flex items-center justify-center gap-2 w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 rounded-2xl transition-colors text-sm"
              >
                <Mail className="w-4 h-4" />
                Enviar Proposta
              </a>
              <div className="grid grid-cols-2 gap-3">
                <Link
                  href="/produtos"
                  className="flex items-center justify-center gap-1.5 border border-slate-200 hover:border-blue-300 hover:bg-blue-50 text-slate-600 hover:text-blue-700 text-sm font-semibold py-3 rounded-2xl transition-all"
                >
                  Ver Produtos <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <Link
                  href="/sobre"
                  className="flex items-center justify-center gap-1.5 border border-slate-200 hover:border-blue-300 hover:bg-blue-50 text-slate-600 hover:text-blue-700 text-sm font-semibold py-3 rounded-2xl transition-all"
                >
                  Sobre Mim <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>

      </div>

      {/* LinkedIn Badge */}
      <AnimatedSection className="mt-16 flex flex-col items-center gap-4">
        <p className="text-slate-400 text-xs uppercase tracking-widest font-semibold">Perfil LinkedIn</p>
        <div
          className="badge-base LI-profile-badge"
          data-locale="pt_BR"
          data-size="medium"
          data-theme="light"
          data-type="VERTICAL"
          data-vanity="aritana-brito-03a194397"
          data-version="v1"
        >
          <a
            className="badge-base__link LI-simple-link"
            href="https://br.linkedin.com/in/aritana-brito-03a194397?trk=profile-badge"
            target="_blank"
            rel="noopener noreferrer"
          >
            Aritana Brito
          </a>
        </div>
      </AnimatedSection>

    </div>
  );
}
