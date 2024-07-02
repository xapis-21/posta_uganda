import React from "react";
import Container from "./Container";
import { LuMail, LuPackage, LuTruck, LuHome } from "react-icons/lu";

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
    description: "Manage physical and eBox (virtual) addresses",
  },
];

const EPostaSection: React.FC = () => {
  return (
    <section className="py-20 bg-primary/10 w-full">
      <Container>
        <h2 className="text-primary text-sm font-bold text-center mb-2">
          Our Digital Platform
        </h2>
        <h3 className="text-3xl font-semibold text-center mb-12">
          Postal Services at Your Fingertips
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <service.icon className="w-12 h-12 text-primary mb-4" />
              <h4 className="text-xl font-semibold mb-2">{service.title}</h4>
              <p className="text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default EPostaSection;
