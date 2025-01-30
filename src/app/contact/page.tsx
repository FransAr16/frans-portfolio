"use client"

import React from "react";
import MainLayout from "@/components/MainLayout";
import Headers from "@/components/ui/Headers";
import TextSlideUp from "@/components/ui/TextSlideUp";
import { revealsText } from "@/data/animation";

export default function Contact() {
  return (
    <MainLayout>
      <Headers />
      <main className="relative overflow-hidden w-full h-full">
        <div className="w-full h-full relative">
          <div className="flex h-screen w-full justify-center items-center lg:text-[6rem] 2xl:text-[8rem] font-bold">
            <TextSlideUp text="Contact" animate={revealsText} className="" />
          </div>
        </div>
      </main>
    </MainLayout>
  );
}
