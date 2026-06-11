"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/seo";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/sobre", label: "Sobre" },
  {
    href: "/servicos",
    label: "Serviços",
    children: [
      { href: "/servicos/emagrecimento", label: "Emagrecimento" },
      { href: "/servicos/fortalecimento-muscular", label: "Fortalecimento Muscular" },
      { href: "/servicos/dor-lombar", label: "Dor Lombar" },
      { href: "/servicos/hernia-de-disco", label: "Hérnia de Disco" },
      { href: "/servicos/saude-articular", label: "Saúde Articular" },
      { href: "/servicos/terceira-idade", label: "Terceira Idade" },
      { href: "/servicos/corrida-de-rua", label: "Corrida de Rua" },
      { href: "/servicos/condicionamento-fisico", label: "Condicionamento Físico" },
    ],
  },
  { href: "/blog", label: "Blog" },
  { href: "/faq", label: "FAQ" },
  { href: "/contato", label: "Contato" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-dark-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary-600 rounded-xl flex items-center justify-center">
              <span className="text-white font-display font-bold text-lg">DV</span>
            </div>
            <div className="hidden sm:block">
              <p className="font-display font-bold text-dark-900 leading-tight">Diego Viana</p>
              <p className="text-xs text-primary-600 font-medium">Personal Trainer · Suzano/SP</p>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) =>
              link.children ? (
                <div
                  key={link.href}
                  className="relative group"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <button className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-dark-600 hover:text-primary-600 rounded-lg hover:bg-primary-50 transition-colors">
                    {link.label}
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {servicesOpen && (
                    <div className="absolute top-full left-0 w-56 bg-white rounded-xl shadow-xl border border-dark-100 py-2 z-50">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-4 py-2 text-sm text-dark-600 hover:text-primary-600 hover:bg-primary-50 transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-3 py-2 text-sm font-medium text-dark-600 hover:text-primary-600 rounded-lg hover:bg-primary-50 transition-colors"
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white text-sm font-semibold px-4 py-2 rounded-xl transition-colors"
            >
              <Phone className="w-4 h-4" />
              Agendar Avaliação
            </a>
            <button
              className="lg:hidden p-2 text-dark-600 hover:text-primary-600"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden border-t border-dark-100 bg-white">
          <nav className="px-4 py-4 space-y-1 max-h-[80vh] overflow-y-auto">
            {navLinks.map((link) =>
              link.children ? (
                <div key={link.href}>
                  <p className="px-3 py-2 text-xs font-semibold text-dark-400 uppercase tracking-wider">{link.label}</p>
                  {link.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="block px-6 py-2 text-sm text-dark-600 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-colors"
                      onClick={() => setMobileOpen(false)}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block px-3 py-2 text-sm font-medium text-dark-700 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              )
            )}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp w-full mt-4"
            >
              <Phone className="w-4 h-4" />
              Agendar Avaliação Gratuita
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
