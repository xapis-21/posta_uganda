import InsightCard from "@/components/insights/InsightCard";
import Container from "@/components/Container";
import { insightsarr as insights } from "@/constants";
import { HorizontalInsightCard } from "@/components/InsightCard";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const BlogPage = () => {
  return (
    <div>
      <section className="w-full bg-secondary py-16 pt-20 md:pt-32">
        <Container>
          <div>
            <h2 className="text-primary font-bold text-center mb-2">
              Connect with us
            </h2>
            <h3 className="text-4xl font-semibold text-center mb-12">
              Latest News Updates
            </h3>
          </div>
          <div className="w-full h-full justify-between rounded-xl overflow-hidden relative isolate ">
            {insights[0] && (
              <Image
                src={insights[0].imageUrl}
                alt=""
                width={1000}
                height={400}
                className="w-full h-full object-cover max-h-[400px] brightness-90 rounded-2xl"
              />
            )}
            <div className="absolute left-0 h-full w-full top-0 z-20 bg-gradient-to-t from-black-100 via-transparent to-transparent" />
            <div className="absolute left-0 h-full w-full top-0 z-20 flex items-end">
              <div className="max-w-[640px] py-8 px-12">
                <span className="text-xs text-white-10">
                  {insights[0].date}
                </span>
                <h1 className="text-xl md:text-3xl text-white-100 font-semibold">
                  {insights[0]?.title}
                </h1>
                <p className="hidden md:block mt-4 text-white-10 text-sm line-clamp-3">
                  {insights[0]?.excerpt}
                </p>
                <Link
                  href={`/insights/${insights[0]?.slug}`}
                  className="text-primary flex items-center mt-4 text-sm font-bold"
                >
                  Read more <ArrowUpRight />
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-8">
        <Container>
          <div className="flex flex-col md:flex-row justify-center gap-12">
            <div className="flex-grw">
              <h2 className="text-3xl font-semibold  mb-8 after:absolute after:-bottom-2 after:h-1 after:w-10 after:bg-primary relative after:left-0">
                Posta Uganda Insights
              </h2>
              <div className="space-y-8 max-w-[800px] mb-12 w-full">
                {insights.slice(1, 4).map((insight, index) => (
                  <HorizontalInsightCard
                    key={index}
                    {...insight}
                    variant="horizontal"
                  />
                ))}
              </div>
            </div>
            <div className="w-full md:max-w-[300px] border-l-[.5px] md:pl-8">
              <h2 className="text-xl font-semibold  mb-4 md:mb-8 after:absolute after:-bottom-2 after:h-1 after:w-10 after:bg-primary relative after:left-0">
                Featured
              </h2>
              <div className="hidden md:block space-y-8">
                {insights.slice(1, 4).map((insight, index) => (
                  <HorizontalInsightCard
                    key={index}
                    variant="horizontal"
                    title={insight.title}
                    excerpt={insight.excerpt}
                    date={insight.date}
                    author={insight.author}
                    category={insight.category}
                    slug={insight.slug}
                  />
                ))}
              </div>
              <div className="md:hidden space-y-8">
                {insights.slice(1, 4).map((insight, index) => (
                  <HorizontalInsightCard
                    key={index}
                    variant="horizontal"
                    title={insight.title}
                    excerpt={insight.excerpt}
                    date={insight.date}
                    imageUrl={insight.imageUrl}
                    author={insight.author}
                    category={insight.category}
                    slug={insight.slug}
                  />
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default BlogPage;
