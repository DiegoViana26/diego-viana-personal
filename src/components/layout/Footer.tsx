import Link from "next/link";
import { Instagram, MessageCircle, MapPin, Clock, Phone } from "lucide-react";
import { WHATSAPP_URL, INSTAGRAM_URL } from "@/lib/seo";

const services = [
  { href: "/servicos/emagrecimento", label: "Emagrecimento" },
  { href: "/servicos/fortalecimento-muscular", label: "Fortalecimento Muscular" },
  { href: "/servicos/dor-lombar", label: "Dor Lombar" },
  { href: "/servicos/hernia-de-disco", label: "Hérnia de Disco" },
  { href: "/servicos/saude-articular", label: "Saúde Articular" },
  { href: "/servicos/terceira-idade", label: "Terceira Idade" },
  { href: "/servicos/corrida-de-rua", label: "Corrida de Rua" },
  { href: "/servicos/condicionamento-fisico", label: "Condicionamento Físico" },
];

const regions = [
  "Personal Trainer em Suzano",
  "Personal Trainer em Mogi das Cruzes",
  "Personal Trainer em Poá",
  "Personal Trainer em Ferraz de Vasconcelos",
  "Personal Trainer em Itaquaquecetuba",
];

export function Footer() {
  return (
    <footer className="bg-dark-900 text-dark-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-primary-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-display font-bold text-lg">DV</span>
              </div>
              <div>
                <p className="font-display font-bold text-white">Diego Viana</p>
                <p className="text-xs text-primary-400">Personal Trainer · Suzano/SP</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-dark-400">
              Treinamento personalizado com ciência, segurança e resultados reais. Especialista em emagrecimento,
              dor lombar, hérnia de disco e saúde para adultos 30–65 anos.
            </p>
            <div className="flex gap-3 mt-5">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-dark-800 hover:bg-primary-600 rounded-xl flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-dark-800 hover:bg-[#25D366] rounded-xl flex items-center justify-center transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-display font-semibold mb-4">Serviços</h3>
            <ul className="space-y-2">
              {services.map((s) => (
                <li key={s.href}>
                  <Link href={s.href} className="text-sm text-dark-400 hover:text-primary-400 transition-colors">
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-display font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              {[
                { href: "/sobre", label: "Sobre Diego Viana" },
                { href: "/blog", label: "Blog de Saúde e Fitness" },
                { href: "/faq", label: "Perguntas Frequentes" },
                { href: "/contato", label: "Contato e Localização" },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-dark-400 hover:text-primary-400 transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
            <h3 className="text-white font-display font-semibold mt-6 mb-3">Regiões Atendidas</h3>
            <ul className="space-y-1">
              {regions.map((r) => (
                <li key={r} className="text-xs text-dark-500">
                  {r}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-display font-semibold mb-4">Contato</h3>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <MapPin className="w-5 h-5 text-primary-500 shrink-0 mt-0.5" />
                <span className="text-sm text-dark-400">Suzano – SP<br />Região do Alto Tietê</span>
              </li>
              <li className="flex gap-3">
                <Phone className="w-5 h-5 text-primary-500 shrink-0" />
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="text-sm text-dark-400 hover:text-primary-400 transition-colors">
                  (11) 9 9999-9999
                </a>
              </li>
              <li className="flex gap-3">
                <Clock className="w-5 h-5 text-primary-500 shrink-0 mt-0.5" />
                <span className="text-sm text-dark-400">Seg–Sex: 6h–22h<br />Sáb: 7h–14h</span>
              </li>
            </ul>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp mt-6 w-full text-sm"
            >
              <MessageCircle className="w-4 h-4" />
              Falar no WhatsApp
            </a>
          </div>
        </div>

        <div className="border-t border-dark-800 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-dark-500">
          <p>© {new Date().getFullYear()} Diego Viana Personal Trainer – Suzano/SP. Todos os direitos reservados.</p>
          <div className="flex gap-4">
            <Link href="/politica-de-privacidade" className="hover:text-dark-300 transition-colors">Política de Privacidade</Link>
            <Link href="/termos-de-uso" className="hover:text-dark-300 transition-colors">Termos de Uso</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
