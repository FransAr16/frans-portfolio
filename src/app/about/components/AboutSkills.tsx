"use client";

import React, { useRef } from "react";
import { motion, useInView } from "motion/react";
import Image from "next/image";
import { fadeIn, revealsText } from "@/data/animation";
import TextSlideUp from "@/components/ui/TextSlideUp";
import TextFadeIn from "@/components/ui/TextFadeIn";

interface DotCircleProps {
  circle?: boolean;
}

export default function AboutSkills() {
  const ref = useRef(null);
  const isInViewImg = useInView(ref, { once: true });

  return (
    <div className="relative h-full w-full py-[3rem] 2xl:py-[17rem] overflow-hidden">
      <div className="flex flex-col lg:flex-row pt-[2rem] sm:pt-[2.5rem] lg:pt-[2.5rem] justify-between w-full gap-[2rem] lg:gap-[4rem] xl:gap-[6rem] 2xl:gap-[8rem] main-container">
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
              className="w-full h-full sm:h-[25rem] lg:h-[25rem] 2xl:h-[30rem]"
            >
              <motion.div
                initial={{ scale: 1.5 }}
                animate={isInViewImg ? { scale: 1 } : { scale: 1.5 }}
                transition={{ delay: 0.5, duration: 1, ease: "easeInOut" }}
                className="w-full h-full"
              >
                <Image
                  src="/"
                  width={2624}
                  height={2624}
                  alt="profile-img"
                  className="w-full h-full object-cover bg-foreground"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>

        <div className=" w-full h-full order-first lg:order-last">
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
                <div className="flex flex-col lg:flex-row gap-10 lg:gap-5rem] xl:gap-[8rem]">
                  {/* Language */}
                  <div className="flex flex-col gap-6 lg:gap-10">
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
                          <DotCircle circle />
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
                  <div className="flex flex-col gap-6 lg:gap-10">
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
                              <DotCircle circle />
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
                          {["Motion", "Prisma", "PostgreSQL"].map(
                            (item, index) => (
                              <div
                                className="flex items-center gap-3 lg:gap-4"
                                key={index}
                              >
                                <DotCircle circle />
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
                </div>
              </div>
              <div className="flex">
                <TextFadeIn
                  slideUp={fadeIn}
                  phrase="Developers need to learn everyday so this list could get really long :)."
                  className="font-medium mr-[5px] xl:mr-[6px] text-[1.1rem] sm:text-[1.2rem] lg:text-[1.1rem] 2xl:text-[1.28rem] leading-[120%]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function DotCircle({ circle }: DotCircleProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="flex items-center w-[.32rem] h-[.32rem]">
      {circle && (
        <motion.div
          initial={{ width: "0rem", height: "0rem" }}
          animate={
            isInView
              ? { width: "0.32rem", height: "0.32rem", borderRadius: "9999px" }
              : { width: "0rem", height: "0rem" }
          }
          transition={{ duration: 1, delay: 0.2, ease: "easeInOut" }}
          className="bg-foreground"
        />
      )}
    </div>
  );
}
