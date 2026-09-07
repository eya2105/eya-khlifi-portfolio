import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Glitter } from "@/components/Glitter";
import { ScrollButtons } from "@/components/ScrollButtons";
import { ScrollProgress } from "@/components/ScrollProgress";
import { CursorGlow } from "@/components/CursorGlow";
import { AnimatePresence } from "motion/react";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const mono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Eya Khlifi — AI, Cybersecurity & Networks",
  description: "Building intelligent, secure, and connected systems.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${mono.variable}`}>
        <div className="animated-bg" />
        <Glitter count={500} />
        <CursorGlow />
        <ScrollProgress />
        <Navbar />
        <AnimatePresence mode="wait">
          {children}
        </AnimatePresence>
        <ScrollButtons />
      </body>
    </html>
  );
}