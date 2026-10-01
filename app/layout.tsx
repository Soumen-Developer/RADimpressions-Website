import type { Metadata } from "next";
import { Bricolage_Grotesque, Inter, IBM_Plex_Mono, Playfair_Display, Nunito } from "next/font/google";
import "./globals.css";
import { brand } from "@/lib/brand";
import { JsonLd } from "@/components/seo/json-ld";
import { orgJsonLd, webSiteJsonLd } from "@/lib/seo";
import { SmoothScroll } from "@/components/motion/smooth-scroll";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  axes: ["wdth"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-plex",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["italic"],
  variable: "--font-playfair",
  display: "swap",
});

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["700", "800", "900"],
  variable: "--font-nunito",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(brand.siteUrl),
  title: {
    default: "RADIMPRESSION — Full-service creative & digital advertising agency",
    template: "%s — RADIMPRESSION",
  },
  description:
    "RADIMPRESSION is a full-service creative & digital advertising agency — brand strategy, graphic design & branding, web development, marketplace management, and performance marketing, all under one roof. Think big. Advertise smart.",
  icons: {
    icon: "/rad-impression-logomark.png",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    siteName: "RADIMPRESSION",
    type: "website",
    title: "RADIMPRESSION — Full-service creative & digital advertising agency",
    description:
      "Brand strategy, graphic design & branding, web, marketplace and performance marketing — under one roof. Think big. Advertise smart.",
    images: [{ url: "/rad-impression-logo.png", width: 2079, height: 459, alt: "RADIMPRESSION" }],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${bricolage.variable} ${inter.variable} ${plexMono.variable} ${playfair.variable} ${nunito.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-surface-page text-text-primary font-body">
        <JsonLd data={[orgJsonLd(), webSiteJsonLd()]} />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}