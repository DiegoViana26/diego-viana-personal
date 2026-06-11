import { MessageCircle, Phone, Instagram } from "lucide-react";
import { WHATSAPP_URL, INSTAGRAM_URL } from "@/lib/seo";

export function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-r from-primary-700 to-primary-600">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mb-4">
          Pronto para Transformar sua Saúde em Suzano?
        </h2>
        <p className="text-primary-100 text-lg mb-10 max-w-2xl mx-auto">
          Agende sua avaliação gratuita e descubra como o exercício físico orientado pode mudar a sua vida — com ciência, segurança e resultados reais.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={`${WHATSAPP_URL}?text=Olá%20Diego!%20Quero%20agendar%20minha%20avaliação%20gratuita%20de%20Personal%20Trainer%20em%20Suzano.`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-white text-primary-700 hover:bg-primary-50 font-bold px-8 py-4 rounded-xl transition-colors shadow-lg"
          >
            <MessageCircle className="w-5 h-5" />
            Agendar pelo WhatsApp
          </a>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-primary-800/50 hover:bg-primary-800 text-white border border-primary-400 font-semibold px-8 py-4 rounded-xl transition-colors"
          >
            <Instagram className="w-5 h-5" />
            Ver no Instagram
          </a>
        </div>

        <div className="mt-10 grid grid-cols-3 gap-6 max-w-lg mx-auto">
          {[
            { label: "Avaliação", sublabel: "100% gratuita" },
            { label: "Suzano/SP", sublabel: "e região" },
            { label: "Sem fila", sublabel: "Resposta rápida" },
          ].map((item) => (
            <div key={item.label} className="text-center">
              <p className="text-white font-display font-bold text-lg">{item.label}</p>
              <p className="text-primary-200 text-xs">{item.sublabel}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
