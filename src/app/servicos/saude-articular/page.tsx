import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/sections/ServicePageTemplate";
import { SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Personal Trainer para Saúde Articular em Suzano/SP | Diego Viana",
  description:
    "Exercício físico para artrose, condromalácia e dor no joelho, quadril e ombro em Suzano/SP. Protocolos seguros para fortalecer e proteger suas articulações.",
  alternates: { canonical: `${SITE_URL}/servicos/saude-articular` },
};

export default function SaudeArticularPage() {
  return (
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
  );
}
