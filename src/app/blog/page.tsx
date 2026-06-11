import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Blog de Saúde e Fitness em Suzano | Diego Viana Personal Trainer",
  description:
    "Artigos sobre exercício físico, saúde, emagrecimento, dor lombar, hérnia de disco e qualidade de vida. Conteúdo baseado em ciência por Diego Viana, Personal Trainer em Suzano/SP.",
  alternates: { canonical: `${SITE_URL}/blog` },
};

const blogPosts = [
  {
    slug: "hernia-de-disco-posso-fazer-musculacao",
    title: "Hérnia de Disco: Posso Fazer Musculação?",
    excerpt: "Descubra o que a ciência diz sobre musculação para quem tem hérnia de disco e como treinar com segurança.",
    category: "Hérnia de Disco",
    readTime: "6 min",
    date: "2024-06-01",
  },
  {
    slug: "exercicio-fisico-ajuda-na-dor-lombar",
    title: "Exercício Físico Ajuda na Dor Lombar?",
    excerpt: "A lombalgia afeta 80% das pessoas. Saiba como o exercício orientado é o tratamento mais eficaz.",
    category: "Dor Lombar",
    readTime: "5 min",
    date: "2024-05-25",
  },
  {
    slug: "fortalecimento-muscular-protege-articulacoes",
    title: "Fortalecimento Muscular Protege as Articulações?",
    excerpt: "A relação entre força muscular e saúde articular é mais direta do que você imagina. Entenda por quê.",
    category: "Saúde Articular",
    readTime: "4 min",
    date: "2024-05-18",
  },
  {
    slug: "como-emagrecer-com-saude",
    title: "Como Emagrecer com Saúde: O Guia Completo",
    excerpt: "Emagrecimento sustentável vai além de comer menos e malhar mais. Veja o que a ciência realmente diz.",
    category: "Emagrecimento",
    readTime: "8 min",
    date: "2024-05-10",
  },
  {
    slug: "exercicio-reduz-gordura-visceral",
    title: "Exercício Físico Reduz Gordura Visceral?",
    excerpt: "A gordura visceral é a mais perigosa para a saúde. Saiba quais exercícios são mais eficazes para eliminá-la.",
    category: "Saúde Metabólica",
    readTime: "5 min",
    date: "2024-05-03",
  },
  {
    slug: "corrida-faz-mal-para-o-joelho",
    title: "Corrida Faz Mal para o Joelho?",
    excerpt: "Um mito que persiste. A ciência mostra resultados surpreendentes sobre corrida e saúde articular.",
    category: "Corrida de Rua",
    readTime: "5 min",
    date: "2024-04-26",
  },
  {
    slug: "exercicio-fisico-para-artrose",
    title: "Exercício Físico para Quem Tem Artrose",
    excerpt: "Como treinar com artrose de joelho, quadril ou coluna sem agravar o quadro — e melhorando a dor.",
    category: "Saúde Articular",
    readTime: "6 min",
    date: "2024-04-19",
  },
  {
    slug: "personal-trainer-para-idosos-beneficios",
    title: "Por Que Idosos Devem Treinar com Personal Trainer",
    excerpt: "Os benefícios do treinamento supervisionado para adultos acima de 60 anos são comprovados pela ciência.",
    category: "Terceira Idade",
    readTime: "5 min",
    date: "2024-04-12",
  },
];

const allPautas = [
  "Hérnia de disco: posso fazer musculação?",
  "Exercício físico ajuda na dor lombar?",
  "Fortalecimento muscular protege as articulações?",
  "Como emagrecer com saúde?",
  "Exercício físico reduz gordura visceral?",
  "Corrida faz mal para o joelho?",
  "Exercício físico para quem tem artrose",
  "Personal Trainer para idosos: benefícios comprovados",
  "Qual a diferença entre personal trainer e professor de academia?",
  "Quantas vezes por semana devo treinar para emagrecer?",
  "O que é sarcopenia e como prevenir?",
  "Musculação para mulheres: verdades e mitos",
  "Como treinar com pressão alta?",
  "Exercício físico para diabetes tipo 2",
  "O que é lombalgia crônica e como tratar?",
  "Ciatalgia: exercícios que ajudam e que prejudicam",
  "Treino funcional vs. musculação: qual é melhor?",
  "Como melhorar o condicionamento físico em 30 dias",
  "Sedentarismo: os riscos e como sair do zero",
  "Personal Trainer online: vale a pena?",
  "Como escolher um bom personal trainer em Suzano",
  "Exercício físico melhora o sono?",
  "Treinamento de força reduz a pressão arterial?",
  "Como treinar com osteoporose?",
  "Exercício físico e saúde mental: o que a ciência diz",
  "Como prevenir lesões na academia",
  "Alongamento: antes ou depois do treino?",
  "O que é periodização e por que ela importa",
  "Como ganhar massa muscular depois dos 40 anos",
  "Emagrecimento localizado: mito ou realidade?",
  "Como sair do sedentarismo sem se lesionar",
  "Caminhada é suficiente para emagrecer?",
  "Exercício na terceira idade: benefícios surpreendentes",
  "Como se preparar para uma corrida de 10km",
  "Dor no joelho ao agachar: causas e soluções",
  "Personal Trainer em Suzano: como agendar",
  "Treino em jejum: funciona ou é mito?",
  "Qual o melhor exercício para emagrecer?",
  "Hérnia cervical: exercícios seguros",
  "Como fortalecer o core para proteger a coluna",
  "Exercícios para melhorar a postura",
  "Corrida x caminhada: qual queima mais gordura?",
  "Como manter a motivação para treinar",
  "Treino de força para corredores de rua",
  "Saúde cardiovascular: os melhores exercícios",
  "Glicemia e exercício: o que você precisa saber",
  "Colesterol: como o exercício ajuda no controle",
  "Exercício físico e longevidade: o que diz a ciência",
  "Como escolher a carga certa no treino",
  "Personal Trainer Suzano: resultados reais de alunos",
];

export default function BlogPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-dark-900 to-dark-800 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="badge mx-auto mb-4">Conteúdo baseado em ciência</p>
          <h1 className="text-4xl sm:text-5xl font-display font-bold text-white mb-4">
            Blog de Saúde, Exercício e Bem-Estar
          </h1>
          <p className="text-xl text-dark-300 max-w-2xl mx-auto">
            Artigos escritos por Diego Viana, Personal Trainer em Suzano/SP — sem modismos, só ciência aplicada.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-display font-bold text-dark-900 mb-8">Artigos Recentes</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {blogPosts.map((post) => (
              <article
                key={post.slug}
                className="card hover:border-primary-200 hover:shadow-md transition-all group"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="badge text-xs">{post.category}</span>
                  <span className="flex items-center gap-1 text-xs text-dark-400">
                    <Clock className="w-3 h-3" />
                    {post.readTime}
                  </span>
                </div>
                <h3 className="font-display font-bold text-dark-900 mb-2 group-hover:text-primary-700 transition-colors">
                  {post.title}
                </h3>
                <p className="text-sm text-dark-500 leading-relaxed mb-4">{post.excerpt}</p>
                <div className="flex items-center gap-1 text-sm text-primary-600 font-medium">
                  Ler artigo <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </article>
            ))}
          </div>

          <div className="bg-dark-50 rounded-2xl p-8">
            <h2 className="text-xl font-display font-bold text-dark-900 mb-6">
              📋 Próximos Artigos — Pauta Completa SEO (50 temas)
            </h2>
            <p className="text-sm text-dark-500 mb-6">
              Conteúdos planejados para posicionar Diego Viana como referência em personal trainer no Google para Suzano e região:
            </p>
            <div className="grid sm:grid-cols-2 gap-2">
              {allPautas.map((p, i) => (
                <div key={i} className="flex items-start gap-2 text-sm text-dark-600">
                  <span className="text-primary-500 font-mono text-xs mt-0.5 shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span>{p}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
