import React from "react";
import Container from "./Container";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { faqs } from "@/constants";



const FAQSection = () => {
  return (
    <section className="py-20 bg-white-10/20 w-full">
      <Container>
        <h2 className="text-primary  font-bold mb-2 text-center">FAQs</h2>
        <h3 className="text-black-10 text-4xl md:text-4xl font-semibold mb-8 text-center">
          Frequently Asked Questions
        </h3>
        <Accordion
          type="single"
          collapsible
          className="w-full max-w-3xl mx-auto"
        >
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left text-secondary hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-secondary/80">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Container>
    </section>
  );
};

export default FAQSection;
