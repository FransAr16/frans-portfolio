import React from "react";
import Projects from "./Projects";

export default function PlaygroundHero() {
  return (
    <div className="w-full h-full relative overflow-hidden">
      <div className="main-container pt-[8rem]">
        <h1 className="text-3xl font-bold mb-6">My Projects</h1>
        <Projects />
      </div>
    </div>
  );
}
