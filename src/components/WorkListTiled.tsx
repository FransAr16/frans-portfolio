import React from "react";
import Link from "next/link";
import TextSlideUp from "./ui/TextSlideUp";
import { revealsText } from "@/data/animation";

interface WorkListTiledProps {
  index: number;
  link: string;
  title: string;
  category: string;
  location: string;
  published: string;
  setModal: React.Dispatch<
    React.SetStateAction<{ active: boolean; index: number }>
  >;
}

export default function WorkListTiled({
  index,
  link,
  title,
  category,
  location,
  published,
  setModal,
}: WorkListTiledProps) {
  return (
    <div
      onMouseEnter={() => {
        setModal({ active: true, index: index });
      }}
      onMouseLeave={() => {
        setModal({ active: false, index: index });
      }}
      className="flex w-full h-full items-center group outline-none cursor-pointer"
    >
      {/* title */}
      <Link href={link} target="_blank" className="w-full">
        <div className=" w-full grid grid-cols-12 relative items-center lg:py-[1.6rem] xl:py-[2rem] border-t main-container">
          <div className="col-span-5">
            <TextSlideUp
              text={title}
              animate={revealsText}
              className="font-medium mr-[8px] xl:mr-[12px] 2xl:mr-[16px] text-[2rem] sm:text-[2.5rem] lg:text-[2.4rem] xl:text-[3.2vw] 2xl:text-[4rem]"
            />
          </div>
          <div className="col-span-3">
            <TextSlideUp
              text={location}
              animate={revealsText}
              className="font-medium mr-[5px] xl:mr-[6px] text-[1.1rem] sm:text-[1.2rem] lg:text-[1.1rem] 2xl:text-[1.28rem]"
            />
          </div>
          <div className="col-span-2">
            <TextSlideUp
              text={category}
              animate={revealsText}
              className="font-medium mr-[5px] xl:mr-[6px] text-[1.1rem] sm:text-[1.2rem] lg:text-[1.1rem] 2xl:text-[1.28rem]"
            />
          </div>
          <div className="col-span-2 text-end">
            <TextSlideUp
              text={published}
              animate={revealsText}
              className="font-medium mr-[5px] xl:mr-[6px] text-[1.1rem] sm:text-[1.2rem] lg:text-[1.1rem] 2xl:text-[1.28rem]"
            />
          </div>
        </div>
      </Link>
    </div>
  );
}
