import type { Metadata, Viewport } from "next";
import { JetBrains_Mono, Plus_Jakarta_Sans } from "next/font/google";
import { MotionLazy } from "@/components/motion/MotionLazy";
import { JsonLd } from "@/components/seo/JsonLd";
import { SkipLink } from "@/components/ui/SkipLink";
import { site, siteDescription, siteUrl } from "@/content/site";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jakarta",
});

const jakartaItalic = Plus_Jakarta_Sans({
  weight: "400",
  style: "italic",
  subsets: ["latin"],
  display: "swap",
  preload: false,
  variable: "--font-jakarta-italic",
});

const jetbrains = JetBrains_Mono({
  weight: ["400", "500", "700", "800"],
  subsets: ["latin"],
  display: "swap",
  preload: false,
  variable: "--font-jetbrains",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Vaigainathan — Web & Mobile App Developer",
  description: siteDescription,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Vaigainathan — Web & Mobile App Developer",
    description: siteDescription,
    url: siteUrl,
    siteName: site.name,
    type: "website",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Vaigainathan — Web & Mobile App Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vaigainathan — Web & Mobile App Developer",
    description: siteDescription,
    images: ["/og.png"],
  },
};

export const viewport: Viewport = {
  viewportFit: "cover",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${jakarta.variable} ${jakartaItalic.variable} ${jetbrains.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <SkipLink />
        <JsonLd />
        <MotionLazy />
        {children}
      </body>
    </html>
  );
}
