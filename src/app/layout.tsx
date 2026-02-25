import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { StickyMobileCTA } from "@/components/layout/StickyMobileCTA";

// Clean, modern font
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.cout-climatisation.fr'),
  title: "Prix Climatisation 2026 - Devis Gratuit & Comparatif PAC Air-Air",
  description: "Quel est le prix d'une climatisation ou pompe à chaleur air-air ? Comparez 3 devis d'installateurs certifiés RGE près de chez vous. Économisez jusqu'à 40% sur votre facture énergétique.",
  openGraph: {
    title: "Prix Climatisation 2026 - Devis Gratuit & Comparatif PAC Air-Air",
    description: "Comparez les prix de climatisation et pompes à chaleur air-air. 3 devis gratuits d'installateurs RGE.",
    url: 'https://www.cout-climatisation.fr',
    siteName: 'Cout-Climatisation.fr',
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Prix Climatisation 2026 - Devis Gratuit & Comparatif",
    description: "Comparez les prix de climatisation et pompes à chaleur air-air. 3 devis gratuits d'installateurs RGE.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Cout-Climatisation.fr",
  "url": "https://www.cout-climatisation.fr",
  "logo": "https://www.cout-climatisation.fr/icon.png",
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "customer service",
    "areaServed": "FR",
    "availableLanguage": "French"
  }
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Cout-Climatisation.fr",
  "url": "https://www.cout-climatisation.fr",
  "description": "Comparateur de prix et guide d'achat pour climatisation et pompe à chaleur air-air en France. Devis gratuits d'installateurs certifiés RGE.",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://www.cout-climatisation.fr/annuaire?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body
        className={`${inter.variable} font-sans antialiased text-slate-900 bg-slate-50 min-h-screen flex flex-col`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <Header />
        <StickyMobileCTA />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
