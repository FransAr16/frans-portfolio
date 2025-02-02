import React from "react";
import MainLayout from "@/components/MainLayout";
import Headers from "@/components/ui/Headers";
import Footer from "@/components/Footer";
import PrivacyContent from "./components/PrivacyContent";
import PrivacyHero from "./components/PrivacyHero";

export default function PrivacyPolicy() {
  return (
    <MainLayout>
      <Headers />
      <main className="relative overflow-hidden w-full h-full">
        <div className="w-full h-full relative">
          <PrivacyHero />
          <PrivacyContent />
          <Footer />
        </div>
      </main>
    </MainLayout>
  );
}
