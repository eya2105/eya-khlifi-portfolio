"use client";

import { useEffect, useRef } from "react";

export function Glitter({ count = 300, className = "" }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const dots: HTMLDivElement[] = [];
    const colors = [
      "rgba(255, 255, 255, 0.9)",
      "rgba(161, 112, 240, 0.8)",
      "rgba(122, 207, 235, 0.8)",
      "rgba(243, 105, 176, 0.8)"
    ];

    for (let i = 0; i < count; i++) {
      const dot = document.createElement("div");
      const size = Math.random() * 2 + 0.5; // 0.5 – 2.0px
      const color = colors[Math.floor(Math.random() * colors.length)];
      const glow = Math.random() * 4 + 2;
      dot.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        background: ${color};
        border-radius: 50%;
        left: ${Math.random() * 100}%;
        top: ${Math.random() * 100}%;
        opacity: ${Math.random() * 0.5 + 0.3};
        box-shadow: 0 0 ${glow}px ${color};
        animation: twinkle ${Math.random() * 0.5 + 1.5}s ease-in-out infinite;
        animation-delay: ${Math.random() * 3}s;
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