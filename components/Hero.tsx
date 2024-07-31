import React from "react";
import Image from "next/image";
import Container from "./Container";
import { TrackingForm } from "./TrackingForm";
import { MapPin } from "lucide-react";
import { metrics } from "@/constants";

const Hero = () => {
  return (
    <section className="w-full min-h-[624px] md:py-16 md:pt-20 flex items-center relative ">
      <div className="absolute w-full h-full top-0 left-0 bg-[url(/images/hero-image-pattern.jpg)] opacity-20" />
      <Container>
        <div className="flex flex-col md:flex-row items-center justify-between gap-10 h-full pt-28 md:pt-32">
          <div className="flex flex-col items-start max-w-full md:max-w-[600px] text-center md:text-left">
            <div className="inline-flex items-center justify-center gap-4 px-4 py-1 bg-primary/5 rounded-full border border-primary/10 mb-4 mx-auto md:mx-0">
              <p className="text-primary/60 text-xs flex gap-1 items-center">
                <MapPin className="h-3 w-3 text-primary/40" /> Over 300
                locations nationwide
              </p>
            </div>
            <h1 className="text-4xl md:text-6xl font-semibold text-black-10 leading mb-6">
              Connecting Uganda through reliable postal services
            </h1>

            <div className="w-full max-w-md mt-6 md:mt-12">
              <TrackingForm />
            </div>
            <div className="flex items-center gap-8 mt-8">
              {metrics.map((metric, index) => (
                <div key={index} className="text-center md:text-left ">
                  <p className="text-xl font-bold text-primary">
                    {metric.value}
                  </p>
                  <p className="text-black-10/80 text-xs">{metric.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative w-full max-w-[500px] h-[500px] mt-10 md:mt-0 bg-white-10 rounded-2xl overflow-hidden shado-2xl">
            <Image
              src="/images/hero-image-hands.png"
              alt="Posta Uganda Services"
              height={400}
              draggable={false}
              width={500}
              objectFit="contain"
              className="absolute bottom-0 left-0"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
