"use client";

import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Navigation } from "swiper/modules";
import { useEffect, useRef, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper as SwiperType } from "swiper";

import Container from "./Container";
import InsightCard from "./InsightCard";
import { Button } from "./ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

import { insightsarr as insights } from "@/constants";
import { cn } from "@/lib/utils";

const Insights = () => {
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const swiperRef = useRef<SwiperType>();

  useEffect(() => {
    const swiper = swiperRef.current;
    if (swiper) {
      setIsBeginning(swiper.isBeginning);
      setIsEnd(swiper.isEnd);

      swiper.on("slideChange", () => {
        setIsBeginning(swiper.isBeginning);
        setIsEnd(swiper.isEnd);
      });
    }
  }, [swiperRef]);

  return (
    <section className="py-20 pb-16 w-full bg-white-100">
      <Container>
        <div className="w-full flex justify-between gap-12 mb-12">
          <div className="mb-6 max-w-xl">
            <h2 className="text-primary font-bold mb-2">
              News, Updates & Insights
            </h2>
            <h3 className="text-black-10 text-2xl md:text-4xl font-semibold">
              Catch up on the latest happenings at Posta Uganda
            </h3>
          </div>
          <div className="flex gap-4 items-center">
            <Button
              variant={"outline"}
              size={"icon"}
              className={cn(
                " rounded-full border-pav-500 bg-transparent hover:bg-primary/10 hover:text-primary  text-primary disabled:text-primary/50 border-primary/50"
              )}
              onClick={() => swiperRef.current?.slidePrev()}
              disabled={isBeginning}
            >
              {" "}
              <ChevronLeft />
            </Button>
            <Button
              variant={"outline"}
              size={"icon"}
              className={cn(
                " rounded-full border-pav-500 bg-transparent hover:bg-primary/10 hover:text-primary  text-primary disabled:text-primary/50 border-primary/50"
              )}
              onClick={() => swiperRef.current?.slideNext()}
              disabled={isEnd}
            >
              <ChevronRight />
            </Button>
          </div>
        </div>
      </Container>
      <div className="w-screen h-fit">
        <Swiper
          slidesPerView={1.5}
          spaceBetween={30}
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
          breakpoints={{
            640: {
              slidesPerView: 2.5,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3.5,
              spaceBetween: 24,
            },
            1024: {
              slidesPerView: 4.5,
              spaceBetween: 24,
            },
          }}
          modules={[Navigation]}
          className="!pl-[max(1rem,calc((100vw-1440px)/2+1rem))] lg:!pl-[max(2rem,calc((100vw-1440px)/2+2rem))]"
        >
          {insights.map((insight, index) => (
            <SwiperSlide key={index}>
              <InsightCard key={index} {...insight} />
            </SwiperSlide>
          ))}
          <SwiperSlide>
            <div className="md:w-[300px] w-[100px]" />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Insights;
