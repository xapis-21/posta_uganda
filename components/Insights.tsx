import React from "react";
import InsightCard from "./InsightCard";
import Container from "./Container";
import { insights } from "@/constants";

const Insights = () => {
  return (
    <Container>
      <div className="flex flex-col items-center">
        <div className="my-10 text-center">
          <h2 className="text-sm text-postared">News, Updates & Insights</h2>
          <h3 className="font-semibold text-xl">
            Catch up on the latest happenings at Posta Uganda
          </h3>
        </div>
        <div className="grid grid-cols-3 gap-10">
          {insights.map(({ image, title, description }) => (
            <div key="title">
              <InsightCard
                image={image}
                title={title}
                description={description}
              />
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Insights;
