import React from "react";
import Image from "next/image";
import Container from "@/components/Container";
import TeamMember from "@/components/TeamMember";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import TestimonialsSection from "@/components/TestimonialSection";
import PartnersSection from "@/components/PartnersSection";

const AboutPage = () => {
  return (
    <div className="w-full pt-12 bg-background">
      <section>
        <Container>
          <div className="w-full pt-12 ">
            <div className="space-y-2">
              <h1 className="self-stretch font-bold text-primary text-sm">
                About us
              </h1>
              <h2 className="text-3xl md:text-4xl max-w-3xl font-semibold text-foreground leading-tight">
                For over 70 years, Posta Uganda is solely responsible for postal
                services in Uganda.
              </h2>
            </div>
            <div className="flex flex-col md:flex-row gap-8 justify-between mt-12 md:mt-20">
              <div className="grid grid-cols-2 gap-2 justify-between">
                {[
                  { title: "Founded", value: "1951" },
                  { title: "Locations", value: "300+" },
                  { title: "Employees", value: "2000+" },
                  { title: "Active Mailboxes", value: "70k+" },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="bg-secondary-foreground text-primary-foreground p-4 rounded-md"
                  >
                    <h4 className="text-xs text-muted">{item.title}</h4>
                    <p className="text-xl text-primary">{item.value}</p>
                  </div>
                ))}
              </div>
              <p className="text-sm text-muted-foreground max-w-[520px] flex flex-col gap-2">
                <span>
                  Uganda Post Limited, trading as Posta Uganda is the most
                  extensive provider of postal services in Uganda, having an
                  extensive network of postal delivery outlets down to
                  sub-county level.
                </span>
                <span>
                  We've evolved from traditional mail to a comprehensive network
                  of modern postal and financial services. No matter how
                  communication changes, we remain your reliable partner in
                  staying connected.
                </span>
                <span>
                  And just like that, a letter becomes a bridge, a parcel a
                  promise kept. You can rely on our extensive network, benefit
                  from our innovative services, and feel the pride of a truly
                  Ugandan institution.
                </span>
              </p>
            </div>
            <div className="w-full max-h-[400px] rounded-custom mt-12">
              <Image
                src={
                  "https://images.pexels.com/photos/2041627/pexels-photo-2041627.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                }
                alt=""
                width={1000}
                height={400}
                className="rounded-apple-xl w-full max-h-[400px] object-cover object-center"
              />
            </div>
          </div>
        </Container>
      </section>
      <section className="bg-secondary-foreground text-secondary w-full py-20 mt-12">
        <Container>
          <div className="self-stretch w-full flex flex-col items-center mb-12">
            <h2 className="self-stretch font-bold text-primary text-center text-sm">
              Our team
            </h2>
            <h3 className="self-stretch font-semibold text-center text-2xl mt-1">
              At Posta Uganda, our greatest asset is our people
            </h3>
          </div>
          <div className="flex flex-col gap-8">
            <div className="flex flex-col md:flex-row justify-center gap-8">
              <TeamMember
                image={"/images/team/1.jpg"}
                name={"James Arinaitwe"}
                title={"Managing Director"}
              />
              <TeamMember
                image={"/images/team/2.png"}
                name={"Balyejjusa Sulaiman Kirunda"}
                title={"Board Chairman"}
              />
              <TeamMember
                image={"/images/team/3.png"}
                name={"Kashillingi Hussein Rugaba"}
                title={"Board Member"}
              />
            </div>
            <div className="flex flex-col md:flex-row justify-center gap-8">
              <TeamMember
                image={"/images/team/4.jpg"}
                name={"Charles Opio Ogwal"}
                title={"Company Secretary"}
              />
              <TeamMember
                image={"/images/team/5.jpg"}
                name={"Masika Sedress Kalengyo"}
                title={"Board Member"}
              />
              <TeamMember
                image={"/images/team/6.jpg"}
                name={"Rwakimari Beatrice​"}
                title={"Board Member"}
              />
              <TeamMember
                image={"/images/team/7.jpg"}
                name={"Niyitegeka Micheal"}
                title={"Board Member"}
              />
            </div>
          </div>
        </Container>
      </section>
      <section className="py-12">
        <Container>
          <div className="w-full">
            <div className="flex flex-col md:flex-row md:justify-center gap-20 items-center px-4 md:px-0">
              <div className="w-full max-w-[420px] flex flex-col items-start gap-[17px]">
                <div className="self-stretch w-full flex flex-col items-start">
                  <h2 className="self-stretch font-bold text-primary text-sm">
                    ePosta
                  </h2>
                  <h3 className="self-stretch font-semibold text-foreground text-2xl mt-1">
                    How we work
                  </h3>
                </div>
                <p className="self-stretch h-fit font-normal text-muted-foreground text-sm">
                  ePosta is a Post Office Information Management System that has
                  revolutionized the Post Office by enabling Post Office offer
                  all its services online. It’s a single platform that makes it
                  possible for any one enjoy all services offered by Post Office
                  online.
                </p>
                <div className="w-[185px] pt-3">
                  <Link href="/about">
                    <Button
                      variant="default"
                      className="bg-secondary-foreground text-secondary font-medium text-sm w-full"
                    >
                      Create ePosta account
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
      <section className="pt-12 pb-20">
        <Container>
          <div className="w-full">
            <div className="flex flex-col md:flex-row-reverse md:justify-center gap-20 items-center px-4 md:px-0">
              <div className="w-full max-w-[420px] flex flex-col items-start gap-[17px]">
                <div className="self-stretch w-full flex flex-col items-start">
                  <h2 className="self-stretch font-bold text-primary text-sm">
                    Careers
                  </h2>
                  <h3 className="self-stretch font-semibold text-foreground text-2xl mt-1">
                    Build Your Career with Posta Uganda
                  </h3>
                </div>
                <p className="self-stretch h-fit font-normal text-muted-foreground text-sm">
                  At Posta Uganda, we're more than just a postal service – we're
                  a team of dedicated professionals working together to connect
                  communities and drive innovation across Uganda. If you're
                  looking for a career that makes a real difference, you've come
                  to the right place.
                </p>
                <div className="w-[185px] pt-3">
                  <Link href="/posta-careers">
                    <Button
                      variant="default"
                      className="bg-secondary-foreground text-secondary font-medium text-sm w-full"
                    >
                      Explore open roles
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
      <section className="pb-10 md:pb-20">
        <Container>
          <PartnersSection />
          <div className="rounded-apple-xl overflow-hidden mt-12 md:mt-auto bg-secondary">
            <TestimonialsSection />
          </div>
        </Container>
      </section>
    </div>
  );
};

export default AboutPage;
