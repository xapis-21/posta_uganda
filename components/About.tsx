import Image from "next/image";
import React from "react";
import Container from "./Container";
import { Button } from "./ui/button";
import Link from "next/link";
import { CheckCheck } from "lucide-react";

const About = () => {
  return (
    <section className="py-16 pt-20 w-full">
      <Container>
        <div className="w-full">
          <div className="flex flex-col md:flex-row-reverse md:justify-between gap-12 md:gap-20 items-center px-4 md:px-0">
            <div className="w-full max-w-[520px] flex-shrink-0 flex flex-col items-start gap-[20px]">
              <div className="w-full flex flex-col items-start">
                <h2 className="font-bold text-primary text-base">About us</h2>
                <h3 className=" font-semibold text-black-10 text-4xl">
                  Serving Uganda since 1951
                </h3>
              </div>
              <p className=" font-light text-black-10 text-lg">
                Posta Uganda is the most extensive provider of postal services
                in Uganda, having an extensive network of postal delivery
                outlets down to the sub-county level.
              </p>
              <div className="mt-4 text-black-10/80">
                <h3 className="text-base mb-4">
                  As a trusted partner in communication and logistics, we offer:
                </h3>
                <ul className="">
                  <li className="mb-2 flex gap-2 items-center border-b-[.5px] border-b-white-10 text pb-4">
                    <CheckCheck className="text-primary/50" />
                    Secure and efficient mail and parcel delivery
                  </li>
                  <li className="mb-2 flex gap-2 items-center border-b-[.5px] border-b-white-10 text pb-4">
                    <CheckCheck className="text-primary/50" />
                    Digital postal addresses for the modern era
                  </li>
                  <li className="mb-2 flex gap-2 items-center pb-4 text">
                    <CheckCheck className="text-primary/50" />
                    Financial services for seamless transactions
                  </li>
                </ul>
              </div>
              {/* <div className="w-[185px] pt-3">
                <Link href="/about">
                  <Button variant="secondary">Learn more</Button>
                </Link>
              </div> */}
            </div>
            <Image
              src="/images/about-posta.jpeg"
              alt="Posta Uganda Service"
              width={600}
              height={600}
              draggable={false}
              className="rounded-2xl h-[280px] md:h-[480px] w-full object-cover shadow-xl flex-grow"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default About;
