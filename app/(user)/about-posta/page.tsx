import React from "react";
import Image from "next/image";
import Container from "@/components/Container";
import TeamMember from "@/components/TeamMember";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import TestimonialsSection from "@/components/TestimonialSection";
import PartnersSection from "@/components/PartnersSection";
import { team } from "@/constants";

const AboutPage = () => {
  return (
    <div className="w-full pt-12 ">
      <section>
        <Container>
          <div className="w-full pt-12 ">
            <div className="max-w-3xl mx-auto flex flex-col items-center">
              <h1 className="font-bold text-primary ">About us</h1>
              <h2 className="text-3xl md:text-4xl max-w-3xl font-semibold text-black-10 text-center leading-tight">
                For over 70 years, Posta Uganda is solely responsible for postal
                services in Uganda.
              </h2>
            </div>
            <div className="flex flex-col md:flex-row gap-8 justify-between mt-12">
              <div>
                <h3 className="font-semibold text-2xl mb-4">Our story</h3>
                <p className="text-sm flex-shrink-0 text-black-10 max-w-2xl flex flex-col gap-2">
                  <span>
                    Uganda Post Limited was incorporated with limited liability
                    in 1998 and mandated to provide Universal Postal Services in
                    Uganda. Postal services are internationally agreed upon
                    human rights enshrined in the UN Charter on Communications.
                  </span>
                  <span>
                    In Uganda, the mandate to provide Postal Services is carried
                    out by Uganda Post Limited on behalf of the government. The
                    mandate includes operating universally, implying that
                    communication services shall be available, affordable,
                    reliable and secure all over the country.
                  </span>
                  <span>
                    As a result, most of UPL’s products are regulated by the
                    Uganda Communications Commission as to price, quality and
                    relevance.
                  </span>
                </p>
              </div>
              <div className="mt-4 text-black-10/80 max-w-xl">
                <h3 className="font-semibold text-2xl mb-4">
                  Mission & Vision
                </h3>
                <ul className="">
                  <li className="mb-2 flex gap-2 items-center border-b-[.5px] border-b-white-10 text pb-4">
                    Our mission is to support and protect employees, assets, and
                    customers and enforce the laws that defend the national mail
                    system from illegal or dangerous use and restore confidence
                    in Posta Uganda
                  </li>
                  <li className="mb-2 flex gap-2 items-center  text pb-4">
                    Our Vision is to improve the value of mail and promote
                    sustainable operational efficiency of the Postal sector in
                    Uganda
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-full max-h-[400px] rounded-custom mt-12">
              <Image
                src="/images/about-posta.jpeg"
                alt=""
                width={1000}
                height={400}
                className="rounded-2xl w-full max-h-[400px] object-cover object-center"
              />
            </div>
          </div>
        </Container>
      </section>
      <section className="py-16">
        <Container>
          {/* <div className="w-full">
            <div className="flex flex-col md:flex-row md:justify-center gap-20 items-center px-4 md:px-0">
              <div className="w-full max-w-[420px] flex flex-col items-start gap-[17px]">
                <div className="w-full flex flex-col items-start">
                  <h2 className="font-bold text-primary text-sm">ePosta</h2>
                  <h3 className=" font-semibold text-black-10 text-4xl mt-1">
                    How we work
                  </h3>
                </div>
                <p className="h-fit font-normal text-black-10 text-sm">
                  ePosta is a Post Office Information Management System that has
                  revolutionized the Post Office by enabling Post Office offer
                  all its services online. It’s a single platform that makes it
                  possible for any one enjoy all services offered by Post Office
                  online.
                </p>
                <div className="w-[185px] pt-3">
                  <Link href="/about">
                    <Button variant="secondary">Create ePosta account</Button>
                  </Link>
                </div>
              </div>
              <Image
                src="https://images.pexels.com/photos/3184328/pexels-photo-3184328.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Posta Uganda Service"
                width={600}
                height={262}
                className="rounded-2xl object-cover flex-shrink-0"
              />
            </div>
          </div> */}
          <PartnersSection />
        </Container>
      </section>
      <section className="bg-black-10 text-white-10 w-full py-20 mt-12">
        <Container>
          <div className="self-stretch w-full flex flex-col items-center mb-12">
            <h2 className="self-stretch font-bold text-primary text-center ">
              Our Leadership
            </h2>
            <h3 className="self-stretch font-semibold text-center text-4xl mt-1">
              A visionary team of experienced professionals
            </h3>
          </div>
          <div className="flex flex-col md:grid md:grid-cols-5 justify-center gap-8">
            {team.map((t) => (
              <TeamMember image={t.image} name={t.name} title={t.role} />
            ))}
          </div>
        </Container>
      </section>

      <TestimonialsSection />
    </div>
  );
};

export default AboutPage;
