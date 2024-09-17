"use client"

import React, { useState, useEffect } from "react"
import { motion } from "framer-motion"
import {
  Home,
  User,
  Briefcase,
  Mail,
  Moon,
  Sun,
  Lightbulb,
  Send,
} from "lucide-react"
import Link from "next/link"

// MenuItem component to handle individual icons
const MenuItem = ({ icon: Icon, onClick, label }) => (
  <button
    onClick={onClick}
    className="flex items-center justify-center p-2 rounded-full hover:bg-gradient-to-r from-teal-400 to-blue-500 text-white transition-colors duration-300"
    aria-label={label}
  >
    <Icon size={16} />
  </button>
)

const Nav = () => {
  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    // Check for user's preference in localStorage or system preference
    const darkModePreference =
      localStorage.getItem("darkMode") === "true" ||
      (!("darkMode" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)

    setIsDarkMode(darkModePreference)
    if (darkModePreference) {
      document.documentElement.classList.add("dark")
    }
  }, [])

  // Dark mode toggle handler
  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => {
      const newMode = !prevMode
      localStorage.setItem("darkMode", newMode.toString())
      document.documentElement.classList.toggle("dark", newMode)
      return newMode
    })
  }

  // Scroll handlers for each section
  const scrollToSection = (id) => {
    const section = document.getElementById(id)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <nav className="fixed top-1/4 right-0 flex flex-col space-y-4 z-50">
      <motion.div
        className="flex flex-col space-y-4 p-2 rounded-full"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        <MenuItem
          icon={Home}
          onClick={() => scrollToSection("home")}
          label="Home"
        />
        <MenuItem
          icon={User}
          onClick={() => scrollToSection("about")}
          label="About"
        />
        <MenuItem
          icon={Lightbulb}
          onClick={() => scrollToSection("skills")}
          label="Skills"
        />
        <MenuItem
          icon={Briefcase}
          onClick={() => scrollToSection("projects")}
          label="Projects"
        />
        <MenuItem
          icon={Send}
          onClick={() => scrollToSection("contact")}
          label="Contact"
        />
      </motion.div>
    </nav>
  )
}

export default Nav
