import Link from "next/link";
import { ArrowLeft, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center pt-16">
      <div className="max-w-lg mx-auto px-6 text-center">
        <div className="text-8xl font-black text-slate-100 mb-2 select-none leading-none">404</div>
        <h1 className="text-3xl font-black text-slate-900 mb-3">Página não encontrada</h1>
        <p className="text-slate-500 mb-8 leading-relaxed">
          A página que você procura não existe ou foi movida. Mas há muito conteúdo esperando
          por você nas outras seções do portfólio.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold px-7 py-3.5 rounded-full transition-colors shadow-sm"
          >
            <Home className="w-4 h-4" />
            Ir para o Início
          </Link>
          <Link
            href="/produtos"
            className="inline-flex items-center justify-center gap-2 border border-slate-200 hover:border-blue-300 hover:bg-blue-50 text-slate-600 hover:text-blue-700 font-semibold px-7 py-3.5 rounded-full transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            Ver Produtos
          </Link>
        </div>
      </div>
    </div>
  );
}
