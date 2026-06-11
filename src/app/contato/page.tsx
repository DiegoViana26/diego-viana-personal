import type { Metadata } from "next";
import { MessageCircle, Instagram, MapPin, Clock, Phone } from "lucide-react";
import { SITE_URL, WHATSAPP_URL, INSTAGRAM_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Contato | Diego Viana Personal Trainer em Suzano/SP",
  description:
    "Entre em contato com Diego Viana, Personal Trainer em Suzano/SP. WhatsApp, Instagram, localização e horários de atendimento.",
  alternates: { canonical: `${SITE_URL}/contato` },
};

export default function ContatoPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-dark-900 to-dark-800 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="badge mx-auto mb-4">Fale com Diego</p>
          <h1 className="text-4xl sm:text-5xl font-display font-bold text-white mb-4">
            Contato e Localização
          </h1>
          <p className="text-xl text-dark-300 max-w-2xl mx-auto">
            Agende sua avaliação gratuita ou tire suas dúvidas. Diego responde rapidamente pelo WhatsApp.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-display font-bold text-dark-900 mb-8">Canais de Contato</h2>

              <div className="space-y-5">
                <a
                  href={`${WHATSAPP_URL}?text=Olá%20Diego!%20Gostaria%20de%20agendar%20uma%20avaliação%20gratuita.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-5 bg-green-50 border border-green-200 rounded-2xl hover:bg-green-100 transition-colors group"
                >
                  <div className="w-12 h-12 bg-[#25D366] rounded-xl flex items-center justify-center shrink-0">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-dark-900 group-hover:text-green-700 transition-colors">WhatsApp</p>
                    <p className="text-sm text-dark-500">(11) 9 9999-9999 · Resposta rápida</p>
                  </div>
                </a>

                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-5 bg-pink-50 border border-pink-200 rounded-2xl hover:bg-pink-100 transition-colors group"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center shrink-0">
                    <Instagram className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-dark-900 group-hover:text-pink-700 transition-colors">Instagram</p>
                    <p className="text-sm text-dark-500">@diegovianapersonal</p>
                  </div>
                </a>

                <div className="flex items-start gap-4 p-5 bg-dark-50 border border-dark-100 rounded-2xl">
                  <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-primary-700" />
                  </div>
                  <div>
                    <p className="font-bold text-dark-900">Localização</p>
                    <p className="text-sm text-dark-500">
                      Suzano – SP<br />
                      Região do Alto Tietê<br />
                      Atende também: Mogi das Cruzes, Poá, Ferraz de Vasconcelos, Itaquaquecetuba
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 bg-dark-50 border border-dark-100 rounded-2xl">
                  <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center shrink-0">
                    <Clock className="w-6 h-6 text-primary-700" />
                  </div>
                  <div>
                    <p className="font-bold text-dark-900">Horários de Atendimento</p>
                    <p className="text-sm text-dark-500">
                      Segunda a Sexta: 6h às 22h<br />
                      Sábado: 7h às 14h<br />
                      Domingo: Fechado
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-display font-bold text-dark-900 mb-8">Enviar Mensagem</h2>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-dark-700 mb-1">Nome completo</label>
                  <input
                    type="text"
                    placeholder="Seu nome"
                    className="w-full px-4 py-3 rounded-xl border border-dark-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-dark-700 mb-1">WhatsApp / Telefone</label>
                  <input
                    type="tel"
                    placeholder="(11) 9 9999-9999"
                    className="w-full px-4 py-3 rounded-xl border border-dark-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-dark-700 mb-1">Qual é o seu objetivo?</label>
                  <select className="w-full px-4 py-3 rounded-xl border border-dark-200 focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm text-dark-600 bg-white">
                    <option value="">Selecione...</option>
                    <option>Emagrecimento</option>
                    <option>Fortalecimento Muscular</option>
                    <option>Dor Lombar</option>
                    <option>Hérnia de Disco</option>
                    <option>Saúde Articular</option>
                    <option>Terceira Idade</option>
                    <option>Corrida de Rua</option>
                    <option>Condicionamento Físico</option>
                    <option>Outro</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-dark-700 mb-1">Mensagem</label>
                  <textarea
                    rows={4}
                    placeholder="Conte um pouco sobre você e o que está buscando..."
                    className="w-full px-4 py-3 rounded-xl border border-dark-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm resize-none"
                  />
                </div>
                <a
                  href={`${WHATSAPP_URL}?text=Olá%20Diego!%20Gostaria%20de%20agendar%20uma%20avaliação%20gratuita.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp w-full"
                >
                  <MessageCircle className="w-5 h-5" />
                  Enviar pelo WhatsApp
                </a>
                <p className="text-xs text-dark-400 text-center">
                  Ao clicar, você será redirecionado ao WhatsApp com sua mensagem pré-preenchida.
                </p>
              </form>
            </div>
          </div>

          <div className="mt-12 rounded-2xl overflow-hidden border border-dark-100 h-72 bg-dark-100 flex items-center justify-center">
            <div className="text-center text-dark-400">
              <MapPin className="w-8 h-8 mx-auto mb-2 text-primary-500" />
              <p className="font-medium">Mapa – Suzano/SP</p>
              <p className="text-sm mt-1">
                Incorpore o Google Maps aqui com o endereço exato do Diego
              </p>
              <p className="text-xs mt-2 text-dark-300">
                {"<iframe src='https://maps.google.com/...' />"}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
