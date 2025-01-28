import React from "react";
import MainLayout from "@/components/MainLayout";
import Headers from "@/components/ui/Headers";
import AboutHero from "./components/AboutHero";
import MoreAboutMe from "./components/MoreAboutMe";

export default function About() {
  return (
    <MainLayout>
      <Headers />
      <main className="relative overflow-hidden w-full h-full">
        <div className="w-full h-full relative">
          <AboutHero />
          <MoreAboutMe />
        </div>
      </main>
    </MainLayout>
  );
}
