import Link from "next/link";

const navLinks = [
  { href: "/sobre",       label: "Sobre"       },
  { href: "/experiencia", label: "Experiência" },
  { href: "/produtos",    label: "Produtos"    },
  { href: "/tecnologias", label: "Tecnologias" },
  { href: "/ia",          label: "IA"          },
  { href: "/contato",     label: "Contato"     },
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-slate-50 border-t border-slate-200 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">

          {/* Brand */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center gap-2.5 mb-3 w-fit">
              <div className="w-8 h-8 rounded-xl bg-blue-600 flex items-center justify-center font-black text-white text-xs shadow-sm">
                AB
              </div>
              <span className="text-slate-900 font-bold text-sm">Aritana Brito</span>
            </Link>
            <p className="text-slate-500 text-xs max-w-xs leading-relaxed">
              BI · Engenharia de Dados · IA · Arquitetura de Soluções
            </p>
            <a
              href="https://ikanalytics.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-blue-600 text-xs mt-1.5 inline-block transition-colors"
            >
              ikanalytics.com.br ↗
            </a>
          </div>

          {/* Nav */}
          <nav className="flex flex-wrap gap-x-6 gap-y-2">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-slate-500 hover:text-blue-600 text-xs transition-colors font-medium"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          {/* Copyright */}
          <div className="text-xs text-left md:text-right flex-shrink-0">
            <p className="text-slate-500">aritana@ikanalytics.com.br</p>
            <p className="mt-1 text-slate-400">© {year} Aritana Carneiro Monteiro de Brito</p>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-slate-200 flex justify-center">
          <p className="text-slate-400 text-xs">
            Fundadora &amp; CEO · IK Analytics · Campo Grande, MS
          </p>
        </div>
      </div>
    </footer>
  );
}
