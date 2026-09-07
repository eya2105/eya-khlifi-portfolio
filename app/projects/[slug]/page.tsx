import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Lock } from "lucide-react";
import { notFound } from "next/navigation";
import { getProject, getProjects, renderMarkdown } from "@/lib/projects";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getProjects().map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  return {
    title: project ? `${project.title} — Eya Khlifi` : "Project — Eya Khlifi",
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  const content = await renderMarkdown(project.content);

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

  return (
    <main className="min-h-screen">
      <div className="tech-grid fixed inset-0 -z-10 opacity-20" />

      <div className="mx-auto max-w-5xl px-6 pb-32 pt-36">
        <Link href="/#work" className="inline-flex items-center gap-2 text-sm text-white/35 transition hover:text-white">
          <ArrowLeft size={15} />
          Back to work
        </Link>

        <header className="mt-16 border-b border-white/10 pb-14">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-white/30">{project.year}</span>
            {project.private && (
              <>
                <span className="text-white/15">/</span>
                <span className="flex items-center gap-1.5 text-xs text-white/30">
                  <Lock size={12} />
                  Private repository
                </span>
              </>
            )}
          </div>

          <h1 className="title-hover text-hover-scale mt-7 max-w-4xl text-5xl font-semibold tracking-[-0.04em] text-blue-200 transition-colors duration-300 md:text-7xl hover:text-shadow-glow">
            {project.title}
          </h1>

          <p className="text-hover-scale mt-7 max-w-2xl text-lg leading-8 text-white/45 transition-transform duration-300">
            {project.description}
          </p>

          <div className="mt-8 flex flex-wrap gap-2">
            {project.technologies.map((tech, index) => {
              const color = tagColors[index % tagColors.length];
              return (
                <span
                  key={tech}
                  className={`rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white/60 transition-all duration-300 ${color.border} ${color.bg} ${color.text}`}
                >
                  {tech}
                </span>
              );
            })}
          </div>
        </header>

        <div className="grid gap-16 pt-14 md:grid-cols-[1fr_240px]">
          <article
            className="project-prose prose prose-invert prose-sm max-w-none prose-headings:title-hover prose-headings:text-white prose-headings:transition-colors prose-headings:duration-300 prose-headings:hover:text-blue-300 prose-headings:hover:text-shadow-glow prose-p:text-hover-scale prose-p:transition-transform prose-p:duration-300 prose-p:text-white/70 prose-strong:text-white prose-a:text-blue-300 prose-code:text-pink-300"
            dangerouslySetInnerHTML={{ __html: content }}
          />

          <aside className="h-fit md:sticky md:top-28">
            <div className="glass glow-border relative overflow-hidden rounded-2xl p-5 transition-all duration-300 hover:border-blue-400/20">
              <p className="text-[10px] uppercase tracking-[0.2em] text-white/25">Project</p>
              <div className="mt-5">
                <p className="text-xs text-white/25">Year</p>
                <p className="mt-1 text-sm text-white/60">{project.year}</p>
              </div>
              {project.private ? (
                <div className="mt-6 flex items-center gap-2 border-t border-white/8 pt-5 text-xs text-white/30">
                  <Lock size={13} />
                  Private repository
                </div>
              ) : project.github ? (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="group mt-6 flex items-center justify-between border-t border-white/8 pt-5 text-sm text-white/60 transition hover:text-white"
                >
                  Repository
                  <ArrowUpRight size={15} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              ) : null}
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}