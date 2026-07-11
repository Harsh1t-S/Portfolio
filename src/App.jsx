import React, { useEffect, useState } from 'react'
import Header from './Components/Header'
import Hero from './Components/Hero'
import About from './Pages/About'
import Footer from './Components/Footer'
import Projects from './Pages/Projects'
import Certificates from './Pages/Certificates'
import Contact from './Pages/Contact'

function App() {
  const [currentPage, setCurrentPage] = useState('home')

  const navigate = (page) => {
    setCurrentPage(page)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  useEffect(() => {
    const titles = {
      home: 'Harshit Kumar Sharma — Portfolio',
      about: 'About — Harshit Kumar Sharma',
      projects: 'Projects — Harshit Kumar Sharma',
      certificates: 'Certificates — Harshit Kumar Sharma',
      contact: 'Contact — Harshit Kumar Sharma',
    }
    document.title = titles[currentPage] ?? titles.home
  }, [currentPage])

  const renderPage = () => {
    if (currentPage === 'home') return <Hero setCurrentPage={navigate} />
    if (currentPage === 'about') return <About />
    if (currentPage === 'projects') return <Projects />
    if (currentPage === 'certificates') return <Certificates />
    if (currentPage === 'contact') return <Contact />
    return <Hero setCurrentPage={navigate} />
  }

  return (
    <div className="relative flex min-h-screen flex-col overflow-x-hidden bg-slate-950 text-white">
      <div className="pointer-events-none fixed inset-0 z-0 bg-grid opacity-60" />
      <div className="pointer-events-none fixed -top-40 left-1/2 z-0 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[140px]" />

      <Header currentPage={currentPage} setCurrentPage={navigate} />

      <main
        key={currentPage}
        className="animate-fade-up relative z-10 flex flex-grow flex-col px-4 py-10 sm:px-6 sm:py-14"
      >
        {renderPage()}
      </main>

      <Footer setCurrentPage={navigate} />
    </div>
  )
}

export default App
