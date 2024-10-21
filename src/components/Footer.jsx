"use client"

import React from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Github, Linkedin, Twitter, Mail } from "lucide-react"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-16 bg-[url('/curve.svg')] bg-no-repeat bg-center bg-cover pt-16 pb-8 text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-400 font-style:italic hover:text-cyan-500 transform hover:scale-110 transition-transform duration-300">
              Software Developer
            </p>
          </div>

          <motion.div
            className="flex space-x-4 "
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link
              href="https://github.com/Kimdev-254/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="w-6 h-6 text-gray-400 hover:text-cyan-500 transform hover:scale-110 transition-transform duration-300" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/boniface-kimani-49ba6030a/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="w-6 h-6 text-gray-400 hover:text-cyan-500 transform hover:scale-110 transition-transform duration-300" />
            </Link>
            <Link
              href="https://x.com/Kimdev254"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Twitter className="w-6 h-6 text-gray-400 hover:text-cyan-500 transform hover:scale-110 transition-transform duration-300" />
            </Link>
            <Link href="mailto:bonifacekimani715@gmail.com">
              <Mail className="w-6 h-6 text-gray-400 hover:text-cyan-500 transform hover:scale-110 transition-transform duration-300" />
            </Link>
          </motion.div>
        </div>

        <motion.hr
          className="my-8 border-gray-800"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        />

        <div className="flex flex-col md:flex-row justify-center items-center">
          <motion.div
            className="mb-4 md:mb-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <p className="text-gray-400 flex justify-center">
              &copy; {currentYear} Kimde-254. All rights reserved.
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
