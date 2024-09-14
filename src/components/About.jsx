"use client"

import React, { useState } from "react"
import {
  motion,
  useMotionValue,
  useTransform,
  AnimatePresence,
} from "framer-motion"
import { Github, ExternalLink } from "lucide-react"

const projects = [
  {
    title: "Project 1",
    description: "A brief description of Project 1 and its key features.",
    image: "/project1.jpg",
    technologies: ["React", "Node.js", "MongoDB"],
    githubLink: "https://github.com/yourusername/project1",
    liveLink: "https://project1.com",
  },
  {
    title: "Project 2",
    description: "An overview of Project 2 and what makes it unique.",
    image: "/project2.jpg",
    technologies: ["Vue.js", "Express", "PostgreSQL"],
    githubLink: "https://github.com/yourusername/project2",
    liveLink: "https://project2.com",
  },
  {
    title: "Project 3",
    description: "Highlighting the main aspects and achievements of Project 3.",
    image: "/project3.jpg",
    technologies: ["Angular", "Django", "MySQL"],
    githubLink: "https://github.com/yourusername/project3",
    liveLink: "https://project3.com",
  },
  // Add more projects as needed
]

const ProjectCard = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rotateX = useTransform(y, [-100, 100], [30, -30])
  const rotateY = useTransform(x, [-100, 100], [-30, 30])

  const handleMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    x.set(event.clientX - centerX)
    y.set(event.clientY - centerY)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
    setIsHovered(false)
  }

  return (
    <motion.div
      className="relative perspective-1000"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
    >
      <div className="relative w-full h-96 rounded-xl overflow-hidden shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <AnimatePresence>
          {isHovered && (
            <motion.div
              className="absolute inset-0 bg-[url('/decay-texture.png')] bg-cover mix-blend-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            ></motion.div>
          )}
        </AnimatePresence>
        <div className="absolute inset-0 p-6 flex flex-col justify-between text-white">
          <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
          <p className="mb-4">{project.description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-blue-500 rounded-full text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
          <div className="flex justify-between items-center">
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-300 transition-colors duration-200"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-300 transition-colors duration-200"
            >
              <ExternalLink className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {isHovered && (
          <motion.div
            className="absolute inset-0 rounded-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{
              boxShadow:
                "0 0 20px 10px rgba(66, 153, 225, 0.5), 0 0 0 1px rgba(66, 153, 225, 0.5) inset",
              filter: "blur(4px)",
            }}
          ></motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

const Projects = () => {
  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">
          My Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
