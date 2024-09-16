"use client"

import dynamic from "next/dynamic"
import { useState, useEffect, useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

// Dynamic import for the IconCloud component
const IconCloud = dynamic(() => import("@/components/magicui/icon-cloud"), {
  ssr: false,
})

// List of icon slugs sorted in descending order
const iconSlugs = [
  "typescript",
  "javascript",
  "dart",
  "java",
  "react",
  "flutter",
  "android",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "amazonaws",
  "postgresql",
  "firebase",
  "nginx",
  "vercel",
  "testinglibrary",
  "jest",
  "cypress",
  "docker",
  "git",
  "jira",
  "github",
  "gitlab",
  "visualstudiocode",
  "androidstudio",
  "sonarqube",
  "figma",
]

const Skills = () => {
  const [skills, setSkills] = useState({
    mysql: 0,
    mongodb: 0,
    python: 0,
    firebase: 0,
    nextjs: 0,
    react: 0,
    javascript: 0,
  })

  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  useEffect(() => {
    const timer = setTimeout(() => {
      setSkills({
        mysql: 30,
        mongodb: 40,
        python: 50,
        firebase: 55,
        nextjs: 60,
        react: 70,
        javascript: 80,
      })
    }, 500)
    return () => clearTimeout(timer)
  }, [])

  const skillColors = {
    mysql: "from-blue-400 to-blue-600",
    mongodb: "from-green-400 to-green-600",
    python: "from-yellow-400 to-yellow-600",
    firebase: "from-orange-400 to-orange-600",
    nextjs: "from-purple-400 to-purple-600",
    javascript: "from-yellow-300 to-yellow-500",
    react: "from-cyan-400 to-cyan-600",
  }

  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <motion.div
      ref={containerRef}
      className="bg-gradient-to-r from-slate-900 to-black min-h-screen flex flex-col items-center py-16 px-4"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      variants={{
        visible: { transition: { staggerChildren: 0.2 } },
      }}
    >
      <motion.h2
        className="text-5xl font-extrabold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500 shadow-lg p-2 rounded-lg"
        variants={fadeInVariants}
      >
        Skills & Expertise
      </motion.h2>

      <div className="flex flex-col md:flex-row space-y-12 md:space-y-0 md:space-x-16 w-full max-w-6xl">
        {/* Left Section - Skill Progress */}
        <motion.div
          className="flex flex-col space-y-6 text-white w-full md:w-1/2"
          variants={fadeInVariants}
        >
          {Object.entries(skills).map(([skill, percentage]) => (
            <motion.div
              key={skill}
              className="flex flex-col"
              variants={fadeInVariants}
            >
              <div className="flex justify-between items-center mb-1">
                <h3 className="text-sm font-medium text-gray-300">
                  {capitalize(skill)}
                </h3>
                <span className="text-sm font-medium text-gray-300">
                  {percentage}%
                </span>
              </div>
              <div className="relative w-full bg-gray-700 rounded-full h-2.5 overflow-hidden">
                <motion.div
                  className={`h-2.5 rounded-full bg-gradient-to-r ${skillColors[skill]}`}
                  initial={{ width: 0 }}
                  animate={{ width: `${percentage}%` }}
                  transition={{ duration: 1, ease: "easeOut" }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Right Section - IconCloud */}
        <motion.div
          className="w-full md:w-1/2 flex items-center justify-center"
          variants={fadeInVariants}
        >
          <IconCloud iconSlugs={iconSlugs} />
        </motion.div>
      </div>

      {/* Skill Categories Section */}
      <motion.div className="mt-16 w-full max-w-6xl" variants={fadeInVariants}>
        <h3 className="text-3xl font-bold text-center mb-8 text-white">
          Skill Categories
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {["Frontend", "Backend", "Mobile"].map((category) => (
            <motion.div
              key={category}
              className="bg-gray-800 rounded-lg p-6 shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <h4 className="text-xl font-semibold mb-4 text-teal-400">
                {category} Development
              </h4>
              <ul className="list-disc list-inside text-white space-y-2">
                {getSkillList(category).map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  )
}

const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1)

const getSkillList = (category) => {
  switch (category) {
    case "Frontend":
      return ["React", "Next.js", "HTML5", "CSS3", "Tailwind CSS"]
    case "Backend":
      return ["Node.js", "Express", "Python", "PostgreSQL", "MongoDB"]
    case "Mobile":
      return ["React Native", "Flutter", "Android (Java)", "iOS (Swift)"]
    default:
      return []
  }
}

export default Skills
