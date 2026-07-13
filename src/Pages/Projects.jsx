import React from 'react'
import Cards from '../Components/Cards'
import healthSphereImage from '../assets/health-sphere-ss.png'
import neuroDrawBanner from '../assets/neuro-draw-banner.svg'
import lumenBanner from '../assets/lumen-banner.svg'
import pixelForgeBanner from '../assets/pixel-forge-banner.svg'
import zomatoBanner from '../assets/zomato-banner.svg'
import learnHubBanner from '../assets/learnhub-banner.svg'

function Projects() {
  const myProjects = [
    {
      id: 1,
      title: "NeuroDraw — Neural Network Playground",
      description: "Draw a digit and watch a neural network think — every neuron's activation visualized live, layer by layer. A 64→32→16→10 MLP (96% test accuracy) with the entire forward pass hand-written in JavaScript, running fully in the browser.",
      image: neuroDrawBanner,
      liveLink: "https://neuro-draw-beta.vercel.app",
      repoLink: "https://github.com/Harsh1t-S/neuro-draw",
      btn: "Try Live",
      tags: ["React", "Tailwind", "Machine Learning", "SVG"],
      featured: true,
    },
    {
      id: 2,
      title: "Lumen — 2D Ray Casting Sandbox",
      description: "Move your mouse — you're the light. Real-time visibility-polygon ray casting at 60fps with draggable walls, drawable geometry, scene presets, and hard shadows — the same technique behind 2D game lighting.",
      image: lumenBanner,
      liveLink: "https://lumen-raycast.vercel.app",
      repoLink: "https://github.com/Harsh1t-S/lumen-raycast",
      btn: "Try Live",
      tags: ["React", "Tailwind", "Canvas", "Computational Geometry"],
      featured: true,
    },
    {
      id: 3,
      title: "Health Sphere (Doctor's Portal)",
      description: "A comprehensive healthcare portal for booking appointments and managing patient-doctor interactions, deployed and running live.",
      image: healthSphereImage,
      liveLink: "https://health-sphere-hajb.onrender.com/",
      repoLink: "https://gitlab.com/harshitkrsharma07/doctors-portal",
      btn: "Go to Portal",
      tags: ["React", "Node.js", "Express", "MongoDB"],
      featured: true,
    },
    {
      id: 4,
      title: "PathTrace — Pathfinding Visualizer",
      description: "Interactive visualizer for BFS, DFS, Dijkstra, A* and Greedy Best-First — weighted terrain, animated maze generation, live re-tracing as you drag the endpoints, and a hand-rolled binary-heap priority queue.",
      image: "https://github.com/user-attachments/assets/0ff7258a-bbcc-42b0-833b-760d23b70157",
      liveLink: "https://pathfinding-visualizer-gilt.vercel.app/",
      repoLink: "https://github.com/Harsh1t-S/pathfinding-visualizer",
      btn: "Try Live",
      tags: ["JavaScript", "Algorithms", "Data Structures"],
    },
    {
      id: 5,
      title: "PixelForge — Pixel Art & ASCII Converter",
      description: "Turn any image into pixel art or ASCII art entirely in the browser — retro palettes (Game Boy, NES, PICO-8), Floyd–Steinberg dithering, live controls, and PNG export. Nothing is ever uploaded.",
      image: pixelForgeBanner,
      liveLink: "https://pixel-forge-snowy.vercel.app",
      repoLink: "https://github.com/Harsh1t-S/pixel-forge",
      btn: "Try Live",
      tags: ["React", "Tailwind", "Canvas", "Image Processing"],
    },
    {
      id: 6,
      title: "Zomato Clone",
      description: "A full-stack food delivery platform inspired by Zomato — restaurant browsing, menus, and ordering flow, built with a TypeScript React frontend and a Node.js backend, deployed and running live.",
      image: zomatoBanner,
      liveLink: "https://zomato-nuew.onrender.com/",
      repoLink: "https://github.com/Harsh1t-S/Zomato",
      btn: "Try Live",
      tags: ["TypeScript", "React", "Node.js", "Full-Stack"],
    },
    {
      id: 7,
      title: "LearnHub — Course Platform",
      description: "A W3Schools-style learning platform: instructors paste lectures straight from Word/Google Docs, students get live 'Try it Yourself' code editors (HTML/JS + real Python via Pyodide), quizzes, and progress tracking.",
      image: learnHubBanner,
      liveLink: "https://learn-hub-black.vercel.app/",
      repoLink: "https://github.com/Harsh1t-S/LearnHub",
      btn: "Try Live",
      tags: ["React", "Express", "MySQL", "Monaco", "Pyodide"],
    },
  ]

  const featured = myProjects.filter(p => p.featured)
  const others = myProjects.filter(p => !p.featured)

  const renderCard = (proj) => (
    <Cards
      key={proj.id}
      title={proj.title}
      description={proj.description}
      image={proj.image}
      link={proj.liveLink}
      repoLink={proj.repoLink}
      buttonText={proj.btn}
      tags={proj.tags}
      featured={proj.featured}
      isDownload={false}
    />
  )

  return (
    <section className="mx-auto flex w-full max-w-7xl flex-grow flex-col rounded-2xl border border-white/10 bg-slate-900/60 px-6 py-12 shadow-2xl backdrop-blur sm:px-12">
      <div className="mb-12 text-center">
        <h1 className="font-display mb-3 text-4xl font-bold text-white sm:text-5xl">
          My <span className="text-cyan-400">Projects</span>
        </h1>
        <p className="mx-auto max-w-2xl text-slate-400">
          Interactive visualizers, in-browser machine learning, real-time graphics, and full-stack apps — all built to learn by shipping.
        </p>
        <div className="mx-auto mt-4 h-1 w-20 rounded bg-cyan-500"></div>
      </div>

      <h2 className="mb-6 flex items-center gap-3 text-sm font-semibold uppercase tracking-widest text-cyan-400">
        <span className="h-px w-8 bg-cyan-500/60"></span>Featured
      </h2>
      <div className="mb-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {featured.map(renderCard)}
      </div>

      <h2 className="mb-6 flex items-center gap-3 text-sm font-semibold uppercase tracking-widest text-slate-500">
        <span className="h-px w-8 bg-slate-600"></span>More projects
      </h2>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {others.map(renderCard)}
      </div>
    </section>
  )
}

export default Projects
