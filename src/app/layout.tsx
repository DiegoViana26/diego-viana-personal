import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppFloat } from "@/components/ui/WhatsAppFloat";
import { localBusinessSchema, SITE_URL } from "@/lib/seo";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#16a34a",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Personal Trainer em Suzano | Diego Viana – Saúde, Ciência e Resultados",
    template: "%s | Diego Viana Personal Trainer Suzano",
  },
  description:
    "Diego Viana, Personal Trainer em Suzano/SP. Especialista em emagrecimento, dor lombar, hérnia de disco, fortalecimento muscular e saúde para adultos 30–65 anos. Agende sua avaliação gratuita.",
  keywords: [
    "personal trainer em Suzano",
    "personal trainer Suzano",
    "personal emagrecimento Suzano",
    "personal dor lombar Suzano",
    "personal hérnia de disco Suzano",
    "personal terceira idade Suzano",
    "treinamento personalizado Suzano",
    "exercício físico Suzano",
    "personal trainer saúde Suzano",
  ],
  authors: [{ name: "Diego Viana", url: SITE_URL }],
  creator: "Diego Viana Personal Trainer",
  publisher: "Diego Viana Personal Trainer",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: SITE_URL,
    siteName: "Diego Viana Personal Trainer Suzano",
    title: "Personal Trainer em Suzano | Diego Viana",
    description:
      "Treinamento personalizado para emagrecimento, fortalecimento, dor lombar e saúde em Suzano/SP. Ciência aplicada ao seu corpo.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Diego Viana Personal Trainer Suzano" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Personal Trainer em Suzano | Diego Viana",
    description: "Treinamento personalizado com ciência e resultados reais em Suzano/SP.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: SITE_URL,
  },
  verification: {
    google: "COLE_SEU_CODIGO_GOOGLE_SEARCH_CONSOLE",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
