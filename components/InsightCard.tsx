import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface InsightCardProps {
  title: string;
  excerpt?: string;
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
}: InsightCardProps) => {
  return (
    <Card className="max-w-[352px] overflow-hidden shadow-none">
      <CardHeader className="p-0">
        <Image
          src={imageUrl || ""}
          alt={title}
          width={352}
          height={200}
          className="h-[200px] w-full object-cover rounded-t-apple-lg "
        />
      </CardHeader>
      <CardContent className="p-4">
        <CardTitle className="font-semibold text-foreground text-lg mb-2 line-clamp-2">
          {title}
        </CardTitle>
        <p className="text-sm text-muted-foreground line-clamp-3">{excerpt}</p>
      </CardContent>
    </Card>
  );
};

export default InsightCard;

export const HorizontalInsightCard = ({
  title,
  excerpt,
  date,
  author,
  category,
  imageUrl,
  slug,
  variant = "default",
  className,
}: InsightCardProps) => {
  return (
    <Link
      href={`/insights/${slug}`}
      className="h-[204px] w-full max-w-[680px] group "
    >
      <div className="w-full max-w-[680px] h-full justify-between flex flex-row-reverse items-center gap-12 py-8 border-b-[.5px] ">
        {imageUrl && (
          <Image
            src={imageUrl}
            width={300}
            height={200}
            alt="Posta Uganda News"
            className="max-w-[140px] h-[80px] md:h-[120px] w-full md:max-w-[200px] object-cover rounded-xl"
          />
        )}
        <div className="flex flex-col gap-4">
          <div>
            <h3
              className={cn(
                "text-foreground font-semibold mb-2 line-clamp-2",
                imageUrl ? "text-lg" : "text-sm"
              )}
            >
              {title}
            </h3>
            {excerpt && (
              <p
                className={cn(
                  "text-muted-foreground line-clamp-3",
                  imageUrl ? "text-sm" : "text-xs"
                )}
              >
                {excerpt}
              </p>
            )}
          </div>
          <div className="flex items-center justify-between m3-2">
            <span className="text-xs text-muted-foreground/50">{date}</span>
            <span className="text-xs text-muted-foreground/50 group-hover:text-primary flex items-center">
              Read more{" "}
              <ArrowUpRight className="text-primary scale-0 origin-bottom group-hover:scale-105 transition-all h-4 w-4" />
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};
