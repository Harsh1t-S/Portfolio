import React from 'react'

function Cards({ title, description, link, repoLink, image, buttonText, isDownload = false }) {
  return (
    <div className="flex h-full flex-col overflow-hidden rounded-xl border border-slate-700 bg-slate-800 shadow-lg transition-transform hover:-translate-y-1 hover:shadow-cyan-500/20">
      
      <div className="h-48 w-full overflow-hidden border-b border-slate-700 bg-slate-900">
        <img 
          src={image}   
          alt={title} 
          className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>

      <div className="flex flex-grow flex-col justify-between p-6">
        <div>
          <h2 className="mb-2 text-xl font-bold text-white">{title}</h2>
          <p className="mb-6 text-sm text-slate-400">
            {description}
          </p>
        </div>

        <div className="flex flex-wrap gap-3 mt-auto">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            {...(isDownload ? { download: true } : {})}
            className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-400 transition hover:bg-green-500 hover:text-slate-900 focus:outline-none focus:ring-2 focus:ring-cyan-300"
          >
            {buttonText}
          </a>

          {repoLink && (
            <a
              href={repoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg border border-slate-600 bg-transparent px-4 py-2 text-sm font-medium text-white transition hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-slate-400"
            >
              Source Code
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export default Cards