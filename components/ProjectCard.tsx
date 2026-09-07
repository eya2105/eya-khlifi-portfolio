"use client";

import Link from "next/link";
import { Lock } from "lucide-react";
import type { Project } from "@/lib/projects";
import { useRef } from "react";

const tagColors = [
  { border: "hover:border-blue-400/40", bg: "hover:bg-blue-400/10", text: "hover:text-blue-300" },
  { border: "hover:border-purple-400/40", bg: "hover:bg-purple-400/10", text: "hover:text-purple-300" },
  { border: "hover:border-pink-400/40", bg: "hover:bg-pink-400/10", text: "hover:text-pink-300" },
  { border: "hover:border-cyan-400/40", bg: "hover:bg-cyan-400/10", text: "hover:text-cyan-300" },
  { border: "hover:border-amber-400/40", bg: "hover:bg-amber-400/10", text: "hover:text-amber-300" },
  { border: "hover:border-teal-400/40", bg: "hover:bg-teal-400/10", text: "hover:text-teal-300" },
  { border: "hover:border-indigo-400/40", bg: "hover:bg-indigo-400/10", text: "hover:text-indigo-300" },
  { border: "hover:border-rose-400/40", bg: "hover:bg-rose-400/10", text: "hover:text-rose-300" },
];

export function ProjectCard({ project }: { project: Project }) {
  const cardRef = useRef<HTMLAnchorElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    const rotateX = (y - 0.5) * -6;
    const rotateY = (x - 0.5) * 6;
    cardRef.current.style.transform = `perspective(600px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    cardRef.current.style.transform = "perspective(600px) rotateX(0deg) rotateY(0deg)";
  };

  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group block transition-all duration-300"
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transformStyle: "preserve-3d" }}
    >
      <article className="glass glow-border relative overflow-hidden rounded-[2.5rem] p-7 md:p-10 lg:p-12 transition-all duration-500">
        <div className="flex flex-col gap-12">
          <div>
            <div className="flex items-center gap-4">
              <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-slate-500">
                {project.year}
              </span>
              <span className="h-px w-5 bg-white/10" />
              {project.private ? (
                <span className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.12em] text-slate-500">
                  <Lock size={10} />
                  Private
                </span>
              ) : project.github ? (
                <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-slate-500">
                  Open source
                </span>
              ) : null}
            
            </div>

            <h3 className="title-hover text-hover-scale mt-14 max-w-3xl text-3xl font-display leading-tight text-blue-300 transition-colors duration-300 md:text-5xl">
              {project.title}
            </h3>

            <p className="text-hover-scale mt-6 text-sm leading-7 text-slate-400 transition-transform duration-300 md:text-[15px] md:leading-8">
              {project.description}
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, index) => {
              const color = tagColors[index % tagColors.length];
              return (
                <span
                  key={tech}
                  className={`rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-[10px] text-white/70 transition-all duration-300 ${color.border} ${color.bg} ${color.text}`}
                >
                  {tech}
                </span>
              );
            })}
          </div>
        </div>
      </article>
    </Link>
  );
}