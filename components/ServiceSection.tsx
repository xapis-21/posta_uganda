"use client";
import { useState } from "react";

import { CheckCheck, ChevronDown } from "lucide-react";
import Container from "./Container";
import { Button } from "./ui/button";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import Image from "next/image";
import { Tabs, TabsList, TabsContent, TabsTrigger } from "./ui/tabs";
import { featured } from "@/constants";
import { cn } from "@/lib/utils";
import { DoubleArrowRightIcon } from "@radix-ui/react-icons";

interface SubService {
  title: string;
  excerpt: string;
}

interface Service {
  title: string;
  excerpt: string;
  subServices: SubService[];
}

interface ServiceSectionProps {
  service: Service;
}

const ServiceSection = ({
  activeService,
}: {
  activeService: string | null;
}) => {
  const [active, setActive] = useState<"address" | "mail" | "ems" | "finance">(
    (activeService as "address" | "mail" | "ems" | "finance") || "address"
  );

  return (
    <section className="py-12 md:py-20">
      <Container>
        <div className="flex w-full gap-20">
          <div className="hidden md:flex gap-2 flex-col bg-white-10/50 rounded-xl p-4">
            {/* <h2 className="font-semibold text-">
                Featured Services
            </h2> */}
            <Button
              variant={"ghost"}
              className={cn(
                "text-left flex gap-2 justify-start",
                active === "address" && "text-primary"
              )}
              onClick={() => setActive("address")}
            >
              {active === "address" && (
                <DoubleArrowRightIcon className="text-primary" />
              )}
              Address Management
            </Button>
            <Button
              variant={"ghost"}
              className={cn(
                "text-left justify-start ",
                active === "mail" && "text-primary"
              )}
              onClick={() => setActive("mail")}
            >
              {active === "mail" && (
                <DoubleArrowRightIcon className="text-primary" />
              )}
              Mail Processing
            </Button>
            <Button
              variant={"ghost"}
              className={cn(
                "text-left flex gap-2 justify-start",
                active === "ems" && "text-primary"
              )}
              onClick={() => setActive("ems")}
            >
              {active === "ems" && (
                <DoubleArrowRightIcon className="text-primary" />
              )}
              Express Mail Service
            </Button>
            <Button
              variant={"ghost"}
              className={cn(
                "text-left flex gap-2 justify-start",
                active === "finance" && "text-primary"
              )}
              onClick={() => setActive("finance")}
            >
              {active === "finance" && (
                <DoubleArrowRightIcon className="text-primary" />
              )}
              Financial Services
            </Button>
          </div>
          <div className="hidden md:block">
            {active === "address" && <Address service={featured[0]} />}
            {active === "ems" && <Address service={featured[2]} />}
            {active === "mail" && <Address service={featured[1]} />}
            {active === "finance" && <Address service={featured[3]} />}
          </div>
          <div className="flex flex-col md:hidden gap-8">
            <Address service={featured[0]} />
            <Address service={featured[2]} />
            <Address service={featured[1]} />
            <Address service={featured[3]} />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ServiceSection;

const Address = ({ service }: ServiceSectionProps) => {
  const { title, excerpt, subServices } = service;

  return (
    <div className="w-full max-w-4xl flex flex-col items-start gap-[20px]">
      <div className="w-full flex flex-col items-start">
        <h2 className=" font-semibold text-black-10 text-2xl">{title}</h2>
      </div>
      <p className=" font-light text-black-10 text-base">{excerpt}</p>
      <div className="mt-2 text-black-10/80">
        {/* <h3 className="text-base mb-4">We offer:</h3> */}
        <ul className="">
          {subServices.map(({ title, excerpt }) => (
            <li
              key={title}
              className="mb-2 flex gap-2 items-center border-b-[.5px] border-b-white-10 text-sm pb-4 last:border-none"
            >
              {/* <CheckCheck className="text-primary/50" /> */}

              <p>
                <strong>{title}: </strong>
                {excerpt}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
