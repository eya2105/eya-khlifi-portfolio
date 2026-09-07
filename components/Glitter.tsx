"use client";

import { useEffect, useRef } from "react";

export function Glitter({ count = 200, className = "" }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const dots: HTMLDivElement[] = [];
    const colors = [
      "rgb(255, 255, 255)",
      "rgba(118, 83, 175, 0.9)",
      "rgb(122, 207, 235)",
      "rgba(199, 63, 133, 0.5)"
    ];

    for (let i = 0; i < count; i++) {
      const dot = document.createElement("div");
      const size = Math.random() * 2 + 0.5; // 0.5 – 2.5px
      const color = colors[Math.floor(Math.random() * colors.length)];
      dot.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        background: ${color};
        border-radius: 50%;
        left: ${Math.random() * 100}%;
        top: ${Math.random() * 100}%;
        opacity: ${Math.random() * 0.5 + 0.3};
        animation: twinkle ${Math.random() * 4 + 2}s ease-in-out infinite alternate;
        animation-delay: ${Math.random() * 5}s;
      `;
      container.appendChild(dot);
      dots.push(dot);
    }
    return () => dots.forEach(d => d.remove());
  }, [count]);

  return (
    <div
      ref={containerRef}
      className={`fixed inset-0 pointer-events-none z-0 ${className}`}
    />
  );
}