import type { Metadata, Viewport } from "next";
import { JetBrains_Mono, Plus_Jakarta_Sans } from "next/font/google";
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
  variable: "--font-jetbrains",
});

export const metadata: Metadata = {
  title: "Vaigainathan — Web & Mobile App Developer",
  description:
    "Websites, mobile apps, WhatsApp and CRM integration — built in Bengaluru.",
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
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
