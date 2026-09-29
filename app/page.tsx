import { Capabilities } from "@/components/sections/Capabilities";
import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Capabilities />
      </main>
    </>
  );
}
