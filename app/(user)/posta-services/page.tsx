import ServiceSection from "@/components/ServiceSection";
import { other, services } from "@/constants";
import React from "react";

import { title } from "process";
import OtherServiceCard from "@/components/OtherServiceCard";
import Container from "@/components/Container";

const page = ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  const activeService = searchParams.service as string;
  return (
    <div>
      <section className="py-20 bg-[url(https://images.pexels.com/photos/6169187/pexels-photo-6169187.jpeg?auto=compress&cs=tinysrgb&w=800)] relative isolate overflow-hidden bg-cover bg-center">
        <div className="w-full pt-12 ">
          <div className="max-w-3xl mx-auto flex flex-col items-center">
            <h1 className="font-bold text-primary ">Our Services</h1>
            <h2 className="text-3xl md:text-4xl max-w-3xl font-semibold text-white-100 text-center leading-tight">
              We offer a wide range of postal and logistics services
            </h2>
            <div className="w-full h-full bg-black-100/50 backdrop-blur-sm -z-10 absolute bottom-0 left-[50%] -translate-x-[50%]" />
          </div>
        </div>
      </section>
      <ServiceSection activeService={activeService || null} />
      <section className="py-12">
        <Container>
          <h2 className="text-black-10 text-xl md:text-2xl lg:text-3xl mb-8 max-w-xl text-center mx-auto font-medium">
            Our comprehensive range of services also includes
          </h2>
          <div className="flex flex-col md:grid md:grid-cols-4 gap-4 justify-center">
            {other.map(({ title, excerpt }) => (
              <OtherServiceCard title={title} description={excerpt} />
            ))}
          </div>
        </Container>
      </section>
      {/* <section className="md:py-16">
        <Container>
          <h2 className="text-black-10 text-xl md:text-2xl lg:text-3xl mb-8 max-w-xl text-center mx-auto font-medium">
            Our comprehensive range of services also includes
          </h2>
          <div className="flex flex-col gap-8 max-w-4xl mx-auto">
            {other.map(({ title, excerpt }, index) => (
              <div
                key={index}
                className="flex text-sm lg:text-base items-start border-b-[.5px] border-pav-900/50 pb-8 last:border-none"
              >
                <p className="text-pav-black">{excerpt}</p>
              </div>
            ))}
          </div>
        </Container>
      </section> */}
    </div>
  );
};

export default page;
