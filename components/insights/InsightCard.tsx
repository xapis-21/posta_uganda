// components/InsightCard.tsx
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface InsightCardProps {
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
  imageUrl?: string;
  slug: string;
  variant?: "default" | "horizontal" | "large";
  className?: string;
}

const InsightCard = ({
  title,
  excerpt,
  date,
  author,
  category,
  imageUrl,
  slug,
  variant = "default",
  className,
}:InsightCardProps) => {
  const isHorizontal = variant === "horizontal";
  const isLarge = variant === "large";

  return (
    <Link href={`/blog/${slug}`}>
      <Card
        className={cn(
          "overflow-hidden transition-all duration-300 shadow-none border-none",
          isHorizontal && "flex flex-col md:flex-row-reverse",
          isLarge && "flex flex-col",
          className
        )}
      >
        {imageUrl && (
          <div
            className={cn(
              "relative",
              isHorizontal ? "md:w-2/5" : "w-full",
              isLarge && "w-full"
            )}
          >
            <AspectRatio ratio={16 / 9}>
              <Image src={imageUrl} alt={title} height={300} width={400} className={cn("object-cover rounded-2xl", isHorizontal && " h-[140px] w-[240px]" )} />
            </AspectRatio>
          </div>
        )}
        <div
          className={cn(
            "flex flex-col",
            isHorizontal && "md:w-3/5",
            isLarge && "w-full"
          )}
        >
          <CardHeader>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-primary">
                {category}
              </span>
              <span className="text-sm text-muted-foreground">{date}</span>
            </div>
            <h3
              className={cn(
                "font-semibold leading-tight",
                isLarge ? "text-2xl" : "text-xl"
              )}
            >
              {title}
            </h3>
          </CardHeader>
          <CardContent>
            <p
              className={cn(
                "text-muted-foreground",
                isLarge ? "text-base" : "text-sm"
              )}
            >
              {excerpt}
            </p>
          </CardContent>
          <CardFooter>
            <p className="text-sm text-muted-foreground">By {author}</p>
          </CardFooter>
        </div>
      </Card>
    </Link>
  );
};

export default InsightCard;
