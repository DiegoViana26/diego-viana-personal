import Link from "next/link";
import { ArrowRight } from "lucide-react";

const services = [
  {
    slug: "emagrecimento",
    emoji: "⚡",
    title: "Emagrecimento",
    description:
      "Perca gordura corporal de forma sustentável com protocolos individualizados de treino e orientações de estilo de vida.",
    keywords: ["Redução de gordura corporal", "Controle do peso", "Saúde metabólica"],
  },
  {
    slug: "fortalecimento-muscular",
    emoji: "💪",
    title: "Fortalecimento Muscular",
    description:
      "Ganhe força e massa muscular com segurança, melhorando postura, metabolismo e qualidade de vida.",
    keywords: ["Hipertrofia", "Força funcional", "Postura"],
  },
  {
    slug: "dor-lombar",
    emoji: "🦴",
    title: "Dor Lombar",
    description:
      "Exercícios específicos para reduzir e eliminar a dor lombar crônica e aguda — com técnica e segurança.",
    keywords: ["Lombalgia", "Prevenção de lesões", "Reabilitação funcional"],
  },
  {
    slug: "hernia-de-disco",
    emoji: "🧬",
    title: "Hérnia de Disco",
    description:
      "Treinamento seguro e eficaz para quem convive com hérnia de disco cervical ou lombar, sem piorar o quadro.",
    keywords: ["Hérnia cervical", "Hérnia lombar", "Exercício seguro"],
  },
  {
    slug: "saude-articular",
    emoji: "🦵",
    title: "Saúde Articular",
    description:
      "Fortaleça as estruturas ao redor das articulações para reduzir dores no joelho, quadril, ombro e coluna.",
    keywords: ["Artrose", "Condromalácia", "Joelho e quadril"],
  },
  {
    slug: "terceira-idade",
    emoji: "🌟",
    title: "Terceira Idade",
    description:
      "Treinamento especializado para adultos acima de 60 anos: equilíbrio, força, mobilidade e independência.",
    keywords: ["Longevidade", "Prevenção de quedas", "Qualidade de vida"],
  },
  {
    slug: "corrida-de-rua",
    emoji: "🏃",
    title: "Corrida de Rua",
    description:
      "Do iniciante ao corredor experiente: periodização, fortalecimento e prevenção de lesões para correr mais e melhor.",
    keywords: ["Preparação física", "Periodização", "Prevenção de lesões"],
  },
  {
    slug: "condicionamento-fisico",
    emoji: "🎯",
    title: "Condicionamento Físico",
    description:
      "Melhore seu fôlego, resistência e aptidão física geral com treinos funcionais e progressivos.",
    keywords: ["Aptidão cardiovascular", "Resistência muscular", "Funcional"],
  },
];

export function ServicesSection() {
  return (
    <section className="py-20 bg-dark-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="badge mx-auto mb-4">Especialidades</p>
          <h2 className="section-title mb-4">Áreas de Atuação</h2>
          <p className="section-subtitle mx-auto text-center">
            Programas de treinamento personalizados para cada objetivo e necessidade — todos atendidos em Suzano/SP e região.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((s) => (
            <Link
              key={s.slug}
              href={`/servicos/${s.slug}`}
              className="group bg-white rounded-2xl border border-dark-100 p-6 hover:border-primary-300 hover:shadow-lg transition-all duration-200 hover:-translate-y-1"
            >
              <span className="text-3xl block mb-3">{s.emoji}</span>
              <h3 className="text-base font-display font-bold text-dark-900 mb-2 group-hover:text-primary-700 transition-colors">
                {s.title}
              </h3>
              <p className="text-sm text-dark-500 leading-relaxed mb-4">{s.description}</p>
              <div className="flex flex-wrap gap-1 mb-4">
                {s.keywords.map((k) => (
                  <span key={k} className="text-xs bg-primary-50 text-primary-700 px-2 py-0.5 rounded-full">
                    {k}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-1 text-sm text-primary-600 font-medium">
                Saiba mais <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
