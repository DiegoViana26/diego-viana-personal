import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/sections/ServicePageTemplate";
import { SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Personal Trainer para Fortalecimento Muscular em Suzano/SP | Diego Viana",
  description:
    "Ganhe força e massa muscular com segurança em Suzano/SP. Diego Viana cria programas de treinamento de força individualizados para homens e mulheres adultos.",
  alternates: { canonical: `${SITE_URL}/servicos/fortalecimento-muscular` },
};

export default function FortalecimentoPage() {
  return (
    <ServicePageTemplate
      badge="Personal Trainer para Fortalecimento Muscular em Suzano/SP"
      title="Fortalecimento Muscular com Personal Trainer em Suzano"
      subtitle="Ganhe força, melhore a postura e transforme sua composição corporal com um programa de musculação individualizado e cientificamente embasado."
      intro="O treinamento de força é uma das intervenções mais completas para a saúde humana. Além do ganho estético, fortalece ossos, melhora o metabolismo, protege articulações, reduz riscos de doenças crônicas e melhora o humor. Diego Viana desenvolve programas de força adaptados à realidade e aos objetivos de cada aluno — do iniciante ao avançado."
      benefitsList={[
        "Ganho de massa muscular e força funcional",
        "Melhora da composição corporal e metabolismo",
        "Proteção articular e óssea",
        "Melhora postural e redução de dores crônicas",
        "Mais energia, autoconfiança e bem-estar",
        "Controle glicêmico e melhora metabólica",
        "Redução do risco de sarcopenia",
      ]}
      whoIsFor={[
        "Iniciantes que nunca treinaram musculação",
        "Quem treina há anos mas não vê progresso",
        "Adultos que querem ganhar músculo com segurança",
        "Pessoas que querem melhorar postura e performance",
        "Quem busca um programa periodizado e progressivo",
        "Atletas amadores que querem evoluir",
      ]}
      methodology={[
        { step: "Avaliação de Força", desc: "Testes funcionais e de força para definir ponto de partida." },
        { step: "Periodização", desc: "Programa com ondulação de volume e intensidade para progresso contínuo." },
        { step: "Técnica e Execução", desc: "Ensino e correção constante dos padrões de movimento." },
        { step: "Ajuste e Progressão", desc: "Reavaliações periódicas e ajustes de carga e volume." },
      ]}
      faqItems={[
        {
          q: "Quantas vezes por semana devo treinar para ganhar músculo?",
          a: "Para hipertrofia, a literatura recomenda de 3 a 5 sessões semanais, com cada grupo muscular sendo estimulado pelo menos 2 vezes por semana. Diego monta a frequência ideal para sua rotina.",
        },
        {
          q: "Mulheres ficam masculinizadas com o treino de força?",
          a: "Não. Mulheres têm naturalmente muito menos testosterona que homens, o que impede o desenvolvimento muscular excessivo. O treinamento de força em mulheres gera definição, firmeza e saúde.",
        },
      ]}
      ctaMessage="Comece a ganhar força e massa muscular do jeito certo. Avaliação gratuita em Suzano/SP."
    />
  );
}
