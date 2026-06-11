import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/sections/ServicePageTemplate";
import { SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Personal Trainer para Emagrecimento em Suzano/SP | Diego Viana",
  description:
    "Emagrecimento com ciência e segurança em Suzano/SP. Diego Viana desenvolve programas de treino individualizados para você perder gordura corporal de forma saudável e sustentável.",
  alternates: { canonical: `${SITE_URL}/servicos/emagrecimento` },
  keywords: ["personal para emagrecimento Suzano", "emagrecer com personal trainer Suzano", "emagrecimento saudável Suzano"],
};

export default function EmagrecimentoPage() {
  return (
    <ServicePageTemplate
      badge="Personal Trainer para Emagrecimento em Suzano/SP"
      title="Emagrecimento Saudável com Personal Trainer em Suzano"
      subtitle="Perca gordura corporal com ciência, segurança e um programa desenvolvido especificamente para o seu corpo — sem dietas radicais, sem riscos."
      intro="Emagrecer vai muito além de malhar mais e comer menos. O emagrecimento duradouro exige equilíbrio entre estímulo de treino, recuperação e estilo de vida. Diego Viana desenvolve programas individualizados que consideram seu metabolismo, histórico de saúde, rotina e objetivos — garantindo que você perca gordura sem perder músculo, saúde ou sanidade."
      benefitsList={[
        "Redução de gordura corporal com preservação de massa muscular",
        "Melhora do metabolismo basal e da composição corporal",
        "Controle da glicemia, pressão arterial e colesterol",
        "Mais energia e disposição no dia a dia",
        "Resultados sustentáveis a longo prazo",
        "Redução do risco de doenças crônicas",
        "Melhora da autoestima e qualidade de vida",
      ]}
      whoIsFor={[
        "Adultos entre 30 e 65 anos que querem emagrecer com saúde",
        "Pessoas com sobrepeso ou obesidade que tentaram outros métodos",
        "Quem tem dificuldade em manter o peso perdido",
        "Pessoas com histórico de diabetes, pressão alta ou colesterol elevado",
        "Quem quer emagrecer mas tem medo de se machucar treinando",
        "Sedentários que querem voltar a se exercitar com segurança",
      ]}
      methodology={[
        { step: "Avaliação Física", desc: "Composição corporal, biotipo, histórico de saúde e limitações." },
        { step: "Programa Personalizado", desc: "Treino individualizado com cargas, séries e progressão ideal para você." },
        { step: "Acompanhamento Semanal", desc: "Ajustes contínuos baseados na sua evolução e feedbacks." },
        { step: "Reavaliação Periódica", desc: "Medições regulares para comprovar evolução e motivar a continuidade." },
      ]}
      faqItems={[
        {
          q: "Quantas sessões por semana são necessárias para emagrecer?",
          a: "Para emagrecimento eficaz, o ideal é de 3 a 4 sessões semanais. Combinando musculação e exercício cardiovascular com intensidade adequada, os resultados aparecem de forma consistente.",
        },
        {
          q: "Preciso fazer dieta para emagrecer com personal?",
          a: "O exercício físico é fundamental, mas a alimentação também importa. Diego orienta sobre hábitos alimentares básicos e pode indicar um nutricionista parceiro para uma abordagem completa.",
        },
        {
          q: "Em quanto tempo verei resultados?",
          a: "Os primeiros resultados em composição corporal costumam aparecer entre 6 e 10 semanas. A velocidade depende da consistência, alimentação e ponto de partida de cada pessoa.",
        },
      ]}
      ctaMessage="Agende sua avaliação gratuita em Suzano e dê o primeiro passo para um emagrecimento saudável, seguro e definitivo."
    />
  );
}
