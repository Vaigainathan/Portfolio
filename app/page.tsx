import { About } from "@/components/sections/About";
import { Capabilities } from "@/components/sections/Capabilities";
import { ClientWork } from "@/components/sections/ClientWork";
import { Contact } from "@/components/sections/Contact";
import { EPickup } from "@/components/sections/EPickup";
import { Footer } from "@/components/sections/Footer";
import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { Process } from "@/components/sections/Process";
import { StickyWhatsApp } from "@/components/sections/StickyWhatsApp";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <Capabilities />
        <EPickup />
        <ClientWork />
        <Process />
        <About />
        <Contact />
      </main>
      <Footer />
      <StickyWhatsApp />
    </>
  );
}
