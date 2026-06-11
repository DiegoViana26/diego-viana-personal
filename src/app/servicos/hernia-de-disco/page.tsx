import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/sections/ServicePageTemplate";
import { SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Personal Trainer para Hérnia de Disco em Suzano/SP | Diego Viana",
  description:
    "Treinamento seguro para hérnia de disco em Suzano/SP. Diego Viana desenvolve protocolos de exercícios para reduzir a dor, fortalecer a coluna e melhorar a qualidade de vida.",
  alternates: { canonical: `${SITE_URL}/servicos/hernia-de-disco` },
  keywords: ["personal hérnia de disco Suzano", "exercício hérnia disco Suzano", "personal coluna Suzano"],
};

export default function HerniaDeDiscoPage() {
  return (
    <ServicePageTemplate
      badge="Personal Trainer para Hérnia de Disco em Suzano/SP"
      title="Treinamento Seguro para Hérnia de Disco em Suzano"
      subtitle="Hérnia de disco não é impedimento para se exercitar — é motivo para treinar com ainda mais inteligência e supervisão especializada."
      intro="A hérnia de disco é uma das condições mais temidas quando o assunto é exercício físico. Mas a ciência é clara: o movimento orientado é um dos melhores aliados no controle da dor e na recuperação funcional. Diego Viana tem ampla experiência no trabalho com pessoas que têm hérnia cervical ou lombar, desenvolvendo protocolos progressivos que fortalecem a musculatura de suporte sem agravar a protrusão discal."
      benefitsList={[
        "Redução da dor associada à hérnia de disco",
        "Fortalecimento muscular que protege os discos intervertebrais",
        "Melhora da postura e alinhamento da coluna",
        "Menor pressão intradiscal com o treino correto",
        "Mais mobilidade e funcionalidade no dia a dia",
        "Redução da inflamação ao redor do nervo",
        "Qualidade de vida preservada e ampliada",
      ]}
      whoIsFor={[
        "Pessoas diagnosticadas com hérnia de disco lombar (L4-L5, L5-S1)",
        "Pacientes com hérnia cervical (C5-C6, C6-C7)",
        "Quem sente dor irradiada para pernas (ciatalgia) ou braços",
        "Pessoas que querem evitar cirurgia através do tratamento conservador",
        "Quem já se operou e quer reabilitar com segurança",
        "Adultos sedentários com hérnia que querem voltar a se exercitar",
      ]}
      methodology={[
        { step: "Análise dos Exames", desc: "Revisão de laudos de RX e ressonância para entender o nível e grau da hérnia." },
        { step: "Avaliação Postural", desc: "Identificação de padrões de movimento que sobrecarregam a coluna." },
        { step: "Protocolo Progressivo", desc: "Exercícios seguros com progressão gradual e resposta de dor monitorada." },
        { step: "Fortalecimento Global", desc: "Trabalho de core, glúteos e mobilidade para descomprimir os discos." },
      ]}
      faqItems={[
        {
          q: "Posso fazer musculação tendo hérnia de disco?",
          a: "Sim! Com a técnica correta, cargas adequadas e supervisão especializada, a musculação é segura e benéfica para quem tem hérnia. O erro está em treinar sem orientação, não no exercício em si.",
        },
        {
          q: "Quais exercícios devo evitar com hérnia de disco lombar?",
          a: "Exercícios com carga axial excessiva mal distribuída e flexões lombares forçadas com carga podem ser contraindicados em fases agudas. Diego avalia cada caso individualmente.",
        },
        {
          q: "O exercício pode curar a hérnia de disco?",
          a: "O exercício não reverte a hérnia anatomicamente, mas pode resolver completamente os sintomas. Estudos mostram que muitos pacientes com hérnia tornam-se assintomáticos com o tratamento conservador que inclui exercício.",
        },
      ]}
      ctaMessage="Hérnia de disco não precisa ser sinônimo de dor constante. Agende sua avaliação e comece a se mover com segurança em Suzano/SP."
    />
  );
}
