import React from "react";
import Container from "./Container";
import { LuMail, LuPackage, LuTruck, LuHome } from "react-icons/lu";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";

const services = [
  {
    icon: LuMail,
    title: "Digital Mailbox",
    description: "Access your mail 24/7 from anywhere",
  },
  {
    icon: LuPackage,
    title: "Track Packages",
    description: "Real-time tracking for all your deliveries",
  },
  {
    icon: LuTruck,
    title: "Request Delivery",
    description: "Schedule convenient deliveries to your location",
  },
  {
    icon: LuHome,
    title: "Postal Addresses",
    description: "Manage physical and virtual addresses ",
  },
];

const EPostaSection: React.FC = () => {
  return (
    <section className="py-20 bg-black-10  text-white-10 w-full">
      <Container>
        <div className="max-w-xl mx-auto text-center mb-16">
          <h2 className="text-primary text-base font-bold mb-2">
            An address for everyone
          </h2>
          <h3 className="text-4xl font-semibold mb-4  text-center">
            Manage, monitor, and transact from any device, 24/7
          </h3>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-8">
          {services.map((service, index) => (
            <div key={index} className="flex flex-col items-center text-center max-w-[300px]">
              <service.icon className="w-12 h-12 text-primary mb-4" />
              <h4 className="text-base font-semibold mb-2">{service.title}</h4>
              <p className="text-white-10/50 text-sm">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="mx-auto w-fit">
          <Link
            href=""
            className={cn(
              buttonVariants({ variant: "default", }),
              "border-white-10/80 text-white-10/80 hover:bg-white-10 hover:text-black-10 mx-auto mt-12"
            )}
          >
            Get Started today
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default EPostaSection;
