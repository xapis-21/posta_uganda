import Bids from "@/components/Bids";
import Container from "@/components/Container";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

const reasons = [
  {
    title: "National Impact",
    description:
      "Your work will directly contribute to Uganda's communication infrastructure and economic growth.",
  },
  {
    title: "Innovation at the Core",
    description:
      "We're blending traditional postal services with cutting-edge technology. Help us pioneer new solutions in logistics and digital services.",
  },
  {
    title: "Career Growth",
    description:
      "With our extensive network and diverse services, there are numerous paths for career advancement and skill development.",
  },
  {
    title: "Inclusive Culture",
    description:
      "We value diversity and foster an environment where every voice is heard and every contribution matters.",
  },
  {
    title: "Competitive Benefits",
    description:
      "Enjoy a comprehensive benefits package, including health insurance, pension plans, and professional development opportunities.",
  },
  {
    title: "Work-Life Balance",
    description:
      "We understand the importance of personal time. Benefit from flexible working arrangements and generous leave policies.",
  },
  {
    title: "Sustainability Focus",
    description:
      "Be part of our initiatives to reduce our environmental impact and promote sustainable practices in logistics.",
  },
  {
    title: "Community Engagement",
    description:
      "Participate in our outreach programs and make a difference in local communities across Uganda.",
  },
];

const CareerPage = () => {
  return (
    <div>
      <section>
        <Container>
          <div className="w-full pt-12 md:pt-16">
            <div className="flex flex-col md:flex-row gap-8 justify-between mt-12 md:mt-20">
              <div className="space-y-2">
                <h1 className="self-stretch font-bold text-primary">
                  Careers & Opportunities
                </h1>
                <h2 className="text-4xl md:text-4xl max-w-3xl font-semibold text-foreground leading-tight">
                  Join Our Team at Posta Uganda
                </h2>
              </div>
              <p className="text-sm text-muted-foreground max-w-[520px] flex flex-col gap-2">
                {/* <span>
                  At Posta Uganda, we're not just delivering mail – we're
                  connecting communities, empowering businesses, and driving
                  innovation across the nation. Join our dynamic team and be
                  part of Uganda's postal revolution.
                </span> */}
              </p>
            </div>
            <div className="w-full max-h-[400px] rounded-2xl mt-12">
              <Image
                src={
                  "https://images.pexels.com/photos/6169126/pexels-photo-6169126.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                }
                alt=""
                width={1000}
                height={400}
                className="rounded-2xl w-full max-h-[300px] object-cover object-top"
              />
            </div>
          </div>
        </Container>
      </section>
      <section className="mt-8 md:pt-12">
        <Container>
          <Bids />
        </Container>
      </section>
      <section className="py-12 md:py-16 bg-secondary-">
        <Container>
          <h3 className="text-2xl font-semibold text-center mb-12">
            Why Choose Posta Uganda?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {reasons.map((reason, index) => (
              <Card key={index} className="shadow-none border-none bg-white-10">
                <CardHeader>
                  <CardTitle className="text-base">{reason.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">{reason.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
};

export default CareerPage;
