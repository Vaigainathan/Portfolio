import { About } from "@/components/sections/About";
import { Capabilities } from "@/components/sections/Capabilities";
import { ClientWork } from "@/components/sections/ClientWork";
import { EPickup } from "@/components/sections/EPickup";
import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { Process } from "@/components/sections/Process";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Capabilities />
        <EPickup />
        <ClientWork />
        <Process />
        <About />
      </main>
    </>
  );
}
