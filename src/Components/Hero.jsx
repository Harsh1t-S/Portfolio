import React from 'react'
import { GitHubIcon, LinkedInIcon, MailIcon } from './Icons'
import { SOCIALS } from '../socials'

const STACK = ['React', 'Node.js', 'MongoDB', 'Python', 'Socket.io', 'Tailwind CSS']

function Hero({ setCurrentPage }) {
  return (
    <section
      id="home"
      className="relative flex flex-grow items-center justify-center overflow-hidden rounded-3xl border border-white/10 bg-slate-900/60 px-6 py-20 shadow-2xl sm:px-12 sm:py-28"
    >
      <div className="absolute inset-0 z-0">
        <div className="animate-blob absolute -left-24 top-10 h-80 w-80 rounded-full bg-cyan-500/20 blur-[110px]" />
        <div className="animate-blob-delay absolute -right-16 bottom-0 h-80 w-80 rounded-full bg-indigo-500/20 blur-[110px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-1.5 text-xs font-medium text-emerald-300 sm:text-sm">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          </span>
          Open to SDE Internships &amp; Freelance Work
        </div>

        <h1 className="font-display mb-6 text-4xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
          Hi, I'm{' '}
          <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-indigo-400 bg-clip-text text-transparent">
            Harshit
          </span>
          .
        </h1>

        <p className="mx-auto mb-6 max-w-2xl text-lg text-slate-300 sm:text-xl">
          A CSE undergrad who builds full-stack web apps, real-time systems, and
          practical automation tools — then ships and deploys them for real.
          I turn complex problems into clean, functional code.
        </p>

        <div className="mb-10 flex flex-wrap items-center justify-center gap-2">
          {STACK.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-300 sm:text-sm"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <button
            onClick={() => setCurrentPage('projects')}
            className="w-full rounded-full bg-cyan-500 px-8 py-3 text-lg font-semibold text-slate-950 shadow-lg shadow-cyan-500/25 transition hover:-translate-y-0.5 hover:bg-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-300 sm:w-auto"
          >
            View My Work
          </button>
          <button
            onClick={() => setCurrentPage('contact')}
            className="w-full rounded-full border border-slate-600 bg-white/5 px-8 py-3 text-lg font-semibold text-white transition hover:-translate-y-0.5 hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-400 sm:w-auto"
          >
            Contact Me
          </button>
        </div>

        <div className="mt-10 flex items-center justify-center gap-4">
          <a
            href={SOCIALS.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="rounded-full border border-white/10 bg-white/5 p-2.5 text-slate-300 transition hover:-translate-y-0.5 hover:text-cyan-400"
          >
            <GitHubIcon className="h-5 w-5" />
          </a>
          <a
            href={SOCIALS.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="rounded-full border border-white/10 bg-white/5 p-2.5 text-slate-300 transition hover:-translate-y-0.5 hover:text-cyan-400"
          >
            <LinkedInIcon className="h-5 w-5" />
          </a>
          <a
            href={`mailto:${SOCIALS.email}`}
            aria-label="Email"
            className="rounded-full border border-white/10 bg-white/5 p-2.5 text-slate-300 transition hover:-translate-y-0.5 hover:text-cyan-400"
          >
            <MailIcon className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
