import { ChevronDown, MapPin } from "lucide-react";

const expertiseTags = [
  "Business Intelligence",
  "Engenharia de Dados",
  "Inteligência Artificial",
  "Arquitetura de Soluções",
  "Governança de Dados",
  "Transformação Digital",
];

export default function Hero() {
  return (
    <section
      id="inicio"
      className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden pt-16"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[#080c14]">
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(6,182,212,1) 1px, transparent 1px), linear-gradient(to right, rgba(6,182,212,1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        {/* Gradient orbs */}
        <div className="absolute top-1/4 -left-32 w-[600px] h-[600px] bg-cyan-600/5 rounded-full filter blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 -right-32 w-[600px] h-[600px] bg-violet-600/5 rounded-full filter blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-cyan-900/10 rounded-full filter blur-3xl pointer-events-none" />
      </div>

      <div className="relative z-10 text-center max-w-5xl mx-auto px-6 py-20">
        {/* Available badge */}
        <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/25 rounded-full px-5 py-2 text-cyan-400 text-sm mb-10 backdrop-blur-sm">
          <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
          Disponível para projetos estratégicos
        </div>

        {/* Name */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-3 tracking-tight leading-none">
          <span className="text-white">ARITANA </span>
          <span className="bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">
            BRITO
          </span>
        </h1>

        <p className="text-slate-500 text-xs sm:text-sm mb-8 tracking-[0.2em] uppercase">
          Carneiro Monteiro de Brito
        </p>

        {/* Location */}
        <div className="flex items-center justify-center gap-1.5 text-slate-500 text-sm mb-8">
          <MapPin className="w-4 h-4 flex-shrink-0" />
          <span>Mato Grosso do Sul, Brasil</span>
          <span className="mx-2 text-slate-700">·</span>
          <span className="text-cyan-600 font-medium">IK Analytics</span>
        </div>

        {/* Expertise tags */}
        <div className="flex flex-wrap justify-center gap-2 mb-10 max-w-3xl mx-auto">
          {expertiseTags.map((tag) => (
            <span
              key={tag}
              className="bg-slate-800/60 border border-slate-700/60 rounded-full px-4 py-1.5 text-slate-300 text-sm backdrop-blur-sm hover:border-cyan-500/40 hover:text-cyan-300 transition-all duration-200"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Headline */}
        <p className="text-lg md:text-xl text-slate-400 mb-14 max-w-2xl mx-auto leading-relaxed">
          Executivo de Tecnologia da Informação com mais de{" "}
          <span className="text-cyan-400 font-semibold">15 anos</span> liderando
          projetos estratégicos de transformação digital para órgãos públicos e
          empresas privadas
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="#experiencia"
            className="bg-gradient-to-r from-cyan-500 to-violet-600 hover:from-cyan-400 hover:to-violet-500 text-white font-semibold px-8 py-3.5 rounded-full transition-all shadow-lg shadow-cyan-900/40 hover:shadow-cyan-800/50 hover:-translate-y-0.5 active:translate-y-0"
          >
            Ver Experiência
          </a>
          <a
            href="#produtos"
            className="border border-slate-700 hover:border-cyan-500/60 text-slate-300 hover:text-cyan-300 font-semibold px-8 py-3.5 rounded-full transition-all hover:-translate-y-0.5 active:translate-y-0"
          >
            Ver Produtos
          </a>
          <a
            href="#contato"
            className="text-slate-500 hover:text-slate-300 font-semibold px-6 py-3.5 transition-all text-sm underline underline-offset-4 decoration-slate-700 hover:decoration-slate-500"
          >
            Entrar em Contato
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#sobre"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-30 hover:opacity-60 transition-opacity"
      >
        <span className="text-slate-500 text-xs tracking-widest uppercase">scroll</span>
        <ChevronDown className="text-slate-500 w-5 h-5 animate-bounce" />
      </a>
    </section>
  );
}
