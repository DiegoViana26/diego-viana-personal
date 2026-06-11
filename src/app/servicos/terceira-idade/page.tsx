import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/sections/ServicePageTemplate";
import { SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Personal Trainer para Terceira Idade em Suzano/SP | Diego Viana",
  description:
    "Personal Trainer especializado para idosos em Suzano/SP. Treinamento para força, equilíbrio, prevenção de quedas e qualidade de vida para adultos acima de 60 anos.",
  alternates: { canonical: `${SITE_URL}/servicos/terceira-idade` },
  keywords: ["personal trainer idosos Suzano", "personal terceira idade Suzano", "exercício para idosos Suzano"],
};

export default function TerceiraIdadePage() {
  return (
    <ServicePageTemplate
      badge="Personal Trainer para Terceira Idade em Suzano/SP"
      title="Treinamento para Terceira Idade em Suzano: Força, Equilíbrio e Longevidade"
      subtitle="O exercício físico orientado é o melhor investimento na saúde e independência de adultos acima de 60 anos. Diego Viana tem metodologia especializada para esse público."
      intro="Envelhecer com saúde e independência é possível — e o exercício físico orientado é o principal instrumento para isso. Diego Viana desenvolve programas específicos para adultos acima de 60 anos em Suzano/SP, respeitando as particularidades do organismo mais maduro: maior tempo de recuperação, risco articular elevado e necessidade de progressão cuidadosa. O resultado são alunos mais fortes, mais equilibrados e mais felizes."
      benefitsList={[
        "Manutenção e ganho de massa muscular (sarcopenia revertida)",
        "Melhora do equilíbrio e redução do risco de quedas",
        "Fortalecimento ósseo — proteção contra osteoporose",
        "Melhora dos marcadores de saúde (glicemia, pressão, colesterol)",
        "Mais energia, disposição e humor",
        "Independência preservada por mais tempo",
        "Melhora da cognição e saúde mental",
      ]}
      whoIsFor={[
        "Adultos acima de 60 anos que querem manter a saúde",
        "Idosos com hipertensão, diabetes ou osteoporose",
        "Pessoas que sofreram quedas ou têm medo de cair",
        "Quem perdeu massa muscular e força nos últimos anos",
        "Idosos que querem voltar a praticar atividades que amavam",
        "Famílias que querem garantir segurança para seus idosos",
      ]}
      methodology={[
        { step: "Avaliação Completa", desc: "Análise de saúde, medicações, histórico de quedas e capacidade funcional." },
        { step: "Programa Seguro", desc: "Exercícios de baixo impacto com ênfase em equilíbrio, força e mobilidade." },
        { step: "Progressão Gradual", desc: "Aumento de carga e complexidade respeitando o ritmo de recuperação." },
        { step: "Monitoramento Contínuo", desc: "Atenção constante à pressão, frequência cardíaca e bem-estar durante o treino." },
      ]}
      faqItems={[
        {
          q: "Com que idade é tarde demais para começar a treinar?",
          a: "Nunca é tarde! Estudos mostram ganhos significativos de força e massa muscular em pessoas acima de 80 anos que iniciaram o treinamento. O importante é adaptar o protocolo à capacidade atual.",
        },
        {
          q: "Exercícios com peso são seguros para idosos?",
          a: "Sim, e são altamente recomendados. O treinamento de força é considerado essencial para a saúde de idosos — previne sarcopenia, protege os ossos e melhora o equilíbrio.",
        },
        {
          q: "Preciso de liberação médica para treinar na terceira idade?",
          a: "É recomendável ter um check-up médico recente antes de iniciar, especialmente se houver condições de saúde preexistentes. Diego solicita o atestado de saúde para garantir segurança.",
        },
      ]}
      ctaMessage="Invista na melhor fase da sua vida com saúde e independência. Agende sua avaliação gratuita em Suzano/SP."
    />
  );
}
