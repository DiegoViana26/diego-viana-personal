import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/sections/ServicePageTemplate";
import { SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Personal Trainer para Condicionamento Físico em Suzano/SP | Diego Viana",
  description:
    "Melhore seu condicionamento físico geral com personal trainer em Suzano/SP. Programas de treino funcional e cardiovascular para mais disposição, saúde e qualidade de vida.",
  alternates: { canonical: `${SITE_URL}/servicos/condicionamento-fisico` },
};

export default function CondicionamentoPage() {
  return (
    <ServicePageTemplate
      badge="Personal Trainer para Condicionamento Físico em Suzano/SP"
      title="Condicionamento Físico com Personal Trainer em Suzano"
      subtitle="Fique mais disposto, mais ativo e mais saudável com um programa de condicionamento físico completo e progressivo — desenvolvido especialmente para você."
      intro="Condicionamento físico é a base de tudo. Sem uma boa aptidão cardiovascular e muscular, qualquer atividade do dia a dia se torna mais cansativa. Diego Viana desenvolve programas de condicionamento físico geral que combinam treino aeróbico, funcional e de força para elevar sua capacidade física de forma segura e eficiente — em Suzano e região."
      benefitsList={[
        "Melhora significativa do fôlego e resistência cardiovascular",
        "Mais disposição e energia para o dia a dia",
        "Controle do peso corporal",
        "Melhora da aptidão física geral",
        "Saúde cardiovascular e metabólica",
        "Redução do estresse e melhora do humor",
        "Mais qualidade de sono",
      ]}
      whoIsFor={[
        "Sedentários que querem voltar a se exercitar",
        "Quem fica sem fôlego com facilidade",
        "Pessoas que querem mais energia no dia a dia",
        "Adultos que querem melhorar a saúde geral",
        "Quem quer uma rotina de treino saudável e sustentável",
        "Pessoas que querem perder peso sem treino específico de emagrecimento",
      ]}
      methodology={[
        { step: "Avaliação Física", desc: "Teste de aptidão cardiovascular e força para definir nível inicial." },
        { step: "Programa Misto", desc: "Combinação de treino aeróbico e de força adaptada ao seu nível." },
        { step: "Progressão Segura", desc: "Aumento gradual de intensidade e volume ao longo das semanas." },
        { step: "Reavaliação", desc: "Testes periódicos para medir evolução e ajustar o programa." },
      ]}
      faqItems={[
        {
          q: "Qual a diferença entre condicionamento físico e musculação?",
          a: "A musculação foca em ganho de força e massa muscular. O condicionamento físico é mais amplo, incluindo resistência cardiovascular, agilidade, coordenação e mobilidade — além da força.",
        },
        {
          q: "Quanto tempo demora para melhorar o condicionamento?",
          a: "Com treinos consistentes de 3x por semana, melhoras no fôlego e disposição são sentidas em 3–4 semanas. Resultados mais expressivos aparecem entre 8 e 12 semanas.",
        },
      ]}
      ctaMessage="Dê adeus ao cansaço e à falta de disposição. Avaliação gratuita em Suzano/SP."
    />
  );
}
