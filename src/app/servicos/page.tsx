import type { Metadata } from "next";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { CTASection } from "@/components/sections/CTASection";
import { SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Serviços de Personal Trainer em Suzano/SP | Diego Viana",
  description:
    "Conheça todos os serviços de personal trainer em Suzano/SP: emagrecimento, dor lombar, hérnia de disco, fortalecimento muscular, terceira idade, corrida de rua e mais.",
  alternates: { canonical: `${SITE_URL}/servicos` },
};

export default function ServicosPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-dark-900 to-dark-800 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="badge mx-auto mb-4">Personal Trainer em Suzano/SP</p>
          <h1 className="text-4xl sm:text-5xl font-display font-bold text-white mb-4">
            Serviços de Personal Trainer em Suzano
          </h1>
          <p className="text-xl text-dark-300 max-w-2xl mx-auto">
            Programas de treinamento individualizados para cada objetivo — emagrecimento, saúde, reabilitação ou performance.
          </p>
        </div>
      </section>
      <ServicesSection />
      <CTASection />
    </>
  );
}
