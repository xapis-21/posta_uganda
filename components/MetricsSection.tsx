import React from "react";
import Container from "./Container";

const metrics = [
  { value: "300+", label: "Post Offices" },
  { value: "1M+", label: "Packages Delivered" },
  { value: "98%", label: "Customer Satisfaction" },
  { value: "70K+", label: "Active Mailboxes" },
];

const MetricsSection: React.FC = () => {
  return (
    <section className="py-20 bg-secondary-foreground text-secondary w-full">
      <Container>
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-primary text-sm font-bold mb-2">
            Nationwide Reach
          </h2>
          <h3 className="text-3xl font-semibold mb-4">
            Connecting Uganda, Empowering Communities
          </h3>
          <p className="text-secondary/80">
            Posta Uganda's extensive network and innovative services drive
            critical communications and logistics across the nation. From urban
            centers to rural communities, we're committed to connecting people,
            businesses, and ideas.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <div key={index} className="text-center">
              <p className="text-3xl font-bold text-primary">{metric.value}</p>
              <p className="text-secondary/80">{metric.label}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default MetricsSection;
