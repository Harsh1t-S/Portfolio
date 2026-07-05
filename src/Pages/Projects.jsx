import React from 'react'
import Cards from '../Components/Cards'
import healthSphereImage from '../assets/health-sphere-ss.png'

function Projects() {
  const myProjects = [
    {
      id: 1,
      title: "Health Sphere (Doctor's Portal)",
      description: "A comprehensive healthcare portal for booking appointments and managing patient-doctor interactions.",
      image: healthSphereImage,
      liveLink: "https://health-sphere-hajb.onrender.com/",
      repoLink: "https://gitlab.com/harshitkrsharma07/doctors-portal",
      btn : "Go to Portal"
    },
    {
      id: 2,
      title: "Pathfinding Visualizer",
      description: "An interactive web application that visualizes classic pathfinding algorithms (like A* and Dijkstra) in real-time.",
      image: "https://github.com/user-attachments/assets/0ff7258a-bbcc-42b0-833b-760d23b70157",
      liveLink: "https://pathfinding-visualizer-gilt.vercel.app/",
      repoLink: "https://github.com/Harsh1t-S/pathfinding-visualizer",
      btn: "Try Live"
    }
  ]

  return (
    <section className="mx-auto flex w-full max-w-7xl flex-grow flex-col rounded-2xl bg-slate-900 px-6 py-12 text-white shadow-2xl sm:px-12">
      <h1 className="mb-12 text-center text-4xl font-extrabold text-cyan-400 sm:text-5xl">My Projects</h1>
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
            isDownload={false}
          />
        ))}
      </div>
    </section>
  )
}

export default Projects