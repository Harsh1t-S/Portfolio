import React from 'react'
import { GitHubIcon, GitLabIcon, LinkedInIcon, MailIcon } from './Icons'
import { SOCIALS } from '../socials'

function Footer({ setCurrentPage }) {
  const year = new Date().getFullYear()

  return (
    <footer className="relative z-10 mt-auto border-t border-white/10 bg-slate-950/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 px-6 py-8 text-center sm:flex-row sm:justify-between sm:text-left">
        <div>
          <button
            onClick={() => setCurrentPage?.('home')}
            className="font-display text-lg font-bold text-white transition hover:text-cyan-400"
          >
            Harshit Kumar Sharma
          </button>
          <p className="mt-1 text-sm text-slate-500">&copy; {year} — Built with React &amp; Tailwind CSS.</p>
        </div>

        <div className="flex items-center gap-3">
          <a
            href={SOCIALS.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="rounded-full border border-white/10 bg-white/5 p-2.5 text-slate-400 transition hover:-translate-y-0.5 hover:text-cyan-400"
          >
            <GitHubIcon className="h-4 w-4" />
          </a>
          <a
            href={SOCIALS.gitlab}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitLab"
            className="rounded-full border border-white/10 bg-white/5 p-2.5 text-slate-400 transition hover:-translate-y-0.5 hover:text-cyan-400"
          >
            <GitLabIcon className="h-4 w-4" />
          </a>
          <a
            href={SOCIALS.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="rounded-full border border-white/10 bg-white/5 p-2.5 text-slate-400 transition hover:-translate-y-0.5 hover:text-cyan-400"
          >
            <LinkedInIcon className="h-4 w-4" />
          </a>
          <a
            href={`mailto:${SOCIALS.email}`}
            aria-label="Email"
            className="rounded-full border border-white/10 bg-white/5 p-2.5 text-slate-400 transition hover:-translate-y-0.5 hover:text-cyan-400"
          >
            <MailIcon className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
