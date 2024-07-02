import Image from "next/image";
import React from "react";
import Container from "./Container";
import { Button } from "./ui/button";
import Link from "next/link";

const About = () => {
  return (
    <section className="py-10 w-full">
      <Container>
        <div className="rounded-apple-xl bg-secondary w-full">
          <div className="flex flex-col md:flex-row md:justify-center gap-20 items-center py-20 px-4 md:px-0">
            <div className="w-full max-w-[420px] flex flex-col items-start gap-[17px]">
              <div className="self-stretch w-full flex flex-col items-start">
                <h2 className="self-stretch font-bold text-primary text-sm">
                  About us
                </h2>
                <h3 className="self-stretch font-semibold text-foreground text-2xl mt-1">
                  Serving Uganda since 1951
                </h3>
              </div>
              <p className="self-stretch h-20 font-normal text-muted-foreground text-sm">
                Posta Uganda connects the nation through a blend of traditional
                postal services and innovative digital solutions. Our mission is
                to bridge distances and support Uganda's growth, one delivery at
                a time.
              </p>
              <div className="w-[185px] pt-3">
                <Link href="/about">
                  <Button
                    variant="default"
                    className="bg-secondary-foreground text-secondary font-medium text-sm w-full"
                  >
                    Learn more
                  </Button>
                </Link>
              </div>
            </div>
            <Image
              src="https://images.pexels.com/photos/3184328/pexels-photo-3184328.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Posta Uganda Service"
              width={469}
              height={262}
              className="rounded-apple-lg object-cover"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default About;
