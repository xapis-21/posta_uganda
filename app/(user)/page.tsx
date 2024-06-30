import About from "@/components/About";
import Hero from "@/components/Hero";
import Insights from "@/components/Insights";
import Services from "@/components/Services";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-24">
      <Hero />
      <Services />
      <About />
      <Insights />
    </main>
  );
}
