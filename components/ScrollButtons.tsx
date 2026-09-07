"use client";

import { useState, useEffect } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";

export function ScrollButtons() {
  const [isAtTop, setIsAtTop] = useState(true);
  const [isAtBottom, setIsAtBottom] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const bottomReached = scrollTop + windowHeight >= documentHeight - 10;

      setIsAtTop(scrollTop < 10);
      setIsAtBottom(bottomReached);
    };

    // Initial check
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToBottom = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  };

  // Hide when in the middle
  if (!isAtTop && !isAtBottom) return null;

  return (
    <button
      onClick={isAtTop ? scrollToBottom : scrollToTop}
      className="fixed bottom-6 right-6 z-50 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/5 backdrop-blur-sm transition-all duration-300 hover:border-pink-300/50 hover:bg-white/15 hover:scale-110"
      aria-label={isAtTop ? "Scroll to bottom" : "Scroll to top"}
    >
      {isAtTop ? (
        <ChevronDown size={18} className="text-white/60 transition-colors group-hover:text-pink-300" />
      ) : (
        <ChevronUp size={18} className="text-white/60 transition-colors group-hover:text-pink-300" />
      )}
    </button>
  );
}