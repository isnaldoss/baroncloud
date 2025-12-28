import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "remixicon/fonts/remixicon.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "BaronCloud | Alta Performance & Infraestrutura Cloud Dedicada",
  description:
    "A BaronCloud oferece infraestrutura cloud de elite com servidores de alta performance, armazenamento NVMe e segurança máxima para sua operação. Estabilidade e potência real.",
  keywords: ["Cloud Infrastructure", "Hospedagem Cloud", "Servidores Dedicados", "Infraestrutura de Elite", "BaronCloud", "Hospedagem SSD NVMe"],
  authors: [{ name: "BaronCloud" }],
  creator: "BaronCloud",
  publisher: "BaronCloud",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "BaronCloud | Alta Performance & Infraestrutura Cloud",
    description: "Infraestrutura cloud de elite para operações que exigem estabilidade absoluta e hardware de última geração.",
    url: "https://baroncloud.com.br",
    siteName: "BaronCloud",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BaronCloud | Infraestrutura Cloud de Elite",
    description: "Hardware de última geração e uptime garantido para sua empresa.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "BaronCloud",
  "url": "https://baroncloud.com.br",
  "logo": "https://baroncloud.com.br/logo.png",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+55-16-99349-6533",
    "contactType": "customer service",
    "areaServed": "BR",
    "availableLanguage": "Portuguese"
  },
  "sameAs": [
    "https://facebook.com/baroncloud",
    "https://linkedin.com/company/baroncloud"
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} font-sans`}>{children}</body>
    </html>
  );
}
