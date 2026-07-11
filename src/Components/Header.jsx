import React, { useState } from 'react'
import mortarboardLogo from '../assets/mortarboard.gif'

const NAV_ITEMS = [
  { key: 'home', label: 'Home' },
  { key: 'about', label: 'About' },
  { key: 'projects', label: 'Projects' },
  { key: 'certificates', label: 'Certificates' },
]

function Header({ currentPage, setCurrentPage }) {
  const [menuOpen, setMenuOpen] = useState(false)

  const go = (page) => {
    setCurrentPage(page)
    setMenuOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/70 text-white backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center gap-3 px-4 py-3 sm:px-6">
        <button onClick={() => go('home')} className="flex items-center gap-2 focus:outline-none">
          <img
            src={mortarboardLogo}
            alt="Portfolio logo"
            className="h-8 w-8 shrink-0 object-contain invert mix-blend-screen"
          />
          <span className="font-display text-lg font-bold tracking-tight sm:text-xl">
            Harshit<span className="text-cyan-400">.</span>
          </span>
        </button>

        <nav className="ml-auto hidden md:block" aria-label="Main navigation">
          <ul className="flex items-center gap-1 text-sm font-medium">
            {NAV_ITEMS.map((item) => (
              <li key={item.key}>
                <button
                  onClick={() => go(item.key)}
                  aria-current={currentPage === item.key ? 'page' : undefined}
                  className={`relative rounded-full px-4 py-2 transition focus:outline-none focus:ring-2 focus:ring-cyan-400/60 ${
                    currentPage === item.key
                      ? 'text-cyan-400'
                      : 'text-white/80 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  {item.label}
                  {currentPage === item.key && (
                    <span className="absolute inset-x-3 -bottom-[13px] h-0.5 rounded-full bg-cyan-400" />
                  )}
                </button>
              </li>
            ))}
            <li className="ml-2">
              <button
                onClick={() => go('contact')}
                className="rounded-full bg-cyan-500 px-4 py-2 font-semibold text-slate-950 shadow-md shadow-cyan-500/20 transition hover:bg-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-300"
              >
                Contact
              </button>
            </li>
          </ul>
        </nav>

        <button
          onClick={() => setMenuOpen((o) => !o)}
          className="ml-auto rounded-lg border border-white/10 p-2 text-white/90 transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-400/60 md:hidden"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {menuOpen && (
        <nav className="border-t border-white/10 bg-slate-950/95 px-4 pb-4 pt-2 md:hidden" aria-label="Mobile navigation">
          <ul className="flex flex-col gap-1 text-sm font-medium">
            {[...NAV_ITEMS, { key: 'contact', label: 'Contact' }].map((item) => (
              <li key={item.key}>
                <button
                  onClick={() => go(item.key)}
                  className={`block w-full rounded-lg px-3 py-2.5 text-left transition ${
                    currentPage === item.key
                      ? 'bg-cyan-500/10 text-cyan-400'
                      : 'text-white/80 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}

export default Header
