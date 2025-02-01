import React from "react";
import AboutHeroContent from "./AboutHeroContent";

export default function AboutHero() {
  return (
    <div className="h-[116vh] lg:h-[94vh] w-full relative overflow-hidden">
      <div className="main-container w-full h-full flex items-end">
          <AboutHeroContent />
      </div>
    </div>
  );
}
