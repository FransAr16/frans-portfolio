import React from "react";
import MainLayout from "@/components/MainLayout";
import Headers from "@/components/ui/Headers";
import WorkHero from "./components/WorkHero";
import MyWorks from "./components/MyWorks";
import Footer from "@/components/Footer";

export default function work() {
  return (
    <MainLayout>
      <Headers />
      <main className="relative overflow-hidden w-full h-full">
        <div className="w-full h-full relative ">
          <WorkHero />
          <MyWorks />
          <Footer />
        </div>
      </main>
    </MainLayout>
  );
}
