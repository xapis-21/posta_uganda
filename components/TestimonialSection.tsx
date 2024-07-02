"use client";

import React, { useState } from "react";
import Container from "./Container";
import TestimonialCard from "./TestimonialCard";
import { Button } from "./ui/button";

const testimonials = [
  {
    quote:
      "Posta Uganda's ePosta service has revolutionized how I manage my mail. It's so convenient!",
    author: "Sarah Namukasa",
    title: "Small Business Owner",
  },
  {
    quote:
      "The tracking feature is incredibly accurate. I always know where my packages are.",
    author: "John Okello",
    title: "Online Shopper",
  },
  {
    quote:
      "As a company, we've seen significant improvements in our mail management with Posta Uganda.",
    author: "Emily Akello",
    title: "Corporate Client",
  },
  {
    quote:
      "The new digital services have made it so easy to manage my postal needs from anywhere.",
    author: "David Mutua",
    title: "Frequent Traveler",
  },
  {
    quote:
      "I appreciate the quick and friendly service at my local post office. Always a pleasure!",
    author: "Grace Namutebi",
    title: "Retired Teacher",
  },
  {
    quote:
      "Posta Uganda's commitment to innovation is commendable. They're truly modernizing postal services.",
    author: "Robert Kizza",
    title: "Tech Entrepreneur",
  },
];

const TestimonialsSection: React.FC = () => {
  const [showAll, setShowAll] = useState(false);

  return (
    <section className="py-20 bg-secondary w-full">
      <Container>
        <h2 className="text-primary text-sm font-bold text-center mb-2">
          Testimonials
        </h2>
        <h3 className="text-3xl font-semibold text-center mb-12">
          What Our Customers Say
        </h3>
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
            {testimonials
              .slice(0, showAll ? testimonials.length : 3)
              .map((testimonial, index) => (
                <div
                  key={index}
                  className={`${index % 3 === 1 ? "md:mt-12" : ""}`}
                >
                  <TestimonialCard {...testimonial} imageIndex={index} />
                </div>
              ))}
          </div>
          {!showAll && (
            <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-secondary to-transparent" />
          )}
        </div>
        <div className="mt-8 text-center">
          <Button
            onClick={() => setShowAll(!showAll)}
            variant="outline"
            className="bg-primary text-primary-foreground hover:bg-primary/90"
          >
            {showAll ? "Show Less" : "Show More"}
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default TestimonialsSection;
