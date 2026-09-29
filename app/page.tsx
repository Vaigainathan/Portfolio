import { Capabilities } from "@/components/sections/Capabilities";
import { ClientWork } from "@/components/sections/ClientWork";
import { EPickup } from "@/components/sections/EPickup";
import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Capabilities />
        <EPickup />
        <ClientWork />
      </main>
    </>
  );
}
