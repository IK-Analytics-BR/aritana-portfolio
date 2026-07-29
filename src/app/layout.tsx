import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Aritana Brito | BI • Engenharia de Dados • IA",
    template: "%s | Aritana Brito",
  },
  description:
    "Portfólio executivo de Aritana Brito — Especialista em Business Intelligence, Engenharia de Dados, IA e Arquitetura de Soluções. Fundadora da IK Analytics. 15+ anos liderando projetos de transformação digital.",
  keywords: [
    "Business Intelligence", "Engenharia de Dados", "Inteligência Artificial",
    "Arquitetura de Soluções", "Data Warehouse", "Analytics",
    "Transformação Digital", "IK Analytics", "DETRAN MS", "SEFAZ MS",
    "BI Governo", "Especialista Tableau Brasil", "PostgreSQL Governo",
    "QGIS Governo", "Business Intelligence Governo",
  ],
  authors: [{ name: "Aritana Carneiro Monteiro de Brito" }],
  openGraph: {
    title: "Aritana Brito | BI • Dados • IA",
    description: "15+ anos liderando projetos estratégicos de BI, Dados e Inteligência Artificial.",
    type: "website",
    locale: "pt_BR",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Aritana Brito — BI • Dados • IA" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aritana Brito | BI • Dados • IA",
    description: "15+ anos liderando projetos estratégicos de BI, Dados e Inteligência Artificial.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} scroll-smooth`}>
      <body className="font-sans antialiased bg-white text-slate-900 min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
