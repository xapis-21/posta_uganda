import React from "react";
import FeaturedServiceCard from "./FeaturedServiceCard";
import Container from "./Container";

const Services = () => {
  const services: {
    title: string;
    description: string;
    link: string;
    buttonText: string;
  }[] = [
    {
      title: "Postal Address Management",
      description:
        "Secure and accessible physical and virtual postal addresses for all your mail",
      link: "/posta-services/postal-addresses",
      buttonText: "Manage account",
    },
    {
      title: "Mail Processing Services",
      description:
        "Send and receive mail and parcels with confidence, locally and globally.",
      link: "/posta-services/mail-parcel-delivery",
      buttonText: "Track a package",
    },
    {
      title: "Financial Services",
      description:
        "Swift express delivery to ensure your urgent parcels arrive on time.",
      link: "/posta-services/express-services",
      buttonText: "Make payment",
    },
  ];

  return (
    <section className="md:py-16 pb-16 md:pb-32">
      <Container>
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-10 justify-around px-2 md:px-8 w-full">
          {services.map(({ title, description, link, buttonText }) => (
            <FeaturedServiceCard
              title={title}
              description={description}
              link={link}
              buttonText={buttonText}
              key={title}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Services;
