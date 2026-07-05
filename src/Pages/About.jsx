import React from 'react'

function About() {
  return (
    <section className="mx-auto flex w-full max-w-7xl flex-grow flex-col rounded-2xl bg-slate-900 px-6 py-6 text-white shadow-2xl sm:px-12">
      
      <div className="mb-12 text-center">
        <h1 className="mb-2 text-4xl font-extrabold tracking-tight text-cyan-400 sm:text-5xl">
          About Me
        </h1>
        <div className="mx-auto h-1 w-20 rounded bg-cyan-500"></div>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        
        <div className="flex flex-col justify-center space-y-5 text-lg text-slate-300">
          <p>
            Hello! I'm <span className="font-bold text-white">Harshit Kumar Sharma</span>, a student and developer based in Lucknow, India. I specialize in building interactive web applications, crafting practical automation scripts, and designing intuitive user interfaces.
          </p>
          <p>
            My journey in tech is driven by a desire to solve real-world problems. Whether I'm deploying a full-stack doctor's portal, visualizing complex pathfinding algorithms, or writing Python scripts to automate tedious tasks, I thrive on turning logic into clean, functional tools.
          </p>
          
          <div className="mt-2 rounded-xl border border-slate-700 bg-slate-800/50 p-6">
            <h3 className="mb-3 text-xl font-bold text-cyan-400">🎮 Beyond the Code</h3>
            <p className="text-base">
              When I'm not debugging or optimizing deployments, you can usually find me playing <em>Games</em>, or keeping up with the latest cricket stats.
            </p>
          </div>
        </div>

        <div className="flex flex-col justify-center">
          <h2 className="mb-6 text-2xl font-bold text-white">Technical Arsenal</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-slate-400">Frontend & Web</h3>
              <div className="flex flex-wrap gap-2">
                {['React', 'JavaScript', 'Tailwind CSS', 'Vite', 'HTML5', 'CSS3'].map((skill) => (
                  <span key={skill} className="rounded-full bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-400 border border-cyan-500/20">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-slate-400">Scripting & Backend</h3>
              <div className="flex flex-wrap gap-2">
                {['Python', 'Node.js', 'C++', 'Pyrogram'].map((skill) => (
                  <span key={skill} className="rounded-full bg-indigo-500/10 px-4 py-2 text-sm font-medium text-indigo-400 border border-indigo-500/20">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-slate-400">Tools & Deployment</h3>
              <div className="flex flex-wrap gap-2">
                {['Git', 'GitHub', 'GitLab', 'Render', 'Vercel', 'Railway'].map((skill) => (
                  <span key={skill} className="rounded-full bg-emerald-500/10 px-4 py-2 text-sm font-medium text-emerald-400 border border-emerald-500/20">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
          </div>
        </div>
        
      </div>
    </section>
  )
}

export default About