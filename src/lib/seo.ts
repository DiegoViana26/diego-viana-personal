export const SITE_URL = "https://www.diegosantospersonal.com.br";
export const WHATSAPP_NUMBER = "5511975972038";
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;
export const INSTAGRAM_URL = "https://www.instagram.com/diegospersonal/";

export const defaultMeta = {
  title: "Personal Trainer em Suzano | Diego Viana – Saúde, Ciência e Resultados",
  description:
    "Diego Viana, Personal Trainer em Suzano/SP. Especialista em emagrecimento, dor lombar, hérnia de disco, fortalecimento muscular e saúde para adultos 30–65 anos. Agende sua avaliação gratuita.",
  keywords:
    "personal trainer em Suzano, personal trainer Suzano, personal emagrecimento Suzano, personal dor lombar Suzano, personal hérnia de disco Suzano, personal terceira idade Suzano, treinamento personalizado Suzano",
  ogImage: `${SITE_URL}/og-image.jpg`,
};

export function buildMeta(overrides: Partial<typeof defaultMeta>) {
  return { ...defaultMeta, ...overrides };
}

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${SITE_URL}/#localbusiness`,
  name: "Diego Viana Personal Trainer",
  description:
    "Personal Trainer em Suzano/SP especializado em emagrecimento, fortalecimento muscular, dor lombar, hérnia de disco e saúde para adultos entre 30 e 65 anos.",
  url: SITE_URL,
  telephone: "+55-11-99999-9999",
  priceRange: "$$",
  image: `${SITE_URL}/og-image.jpg`,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Suzano",
    addressLocality: "Suzano",
    addressRegion: "SP",
    postalCode: "08600-000",
    addressCountry: "BR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -23.5432,
    longitude: -46.3117,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "06:00",
      closes: "22:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "07:00",
      closes: "14:00",
    },
  ],
  sameAs: [INSTAGRAM_URL],
  areaServed: [
    "Suzano",
    "Mogi das Cruzes",
    "Poá",
    "Ferraz de Vasconcelos",
    "Itaquaquecetuba",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Serviços de Personal Trainer",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Personal Trainer para Emagrecimento" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Personal Trainer para Dor Lombar" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Personal Trainer para Hérnia de Disco" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Personal Trainer para Terceira Idade" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Personal Trainer para Corrida de Rua" } },
    ],
  },
};

export const faqSchema = (faqs: { question: string; answer: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: { "@type": "Answer", text: f.answer },
  })),
});
