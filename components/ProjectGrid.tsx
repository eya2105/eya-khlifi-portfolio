"use client";

import { useEffect, useState, useRef } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { Project } from "@/lib/projects";
import { ProjectCard } from "./ProjectCard";

export function ProjectGrid({ projects }: { projects: Project[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  if (projects.length === 0) return null;

  const currentProject = projects[currentIndex];

  const previous = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const next = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  const goTo = (index: number) => {
    if (index === currentIndex) return;
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") previous();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const width = rect.width;
    setShowLeftArrow(x < 80);
    setShowRightArrow(x > width - 80);
  };

  const handleMouseLeave = () => {
    setShowLeftArrow(false);
    setShowRightArrow(false);
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative"
    >
      <div className="relative overflow-hidden">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentProject.slug}
            custom={direction}
            initial={{ opacity: 0, x: direction > 0 ? 40 : -40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction > 0 ? -40 : 40 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <ProjectCard project={currentProject} />
          </motion.div>
        </AnimatePresence>

        <AnimatePresence>
          {showLeftArrow && (
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={previous}
              className="absolute left-4 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/5 backdrop-blur-sm transition-all duration-300 hover:border-cyan-400/40 hover:bg-cyan-400/10 hover:scale-110"
              aria-label="Previous project"
            >
              <ChevronLeft size={20} className="text-white/60 transition-colors group-hover:text-cyan-300" />
            </motion.button>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {showRightArrow && (
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={next}
              className="absolute right-4 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/5 backdrop-blur-sm transition-all duration-300 hover:border-purple-400/40 hover:bg-purple-400/10 hover:scale-110"
              aria-label="Next project"
            >
              <ChevronRight size={20} className="text-white/60 transition-colors group-hover:text-purple-300" />
            </motion.button>
          )}
        </AnimatePresence>
      </div>

      <div className="mt-6 flex items-center gap-2 px-1">
        {projects.map((project, index) => (
          <button
            key={project.slug}
            onClick={() => goTo(index)}
            aria-label={`Show ${project.title}`}
            className="group flex-1 h-1.5 transition-all duration-500"
          >
            <span
              className={`block h-full w-full rounded-full transition-all duration-500 ${
                index === currentIndex
                  ? "bg-pink-300/50"
                  : "bg-white/10 group-hover:bg-white/20"
              }`}
            />
          </button>
        ))}
      </div>
    </div>
  );
}