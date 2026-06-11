import type { Metadata } from "next";
import Image from "next/image";
import { ServicePageTemplate } from "@/components/sections/ServicePageTemplate";
import { SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Personal Trainer para Saúde Articular em Suzano/SP | Diego Viana",
  description:
    "Exercício físico para artrose, condromalácia e dor no joelho, quadril e ombro em Suzano/SP. Protocolos seguros para fortalecer e proteger suas articulações.",
  alternates: { canonical: `${SITE_URL}/servicos/saude-articular` },
};

function DorArticularSection() {
  return (
    <section className="py-16 bg-dark-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <Image
              src="/dor-articular.jpg"
              alt="Dor articular não significa que você precisa parar – Diego Viana Personal Trainer"
              width={500}
              height={500}
              className="rounded-2xl shadow-lg w-full"
            />
          </div>
          <div>
            <h2 className="text-2xl font-display font-bold text-dark-900 mb-4">
              🦵💪 Dor Articular Não Significa que Você Precisa Parar!
            </h2>
            <div className="space-y-3 text-dark-600 text-sm leading-relaxed">
              <p>
                Durante muito tempo acreditou-se que o movimento "gastava" as articulações.
                Hoje, a ciência mostra justamente o contrário.
              </p>
              <div className="space-y-2">
                <p>✅ O exercício físico é uma das principais ferramentas para o manejo da dor articular.</p>
                <p>✅ O fortalecimento muscular ajuda a reduzir a sobrecarga nas articulações.</p>
                <p>✅ O movimento estimula a nutrição da cartilagem e melhora a função articular.</p>
                <p>✅ Exercícios bem orientados podem diminuir a dor, aumentar a capacidade funcional e melhorar a qualidade de vida.</p>
              </div>
              <p>
                Muitas vezes, o problema não é se movimentar. O problema é não encontrar a dose adequada de movimento.
              </p>
              <p className="font-semibold text-dark-800">
                Lembre-se: articulações foram feitas para se mover.
              </p>
              <p className="bg-primary-50 border border-primary-200 rounded-xl p-3 text-primary-800">
                📚 A ciência é clara: exercício físico é tratamento de primeira linha para diversas condições articulares.
              </p>
              <p className="text-xs text-dark-400 pt-2">
                Diego Viana | Personal Trainer CREF 161498-G/SP
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function SaudeArticularPage() {
  return (
    <>
      <ServicePageTemplate
        badge="Personal Trainer para Saúde Articular em Suzano/SP"
        title="Exercício Físico para Saúde Articular em Suzano"
        subtitle="Artrose, condromalácia, dor no joelho ou quadril não são impedimentos para se exercitar. São indicações de treinar com ainda mais inteligência."
        intro="As articulações são protegidas e nutridas pelo movimento — não pelo repouso. O exercício físico orientado fortalece a musculatura ao redor das articulações, reduz a sobrecarga articular, diminui a inflamação e melhora a qualidade do líquido sinovial. Diego Viana tem experiência com artrose de joelho, condromalácia patelar, gonartrose, coxartrose e dores no ombro — desenvolvendo protocolos que respeitam cada articulação."
        benefitsList={[
          "Redução da dor articular crônica",
          "Fortalecimento da musculatura periarticular",
          "Menor degradação da cartilagem articular",
          "Melhora da amplitude de movimento",
          "Mais estabilidade e controle articular",
          "Retorno às atividades que você amava",
          "Prevenção de cirurgias articulares",
        ]}
        whoIsFor={[
          "Pessoas com diagnóstico de artrose (joelho, quadril, ombro)",
          "Quem tem condromalácia patelar ou síndrome femoropatelar",
          "Pessoas com dor crônica nas articulações",
          "Quem sofreu lesão articular e está em processo de reabilitação",
          "Adultos acima de 45 anos com perda de função articular",
          "Quem quer prevenir degeneração articular futura",
        ]}
        methodology={[
          { step: "Avaliação Articular", desc: "Análise de mobilidade, estabilidade e padrões de movimento compensatórios." },
          { step: "Exercícios de Baixo Impacto", desc: "Seleção criteriosa de exercícios que fortalecem sem agredir a articulação." },
          { step: "Progressão Controlada", desc: "Evolução gradual com monitoramento de resposta de dor." },
          { step: "Resultado e Reavaliação", desc: "Medições de funcionalidade e dor para ajuste contínuo do protocolo." },
        ]}
        faqItems={[
          {
            q: "Posso correr tendo artrose no joelho?",
            a: "Depende do grau e da condição da articulação. Em muitos casos, após fortalecimento adequado da musculatura do membro inferior, a corrida pode ser retomada com segurança. Diego avalia caso a caso.",
          },
          {
            q: "Exercício piora a artrose?",
            a: "Não. O exercício físico adequado é um dos tratamentos mais eficazes para artrose. O repouso excessivo piora — o movimento controlado melhora.",
          },
        ]}
        ctaMessage="Cuide das suas articulações agora para se mover com liberdade pelo resto da vida. Avaliação gratuita em Suzano/SP."
      />
      <DorArticularSection />
    </>
  );
}
