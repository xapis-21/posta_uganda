import React from "react";
import Container from "./Container";
import InsightCard from "./InsightCard";
import { Button } from "./ui/button";
import Link from "next/link";

interface Insight {
  image: string;
  title: string;
  description: string;
}

const insights: Insight[] = [
  {
    image:
      "https://images.pexels.com/photos/4246120/pexels-photo-4246120.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    title: "Posta Uganda Launches New Express Delivery Service",
    description:
      "We're excited to announce our new express delivery service, bringing faster and more efficient shipping options to our customers across Uganda.",
  },
  {
    image:
      "https://images.pexels.com/photos/5025669/pexels-photo-5025669.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    title: "Digital Transformation: Posta Uganda Embraces E-Commerce",
    description:
      "Learn how Posta Uganda is adapting to the digital age with new e-commerce integration and online tracking systems for all shipments.",
  },
  {
    image:
      "https://images.pexels.com/photos/5025666/pexels-photo-5025666.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    title: "Expanding Our Network: 50 New Post Offices Opened",
    description:
      "Posta Uganda continues to grow with the opening of 50 new post office locations, bringing our services closer to communities across the country.",
  },
  {
    image:
      "https://images.pexels.com/photos/6169668/pexels-photo-6169668.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    title: "Commemorative Stamp Series Celebrates Ugandan Wildlife",
    description:
      "Our latest stamp collection showcases Uganda's diverse wildlife, featuring iconic animals from our national parks.",
  },
  {
    image:
      "https://images.pexels.com/photos/4549414/pexels-photo-4549414.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    title: "Posta Uganda Partners with Local Artisans for Unique Packaging",
    description:
      "We're supporting local craftsmanship by introducing artisan-designed packaging options for special deliveries and gifts.",
  },
  {
    image:
      "https://images.pexels.com/photos/4549415/pexels-photo-4549415.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    title: "Sustainability Initiative: Eco-Friendly Delivery Options",
    description:
      "Discover how Posta Uganda is reducing its carbon footprint with new eco-friendly vehicles and sustainable packaging solutions.",
  },
];

const Insights: React.FC = () => {
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
            {insights.map(({ image, title, description }) => (
              <InsightCard
                key={title}
                image={image}
                title={title}
                description={description}
              />
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
