"use client"

import dynamic from "next/dynamic"
import { useState, useEffect } from "react"
import { motion } from "framer-motion"

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
  // State for skill progress
  const [skills, setSkills] = useState({
    javascript: 0,
    react: 0,
    nextjs: 0,
    python: 0,
    mysql: 0,
    mongodb: 0,
    firebase: 0,
  })

  useEffect(() => {
    // Simulate loading of skill data
    setSkills({
      javascript: 70,
      react: 50,
      nextjs: 50,
      python: 40,
      mysql: 30,
      mongodb: 40,
      firebase: 60,
    })
  }, [])

  // Function to determine progress bar color based on percentage
  const getProgressBarColor = (percentage) => {
    if (percentage >= 75) return "bg-green-500"
    if (percentage >= 50) return "bg-yellow-500"
    if (percentage >= 25) return "bg-orange-500"
    return "bg-red-500"
  }

  return (
    <div className="bg-gradient-to-r from-slate-800 to-black min-h-screen flex flex-col items-center py-16 px-4">
      <h2 className="text-4xl font-extrabold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500 shadow-md">
        Skills
      </h2>

      <div className="flex flex-col md:flex-row space-y-12 md:space-y-0 md:space-x-16 w-full max-w-6xl">
        {/* Left Section - Skill Progress */}
        <div className="flex flex-col space-y-6 text-white w-full md:w-1/2">
          {Object.entries(skills)
            .sort(([, a], [, b]) => b - a) // Sort skills by percentage in descending order
            .map(([skill, percentage]) => (
              <div key={skill} className="flex flex-col">
                <h3
                  className={`text-xl sm:text-2xl font-semibold mb-2 text-gradient bg-gradient-to-r from-${getGradientColor(
                    percentage
                  )}-400 to-${getGradientColor(percentage)}-500 bg-clip-text`}
                >
                  {capitalize(skill)}
                </h3>
                <div className="relative w-full bg-gray-700 rounded-full h-6">
                  <div
                    className={`${getProgressBarColor(
                      percentage
                    )} h-full rounded-full`}
                    style={{ width: `${percentage}%` }}
                  />
                  <span className="absolute inset-0 flex items-center justify-center text-xs font-medium text-white">
                    {percentage}%
                  </span>
                </div>
              </div>
            ))}
        </div>

        {/* Right Section - IconCloud */}
        <div className="w-full md:w-1/2 flex items-center justify-center">
          <IconCloud iconSlugs={iconSlugs} />
        </div>
      </div>
    </div>
  )
}

// Capitalize function for skill names
const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1)

// Function to determine gradient color based on percentage
const getGradientColor = (percentage) => {
  if (percentage >= 75) return "green"
  if (percentage >= 50) return "yellow"
  if (percentage >= 25) return "orange"
  return "red"
}

export default Skills
