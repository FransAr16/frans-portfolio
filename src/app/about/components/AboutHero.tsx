import React from "react";
import AboutHeroContent from "./AboutHeroContent";

export default function AboutHero() {
  return (
    <div className="h-[116vh] lg:h-[100vh] w-full relative overflow-hidden">
      <div className="main-container w-full h-full flex pt-[55vw] sm:pt-[45vw] lg:pt-[14vw] xl:pt-[13vw]">
          <AboutHeroContent />
      </div>
    </div>
  );
}
