import About from "@/components/About";
import Hero from "@/components/Hero";
import Insights from "@/components/Insights";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Hero/>
      <About/>
      <Insights/>
</main>
  );
}
