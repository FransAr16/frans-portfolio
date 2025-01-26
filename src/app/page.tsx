"use client"

import { useState, useEffect } from "react";
import About from "@/components/About";
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import Approach from "@/components/Approach";
import RecentWork from "@/components/RecentWork";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function Home() {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Set timeout untuk menampilkan content bottom setelah 4 detik
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 4000);

    return () => clearTimeout(timer); // Bersihkan timeout saat komponen di-unmount
  }, []);

  return (
    <>
    <Header />
      <main className="relative w-full h-full z-20">
        <Hero />
        {/* Content bottom hanya muncul jika showContent bernilai true */}
        {showContent && (
          <div className="relative bg-background">
            <Intro />
            <Approach />
            <RecentWork />
            <About />
            <Footer />
          </div>
        )}
      </main>
    </>
  );
}
