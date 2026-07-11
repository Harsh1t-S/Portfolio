import React from 'react'
import Cards from '../Components/Cards'
import certificate1 from '../assets/certificate-1.png'
import pdf1 from '../assets/Byte_Battle_Harshit Kumar Sharma.pdf'

function Certificates() {

  const myCertificates = [
    {
      id: 1,
      title: "Byte Battle Coding Competition",
      description: "Won first place in a competitive coding competition, ranking against peers on speed and problem-solving accuracy.",
      image: certificate1,
      downloadLink: pdf1,
      tags: ["Competitive Programming"],
    },
  ]

  return (
    <section className="mx-auto flex w-full max-w-7xl flex-grow flex-col rounded-2xl border border-white/10 bg-slate-900/60 px-6 py-12 shadow-2xl backdrop-blur sm:px-12">

      <div className="mb-12 text-center">
        <h1 className="font-display mb-3 text-4xl font-bold text-white sm:text-5xl">
          My <span className="text-cyan-400">Certificates</span>
        </h1>
        <p className="mx-auto max-w-2xl text-slate-400">
          A collection of my technical certifications and competitive achievements.
        </p>
        <div className="mx-auto mt-4 h-1 w-20 rounded bg-cyan-500"></div>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {myCertificates.map((cert) => (
          <Cards
            key={cert.id}
            title={cert.title}
            description={cert.description}
            image={cert.image}
            link={cert.downloadLink}
            buttonText="Download PDF"
            tags={cert.tags}
            isDownload={true}
          />
        ))}
      </div>
    </section>
  )
}

export default Certificates
