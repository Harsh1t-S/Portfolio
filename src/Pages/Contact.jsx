import React from 'react'
import { GitHubIcon, GitLabIcon, LinkedInIcon, MailIcon } from '../Components/Icons'
import { SOCIALS } from '../socials'

const CHANNELS = [
  {
    label: 'Email',
    value: SOCIALS.email,
    href: `mailto:${SOCIALS.email}`,
    icon: MailIcon,
    accent: 'text-cyan-400',
  },
  {
    label: 'GitHub',
    value: '@Harsh1t-S',
    href: SOCIALS.github,
    icon: GitHubIcon,
    accent: 'text-slate-200',
  },
  {
    label: 'LinkedIn',
    value: 'Harshit Kumar Sharma',
    href: SOCIALS.linkedin,
    icon: LinkedInIcon,
    accent: 'text-sky-400',
  },
  {
    label: 'GitLab',
    value: '@harshitkrsharma07',
    href: SOCIALS.gitlab,
    icon: GitLabIcon,
    accent: 'text-orange-400',
  },
]

function Contact() {
  return (
    <section className="mx-auto flex w-full max-w-5xl flex-grow flex-col rounded-2xl border border-white/10 bg-slate-900/60 px-6 py-14 shadow-2xl backdrop-blur sm:px-12">
      <div className="mb-12 text-center">
        <h1 className="font-display mb-3 text-4xl font-bold text-white sm:text-5xl">
          Let's <span className="text-cyan-400">Connect</span>
        </h1>
        <p className="mx-auto max-w-xl text-slate-400">
          Have an internship opening, a project idea, or just want to talk tech? My inbox is open.
        </p>
        <div className="mx-auto mt-4 h-1 w-20 rounded bg-cyan-500"></div>
      </div>

      <div className="mx-auto mb-10 w-full max-w-md">
        <a
          href={`mailto:${SOCIALS.email}`}
          className="flex w-full items-center justify-center gap-2 rounded-full bg-cyan-500 px-8 py-4 text-lg font-semibold text-slate-950 shadow-lg shadow-cyan-500/25 transition hover:-translate-y-0.5 hover:bg-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-300"
        >
          <MailIcon className="h-5 w-5" />
          Say Hello
        </a>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {CHANNELS.map(({ label, value, href, icon: Icon, accent }) => (
          <a
            key={label}
            href={href}
            target={href.startsWith('mailto:') ? undefined : '_blank'}
            rel="noopener noreferrer"
            className="group flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-5 transition hover:-translate-y-0.5 hover:border-cyan-400/30 hover:bg-white/10"
          >
            <span className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-slate-950/60 ${accent}`}>
              <Icon className="h-5 w-5" />
            </span>
            <span className="min-w-0">
              <span className="block text-sm text-slate-400">{label}</span>
              <span className="block truncate font-medium text-white">{value}</span>
            </span>
          </a>
        ))}
      </div>

      <p className="mt-12 text-center text-sm text-slate-500">
        Based in Lucknow, India — usually replies within a day.
      </p>
    </section>
  )
}

export default Contact
