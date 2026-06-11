import { Heart, Shield, TrendingUp, Award, Users, Brain } from "lucide-react";

const benefits = [
  {
    icon: TrendingUp,
    title: "Emagrecimento Saudável",
    description:
      "Perca gordura corporal com estratégias baseadas em ciência — sem dietas radicais, sem promessas falsas. Resultados sustentáveis para a vida toda.",
    color: "bg-green-100 text-green-700",
  },
  {
    icon: Shield,
    title: "Prevenção de Lesões",
    description:
      "Treinamento seguro para quem tem dor lombar, hérnia de disco ou problemas articulares. Movimento como remédio, não como risco.",
    color: "bg-blue-100 text-blue-700",
  },
  {
    icon: Heart,
    title: "Saúde Integral",
    description:
      "Melhore seus exames clínicos, reduza a pressão arterial, controle a glicemia e ganhe qualidade de vida com o exercício certo para o seu corpo.",
    color: "bg-red-100 text-red-700",
  },
  {
    icon: Award,
    title: "Metodologia Comprovada",
    description:
      "Cada treino é planejado com base nas evidências científicas mais atuais. Nada de modismo — só o que funciona de verdade.",
    color: "bg-yellow-100 text-yellow-700",
  },
  {
    icon: Users,
    title: "Atendimento Individualizado",
    description:
      "Você não é mais um na turma. Cada protocolo é desenhado exclusivamente para seu corpo, seus objetivos e suas limitações.",
    color: "bg-purple-100 text-purple-700",
  },
  {
    icon: Brain,
    title: "Hábitos para a Vida",
    description:
      "Construa uma relação duradoura com o exercício. Mais energia, mais disposição, mais confiança no próprio corpo.",
    color: "bg-orange-100 text-orange-700",
  },
];

export function BenefitsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="badge mx-auto mb-4">Por que treinar com Diego?</p>
          <h2 className="section-title mb-4">
            Transformação Real com Segurança e Ciência
          </h2>
          <p className="section-subtitle mx-auto text-center">
            Mais do que um treino — um programa completo que respeita seu corpo, seu ritmo e seus objetivos.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((b) => (
            <div key={b.title} className="card group hover:border-primary-200">
              <div className={`w-12 h-12 rounded-xl ${b.color} flex items-center justify-center mb-4`}>
                <b.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-display font-bold text-dark-900 mb-2">{b.title}</h3>
              <p className="text-dark-500 text-sm leading-relaxed">{b.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
