import React from 'react'
import mortarboardLogo from '../assets/mortarboard.gif'

function Header({ setCurrentPage }) {
  return (
    <header className="border-b border-white/10 bg-slate-900 text-white shadow-lg shadow-black/20">
      
      <div className="flex items-center px-4 py-3 sm:px-6">
        
        <button 
          onClick={() => setCurrentPage('home')} 
          className="flex items-center gap-3 transition hover:opacity-80 focus:outline-none"
        >
          <img
            src={mortarboardLogo}
            alt="Portfolio logo"
            className="h-9 w-9 shrink-0 object-contain invert mix-blend-screen"
          />
          <span className="text-lg font-semibold tracking-wide sm:text-xl">Portfolio</span>
        </button>
        
        <nav className="ml-auto" aria-label="Main navigation">
          <ul className="flex items-center gap-2 text-sm font-medium sm:gap-3 sm:text-base">
            <li>
              <button
                onClick={() => setCurrentPage('home')}
                className="rounded-full px-3 py-2 text-white/90 transition hover:bg-white/10 hover:text-white focus:outline-none focus:ring-2 focus:ring-white/70"
              >
                Home
              </button>
            </li>
            <li>
              <button
                onClick={() => setCurrentPage('about')}
                className="rounded-full px-3 py-2 text-white/90 transition hover:bg-white/10 hover:text-white focus:outline-none focus:ring-2 focus:ring-white/70"
              >
                About
              </button>
            </li>
            <li>
              <button
                onClick={() => setCurrentPage('projects')}
                className="rounded-full px-3 py-2 text-white/90 transition hover:bg-white/10 hover:text-white focus:outline-none focus:ring-2 focus:ring-white/70"
              >
                Projects
              </button>
            </li>
            <li>
              <button
                onClick={() => setCurrentPage('certificates')}
                className="rounded-full px-3 py-2 text-white/90 transition hover:bg-white/10 hover:text-white focus:outline-none focus:ring-2 focus:ring-white/70"
              >
                Certificates
              </button>
            </li>
            <li>
              <button
                onClick={() => setCurrentPage('contact')}
                className="rounded-full bg-cyan-500 px-4 py-2 text-slate-950 transition hover:bg-green-400 focus:outline-none focus:ring-2 focus:ring-green-300"
              >
                Contact
              </button>
            </li>
          </ul>
        </nav>
        
      </div>
    </header>
  )
}

export default Header