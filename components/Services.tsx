import React from "react";
import FeaturedServiceCard from "./FeaturedServiceCard";
import Container from "./Container";

const Services = () => {
  const services: {
    service: string;
    description: string;
    link: string;
    CallToAction: string;
  }[] = [
    {
      service: "Postal Adresses",
      description:
        "Secure and accessible physical and virtual postal addresses for all your mail",
      link: "",
      CallToAction: "Apply now",
    },
    {
      service: "Mail & Parcel Delivery",
      description:
        "Send and receive mail and parcels with confidence, locally and globally.",
      link: "",
      CallToAction: "Send a Package Now",
    },
    {
      service: "Express Services",
      description:
        "Swift express delivery to ensure your urgent parcels arrive on time.",
      link: "",
      CallToAction: "Book EMS Service",
    },
  ];
  return (
    <Container>
      <div className="py-20 rounded-[20px] bg-postablack flex justify-between px-4">
        {services.map(({ service, description, link, CallToAction }) => (
          <FeaturedServiceCard
            service={service}
            description={description}
            link={link}
            CallToAction={CallToAction}
            key={CallToAction}
          />
        ))}
      </div>
    </Container>
  );
};

export default Services;
