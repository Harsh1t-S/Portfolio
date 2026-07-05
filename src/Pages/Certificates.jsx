import React from 'react'
import Cards from '../Components/Cards'
import certificate1 from '../assets/certificate-1.png'
import pdf1 from '../assets/Byte_Battle_Harshit Kumar Sharma.pdf'

function Certificates() {
  
  const myCertificates = [
    {
      id: 1,
      title: "Byte Battle Coding Competition",
      description: "Won the first place in the coding competition.",
      image: certificate1,
      downloadLink: "../assets/Byte_Battle_Harshit Kumar Sharma.pdf"
    },
  ]

  return (
    <section className="mx-auto flex w-full max-w-7xl flex-grow flex-col rounded-2xl bg-slate-900 px-6 py-12 text-white shadow-2xl sm:px-12">
      
      <div className="mb-12 text-center">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-cyan-400 sm:text-5xl">
          My Certificates
        </h1>
        <p className="mx-auto max-w-2xl text-slate-300">
          A collection of my technical certifications and completed training programs.
        </p>
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
            isDownload={true}
            />
        ))}
      </div>
    </section>
  )
}

export default Certificates