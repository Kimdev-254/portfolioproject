"use client"

import React, { useState } from "react"
import { motion } from "framer-motion"
import { Home, User, Briefcase, Mail, Moon, Sun } from "lucide-react"
import Link from "next/link"

const MenuItem = ({ icon: Icon, href }) => (
  <Link href={href} className="flex items-center justify-center">
    <motion.div
      whileHover={{ scale: 1.1, rotate: 10 }}
      whileTap={{ scale: 0.9 }}
      className="p-3 rounded-full bg-white/10 hover:bg-gradient-to-r from-teal-400 to-blue-500 text-white transition-colors duration-300"
    >
      <Icon size={20} />
    </motion.div>
  </Link>
)

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(false)

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
  }

  const menuItems = [
    { icon: Home, href: "/" },
    { icon: User, href: "/about" },
    { icon: Briefcase, href: "/projects" },
    { icon: Mail, href: "/contact" },
  ]

  return (
    <header className="w-full py-5 bg-gradient-to-r from-gray-800 via-black to-slate-900 text-white shadow-lg border-none">
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo with a pop effect */}
        <Link
          href="/"
          className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500 font-mono tracking-tight"
        >
          Kim<span className="text-white">.</span>
        </Link>

        <nav className="flex items-center space-x-4">
          {/* Animated menu items */}
          <motion.div
            className="flex space-x-4 bg-white/5 backdrop-blur-lg p-2 rounded-full shadow-lg"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            {menuItems.map((item, index) => (
              <MenuItem key={index} {...item} />
            ))}

            {/* Dark mode toggle with smooth transition */}
            <button
              onClick={toggleDarkMode}
              className="p-3 rounded-full bg-white/10 hover:bg-gradient-to-r from-yellow-400 to-pink-500 transition-colors duration-300"
            >
              {isDarkMode ? (
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <Sun size={20} />
                </motion.div>
              ) : (
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <Moon size={20} />
                </motion.div>
              )}
            </button>
          </motion.div>
        </nav>
      </div>
    </header>
  )
}

export default Header
