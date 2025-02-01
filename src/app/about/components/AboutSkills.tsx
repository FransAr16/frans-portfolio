"use client";

import React, { useRef } from "react";
import { motion, useInView } from "motion/react";
import Image from "next/image";
import { fadeIn, revealsText } from "@/data/animation";
import TextSlideUp from "@/components/ui/TextSlideUp";
import Button from "@/components/ui/Button";
import TextFadeIn from "@/components/ui/TextFadeIn";

import { FaCircle } from "react-icons/fa";

export default function AboutSkills() {
  const ref = useRef(null);
  const isInViewImg = useInView(ref, { once: true });

  return (
    <div className="relative h-full w-full pt-[4rem] 2xl:pt-[12rem] pb-4 overflow-hidden">
      <div className="flex flex-col lg:flex-row pt-[2rem] sm:pt-[2.5rem] lg:pt-[2.5rem] justify-between w-full gap-[8rem] lg:gap-[1.5rem] main-container">
        <div className="h-full w-full lg:w-[71%] flex flex-col gap-[1rem]">
          <div ref={ref}>
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
              className="w-full h-full sm:w-[12rem] sm:h-[15rem] md:w-[16rem] md:h-[19rem] lg:w-[10rem] lg:h-[13rem] xl:w-[12rem] xl:h-[15rem] 2xl:w-[18rem] 2xl:h-[22rem]"
            >
              <motion.div
                initial={{ scale: 1.5 }}
                animate={isInViewImg ? { scale: 1 } : { scale: 1.5 }}
                transition={{ delay: 0.5, duration: 1, ease: "easeInOut" }}
                className="w-full h-full"
              >
                <Image
                  src="/profile.png"
                  width={1678}
                  height={2160}
                  alt="profile-img"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </motion.div>
          </div>

          <div className="w-[70%] sm:w-[14rem] lg:w-[12rem] xl:w-[13rem] 2xl:w-[18rem] order-first lg:order-last">
            <TextSlideUp
              text="© 2024 Frans - Frontend Developer @ DKI Jakarta"
              animate={revealsText}
              className="font-medium 2xl:font-semibold mr-[4px] lg:mr-[6px] leading-[120%] text-[1.1rem] sm:text-[1.2rem] lg:text-[1.1rem] 2xl:text-[1.28rem]"
            />
          </div>
        </div>

        <div className="flex w-full h-full order-first lg:order-last">
          <div className="flex flex-col">
            <div className="flex flex-col gap-[2rem] lg:gap-[3rem] 2xl:gap-[4rem]">
              <div className="flex">
                <TextSlideUp
                  text="Area of expertise"
                  animate={revealsText}
                  className="font-medium mr-[8px] xl:mr-[12px] 2xl:mr-[16px] text-[2rem] sm:text-[2.5rem] lg:text-[2.4rem] xl:text-[3.2vw] 2xl:text-[4rem]"
                />
              </div>

              <div className="flex flex-col gap-[2rem] lg:gap-[3rem] 2xl:gap-[4rem]">
                <div className="grid grid-cols-12 gap-10 lg:gap-[4rem] xl:gap-[5rem]">
                  {/* Language */}
                  <div className="col-span-12 lg:col-span-3 flex flex-col gap-6 lg:gap-10">
                    <div className="flex">
                      <TextSlideUp
                        text="(Languages)"
                        animate={revealsText}
                        className="font-medium 2xl:font-semibold mr-[4px] lg:mr-[6px] leading-[120%] text-[1.1rem] sm:text-[1.2rem] lg:text-[1.1rem] 2xl:text-[1.28rem]"
                      />
                    </div>

                    <div className="flex flex-col gap-3 lg:gap-4">
                      {[
                        "HTML",
                        "CSS",
                        "SASS/SCSS",
                        "Javascript",
                        "Typescript",
                      ].map((item, index) => (
                        <div
                          className="flex items-center gap-3 lg:gap-4"
                          key={index}
                        >
                          <FaCircle className="text-[.35rem] lg:text-[.4rem]" />

                          <TextFadeIn
                            slideUp={fadeIn}
                            phrase={item}
                            className="font-medium mr-[5px] xl:mr-[6px] text-[1.1rem] sm:text-[1.2rem] lg:text-[1.1rem] 2xl:text-[1.28rem] leading-[120%]"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                  {/* Frameworks */}
                  <div className="col-span-12 lg:col-span-5 flex flex-col gap-6 lg:gap-10">
                    <div className="flex">
                      <TextSlideUp
                        text="(Frameworks/Libraries/Others)"
                        animate={revealsText}
                        className="font-medium 2xl:font-semibold mr-[4px] lg:mr-[6px] leading-[120%] text-[1.1rem] sm:text-[1.2rem] lg:text-[1.1rem] 2xl:text-[1.28rem]"
                      />
                    </div>
                    <div className="flex gap-[3rem] lg:gap-[4rem] xl:gap-[5rem]">
                      <div>
                        <div className="flex flex-col gap-3 lg:gap-4">
                          {[
                            "React.js",
                            "GSAP",
                            "Three.js",
                            "Next.js",
                            "Tailwind CSS",
                          ].map((item, index) => (
                            <div
                              className="flex items-center gap-3 lg:gap-4"
                              key={index}
                            >
                              <FaCircle className="text-[.35rem] lg:text-[.4rem]" />

                              <TextFadeIn
                                slideUp={fadeIn}
                                phrase={item}
                                className="font-medium mr-[5px] xl:mr-[6px] text-[1.1rem] sm:text-[1.2rem] lg:text-[1.1rem] 2xl:text-[1.28rem] leading-[120%]"
                              />
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <div className="flex flex-col gap-3 lg:gap-4">
                          {["Motion"].map(
                            (item, index) => (
                              <div
                                className="flex items-center gap-3 lg:gap-4"
                                key={index}
                              >
                                <FaCircle className="text-[.35rem] lg:text-[.4rem]" />

                                <TextFadeIn
                                  slideUp={fadeIn}
                                  phrase={item}
                                  className="font-medium mr-[5px] xl:mr-[6px] text-[1.1rem] sm:text-[1.2rem] lg:text-[1.1rem] 2xl:text-[1.28rem] leading-[120%]"
                                />
                              </div>
                            )
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Database */}
                  <div className="col-span-12 lg:col-span-4 flex flex-col gap-6 lg:gap-10">
                    <div className="flex">
                      <TextSlideUp
                        text="(Database)"
                        animate={revealsText}
                        className="font-medium 2xl:font-semibold mr-[4px] lg:mr-[6px] leading-[120%] text-[1.1rem] sm:text-[1.2rem] lg:text-[1.1rem] 2xl:text-[1.28rem]"
                      />
                    </div>

                    <div className="flex flex-col gap-3 lg:gap-4">
                      {[
                        "PostgreSQL",
                        "Prisma",
                      ].map((item, index) => (
                        <div
                          className="flex items-center gap-3 lg:gap-4"
                          key={index}
                        >
                          <FaCircle className="text-[.35rem] lg:text-[.4rem]" />

                          <TextFadeIn
                            slideUp={fadeIn}
                            phrase={item}
                            className="font-medium mr-[5px] xl:mr-[6px] text-[1.1rem] sm:text-[1.2rem] lg:text-[1.1rem] 2xl:text-[1.28rem] leading-[120%]"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
