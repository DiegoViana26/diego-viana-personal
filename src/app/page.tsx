import type { Metadata } from "next";
import { HeroSection } from "@/components/sections/HeroSection";
import { BenefitsSection } from "@/components/sections/BenefitsSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTASection } from "@/components/sections/CTASection";
import { SITE_URL } from "@/lib/seo";
import { homeFaqs } from "@/lib/faq-data";

export const metadata: Metadata = {
  title: "Personal Trainer em Suzano | Diego Viana – Saúde, Ciência e Resultados",
  description:
    "Personal Trainer em Suzano/SP: Diego Viana. Especialista em emagrecimento, dor lombar, hérnia de disco, fortalecimento muscular e terceira idade. Avaliação gratuita.",
  alternates: { canonical: SITE_URL },
};

const faqJsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: homeFaqs.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: { "@type": "Answer", text: f.answer },
  })),
});

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: faqJsonLd }}
      />
      <HeroSection />
      <BenefitsSection />
      <ServicesSection />
      <TestimonialsSection />
      <HowItWorksSection />
      <FAQSection />
      <CTASection />
    </>
  );
}
