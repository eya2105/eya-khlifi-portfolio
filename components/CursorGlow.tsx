"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";

export function CursorGlow() {
  const [mouse, setMouse] = useState({ x: -100, y: -100 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      setMouse({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-0"
      animate={{
        background: `radial-gradient(600px at ${mouse.x}px ${mouse.y}px, rgba(59,130,246,0.06), transparent 80%)`,
      }}
      transition={{ duration: 0.1 }}
    />
  );
}