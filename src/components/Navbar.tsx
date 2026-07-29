"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/",            label: "Início"       },
  { href: "/sobre",       label: "Sobre"        },
  { href: "/origens",     label: "Origens"      },
  { href: "/experiencia", label: "Experiência"  },
  { href: "/produtos",    label: "Produtos"     },
  { href: "/tecnologias", label: "Tecnologias"  },
  { href: "/ia",          label: "IA"           },
  { href: "/contato",     label: "Contato"      },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled]   = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setIsMobileOpen(false); }, [pathname]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-xl border-b border-slate-200 shadow-sm"
          : "bg-white/90 backdrop-blur-sm border-b border-slate-100"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-xl bg-blue-600 flex items-center justify-center font-black text-white text-sm shadow-sm shadow-blue-200 group-hover:bg-blue-700 transition-colors">
              AB
            </div>
            <div className="hidden sm:block">
              <div className="text-slate-900 font-bold text-sm leading-tight">Aritana Brito</div>
              <div className="text-slate-400 text-xs leading-tight">BI • Dados • IA</div>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-0.5">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm px-3.5 py-2 rounded-lg transition-all font-medium ${
                  isActive(link.href)
                    ? "text-blue-600 bg-blue-50"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA + Mobile trigger */}
          <div className="flex items-center gap-2">
            <Link
              href="/contato"
              className="hidden md:inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-5 py-2 rounded-full transition-colors shadow-sm"
            >
              Fale Comigo
            </Link>
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="lg:hidden text-slate-600 hover:text-slate-900 p-2 rounded-lg hover:bg-slate-100 transition-all"
              aria-label="Toggle menu"
            >
              {isMobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileOpen && (
        <div className="lg:hidden bg-white border-t border-slate-200 shadow-lg">
          <nav className="max-w-7xl mx-auto px-4 py-3 flex flex-col gap-0.5">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm px-4 py-3 rounded-xl transition-all font-medium ${
                  isActive(link.href)
                    ? "text-blue-600 bg-blue-50"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contato"
              className="mt-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold px-4 py-3 rounded-xl transition-colors text-center"
            >
              Fale Comigo
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
