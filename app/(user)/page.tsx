import About from "@/components/About";
import Chatbot from "@/components/Chatbot";
import FAQSection from "@/components/FAQSetion";
import Hero from "@/components/Hero";
import Insights from "@/components/Insights";
import Services from "@/components/Services";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero />
      <Services />
      <About />
      <Insights />
      <FAQSection />
      <Chatbot />
    </main>
  );
}
