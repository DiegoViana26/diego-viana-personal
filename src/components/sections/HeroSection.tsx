import Link from "next/link";
import Image from "next/image";
import { CheckCircle, MessageCircle, Star } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/seo";

const highlights = [
  "Especialista em dor lombar e hérnia de disco",
  "Emagrecimento com base científica",
  "Atendimento individualizado em Suzano/SP",
  "Mais de 100 alunos transformados",
];

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900 overflow-hidden">
      <div className="absolute inset-0 bg-[url('/hero-bg-pattern.svg')] opacity-5" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary-900/20 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <div className="badge mb-6">
              <Star className="w-3.5 h-3.5" />
              <span>Personal Trainer em Suzano/SP</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white leading-tight mb-6">
              Personal Trainer em Suzano:{" "}
              <span className="text-primary-400">
                Exercício Físico com Segurança, Ciência e Resultados Reais
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-dark-300 leading-relaxed mb-8">
              Treinamento personalizado para{" "}
              <strong className="text-white">emagrecimento</strong>,{" "}
              <strong className="text-white">fortalecimento muscular</strong>,{" "}
              <strong className="text-white">prevenção de lesões</strong> e melhora da saúde —
              sem promessas milagrosas, só ciência aplicada.
            </p>

            <ul className="space-y-3 mb-10">
              {highlights.map((h) => (
                <li key={h} className="flex items-center gap-3 text-dark-300">
                  <CheckCircle className="w-5 h-5 text-primary-400 shrink-0" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={`${WHATSAPP_URL}?text=Olá%20Diego!%20Quero%20agendar%20minha%20avaliação%20gratuita.`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp text-base px-8 py-4"
              >
                <MessageCircle className="w-5 h-5" />
                Agendar Avaliação Gratuita
              </a>
              <Link href="/sobre" className="btn-secondary text-base px-8 py-4 border-dark-600 text-dark-300 hover:border-primary-500 hover:text-primary-400 hover:bg-dark-800">
                Conhecer Diego Viana
              </Link>
            </div>

            <div className="flex items-center gap-6 mt-10 pt-8 border-t border-dark-700">
              <div className="text-center">
                <p className="text-3xl font-display font-bold text-white">100+</p>
                <p className="text-xs text-dark-400 mt-1">Alunos atendidos</p>
              </div>
              <div className="w-px h-12 bg-dark-700" />
              <div className="text-center">
                <p className="text-3xl font-display font-bold text-white">8+</p>
                <p className="text-xs text-dark-400 mt-1">Anos de experiência</p>
              </div>
              <div className="w-px h-12 bg-dark-700" />
              <div className="text-center">
                <p className="text-3xl font-display font-bold text-white">98%</p>
                <p className="text-xs text-dark-400 mt-1">Satisfação dos alunos</p>
              </div>
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              <div className="absolute inset-0 bg-primary-600/20 rounded-3xl blur-3xl transform rotate-6" />
              <div className="relative bg-dark-800 border border-dark-700 rounded-3xl overflow-hidden aspect-[3/4]">
                <Image
                  src="/diego-viana.jpg"
                  alt="Diego Viana – Personal Trainer em Suzano/SP"
                  fill
                  className="object-cover object-top"
                  priority
                  sizes="(max-width: 768px) 90vw, 450px"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3">
                <div className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center">
                  <Star className="w-5 h-5 text-primary-600 fill-primary-600" />
                </div>
                <div>
                  <p className="text-sm font-bold text-dark-900">5.0 ★★★★★</p>
                  <p className="text-xs text-dark-500">+200 avaliações</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
