"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-7xl px-5 pt-5 md:px-8">
        <nav className="bg-[#0a0e1a]/40 backdrop-blur-xl border border-white/10 rounded-2xl px-5 flex h-14 items-center justify-between transition-all">
          {/* Logo – bigger font, links to #hero */}
          <Link
            href="/#hero"
            className="font-display text-[17px] font-semibold text-white transition-colors hover:text-blue-300"
          >
            Eya Khlifi
          </Link>

          {/* Main navigation – bigger font */}
          <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 md:flex">
            <a
              href="/#about"
              className="text-[15px] text-slate-300 hover:text-white relative after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-blue-400 after:transition-all hover:after:w-full"
            >
              About
            </a>
            <a
              href="/#work"
              className="text-[15px] text-slate-300 hover:text-white relative after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-purple-400 after:transition-all hover:after:w-full"
            >
              Projects
            </a>
            <a
              href="/#contact"
              className="text-[15px] text-slate-300 hover:text-white relative after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-pink-400 after:transition-all hover:after:w-full"
            >
              Contact
            </a>
          </div>

          {/* External links – bigger font */}
          <div className="hidden items-center gap-5 md:flex">
            <a
              href="https://www.linkedin.com/in/eya-khlifi"
              target="_blank"
              rel="noreferrer"
              className="text-[15px] text-slate-400 hover:text-pink-300 transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/eya2105"
              target="_blank"
              rel="noreferrer"
              className="text-[15px] text-slate-400 hover:text-purple-300 transition-colors"
            >
              GitHub
            </a>
          </div>

          {/* Mobile toggle – unchanged */}
          <button
            onClick={() => setOpen(!open)}
            className="text-slate-400 hover:text-white md:hidden"
            aria-label="Toggle navigation"
          >
            {open ? <X size={19} /> : <Menu size={19} />}
          </button>
        </nav>

        {/* Mobile menu – also bigger font */}
        {open && (
          <div className="bg-[#0a0e1a]/80 backdrop-blur-xl border border-white/10 mt-2 rounded-2xl p-4 md:hidden">
            <div className="flex flex-col gap-1">
              <a
                href="/#about"
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2 text-[15px] text-slate-300 hover:bg-white/5 hover:text-white"
              >
                About
              </a>
              <a
                href="/#work"
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2 text-[15px] text-slate-300 hover:bg-white/5 hover:text-white"
              >
                Projects
              </a>
              <a
                href="/#contact"
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2 text-[15px] text-slate-300 hover:bg-white/5 hover:text-white"
              >
                Contact
              </a>
              <hr className="my-2 border-white/10" />
              <a
                href="https://www.linkedin.com/in/eya-khlifi"
                target="_blank"
                rel="noreferrer"
                className="rounded-lg px-3 py-2 text-[15px] text-slate-400 hover:bg-white/5 hover:text-pink-300"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/eya2105"
                target="_blank"
                rel="noreferrer"
                className="rounded-lg px-3 py-2 text-[15px] text-slate-400 hover:bg-white/5 hover:text-purple-300"
              >
                GitHub
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}