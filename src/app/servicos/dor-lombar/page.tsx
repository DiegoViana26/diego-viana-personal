import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/sections/ServicePageTemplate";
import { SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Personal Trainer para Dor Lombar em Suzano/SP | Diego Viana",
  description:
    "Exercício físico orientado para dor lombar crônica em Suzano/SP. Diego Viana desenvolve protocolos seguros e eficazes para reduzir e eliminar a lombalgia com exercícios corretos.",
  alternates: { canonical: `${SITE_URL}/servicos/dor-lombar` },
  keywords: ["personal trainer dor lombar Suzano", "exercício para lombalgia Suzano", "personal para coluna Suzano"],
};

export default function DorLombarPage() {
  return (
    <ServicePageTemplate
      badge="Personal Trainer para Dor Lombar em Suzano/SP"
      title="Exercício Físico para Dor Lombar em Suzano: Reduza a Dor com Ciência"
      subtitle="A lombalgia é uma das queixas mais comuns na população adulta. O exercício físico orientado é o tratamento mais eficaz — e Diego Viana sabe como aplicá-lo com segurança."
      intro="Cerca de 80% das pessoas sofrerão de dor lombar em algum momento da vida. A ciência é clara: o repouso prolongado piora o quadro. O exercício físico progressivo e bem orientado é a intervenção mais eficaz para reduzir a dor lombar crônica, fortalecer a musculatura de suporte da coluna e devolver a qualidade de vida. Diego Viana atua há anos com essa população em Suzano/SP, desenvolvendo protocolos seguros e progressivos."
      benefitsList={[
        "Redução significativa da dor lombar crônica",
        "Fortalecimento da musculatura do core e paravertebral",
        "Melhora da postura e alinhamento corporal",
        "Maior mobilidade e amplitude de movimento",
        "Menor dependência de medicamentos",
        "Retorno às atividades cotidianas sem dor",
        "Prevenção de recidivas e crises futuras",
      ]}
      whoIsFor={[
        "Pessoas com lombalgia crônica (dor há mais de 3 meses)",
        "Quem tem episódios recorrentes de dor lombar aguda",
        "Trabalhadores que ficam muito tempo sentados",
        "Pessoas que querem exercitar mas têm medo de piorar a dor",
        "Quem já tentou fisioterapia mas não manteve os resultados",
        "Adultos entre 30 e 65 anos com histórico de lesão lombar",
      ]}
      methodology={[
        { step: "Anamnese Detalhada", desc: "Histórico da dor, exames, medicações e limitações atuais." },
        { step: "Avaliação Funcional", desc: "Mobilidade, força do core e padrões de movimento." },
        { step: "Protocolo Seguro", desc: "Exercícios progressivos escolhidos para descomprimir e fortalecer." },
        { step: "Evolução Monitorada", desc: "Ajustes contínuos com base na resposta da dor e evolução funcional." },
      ]}
      faqItems={[
        {
          q: "Posso me exercitar durante uma crise de dor lombar?",
          a: "Depende da intensidade da crise. Em crises agudas muito intensas, o repouso relativo por 2–3 dias pode ser necessário. Após essa fase, a movimentação leve e orientada acelera a recuperação.",
        },
        {
          q: "Exercício para dor lombar não vai piorar minha condição?",
          a: "Quando prescrito corretamente, o exercício é seguro e benéfico. Diego seleciona exercícios adequados para cada fase e progressão individual — nada é feito às cegas.",
        },
        {
          q: "Preciso de laudo médico para começar?",
          a: "Não é obrigatório, mas é recomendado. Se você tiver exames recentes de imagem (RX, ressonância), traga para a avaliação — ajuda a personalizar ainda melhor o protocolo.",
        },
      ]}
      ctaMessage="Não deixe a dor lombar limitar sua vida. Agende sua avaliação gratuita em Suzano e comece a se mover com segurança."
    />
  );
}
