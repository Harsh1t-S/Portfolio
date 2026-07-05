import React, { useState } from 'react'
import Header from './Components/Header'
import Hero from './Components/Hero' 
import About from './Pages/About'
import Footer from './Components/Footer'
import Projects from './Pages/Projects'
import Certificates from './Pages/Certificates'

function App() {
  const [currentPage, setCurrentPage] = useState('home')

  const renderPage = () => {
    if (currentPage === 'home') return <Hero />
    if (currentPage === 'about') return <About />
    if (currentPage === 'projects') return <Projects />
    if (currentPage === 'certificates') return <Certificates />
    return <Hero />
  }

  return (
    <div className="flex min-h-screen flex-col bg-slate-900">
      <Header setCurrentPage={setCurrentPage} />
      
      <main className="flex flex-grow flex-col bg-cyan-100 p-6">
        {renderPage()}
      </main>
      
      <Footer />
    </div>
  )
}

export default App