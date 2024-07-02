import React from "react";
import Image from "next/image";
import Container from "./Container";
import { TrackingForm } from "./TrackingForm";

const Hero: React.FC = () => {
  return (
    <section className="w-full min-h-[624px] bg-background py-10 pt-40 md:pt-20 flex items-center ">
      <Container>
        <div className="flex flex-col md:flex-row items-center justify-center gap-10 h-full ">
          <div className="flex flex-col items-start max-w-full md:max-w-[437px] text-center md:text-left">
            <div className="inline-flex items-center justify-center gap-4 px-2 py-1 bg-accent rounded-full border border-secondary mb-4 mx-auto md:mx-0">
              <p className="text-muted-foreground text-xs font-medium">
                Over 300 locations nationwide
              </p>
            </div>
            <h1 className="text-3xl md:text-4xl font-semibold text-foreground leading-tight mb-6">
              Connecting Uganda through reliable postal services
            </h1>
            <p className="text-muted-foreground mb-8">
              Track your package, send mail, or access our wide range of
              services.
            </p>
            <div className="w-full max-w-md">
              <TrackingForm />
            </div>
          </div>
          <div className="relative w-full max-w-[500px] h-[400px] mt-10 md:mt-0">
            <Image
              src="/images/hero-image.png"
              alt="Posta Uganda Services"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
