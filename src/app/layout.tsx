import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "../styles/globals.css";
import PageTransition from "@/components/PageTransition";
import { CategoryProvider } from "@/context/CategoryContext";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`font-geist antialiased`}>
        <PageTransition>
          <CategoryProvider>
            {children}
            <SpeedInsights />
          </CategoryProvider>
        </PageTransition>
      </body>
    </html>
  );
}
