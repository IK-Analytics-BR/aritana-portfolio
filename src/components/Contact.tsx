import { Mail, Linkedin, Globe, MessageCircle, FileText } from "lucide-react";

const contactLinks = [
  {
    icon: Mail,
    label: "E-mail",
    value: "aritana@ikanalytics.com.br",
    href: "mailto:aritana@ikanalytics.com.br",
    color: "cyan",
    description: "Respondo em até 24h",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/aritanabrito",
    href: "https://www.linkedin.com/in/aritanabrito",
    color: "blue",
    description: "Perfil profissional",
  },
  {
    icon: Globe,
    label: "IK Analytics",
    value: "ikanalytics.com.br",
    href: "https://ikanalytics.com.br",
    color: "violet",
    description: "Site da empresa",
  },
];

export default function Contact() {
  return (
    <section id="contato" className="py-24 bg-[#0a0e1a]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-14 text-center">
          <div className="inline-flex items-center gap-2 text-cyan-400 text-sm font-medium mb-4">
            <div className="w-8 h-px bg-cyan-400" />
            CONTATO
            <div className="w-8 h-px bg-cyan-400" />
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
            Vamos conversar?
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Disponível para projetos estratégicos de Business Intelligence,
            Engenharia de Dados, Inteligência Artificial e Transformação Digital
            para organizações públicas e privadas.
          </p>
        </div>

        {/* Quote */}
        <div className="bg-gradient-to-br from-[#0f1629] to-[#141d2e] border border-[#1e2d42] rounded-2xl p-8 md:p-12 mb-12 text-center relative overflow-hidden">
          {/* Decorative */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 to-violet-600" />
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-cyan-500/5 rounded-full filter blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-violet-500/5 rounded-full filter blur-3xl" />
          
          <p className="text-2xl md:text-3xl text-white font-bold leading-relaxed mb-6 relative z-10">
            "A tecnologia transforma{" "}
            <span className="text-cyan-400">processos</span>. Os dados
            transformam{" "}
            <span className="text-violet-400">decisões</span>. A
            inteligência transforma{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">
              organizações
            </span>
            ."
          </p>
          <p className="text-slate-500 text-sm relative z-10">
            — Aritana Brito
          </p>
        </div>

        {/* Contact links */}
        <div className="grid md:grid-cols-3 gap-4 mb-10">
          {contactLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="group bg-[#0f1629] border border-[#1e2d42] hover:border-cyan-500/40 rounded-2xl p-6 transition-all hover:-translate-y-1"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-cyan-500/10 p-3 rounded-xl group-hover:bg-cyan-500/15 transition-colors">
                    <Icon className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-slate-500 text-xs mb-1">{link.label}</p>
                    <p className="text-white font-medium text-sm">{link.value}</p>
                    <p className="text-slate-600 text-xs mt-1">{link.description}</p>
                  </div>
                </div>
              </a>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href="mailto:aritana@ikanalytics.com.br"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-cyan-500 to-violet-600 hover:from-cyan-400 hover:to-violet-500 text-white font-bold px-10 py-4 rounded-full transition-all shadow-lg shadow-cyan-900/40 hover:shadow-cyan-800/50 hover:-translate-y-0.5 text-lg"
          >
            <Mail className="w-5 h-5" />
            Enviar mensagem
          </a>
          <p className="text-slate-600 text-sm mt-4">
            ou entre em contato pelo WhatsApp ou LinkedIn
          </p>
        </div>
      </div>
    </section>
  );
}
