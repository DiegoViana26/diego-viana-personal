# Diego Santos Personal Trainer — Site Profissional

Site completo de Personal Trainer em Suzano/SP construído com **Next.js 14 + TypeScript + Tailwind CSS**.

## 🚀 Como Rodar

```bash
npm install
npm run dev
```

Acesse: http://localhost:3000

## 📦 Build para Produção

```bash
npm run build
npm start

# Gerar sitemap após build:
npx next-sitemap
```

## 📁 Estrutura do Projeto

```
src/
├── app/
│   ├── layout.tsx              # Layout global + SEO + Schema LocalBusiness
│   ├── page.tsx                # Home Page
│   ├── sobre/page.tsx          # Sobre Diego Santos
│   ├── servicos/
│   │   ├── page.tsx            # Página de todos os serviços
│   │   ├── emagrecimento/      # SEO: "personal emagrecimento Suzano"
│   │   ├── fortalecimento-muscular/
│   │   ├── dor-lombar/         # SEO: "personal dor lombar Suzano"
│   │   ├── hernia-de-disco/    # SEO: "personal hérnia disco Suzano"
│   │   ├── saude-articular/
│   │   ├── terceira-idade/     # SEO: "personal idosos Suzano"
│   │   ├── corrida-de-rua/
│   │   └── condicionamento-fisico/
│   ├── blog/page.tsx           # Blog com 50 pautas SEO planejadas
│   ├── faq/page.tsx            # FAQ com 20 perguntas + FAQ Schema
│   └── contato/page.tsx        # Contato + Mapa
├── components/
│   ├── layout/
│   │   ├── Header.tsx          # Header responsivo com mega menu
│   │   └── Footer.tsx          # Footer completo com SEO local
│   ├── sections/
│   │   ├── HeroSection.tsx
│   │   ├── BenefitsSection.tsx
│   │   ├── ServicesSection.tsx
│   │   ├── TestimonialsSection.tsx
│   │   ├── HowItWorksSection.tsx
│   │   ├── FAQSection.tsx
│   │   ├── CTASection.tsx
│   │   └── ServicePageTemplate.tsx  # Template reutilizável para serviços
│   └── ui/
│       └── WhatsAppFloat.tsx   # Botão WhatsApp flutuante
└── lib/
    └── seo.ts                  # Meta tags, schemas, constantes
```

## ✅ Checklist SEO Implementado

- [x] Meta title e description únicos por página
- [x] Schema Markup: LocalBusiness, FAQPage
- [x] Open Graph completo
- [x] Canonical URLs
- [x] robots.txt
- [x] Sitemap XML (next-sitemap)
- [x] HTML semântico (h1, h2, h3 corretos)
- [x] URLs amigáveis e descritivas
- [x] Performance: next/image, compress, no powered-by header
- [x] Responsivo (mobile-first)
- [x] Palavras-chave locais em cada página

## 🔧 Configurações Necessárias

### 1. Dados Reais
Edite `src/lib/seo.ts` e substitua:
- `WHATSAPP_NUMBER` → número real do Diego
- `INSTAGRAM_URL` → Instagram real
- `SITE_URL` → domínio real

### 2. Foto do Diego
Adicione `public/diego-santos.jpg` (foto profissional)
Substitua na `HeroSection.tsx` e `SobrePage.tsx`

### 3. Google Search Console
- Crie sua propriedade em search.google.com
- Cole o código de verificação em `layout.tsx` → `metadata.verification.google`

### 4. Google Maps
- Edite `contato/page.tsx` e adicione o iframe do Maps com o endereço real

### 5. OG Image
- Crie `public/og-image.jpg` (1200×630px) com foto + nome + "Personal Trainer Suzano"

## 📈 Estratégia SEO Local — Palavras-chave Alvo

| Página | Palavra-chave Principal |
|--------|------------------------|
| Home | Personal Trainer em Suzano |
| Emagrecimento | Personal para emagrecimento Suzano |
| Dor Lombar | Personal para dor lombar Suzano |
| Hérnia de Disco | Personal hérnia de disco Suzano |
| Terceira Idade | Personal trainer idosos Suzano |
| Corrida | Personal corrida de rua Suzano |
| Articular | Personal saúde articular Suzano |

## 🗓️ Blog — 50 Pautas SEO Planejadas

Ver `src/app/blog/page.tsx` para a lista completa de artigos planejados para ranqueamento orgânico.
