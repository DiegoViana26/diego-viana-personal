import { MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/seo";

const steps = [
  {
    number: "01",
    title: "Avaliação Gratuita",
    description:
      "Conversamos sobre seu histórico de saúde, objetivos, rotina e limitações. Sem compromisso — só para entender o que você precisa.",
  },
  {
    number: "02",
    title: "Avaliação Física Completa",
    description:
      "Avaliamos composição corporal, postura, mobilidade e aptidão física. Com esses dados, monto um protocolo exclusivo para você.",
  },
  {
    number: "03",
    title: "Programa Personalizado",
    description:
      "Você recebe seu plano de treino detalhado, com exercícios, cargas, séries e progressões — tudo explicado e adaptado ao seu nível.",
  },
  {
    number: "04",
    title: "Acompanhamento Contínuo",
    description:
      "Treinos presenciais ou online, revisões periódicas e ajustes constantes. Evolução monitorada semana a semana.",
  },
];

export function HowItWorksSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-dark-900 to-dark-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="badge mx-auto mb-4">Processo</p>
          <h2 className="section-title text-white mb-4">Como Funciona o Treinamento</h2>
          <p className="section-subtitle mx-auto text-center text-dark-300">
            Do primeiro contato ao resultado que você quer — um processo claro, simples e eficiente.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {steps.map((step, i) => (
            <div key={step.number} className="relative">
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-px bg-gradient-to-r from-primary-600 to-transparent z-0" />
              )}
              <div className="relative bg-dark-800 border border-dark-700 rounded-2xl p-6">
                <span className="text-5xl font-display font-black text-primary-800 block mb-4 leading-none">
                  {step.number}
                </span>
                <h3 className="text-lg font-display font-bold text-white mb-2">{step.title}</h3>
                <p className="text-sm text-dark-400 leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href={`${WHATSAPP_URL}?text=Olá%20Diego!%20Gostaria%20de%20agendar%20minha%20avaliação%20gratuita.`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp text-base px-10 py-4"
          >
            <MessageCircle className="w-5 h-5" />
            Quero Começar — Avaliação Gratuita
          </a>
          <p className="text-dark-500 text-sm mt-4">Sem compromisso. Atendimento em Suzano/SP.</p>
        </div>
      </div>
    </section>
  );
}
