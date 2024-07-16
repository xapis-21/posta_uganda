import React from "react";
import Container from "./Container";
import InsightCard from "./InsightCard";
import { Button } from "./ui/button";
import Link from "next/link";

import { insightsarr as insights } from "@/constants";

const Insights = () => {
  return (
    <section className="py-20 w-full bg-background">
      <Container>
        <div className="flex flex-col items-center">
          <div className="mb-12 text-center">
            <h2 className="text-primary text-sm font-bold mb-2">
              News, Updates & Insights
            </h2>
            <h3 className="text-foreground text-2xl md:text-3xl font-semibold">
              Catch up on the latest happenings at Posta Uganda
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {insights.slice(1, 4).map((insight, index) => (
              <InsightCard key={index} {...insight} />
            ))}
          </div>
          <Link href="/news">
            <Button
              variant="outline"
              className="rounded-apple-md text-primary border-primary hover:bg-primary hover:text-primary-foreground"
            >
              View all news
            </Button>
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default Insights;
