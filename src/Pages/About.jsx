import React from 'react'

const EXPERIENCE = [
  {
    name: 'Syntellos AI',
    detail: 'Rebuilt the company site’s home page, navigation and solution pages in React; built an admin blog CMS with a rich-text editor, media uploads and newsletter flows; added SEO metadata to blog pages and redirected old URLs; added a lead form with WhatsApp hand-off.',
  },
  {
    name: 'Bookshelf.cv',
    detail: 'React 19, Express 5 and MySQL/TiDB. Built a Gemini shelf-photo scan that matches books through batched Open Library queries (a 34-book shelf now matches in 2.5 s instead of ~11 s), plus Google sign-in, Razorpay payments, Goodreads sync, an admin panel and mobile layout fixes.',
  },
  {
    name: 'Loan CRM',
    detail: 'Added 400 ms debounced search to every list screen, redesigned the login and Excel import screens down to 375 px, and shipped a Lenders & NBFC module with 9 REST endpoints on Node.js and Sequelize.',
  },
  {
    name: 'Grow Consultants',
    detail: 'Built a multi-page marketing site with React, Vite, Tailwind CSS, React Router and Framer Motion, with SEO and Open Graph meta tags, deployed on Vercel.',
  },
]

function About() {
  return (
    <section className="mx-auto flex w-full max-w-7xl flex-grow flex-col rounded-2xl border border-white/10 bg-slate-900/60 px-6 py-10 shadow-2xl backdrop-blur sm:px-12">

      <div className="mb-12 text-center">
        <h1 className="font-display mb-3 text-4xl font-bold text-white sm:text-5xl">
          About <span className="text-cyan-400">Me</span>
        </h1>
        <div className="mx-auto h-1 w-20 rounded bg-cyan-500"></div>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        
        <div className="flex flex-col justify-center space-y-5 text-lg text-slate-300">
          <p>
            Hello! I'm <span className="font-bold text-white">Harshit Kumar Sharma</span>, a B.Tech CSE student (2028) in Lucknow, India and a Full Stack Development Intern at Trusting Brains IT Services, where I ship client websites and web apps on React, Node.js and MySQL.
          </p>
          <p>
            I like building things end to end and putting AI to practical use — a Gemini-powered shelf scanner, CI for AI agents, RAG systems with grounded answers — and I care about the details that make a product hold up: responsive layouts, fast pages, SEO, tests, and offline support.
          </p>
          
          <div className="mt-2 rounded-xl border border-white/10 bg-white/5 p-6">
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
                {['React', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Vite', 'PWAs', 'SEO'].map((skill) => (
                  <span key={skill} className="rounded-full bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-400 border border-cyan-500/20">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-slate-400">Backend & Databases</h3>
              <div className="flex flex-wrap gap-2">
                {['Node.js', 'Express', 'Python', 'FastAPI', 'MySQL', 'PostgreSQL', 'MongoDB', 'Prisma', 'Sequelize', 'C++'].map((skill) => (
                  <span key={skill} className="rounded-full bg-indigo-500/10 px-4 py-2 text-sm font-medium text-indigo-400 border border-indigo-500/20">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-slate-400">AI & LLMs</h3>
              <div className="flex flex-wrap gap-2">
                {['Gemini API', 'OpenAI API', 'LLM Agents', 'LangChain', 'LangGraph', 'ChromaDB', 'RAG'].map((skill) => (
                  <span key={skill} className="rounded-full bg-violet-500/10 px-4 py-2 text-sm font-medium text-violet-400 border border-violet-500/20">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-slate-400">Tools, CI & Deployment</h3>
              <div className="flex flex-wrap gap-2">
                {['Git', 'GitHub', 'GitHub Actions', 'Docker', 'Vercel', 'Render', 'Railway'].map((skill) => (
                  <span key={skill} className="rounded-full bg-emerald-500/10 px-4 py-2 text-sm font-medium text-emerald-400 border border-emerald-500/20">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
          </div>
        </div>
        
      </div>
      <div className="mt-12">
        <h2 className="mb-6 text-2xl font-bold text-white">Experience</h2>
        <div className="rounded-xl border border-white/10 bg-white/5 p-6">
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <h3 className="text-xl font-bold text-cyan-400">Full Stack Development Intern · Trusting Brains IT Services</h3>
            <span className="text-sm text-slate-400">Aug 2026 – Present · Remote</span>
          </div>
          <p className="mt-1 text-sm text-slate-400">Selected after placing 2nd in the company’s Fullstack Intern assessment on Unstop.</p>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-base text-slate-300">
            {EXPERIENCE.map(({ name, detail }) => (
              <li key={name}>
                <span className="font-semibold text-white">{name}:</span> {detail}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default About
