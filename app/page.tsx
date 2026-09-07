import {
  BrainCircuit,
  ScanEye,
  Database,
  ShieldCheck,
  Mail,
  FileText,
  Award,
  ArrowUpRight,
  MapPin,
  Sparkles,
} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import { ProjectGrid } from "@/components/ProjectGrid";
import { Reveal } from "@/components/Reveal";
import { getProjects } from "@/lib/projects";
import { PageWrapper } from "@/components/PageWrapper";

export default function Home() {
  const projects = getProjects();

  return (
    <main>
      <PageWrapper>
    
        <section id="hero" className="relative flex min-h-screen items-center px-5 pb-20 pt-32 md:px-8 lg:px-12">
          <div className="mx-auto w-full max-w-7xl">
            <Reveal>
              <div className="flex items-center gap-3">
                <span className="title-hover font-mono text-[10px] uppercase tracking-[0.22em] text-slate-500 transition-colors duration-300">
                  INTELLIGENT SYSTEMS · TRUSTWORTHY AI · CYBERSECURITY
                </span>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <h1 className="title-hover text-hover-scale mt-8 max-w-5xl font-display text-[clamp(2.8rem,5vw,4.5rem)] leading-[1.05] tracking-[-0.02em] text-white transition-all duration-300 hover:text-shadow-glow">
                Building systems that <br />
                think, connect, and{" "}
                <span className="text-blue-300">stay secure.</span>
              </h1>
            </Reveal>

            <Reveal delay={0.16}>
              <p className="text-hover-scale drop-cap mt-6 max-w-2xl text-[15px] leading-7 text-slate-400 md:text-base md:leading-8">
                From fine‑tuned vision‑language models and local LLMs to grounded RAG and federated network defense, I turn research into production‑ready systems — and rigorously test where they work, where they fail, and why.
              </p>
            </Reveal>

            <Reveal delay={0.24}>
              <div className="mt-8 flex flex-wrap items-center gap-6">
                <a
                  href="#work"
                  className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-medium text-white backdrop-blur-sm transition-all hover:border-blue-400/40 hover:bg-blue-400/10"
                >
                  Explore projects
                </a>
                <a
                  href="#about"
                  className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-medium text-white backdrop-blur-sm transition-all hover:border-purple-400/40 hover:bg-purple-400/10"
                >
                  More about me
                </a>
              </div>
            </Reveal>
          </div>
        </section>

        
        <section
          id="about"
          className="relative overflow-hidden px-5 py-32 md:px-8 lg:px-12"
        >
          {/* Background glow */}
          <div className="pointer-events-none absolute left-1/2 top-1/4 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-cyan-500/5 blur-[140px]" />

          <div className="relative mx-auto max-w-7xl">
            {/* HEADER */}
            <div className="mb-20 grid gap-12 lg:grid-cols-[1fr_auto] lg:items-end">
              <div>
                {/* Name */}
                <h1 className="title-hover text-5xl font-semibold tracking-tight text-white transition-colors duration-300 sm:text-6xl lg:text-7xl hover:text-shadow-glow">
                  Eya KHLIFI
                </h1>

                {/* Role */}
                <p className="text-hover-scale mt-5 text-xl text-white/60 sm:text-2xl">
                  Engineering Student · Artificial Intelligence & Cybersecurity
                </p>

         
                <div className="mt-7 text-sm text-white/50">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-cyan-400" />
                      Tunis, Tunisia
                    </span>
                    <span className="text-white/20">·</span>
                    <span className="text-hover-scale text-cyan-300/80">
                      Open to relocation
                    </span>
                  </div>
                  <div className="mt-2 flex flex-wrap items-center gap-3">
                    <span className="text-hover-scale">AI Engineering</span>
                    <span className="text-white/20">·</span>
                    <span className="text-hover-scale">Cybersecurity</span>
                    <span className="text-white/20">·</span>
                    <span className="text-hover-scale">Network Systems</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-3 lg:justify-end">
                {/* GitHub – Purple */}
                <a
                  href="https://github.com/eya2105"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2.5 text-sm text-white/70 backdrop-blur-xl transition-all duration-300 hover:border-purple-400/40 hover:bg-purple-400/10 hover:text-purple-300"
                >
                  <FaGithub className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
                  GitHub
                  <ArrowUpRight className="h-3.5 w-3.5 opacity-40 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
                </a>

         
                <a
                  href="https://www.linkedin.com/in/eya-khlifi/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2.5 text-sm text-white/70 backdrop-blur-xl transition-all duration-300 hover:border-pink-400/40 hover:bg-pink-400/10 hover:text-pink-300"
                >
                  <FaLinkedin className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
                  LinkedIn
                  <ArrowUpRight className="h-3.5 w-3.5 opacity-40 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
                </a>

          
                <a
                  href="https://drive.google.com/file/d/1gFLhDPXs9vvdKQuol2y5oDha0lKPpKfC/view?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2.5 text-sm text-white/70 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/40 hover:bg-cyan-400/10 hover:text-cyan-300"
                >
                  <FileText className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
                  CV
                  <ArrowUpRight className="h-3.5 w-3.5 opacity-40 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
                </a>

                <a
                  href="https://drive.google.com/drive/folders/1SOgdLK2VlNJZcGigoosboFTH5PQXHcQW?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2.5 text-sm text-white/70 backdrop-blur-xl transition-all duration-300 hover:border-amber-400/40 hover:bg-amber-400/10 hover:text-amber-300"
                >
                  <Award className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
                  Certifications
                  <ArrowUpRight className="h-3.5 w-3.5 opacity-40 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
                </a>

  
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=eya.khlifi@insat.ucar.tn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2.5 text-sm text-white/70 backdrop-blur-xl transition-all duration-300 hover:border-teal-400/40 hover:bg-teal-400/10 hover:text-teal-300"
                >
                  <Mail className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
                  Email
                </a>
              </div>
            </div>

            <div className="grid gap-16 lg:grid-cols-[0.85fr_1.15fr]">
              <div className="lg:sticky lg:top-32 lg:self-start">
                <div className="rounded-3xl border border-white/10 bg-white/[0.025] p-7 backdrop-blur-xl sm:p-9">
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/[0.07]">
                    <Sparkles className="h-5 w-5 text-cyan-400" />
                  </div>
                  <p className="text-hover-scale text-xl leading-relaxed text-white/80">
                    I build intelligent systems where{" "}
                    <span className="text-cyan-300">AI, cybersecurity, and networks</span> meet.
                  </p>
                  <p className="text-hover-scale mt-6 text-sm leading-7 text-white/45">
                    My work is driven by curiosity about how intelligent systems can be designed, evaluated, secured, and deployed in real environments.
                  </p>
                </div>
              </div>

              <div className="space-y-8">
                <div>
                  <h2 className="title-hover mb-5 text-2xl font-medium text-white transition-colors duration-300 hover:text-shadow-glow">
                    Engineering with a research mindset
                  </h2>
                  <p className="text-hover-scale text-base leading-8 text-white/55">
                    I am a final-year Networks and Telecommunications Engineering student at INSAT, specializing in cybersecurity and working at the intersection of artificial intelligence, security, and network systems.
                  </p>
                </div>

                <div>
                  <p className="text-hover-scale text-base leading-8 text-white/55">
                    My main focus is{" "}
                    <span className="text-white/80">AI engineering</span>.
                    I enjoy working across the entire lifecycle of an AI system: from model selection and dataset construction to fine-tuning, evaluation, failure analysis, optimization, and deployment. I have worked with LLMs and vision-language models using techniques such as LoRA and QLoRA.
                  </p>
                </div>

                <div>
                  <p className="text-hover-scale text-base leading-8 text-white/55">
                    During my internships, I worked on two very different applications of AI. I developed a fully local multilingual internal audit assistant using an open-source LLM, and later worked on vision-language models for real-time shoplifting detection from CCTV footage. These projects taught me that building a good AI system is not only about model performance, but also about understanding data, identifying failure modes, and designing reliable evaluation strategies.
                  </p>
                </div>

                <div>
                  <p className="text-hover-scale text-base leading-8 text-white/55">
                    Alongside AI engineering, my academic work explores the intersection between{" "}
                    <span className="text-cyan-300">machine learning and cybersecurity</span>.
                    My main research project, FedGuard, investigates federated learning for real-time DDoS and intrusion detection, combining anomaly detection, distributed learning, network traffic analysis, and human-in-the-loop decision making.
                  </p>
                </div>

                <div>
                  <p className="text-hover-scale text-base leading-8 text-white/55">
                    What interests me most is the boundary between{" "}
                    <span className="text-white/80">research and engineering</span>:
                    taking an idea from a paper or experiment, understanding its limitations, and turning it into something that can actually work in practice.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-28">
              <div className="mb-10">
                <h2 className="title-hover text-3xl font-medium text-white transition-colors duration-300 sm:text-4xl hover:text-shadow-glow">
                  What I work on
                </h2>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        
                <div className="group rounded-3xl border border-white/10 bg-white/[0.025] p-6 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-cyan-400/20 hover:bg-white/[0.045]">
                  <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/[0.06]">
                    <BrainCircuit className="h-5 w-5 text-cyan-400" />
                  </div>
                  <h3 className="title-hover text-lg font-medium text-white transition-colors duration-300 hover:text-shadow-glow">
                    AI Engineering
                  </h3>
                  <p className="text-hover-scale mt-3 text-sm leading-6 text-white/40">
                    LLMs · Fine-tuning · Transformers · PyTorch
                  </p>
                </div>

                <div className="group rounded-3xl border border-white/10 bg-white/[0.025] p-6 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-cyan-400/20 hover:bg-white/[0.045]">
                  <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/[0.06]">
                    <ScanEye className="h-5 w-5 text-cyan-400" />
                  </div>
                  <h3 className="title-hover text-lg font-medium text-white transition-colors duration-300 hover:text-shadow-glow">
                    Multimodal AI
                  </h3>
                  <p className="text-hover-scale mt-3 text-sm leading-6 text-white/40">
                    Vision · Video · VLMs · Prompt Engineering
                  </p>
                </div>

        
                <div className="group rounded-3xl border border-white/10 bg-white/[0.025] p-6 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-cyan-400/20 hover:bg-white/[0.045]">
                  <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/[0.06]">
                    <Database className="h-5 w-5 text-cyan-400" />
                  </div>
                  <h3 className="title-hover text-lg font-medium text-white transition-colors duration-300 hover:text-shadow-glow">
                    AI Systems
                  </h3>
                  <p className="text-hover-scale mt-3 text-sm leading-6 text-white/40">
                    RAG · Retrieval · APIs · Local Deployment
                  </p>
                </div>

        
                <div className="group rounded-3xl border border-white/10 bg-white/[0.025] p-6 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-cyan-400/20 hover:bg-white/[0.045]">
                  <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/[0.06]">
                    <ShieldCheck className="h-5 w-5 text-cyan-400" />
                  </div>
                  <h3 className="title-hover text-lg font-medium text-white transition-colors duration-300 hover:text-shadow-glow">
                    AI & Cybersecurity
                  </h3>
                  <p className="text-hover-scale mt-3 text-sm leading-6 text-white/40">
                    Federated Learning · IDS · DDoS · Network Security
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-28">
              <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.025] p-8 backdrop-blur-xl sm:p-10">
                <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-cyan-400/10 blur-[100px]" />
                <div className="relative">
                  <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
                    <div>
                      <h2 className="title-hover text-3xl font-medium text-white transition-colors duration-300 sm:text-4xl hover:text-shadow-glow">
                        What I'm looking for
                      </h2>
                      <p className="text-hover-scale mt-5 max-w-3xl text-base leading-8 text-white/50">
                        I am looking for a six-month end-of-study internship where I can work on challenging problems at the intersection of AI engineering, applied machine learning, cybersecurity, or AI research.
                      </p>
                      <p className="text-hover-scale mt-4 max-w-3xl text-base leading-8 text-white/50">
                        I am especially interested in teams where experimentation, rigorous evaluation, and engineering come together to build systems that are useful beyond the prototype stage.
                      </p>
                    </div>
                    <div className="flex items-center gap-3 rounded-full border border-cyan-400/20 bg-cyan-400/[0.06] px-5 py-3 text-sm text-cyan-300">
                      <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-400" />
                      Open to opportunities
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="work" className="border-t border-white/5 px-5 py-24 md:px-8 md:py-28 lg:px-12">
          <div className="mx-auto max-w-7xl">
            <Reveal>
              <div className="glass glow-border relative overflow-hidden rounded-[2.5rem] p-8 md:p-12 lg:p-16">
                <div className="mb-8">
                  <div className="flex flex-wrap items-center gap-3">
                    <h2 className="title-hover text-hover-scale font-display text-3xl text-white md:text-4xl hover:text-shadow-glow">
                      Projects
                    </h2>
                  </div>
                  <p className="text-hover-scale mt-3 max-w-md text-sm leading-7 text-slate-400">
                    Click any project to see more details about it.
                  </p>
                </div>
                <div className="mt-8">
                  <ProjectGrid projects={projects} />
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <section id="contact" className="border-t border-white/5 px-5 py-24 md:px-8 md:py-28 lg:px-12">
          <div className="mx-auto max-w-7xl">
            <Reveal>
              <div className="glass glow-border relative overflow-hidden rounded-[2.5rem] p-8 md:p-12 lg:p-16">
                <div className="relative">
                  <h2 className="title-hover text-hover-scale font-display text-3xl leading-tight text-white md:text-4xl hover:text-shadow-glow">
                    Let's get in touch
                  </h2>
                  <p className="text-hover-scale mt-5 max-w-xl text-[15px] leading-8 text-slate-400">
                    I'm interested in engineering projects, research opportunities, and work around AI, cybersecurity, and intelligent systems.
                  </p>
                  <div className="mt-8 flex flex-wrap gap-4">
                    {/* LinkedIn Message */}
                    <a
                      href="https://www.linkedin.com/in/eya-khlifi/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-sm text-white backdrop-blur-sm transition-all hover:border-blue-400/30 hover:bg-blue-400/10 hover:text-blue-200"
                    >
                      Send me a message
                      <ArrowUpRight size={14} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>

                    <a
                      href="https://mail.google.com/mail/?view=cm&fs=1&to=eya.khlifi@insat.ucar.tn"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-sm text-white backdrop-blur-sm transition-all hover:border-pink-400/30 hover:bg-pink-400/10 hover:text-pink-200"
                    >
                      Send me an email
                      <ArrowUpRight size={14} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <footer className="border-t border-white/5 px-5 py-7 md:px-8 lg:px-12">
          <div className="mx-auto flex max-w-7xl flex-col gap-4 text-[11px] text-slate-500 md:flex-row md:items-center md:justify-between">
            <p className="text-hover-scale">© {new Date().getFullYear()} Eya KHLIFI</p>
            <div className="flex gap-6">
              <a href="https://github.com/eya2105" target="_blank" rel="noreferrer" className="transition-colors hover:text-purple-300">
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/eya-khlifi" target="_blank" rel="noreferrer" className="transition-colors hover:text-pink-300">
                LinkedIn
              </a>
            </div>
          </div>
        </footer>
      </PageWrapper>
    </main>
  );
}