import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Ana Paula S.",
    age: 52,
    goal: "Emagrecimento + Dor Lombar",
    text: "Passei anos tentando emagrecer e sem conseguir me exercitar por causa da dor lombar. Com o Diego aprendi que o exercício, feito do jeito certo, é o melhor remédio. Perdi 14kg e não sinto mais dor no dia a dia.",
    stars: 5,
  },
  {
    name: "Carlos M.",
    age: 47,
    goal: "Hérnia de Disco",
    text: "Os médicos me diziam para não fazer força. O Diego me mostrou como treinar com segurança mesmo tendo hérnia. Hoje tenho mais força e qualidade de vida do que aos 35 anos.",
    stars: 5,
  },
  {
    name: "Mariana F.",
    age: 38,
    goal: "Fortalecimento e Corrida",
    text: "Completei minha primeira meia maratona com 38 anos! O acompanhamento do Diego foi fundamental para eu treinar sem me machucar e cruzar a linha de chegada com saúde.",
    stars: 5,
  },
  {
    name: "José Roberto A.",
    age: 63,
    goal: "Terceira Idade + Saúde",
    text: "Comecei com o Diego aos 61 anos com diabetes e pressão alta. Em 8 meses meus exames melhoraram tanto que o médico reduziu minhas medicações. O exercício mudou minha vida.",
    stars: 5,
  },
  {
    name: "Fernanda L.",
    age: 44,
    goal: "Saúde Articular + Artrose",
    text: "Tinha artrose no joelho e achava que nunca mais poderia me exercitar. Diego me mostrou o caminho: hoje subo escadas sem dor e me sinto 20 anos mais jovem.",
    stars: 5,
  },
  {
    name: "Roberto T.",
    age: 55,
    goal: "Emagrecimento + Condicionamento",
    text: "Trabalhei com outros profissionais antes, mas nunca tive o resultado que tenho com o Diego. A diferença está na personalização — ele realmente conhece meu corpo e meus limites.",
    stars: 5,
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="badge mx-auto mb-4">Depoimentos</p>
          <h2 className="section-title mb-4">Resultados Reais de Alunos Reais</h2>
          <p className="section-subtitle mx-auto text-center">
            Mais de 500 pessoas em Suzano e região já transformaram sua saúde com o método Diego Viana.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="card relative">
              <Quote className="absolute top-4 right-4 w-8 h-8 text-primary-100" />
              <div className="flex items-center gap-1 mb-3">
                {Array.from({ length: t.stars }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-dark-600 text-sm leading-relaxed mb-4 italic">"{t.text}"</p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-dark-900 text-sm">{t.name}</p>
                  <p className="text-xs text-dark-400">{t.age} anos</p>
                </div>
                <span className="text-xs bg-primary-50 text-primary-700 px-3 py-1 rounded-full font-medium">
                  {t.goal}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-dark-500 text-sm">
            Todos os depoimentos são de alunos reais. Resultados podem variar conforme comprometimento e condições individuais.
          </p>
        </div>
      </div>
    </section>
  );
}
