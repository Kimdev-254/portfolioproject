"use client"

import React, { useState } from "react"
import { motion } from "framer-motion"
import { Home, User, Briefcase, Mail, Moon, Sun } from "lucide-react"
import Link from "next/link"

// MenuItem component to handle individual icons
const MenuItem = ({ icon: Icon, onClick }) => (
  <button
    onClick={onClick}
    className="flex items-center justify-center p-2 rounded-full hover:bg-gradient-to-r from-teal-400 to-blue-500 text-white transition-colors duration-300"
  >
    <Icon size={16} /> {/* Shrinking icon size to 16 */}
  </button>
)

const Nav = () => {
  const [isDarkMode, setIsDarkMode] = useState(false)

  // Dark mode toggle handler
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
    document.documentElement.classList.toggle("dark")
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
        {/* Scroll to top (Home) */}
        <MenuItem icon={Home} onClick={() => scrollToSection("home")} />
        {/* Scroll to About Me */}
        <MenuItem icon={User} onClick={() => scrollToSection("about")} />
        {/* Scroll to Projects */}
        <MenuItem
          icon={Briefcase}
          onClick={() => scrollToSection("projects")}
        />
        {/* Scroll to Contact */}
        <MenuItem icon={Mail} onClick={() => scrollToSection("contact")} />

        {/* Dark mode toggle */}
        <button
          onClick={toggleDarkMode}
          className="p-3 rounded-full hover:bg-gradient-to-r from-yellow-400 to-pink-500 transition-colors duration-300"
        >
          {isDarkMode ? (
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              <Sun size={16} /> {/* Smaller Sun icon */}
            </motion.div>
          ) : (
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              <Moon size={16} /> {/* Smaller Moon icon */}
            </motion.div>
          )}
        </button>
      </motion.div>
    </nav>
  )
}

export default Nav
