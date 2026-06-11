import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { CheckCircle, Award, BookOpen, Users, MessageCircle } from "lucide-react";
import { SITE_URL, WHATSAPP_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Sobre Diego Viana – Personal Trainer em Suzano/SP",
  description:
    "Conheça Diego Viana, Personal Trainer em Suzano/SP. Formação, experiência, filosofia de trabalho e por que mais de 500 alunos confiam nele para transformar sua saúde.",
  alternates: { canonical: `${SITE_URL}/sobre` },
};

const credentials = [
  "Graduado em Educação Física – CREF ativo",
  "Especialização em Treinamento de Força e Reabilitação",
  "Certificações em Avaliação Postural e Funcional",
  "Formação em Prescrição de Exercícios para Populações Especiais",
  "Atualização contínua em Fisiologia do Exercício",
  "Mais de 8 anos de experiência prática",
];

const philosophy = [
  {
    icon: BookOpen,
    title: "Baseado em Ciência",
    text: "Cada decisão de treino é embasada por evidências científicas atuais. Sem modismos, sem receitas prontas.",
  },
  {
    icon: Users,
    title: "Individualizado",
    text: "Você é único. Seu histórico, seu corpo, sua rotina e seus objetivos determinam cada detalhe do seu programa.",
  },
  {
    icon: Award,
    title: "Comprometido com Resultados",
    text: "Resultado sem saúde não é sucesso. O objetivo é sempre a melhora real e duradoura da qualidade de vida.",
  },
];

export default function SobrePage() {
  return (
    <>
      <section className="bg-gradient-to-br from-dark-900 to-dark-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="badge mb-4">Personal Trainer em Suzano/SP</p>
              <h1 className="text-4xl sm:text-5xl font-display font-bold text-white mb-6">
                Diego Viana: <span className="text-primary-400">Ciência, Prática e Comprometimento</span>
              </h1>
              <p className="text-dark-300 text-lg leading-relaxed">
                Especialista em transformar a vida de adultos e idosos através do exercício físico orientado —
                com segurança, método e resultados que duram.
              </p>
            </div>
            <div className="relative bg-dark-800 border border-dark-700 rounded-3xl overflow-hidden aspect-square max-w-sm mx-auto lg:mx-0">
              <Image
                src="/diego-viana.jpg"
                alt="Diego Viana – Personal Trainer em Suzano/SP"
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 90vw, 400px"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-dark-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center">
            <Image
              src="/quem-sou-eu.jpg"
              alt="Quem sou eu – Diego Viana Personal Trainer"
              width={500}
              height={500}
              className="rounded-2xl shadow-lg w-full max-w-sm"
            />
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-display font-bold text-dark-900 mb-6">Minha História</h2>
          <div className="prose prose-lg text-dark-600 space-y-5">
            <p>
              A trajetória de Diego Viana com o exercício físico começou muito antes de virar profissional.
              Desde jovem, ele vivenciou de perto o poder transformador do treinamento bem orientado —
              não como estética, mas como saúde, autoconfiança e qualidade de vida.
            </p>
            <p>
              Formado em Educação Física, Diego construiu sua especialidade ao trabalhar com um público que
              muitos profissionais evitam: pessoas com dor lombar, hérnia de disco, artrose, sedentarismo
              avançado e acima de 50 anos. Aprendeu que o exercício, quando prescrito com ciência e cuidado,
              é o melhor remédio que existe.
            </p>
            <p>
              Com mais de 8 anos de experiência em Suzano e região do Alto Tietê, Diego acumula mais de 500
              alunos atendidos e um índice de satisfação acima de 98%. Sua filosofia é simples: cada pessoa
              merece um programa desenvolvido especificamente para ela — sem fórmulas genéricas,
              sem promessas impossíveis.
            </p>
            <p>
              Diego mantém-se em constante atualização, acompanhando as mais recentes pesquisas em fisiologia
              do exercício, reabilitação e medicina do esporte. Para ele, um bom personal trainer nunca para
              de aprender.
            </p>
          </div>

          <div className="mt-12">
            <h3 className="text-2xl font-display font-bold text-dark-900 mb-6">Formação e Credenciais</h3>
            <ul className="space-y-3">
              {credentials.map((c) => (
                <li key={c} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary-600 shrink-0 mt-0.5" />
                  <span className="text-dark-600">{c}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-16 bg-dark-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-display font-bold text-dark-900 mb-10 text-center">Filosofia de Trabalho</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {philosophy.map((p) => (
              <div key={p.title} className="card text-center">
                <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <p.icon className="w-6 h-6 text-primary-700" />
                </div>
                <h3 className="font-display font-bold text-dark-900 mb-2">{p.title}</h3>
                <p className="text-sm text-dark-500 leading-relaxed">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary-600 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl font-display font-bold text-white mb-4">
            Vamos Conversar?
          </h2>
          <p className="text-primary-100 mb-8">
            Agende uma avaliação gratuita e descubra como Diego Viana pode ajudar você a transformar sua saúde em Suzano/SP.
          </p>
          <a
            href={`${WHATSAPP_URL}?text=Olá%20Diego!%20Vi%20seu%20site%20e%20gostaria%20de%20agendar%20uma%20avaliação%20gratuita.`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-primary-700 font-bold px-8 py-4 rounded-xl hover:bg-primary-50 transition-colors"
          >
            <MessageCircle className="w-5 h-5" />
            Agendar Avaliação Gratuita
          </a>
        </div>
      </section>
    </>
  );
}
