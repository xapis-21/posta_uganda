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

interface OtherServiceCardProps {
  title: string;
  description: string;

}

const OtherServiceCard = ({ title, description }:OtherServiceCardProps) => {
  return (
    <div className="h-[320px] w-full bg-black-10 border-none rounded-2xl cursor-pointer duration-300 grid place-items-center transition group p-6">
      <CardContent className="flex flex-col items-center gap-8">
        <CardTitle className="font-medium text-base text-center text-card text-white-10">
          {title}
        </CardTitle>
        <p className="text-sm text-center text-white-10 text-card">
          {description}
        </p>
      
      </CardContent>
    </div>
  );
};

export default OtherServiceCard;
