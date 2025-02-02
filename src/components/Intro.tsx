"use client";

import React, { useRef } from "react";
import { motion, useInView } from "motion/react";
import TextSlideUp from "./ui/TextSlideUp";
import { revealsText } from "@/data/animation";

const singleLineTab = [
  "Challenging the status quo with",
  "audacious creativity and unwavering",
  "dedication. I build digital solutions that",
  "go beyond the ordinary, embarking on",
  "a journey of innovation to craft every",
  "project into a masterpiece.",
];

const singleLineMobile = [
  "Challenging the",
  "status quo with",
  "audacious",
  "creativity and",
  "unwavering",
  "dedication. I build",
  "digital solutions",
  "that go beyond",
  "the ordinary,",
  "embarking on a",
  "journey of",
  "innovation to craft",
  "every project into",
  "a masterpiece.",
];

export default function Intro() {
  const ref = useRef(null);
  const isInViewImg = useInView(ref, { once: true });

  return (
    <div className="relative h-full w-full">
      <div className="main-container w-full h-full py-[4rem] lg:py-[8rem] 2xl:py-[12rem] m-auto ">
        <div className="w-full flex flex-col relative leading-none">
          {/* Intro */}
          <div className="w-full flex flex-col lg:flex-row items-start lg:items-end gap-2">
            <div className="flex flex-col ">
              <div ref={ref} className="">
                <motion.div
                  initial={{
                    clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)",
                  }}
                  animate={{
                    clipPath: isInViewImg
                      ? "polygon(0 0, 100% 0, 100% 100%, 0 100%)"
                      : "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)",
                  }}
                  exit={{
                    clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
                  }}
                  transition={{ delay: 0.5, duration: 1, ease: "easeInOut" }}
                  className="w-[10rem] h-[13rem] sm:w-[12rem] sm:h-[15rem] md:w-[14rem] md:h-[17rem] lg:w-[10rem] lg:h-[13rem] xl:w-[12rem] xl:h-[15rem] 2xl:w-[18rem] 2xl:h-[22rem] bg-foreground"
                >
                  <motion.div
                    initial={{ scale: 1.6 }}
                    animate={isInViewImg ? { scale: 1 } : { scale: 1.5 }}
                    transition={{ delay: 0.5, duration: 1, ease: "easeInOut" }}
                    className="w-full h-full"
                  >
                    <video
                      autoPlay
                      muted
                      loop
                      className="w-full h-full object-cover"
                    >
                      <source src="/videos/intro.mp4" type="video/mp4" />
                    </video>
                  </motion.div>
                </motion.div>
              </div>
              <div className="pb-2 lg:pb-4 order-first">
                <div className="relative">
                  <TextSlideUp
                    text="(Creative Process)"
                    animate={revealsText}
                    className="font-medium 2xl:font-semibold mr-[4px] lg:mr-[6px] text-[1.1rem] sm:text-[1.2rem] md:text-[1rem] lg:text-[1.1rem] 2xl:text-[1.28rem]"
                  />
                </div>
              </div>
            </div>
            <div className="hidden lg:block lg:ml-[24px]">
              <TextSlideUp
                text="Challenging the status quo with"
                animate={revealsText}
                className="font-medium mr-[8px] xl:mr-[18px] 2xl:mr-[20px] tracking-[-0.04em] text-[5.2vw] leading-[106%]"
              />
            </div>
          </div>

          {/* Intro Desktop */}
          <div className="hidden lg:block">
            <TextSlideUp
              text="audacious creativity and unwavering"
              animate={revealsText}
              className="font-medium mr-[8px] xl:mr-[18px] 2xl:mr-[20px] text-[5.2vw] leading-[106%]"
            />
            <TextSlideUp
              text="dedication. I build digital solutions that"
              animate={revealsText}
              className="font-medium mr-[8px] xl:mr-[18px] 2xl:mr-[20px] text-[5.2vw] leading-[106%]"
            />
            <TextSlideUp
              text="go beyond the ordinary, embarking on"
              animate={revealsText}
              className="font-medium mr-[8px] xl:mr-[18px] 2xl:mr-[20px] text-[5.2vw] leading-[106%]"
            />
            <TextSlideUp
              text="a journey of innovation to craft every"
              animate={revealsText}
              className="font-medium mr-[8px] xl:mr-[18px] 2xl:mr-[20px] text-[5.2vw] leading-[106%]"
            />
            <TextSlideUp
              text="project into a masterpiece."
              animate={revealsText}
              className="font-medium mr-[8px] xl:mr-[18px] 2xl:mr-[20px] text-[5.2vw] leading-[106%]"
            />
          </div>

          {/* Tablet */}
          <div className="flex-col hidden sm:flex lg:hidden mt-[3rem]">
            {singleLineTab.map((line, index) => (
              <TextSlideUp
                key={index}
                text={line}
                animate={revealsText}
                className="font-medium mr-[8px] xl:mr-[18px] 2xl:mr-[20px] text-[5.5vw] leading-[110%]"
              ></TextSlideUp>
            ))}
          </div>

          {/* Mobile */}
          <div className="flex flex-col sm:hidden mt-[3rem]">
            {singleLineMobile.map((line, index) => (
              <TextSlideUp
                key={index}
                text={line}
                animate={revealsText}
                className="font-medium mr-[8px] xl:mr-[18px] 2xl:mr-[20px] text-[clamp(2.3rem,10vw,10rem)] leading-[110%]"
              ></TextSlideUp>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
