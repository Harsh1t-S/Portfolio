import React from 'react'
import Cards from '../Components/Cards'
import healthSphereImage from '../assets/health-sphere-ss.png'
import codeCollabBanner from '../assets/codecollab-banner.svg'
import campusConnectBanner from '../assets/campus-connect-banner.svg'
import expenseWiseBanner from '../assets/expense-wise-banner.svg'

function Projects() {
  const myProjects = [
    {
      id: 1,
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
      id: 2,
      title: "CodeCollab — Real-Time Code Editor",
      description: "A multiplayer code editor where teammates join a room and edit the same file live — synced cursors, an integrated chat, and a real-time participant list powered by WebSockets.",
      image: codeCollabBanner,
      liveLink: "https://codecollab-ifraphb2h-harsh1t.vercel.app",
      repoLink: "https://github.com/Harsh1t-S/codecollab",
      btn: "Try Live",
      tags: ["React", "Node.js", "Socket.io", "Monaco Editor"],
      featured: true,
    },
    {
      id: 3,
      title: "Pathfinding Visualizer",
      description: "An interactive web application that visualizes classic pathfinding algorithms (like A* and Dijkstra) in real-time.",
      image: "https://github.com/user-attachments/assets/0ff7258a-bbcc-42b0-833b-760d23b70157",
      liveLink: "https://pathfinding-visualizer-gilt.vercel.app/",
      repoLink: "https://github.com/Harsh1t-S/pathfinding-visualizer",
      btn: "Try Live",
      tags: ["JavaScript", "Algorithms", "HTML5", "CSS3"],
    },
    {
      id: 4,
      title: "CampusConnect",
      description: "A MERN platform for college students to post and browse Lost & Found items and campus events, with JWT-authenticated accounts and image uploads for listings.",
      image: campusConnectBanner,
      liveLink: "https://campus-connect-gt9spn3hj-harsh1t.vercel.app",
      repoLink: "https://github.com/Harsh1t-S/campus-connect",
      btn: "Try Live",
      tags: ["React", "Express", "MongoDB", "JWT"],
    },
    {
      id: 5,
      title: "ExpenseWise",
      description: "A personal finance tracker with category budgets and spend analytics — visualizes monthly trends and category breakdowns via MongoDB aggregation pipelines, with budget-exceeded alerts.",
      image: expenseWiseBanner,
      liveLink: "https://expense-wise-njsukt0qm-harsh1t.vercel.app",
      repoLink: "https://github.com/Harsh1t-S/expense-wise",
      btn: "Try Live",
      tags: ["React", "Node.js", "MongoDB", "Recharts"],
    },
  ]

  return (
    <section className="mx-auto flex w-full max-w-7xl flex-grow flex-col rounded-2xl border border-white/10 bg-slate-900/60 px-6 py-12 shadow-2xl backdrop-blur sm:px-12">
      <div className="mb-12 text-center">
        <h1 className="font-display mb-3 text-4xl font-bold text-white sm:text-5xl">
          My <span className="text-cyan-400">Projects</span>
        </h1>
        <p className="mx-auto max-w-2xl text-slate-400">
          A mix of deployed full-stack apps, real-time systems, and algorithm visualizers I've built to learn by shipping.
        </p>
        <div className="mx-auto mt-4 h-1 w-20 rounded bg-cyan-500"></div>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {myProjects.map((proj) => (
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
        ))}
      </div>
    </section>
  )
}

export default Projects
