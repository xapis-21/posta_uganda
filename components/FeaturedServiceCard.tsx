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
    <Card className="w-full md:max-w-[360px] flex flex-col items-center gap-8 bg-transparent border-none rounded-apple-xl hover:bg-foreground/50 cursor-pointer duration-300 transition group">
      <CardHeader>
        <CardTitle className="font-medium text-sm text-center text-card">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-xl text-center text-card line-clamp-3">
          {description}
        </p>
      </CardContent>
      <CardFooter>
        <Link
          href={link}
          className={cn(
            buttonVariants({ variant: "outline", size: "sm" }),
            "group-hover:bg-accent group-hover:text-accent-foreground"
          )}
        >
          {buttonText}
        </Link>
      </CardFooter>
    </Card>
  );
};

export default FeaturedServiceCard;
