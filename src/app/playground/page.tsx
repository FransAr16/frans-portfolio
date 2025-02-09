"use client"

import React from "react";
import MainLayout from "@/components/MainLayout";
import Headers from "@/components/ui/Headers";
import PlaygroundHero from "./components/PlaygroundHero";

export default function Playground() {
  return (
    <MainLayout>
      <Headers />
      <main className="relative overflow-hidden w-full h-full">
        <div className="w-full h-full relative">
          <PlaygroundHero />
        </div>
      </main>
    </MainLayout>
  );
}
