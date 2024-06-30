import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

const FeaturedServiceCard = ({
  service,
  description,
  link,
  CallToAction,
}: {
  service: string;
  description: string;
  link: string;
  CallToAction: string;
}) => {
  return (
    <div className="max-w-[360px] text-white text-center px-8">
      <h2 className="font-[500px] text-[14px]">{service}</h2>
      <h3 className="my-10 font-[600px] text-[24px]">{description}</h3>
      <Link href={link}>
        <Button variant={"outline"} className="bg-transparent font-[500px] text-[14]">
          {CallToAction}
        </Button>
      </Link>
    </div>
  );
};

export default FeaturedServiceCard;
