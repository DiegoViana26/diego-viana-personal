import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/sections/ServicePageTemplate";
import { SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Personal Trainer para Corrida de Rua em Suzano/SP | Diego Viana",
  description:
    "Assessoria e preparação para corrida de rua em Suzano/SP. Do iniciante ao corredor experiente — periodização, fortalecimento e prevenção de lesões.",
  alternates: { canonical: `${SITE_URL}/servicos/corrida-de-rua` },
};

export default function CorridaPage() {
  return (
    <ServicePageTemplate
      badge="Personal Trainer para Corrida de Rua em Suzano/SP"
      title="Corrida de Rua com Personal Trainer em Suzano"
      subtitle="Corra mais, corra melhor e corra sem se machucar. Assessoria especializada de corrida de rua com foco em performance, saúde e longevidade esportiva."
      intro="A corrida de rua é um dos esportes que mais cresce no Brasil — e também um dos que mais gera lesões por falta de orientação. Diego Viana combina preparação física, periodização inteligente e fortalecimento complementar para garantir que você alcance seus objetivos na corrida com saúde e segurança, seja sua meta completar um 5K ou uma maratona."
      benefitsList={[
        "Melhora do condicionamento cardiovascular e aeróbico",
        "Periodização personalizada para sua prova-objetivo",
        "Fortalecimento muscular complementar para corredores",
        "Prevenção de lesões típicas da corrida",
        "Melhora da economia de corrida e técnica",
        "Maior prazer e consistência no treinamento",
        "Recuperação mais rápida entre treinos",
      ]}
      whoIsFor={[
        "Iniciantes que querem começar a correr com segurança",
        "Corredores que se lesionam frequentemente",
        "Quem quer terminar sua primeira prova de rua",
        "Corredores que querem melhorar o tempo de prova",
        "Adultos que voltaram a correr após pausa",
        "Quem corre mas não vê evolução há meses",
      ]}
      methodology={[
        { step: "Avaliação do Corredor", desc: "Histórico de lesões, volume atual e objetivo de prova." },
        { step: "Plano de Corrida", desc: "Periodização dos treinos de corrida com intensidades e volumes adequados." },
        { step: "Fortalecimento", desc: "Musculação complementar para proteger joelhos, quadris e tornozelos." },
        { step: "Controle de Carga", desc: "Monitoramento da carga semanal para evitar overtraining e lesões." },
      ]}
      faqItems={[
        {
          q: "Corrida faz mal para o joelho?",
          a: "Não necessariamente. Estudos mostram que corredores recreativos têm MENOS artrose de joelho que sedentários. O problema não é correr — é correr sem preparo muscular adequado.",
        },
        {
          q: "Preciso de personal para correr?",
          a: "Não é obrigatório, mas a orientação profissional reduz drasticamente o risco de lesões e melhora os resultados. A maioria das lesões em corredores é por excesso de volume e falta de fortalecimento — dois problemas que o personal resolve.",
        },
      ]}
      ctaMessage="Alcance seu objetivo na corrida com saúde e segurança. Avaliação gratuita em Suzano/SP."
    />
  );
}
