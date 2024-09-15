"use client"

import React from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { User, BookOpen, Heart } from "lucide-react"

const timelineData = [
  {
    title: "About Me",
    content:
      "Passionate software developer with a knack for turning complex problems into elegant solutions. With a strong foundation in software engineering and a deep interest in web development, machine learning, and cloud technologies, I thrive on creating intuitive, user-centered applications.My journey in technology began with a fascination for understanding the underlying mechanisms of digital tools. This curiosity has evolved into a fervent drive to build impactful solutions and contribute to meaningful projects. I excel in collaborative environments, enjoy tackling challenging coding problems, and am always eager to explore new advancements in technology.",
    icon: User,
  },
  {
    title: "Education",
    content:
      "Bachelor of Science in Information Technology from Karatina University.",
    icon: BookOpen,
  },
  {
    title: "Interests",
    content:
      "Outside of coding, I enjoy reading and experimenting with new technologies...",
    icon: Heart,
  },
]

const TimelineItem = ({ item, index }) => {
  const { ref, inView } = useInView({ triggerOnce: true })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="flex mb-8 relative"
    >
      <div className="flex flex-col items-center mr-4 z-10">
        <div className="rounded-full bg-gradient-to-r from-green-400 to-teal-500 p-2 text-white">
          <item.icon size={24} />
        </div>
        {/* Removed the line rendering code */}
      </div>
      <div className="bg-slate-300 rounded-lg shadow-lg p-6 sm:p-8 flex-1">
        <h3 className="text-lg sm:text-xl font-bold mb-3 text-gray-800">
          {item.title}
        </h3>
        <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
          {item.content}
        </p>
      </div>
    </motion.div>
  )
}

const ScrollBeam = () => {
  return (
    <motion.div
      className="fixed left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-green-400 hidden sm:block"
      initial={{ scaleY: 0 }}
      animate={{ scaleY: 1 }}
      transition={{ duration: 0.5 }}
      style={{ transformOrigin: "top" }}
    />
  )
}

const About = () => {
  return (
    <section
      id="about"
      className="bg-gradient-to-r from-black to-slate-800 min-h-screen py-12 sm:py-20 font-mono"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500 shadow-md">
          About Me
        </h2>
        <div className="relative">
          <ScrollBeam />
          <div className="ml-0 sm:ml-10">
            {timelineData.map((item, index) => (
              <TimelineItem key={index} item={item} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
