import React from 'react'
import { ExternalLinkIcon, GitHubIcon } from './Icons'

function Cards({ title, description, link, repoLink, image, buttonText, isDownload = false, tags = [], featured = false }) {
  return (
    <div className={`group flex h-full flex-col overflow-hidden rounded-2xl border bg-slate-900/60 shadow-xl backdrop-blur transition-all duration-300 hover:-translate-y-1.5 hover:shadow-cyan-500/10 ${
      featured ? 'border-cyan-500/30 shadow-cyan-500/5' : 'border-white/10'
    }`}>
      <div className="relative h-48 w-full overflow-hidden border-b border-white/10 bg-slate-950">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {featured && (
          <span className="absolute right-3 top-3 rounded-full bg-cyan-500/90 px-3 py-1 text-xs font-semibold text-slate-950 shadow">
            Featured
          </span>
        )}
      </div>

      <div className="flex flex-grow flex-col justify-between p-6">
        <div>
          <h2 className="font-display mb-2 text-xl font-bold text-white">{title}</h2>
          <p className="mb-4 text-sm leading-relaxed text-slate-400">{description}</p>

          {tags.length > 0 && (
            <div className="mb-6 flex flex-wrap gap-1.5">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-2.5 py-1 text-[11px] font-medium text-cyan-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>

        <div className="mt-auto flex flex-wrap gap-3">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            {...(isDownload ? { download: true } : {})}
            className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-400 transition hover:bg-cyan-500 hover:text-slate-950 focus:outline-none focus:ring-2 focus:ring-cyan-300"
          >
            <ExternalLinkIcon className="h-4 w-4" />
            {buttonText}
          </a>

          {repoLink && (
            <a
              href={repoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg border border-slate-600 bg-transparent px-4 py-2 text-sm font-medium text-white transition hover:border-transparent hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-400"
            >
              <GitHubIcon className="h-4 w-4" />
              Source Code
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export default Cards
