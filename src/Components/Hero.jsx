import React from 'react'

function Hero() {
  return (
    <section 
      id="home" 
      className="relative flex flex-grow items-center justify-center overflow-hidden rounded-2xl bg-slate-900 px-6 py-24 shadow-2xl sm:px-12"
    >
      <div className="absolute inset-0 z-0 flex items-center justify-center">
        <div className="h-96 w-96 rounded-full bg-cyan-500/20 blur-[100px]"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl">
          Hi, I'm <span className="text-cyan-400">Harshit</span>.
        </h1>
        
        <p className="mx-auto mb-10 max-w-2xl text-lg text-slate-300 sm:text-xl">
          I'm a developer passionate about building dynamic web experiences, 
          practical automation scripts, and intuitive GUIs. I turn complex problems 
          into clean, functional code.
        </p>
        
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#projects"
            className="w-full rounded-full bg-cyan-500 px-8 py-3 text-lg font-semibold text-slate-950 transition hover:bg-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-300 sm:w-auto"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="w-full rounded-full border border-slate-600 bg-transparent px-8 py-3 text-lg font-semibold text-white transition hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-400 sm:w-auto"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero