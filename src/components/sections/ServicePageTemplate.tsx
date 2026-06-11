import Link from "next/link";
import { CheckCircle, MessageCircle, ArrowLeft } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/seo";

interface ServicePageTemplateProps {
  badge: string;
  title: string;
  subtitle: string;
  intro: string;
  benefitsList: string[];
  whoIsFor: string[];
  methodology: { step: string; desc: string }[];
  faqItems: { q: string; a: string }[];
  ctaMessage: string;
}

export function ServicePageTemplate({
  badge,
  title,
  subtitle,
  intro,
  benefitsList,
  whoIsFor,
  methodology,
  faqItems,
  ctaMessage,
}: ServicePageTemplateProps) {
  return (
    <>
      <section className="bg-gradient-to-br from-dark-900 to-dark-800 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/servicos" className="inline-flex items-center gap-2 text-dark-400 hover:text-primary-400 text-sm mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Voltar para Serviços
          </Link>
          <p className="badge mb-4">{badge}</p>
          <h1 className="text-4xl sm:text-5xl font-display font-bold text-white mb-4">{title}</h1>
          <p className="text-xl text-dark-300 max-w-2xl">{subtitle}</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-lg text-dark-600 leading-relaxed mb-10">{intro}</p>

          <div className="grid md:grid-cols-2 gap-10 mb-16">
            <div>
              <h2 className="text-2xl font-display font-bold text-dark-900 mb-5">Benefícios do Treinamento</h2>
              <ul className="space-y-3">
                {benefitsList.map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary-600 shrink-0 mt-0.5" />
                    <span className="text-dark-600">{b}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-display font-bold text-dark-900 mb-5">Para Quem é Indicado</h2>
              <ul className="space-y-3">
                {whoIsFor.map((w) => (
                  <li key={w} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary-500 shrink-0 mt-2" />
                    <span className="text-dark-600">{w}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <h2 className="text-2xl font-display font-bold text-dark-900 mb-6">Como Funciona o Protocolo</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            {methodology.map((m, i) => (
              <div key={i} className="bg-dark-50 rounded-2xl p-5">
                <span className="text-3xl font-display font-black text-primary-200 block mb-2">0{i + 1}</span>
                <p className="font-semibold text-dark-900 text-sm mb-1">{m.step}</p>
                <p className="text-xs text-dark-500">{m.desc}</p>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-display font-bold text-dark-900 mb-5">Perguntas Frequentes</h2>
          <div className="space-y-4 mb-12">
            {faqItems.map((f) => (
              <div key={f.q} className="border border-dark-100 rounded-xl p-5">
                <p className="font-semibold text-dark-800 mb-2">{f.q}</p>
                <p className="text-sm text-dark-600 leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>

          <div className="bg-primary-50 border border-primary-200 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-display font-bold text-dark-900 mb-3">Pronto para Começar?</h2>
            <p className="text-dark-600 mb-6">{ctaMessage}</p>
            <a
              href={`${WHATSAPP_URL}?text=${encodeURIComponent("Olá Diego! Tenho interesse no " + title + " e gostaria de saber mais.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp"
            >
              <MessageCircle className="w-5 h-5" />
              Falar com Diego no WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
