"use client";

import React, { useRef } from "react";
import { motion, useInView } from "motion/react";
import Image from "next/image";
import TextSlideUp from "@/components/ui/TextSlideUp";
import { revealsText } from "@/data/animation";

export default function AboutHeading() {
  const ref = useRef(null);
  const isInViewImg = useInView(ref, { once: true });

  return (
    <div className="relative h-full w-full py-[3rem] lg:py-[10rem] 2xl:py-[17rem] overflow-hidden">
      <div className="flex flex-col lg:flex-row pt-[6rem] sm:pt-[10rem] lg:pt-[2.5rem] justify-between w-full gap-6 2xl:gap-[8rem] lg:gap-[1.5rem]">
        <div className="h-full w-full lg:w-[71%] flex flex-col lg:items-end gap-[1rem]">
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
              className="w-[60%] h-full sm:w-[38%] md:w-[32%] lg:w-[12.5rem] xl:w-[14rem] 2xl:w-[18rem]"
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

          <div className="w-[70%] sm:w-[14rem] lg:w-[12.5rem] xl:w-[14rem] 2xl:w-[18rem] order-last">
            <TextSlideUp
              text="© 2024 Frans - Frontend Developer"
              animate={revealsText}
              className="font-medium 2xl:font-semibold mr-[4px] lg:mr-[6px] leading-[120%] text-[1.1rem] sm:text-[1.2rem] lg:text-[1.1rem] 2xl:text-[1.28rem]"
            />
          </div>
        </div>

        <div className="flex w-full h-full lg:h-full lg:order-first">
          <div className="flex flex-col">
            <div className="flex flex-col gap-[2rem] lg:gap-[3rem] 2xl:gap-[4rem]">
              <div className="flex md:w-[80%] lg:w-full">
                <TextSlideUp
                  text="I'm Frans, a passionate Frontend Developer based in Indonesia."
                  animate={revealsText}
                  className="font-medium mr-[8px] xl:mr-[12px] 2xl:mr-[16px] text-[2rem] sm:text-[2.5rem] lg:text-[2.4rem] xl:text-[3.2vw] 2xl:text-[4rem]"
                />
              </div>

              <div className="flex md:w-[80%] lg:w-full">
                <TextSlideUp
                  text="I specialize in creating visually stunning and highly functional web interfaces that deliver exceptional user experiences."
                  animate={revealsText}
                  className="font-medium mr-[8px] xl:mr-[12px] 2xl:mr-[16px] text-[2rem] sm:text-[2.5rem] lg:text-[2.4rem] xl:text-[3.2vw] 2xl:text-[4rem]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
