import type { Metadata } from "next";
import { faqSchema, SITE_URL, WHATSAPP_URL } from "@/lib/seo";
import { MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "FAQ – Perguntas Frequentes | Diego Viana Personal Trainer Suzano",
  description:
    "Tire suas dúvidas sobre personal trainer em Suzano/SP. Perguntas sobre hérnia de disco, dor lombar, emagrecimento, terceira idade, preços e como começar.",
  alternates: { canonical: `${SITE_URL}/faq` },
};

const faqs = [
  {
    question: "O que é um Personal Trainer e qual a diferença para um professor de academia?",
    answer:
      "O Personal Trainer oferece atendimento individualizado, criando um programa exclusivo para seus objetivos, histórico de saúde e limitações. O professor de academia atende grupos e não pode oferecer essa personalização. Com um personal, cada treino é otimizado para você.",
  },
  {
    question: "Posso treinar tendo hérnia de disco?",
    answer:
      "Sim! Com orientação especializada, o exercício físico é um dos melhores tratamentos para hérnia de disco. O segredo está na escolha correta dos exercícios, na progressão segura e no monitoramento constante da resposta do seu corpo.",
  },
  {
    question: "Personal Trainer ajuda para quem tem dor lombar crônica?",
    answer:
      "Com certeza. A ciência mostra que o exercício orientado é o tratamento mais eficaz para lombalgia crônica — mais do que repouso ou medicamentos isolados. Diego Viana tem vasta experiência com essa população.",
  },
  {
    question: "Quanto tempo leva para ver resultados com personal trainer?",
    answer:
      "Os primeiros resultados — disposição, condicionamento e redução de dores — aparecem entre 3 e 6 semanas. Resultados em composição corporal (emagrecimento, ganho muscular) levam de 8 a 16 semanas, dependendo da dedicação.",
  },
  {
    question: "Diego Viana atende em qual região?",
    answer:
      "O atendimento presencial é realizado em Suzano/SP e região do Alto Tietê: Mogi das Cruzes, Poá, Ferraz de Vasconcelos e Itaquaquecetuba. Também atende online para outras localidades.",
  },
  {
    question: "Preciso de academia para treinar com personal?",
    answer:
      "Não é obrigatório. Diego desenvolve programas para academia, ao ar livre e até em domicílio com equipamentos mínimos — dependendo do objetivo e da preferência do aluno.",
  },
  {
    question: "O treinamento é seguro para idosos?",
    answer:
      "Sim, e é altamente recomendado. O exercício supervisionado para a terceira idade preserva força, equilíbrio, independência e qualidade de vida — reduzindo risco de quedas e melhorando todos os marcadores de saúde.",
  },
  {
    question: "Como é feita a avaliação inicial?",
    answer:
      "A avaliação inclui anamnese (histórico de saúde, objetivos, rotina), avaliação física (composição corporal, postura, mobilidade e força) e planejamento do protocolo individualizado. É gratuita e sem compromisso.",
  },
  {
    question: "Qual a diferença entre treino online e presencial?",
    answer:
      "No presencial, Diego acompanha cada exercício em tempo real, corrige a técnica imediatamente e ajusta cargas na hora. No online, você recebe o programa detalhado com vídeos e tem suporte pelo WhatsApp. Ambos são eficazes — a escolha depende da sua rotina.",
  },
  {
    question: "Posso treinar grávida?",
    answer:
      "Com liberação médica, sim. O exercício na gravidez traz benefícios comprovados para mãe e bebê. Diego adapta o programa para cada trimestre, priorizando segurança e bem-estar.",
  },
  {
    question: "Quantas vezes por semana devo treinar?",
    answer:
      "Depende do objetivo. Para saúde geral, 3 sessões por semana já geram excelentes resultados. Para emagrecimento acelerado ou ganho muscular, 4 a 5 vezes é mais eficaz. Diego define isso na avaliação.",
  },
  {
    question: "Posso treinar com hipertensão?",
    answer:
      "Sim, com a prescrição correta. O exercício físico é um dos tratamentos mais eficazes para a hipertensão — pode reduzir a pressão arterial de forma similar aos medicamentos em casos leves e moderados.",
  },
  {
    question: "O que é necessário levar para a avaliação?",
    answer:
      "Idealmente, traga exames de saúde recentes (cardiológico, hemograma), laudos de imagem se houver alguma lesão conhecida e roupas confortáveis para a avaliação física.",
  },
  {
    question: "Qual é o preço do personal trainer com Diego Viana em Suzano?",
    answer:
      "Os valores variam conforme a modalidade (presencial ou online), frequência semanal e duração do programa. Entre em contato pelo WhatsApp para receber uma proposta personalizada.",
  },
  {
    question: "Diego Viana atende em domicílio?",
    answer:
      "Sim, mediante disponibilidade e localização. Atendimento em domicílio é uma opção para alunos que preferem treinar em casa ou têm dificuldade de locomoção.",
  },
  {
    question: "É necessário ter experiência com academia para começar?",
    answer:
      "Não. Diego atende do absoluto iniciante ao praticante experiente. Para iniciantes, o progresso costuma ser ainda mais rápido e motivador.",
  },
  {
    question: "Exercício físico ajuda em problemas de coluna como escoliose?",
    answer:
      "Sim. O fortalecimento muscular e o trabalho de mobilidade são fundamentais no manejo da escoliose — reduzindo dores e melhorando a postura. Diego avalia o grau de curvatura e prescreve o protocolo adequado.",
  },
  {
    question: "Posso treinar se tiver diabetes?",
    answer:
      "Sim, e é altamente recomendado. O exercício físico regular melhora a sensibilidade à insulina, controla a glicemia e pode, em muitos casos, reduzir a necessidade de medicação. Com acompanhamento médico e do personal, o treino é completamente seguro.",
  },
  {
    question: "O que é avaliação de composição corporal?",
    answer:
      "É uma medição que identifica quanto do seu peso é gordura, músculo, água e osso. Vai além da balança — permite acompanhar a real evolução da composição corporal ao longo do programa.",
  },
  {
    question: "Como faço para agendar uma avaliação com Diego Viana em Suzano?",
    answer:
      "É simples: entre em contato pelo WhatsApp e agende sua avaliação gratuita. Diego responde rapidamente e a avaliação pode ser agendada para a semana seguinte.",
  },
];

export default function FAQPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }}
      />
      <section className="bg-gradient-to-br from-dark-900 to-dark-800 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="badge mx-auto mb-4">Tire suas dúvidas</p>
          <h1 className="text-4xl sm:text-5xl font-display font-bold text-white mb-4">
            Perguntas Frequentes
          </h1>
          <p className="text-xl text-dark-300 max-w-2xl mx-auto">
            Tudo o que você precisa saber antes de começar com Diego Viana, Personal Trainer em Suzano/SP.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4 mb-14">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-dark-100 rounded-xl p-6">
                <h2 className="font-display font-bold text-dark-900 mb-2 text-base">{faq.question}</h2>
                <p className="text-sm text-dark-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>

          <div className="bg-primary-50 border border-primary-200 rounded-2xl p-8 text-center">
            <h2 className="text-xl font-display font-bold text-dark-900 mb-2">
              Não encontrou sua resposta?
            </h2>
            <p className="text-dark-600 text-sm mb-6">
              Fale diretamente com Diego no WhatsApp — ele responde com rapidez e sem enrolação.
            </p>
            <a
              href={`${WHATSAPP_URL}?text=Olá%20Diego!%20Tenho%20uma%20dúvida%20e%20gostaria%20de%20conversar.`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp"
            >
              <MessageCircle className="w-5 h-5" />
              Falar com Diego no WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
