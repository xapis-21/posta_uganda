import React from "react";
import Container from "./Container";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

const faqs = [
  {
    question: "What is ePosta?",
    answer:
      "ePosta is a Posta Uganda online platform that allows anybody to access Postal services anytime anywhere.",
  },
  {
    question: "What is a Physical Box Address?",
    answer:
      "A Physical Box Address is a Postal Address where you are given a key for your box. This Postal Address is also linked to your phone, email and your account online, allowing you to receive instant notifications and monitor your box transactions.",
  },
  {
    question: "What is an eBox Address?",
    answer:
      "An eBox Postal Address is an Electronic Postal Address that allows you to access your mails 24/7 from the convenience of your smartphone and any other electronic device.",
  },
  {
    question: "How do I acquire a Postal Address?",
    answer:
      "You can Register for a Postal Address online using www.eposta.ug or by visiting a nearby Post Office. While registering, enter a phone number that will receive notifications, select your preferred Post Office and complete payment for your address.",
  },
  {
    question: "How much does a Postal Address cost per year?",
    answer:
      "Costs vary: Company: UGX 90,000, Upcountry (company): UGX 60,000, Individuals: UGX 20,000, Business Names: UGX 20,000, Shops: UGX 20,000",
  },
];

const FAQSection: React.FC = () => {
  return (
    <section className="py-20 bg-secondary-foreground w-full">
      <Container>
        <h2 className="text-primary text-sm font-bold mb-2 text-center">
          FAQs
        </h2>
        <h3 className="text-secondary text-3xl md:text-4xl font-semibold mb-8 text-center">
          Frequently Asked Questions
        </h3>
        <Accordion
          type="single"
          collapsible
          className="w-full max-w-3xl mx-auto"
        >
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left text-secondary">
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
