import React from "react";
import { Button, buttonVariants } from "./ui/button";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { cn } from "@/lib/utils";

interface FeaturedServiceCardProps {
  title: string;
  description: string;
  link: string;
  buttonText: string;
}

const FeaturedServiceCard: React.FC<FeaturedServiceCardProps> = ({
  title,
  description,
  link,
  buttonText,
}) => {
  return (
    <div className="h-[320px] w-[360px]  bg-black-10 border-none rounded-2xl cursor-pointer duration-300 grid place-items-center transition group p-6">
      <CardContent className="flex flex-col items-center gap-8">
        <CardTitle className="font-medium text-sm text-center text-card text-white-10">
          {title}
        </CardTitle>
        <p className="text-xl text-center text-white-10 text-card line-clamp-3">
          {description}
        </p>
        <Link
          href={link}
          className={cn(
            buttonVariants({ variant: "outline", size: "sm" }),
            "border-white-10/80 text-white-10/80 hover:bg-white-10 hover:text-black-10"
          )}
        >
          {buttonText}
        </Link>
      </CardContent>
    </div>
  );
};

export default FeaturedServiceCard;
