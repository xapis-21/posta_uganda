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
      title: "Postal Addresses",
      description:
        "Secure and accessible physical and virtual postal addresses for all your mail",
      link: "/postal-addresses",
      buttonText: "Apply now",
    },
    {
      title: "Mail & Parcel Delivery",
      description:
        "Send and receive mail and parcels with confidence, locally and globally.",
      link: "/mail-parcel-delivery",
      buttonText: "Send a Package Now",
    },
    {
      title: "Express Services",
      description:
        "Swift express delivery to ensure your urgent parcels arrive on time.",
      link: "/express-services",
      buttonText: "Book EMS Service",
    },
  ];

  return (
    <section className="py-10">
      <Container>
        <div className="py-20 rounded-apple-xl bg-secondary-foreground flex flex-col md:flex-row items-center gap-4 md:gap-10 justify-center px-2 md:px-8 ">
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
