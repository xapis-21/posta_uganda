"use client";

import React, { useState } from "react";
import Container from "./Container";
import TestimonialCard from "./TestimonialCard";
import { Button } from "./ui/button";
import { testimonials } from "@/constants";



const TestimonialsSection= () => {
  const [showAll, setShowAll] = useState(false);

  return (
    <section className="py-20 bg-white-10/20 w-full">
      <Container>
        <h2 className="text-primary font-bold text-center mb-2">
          Testimonials
        </h2>
        <h3 className="text-4xl font-semibold text-center mb-12">
          What Our Customers Say
        </h3>
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
            {testimonials
              .slice(0, showAll ? testimonials.length : 6)
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

          >
            {showAll ? "Show Less" : "Show More"}
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default TestimonialsSection;
