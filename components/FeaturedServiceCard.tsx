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
    <div className="max-w-[360px] text-white text-center">
      <h2 className="font-[500px] text-[14px]">{service}</h2>
      <h3 className="my-4 md:my-10 font-[600px] text-[24px] line-clamp-3">{description}</h3>
      <Link href={link}>
        <Button variant={"outline"} className="bg-transparent font-[500px] text-xs">
          {CallToAction}
        </Button>
      </Link>
    </div>
  );
};

export default FeaturedServiceCard;