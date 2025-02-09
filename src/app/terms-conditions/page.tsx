import React from "react";
import MainLayout from "@/components/MainLayout";
import Headers from "@/components/ui/Headers";
import TermsHero from "./components/TermsHero";
import TermsContent from "./components/TermsContent";
import Footer from "@/components/Footer";

export default function TermsConditions() {
  return (
    <MainLayout>
      <Headers />
      <main className="relative overflow-hidden w-full h-full">
        <div className="w-full h-full relative">
          <TermsHero />
          <TermsContent />
          <Footer />
        </div>
      </main>
    </MainLayout>
  );
}
