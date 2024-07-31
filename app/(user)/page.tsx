import About from "@/components/About";

import EPostaSection from "@/components/EPostaServices";
import FAQSection from "@/components/FAQSection";
import Hero from "@/components/Hero";
import Insights from "@/components/Insights";
import MetricsSection from "@/components/MetricsSection";
import Services from "@/components/Services";
import TestimonialsSection from "@/components/TestimonialSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero />
      <About />
      <Services />

      <EPostaSection />

      <Insights />
      <TestimonialsSection />
      <FAQSection />
    </main>
  );
}
