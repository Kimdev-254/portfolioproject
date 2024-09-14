"use client"

import React, { useState, useEffect } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

const Hero = () => {
  const [text, setText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [loopNum, setLoopNum] = useState(0)
  const [typingSpeed, setTypingSpeed] = useState(150)

  const textArray = [
    "Software Developer",
    "Aspiring Mobile Developer",
    "Tech Ehnthusiast",
  ]
  const period = 2000

  useEffect(() => {
    let ticker = setInterval(() => {
      tick()
    }, typingSpeed)

    return () => {
      clearInterval(ticker)
    }
  }, [text])

  const tick = () => {
    let i = loopNum % textArray.length
    let fullText = textArray[i]
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1)

    setText(updatedText)

    if (isDeleting) {
      setTypingSpeed((prevSpeed) => prevSpeed / 2)
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true)
      setTypingSpeed(period)
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false)
      setLoopNum(loopNum + 1)
      setTypingSpeed(150)
    }
  }

  return (
    <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white min-h-screen flex items-center">
      <div className="container mx-auto px-4">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between">
          <motion.div
            className="md:w-1/2 mt-8 md:mt-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Hi, I'm <span className="text-yellow-300">Boniface Kimani </span>
            </h1>
            <h2 className="text-2xl md:text-3xl mb-6 h-16">
              I'm a <span className="text-yellow-300">{text}</span>
            </h2>
            <p className="text-lg mb-8">
              I craft elegant solutions to complex problems, turning ideas into
              reality through code.
            </p>
            <motion.button
              className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold text-lg inline-flex items-center transition duration-300 hover:bg-yellow-300 hover:text-blue-700"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
              <ArrowRight className="ml-2" />
            </motion.button>
          </motion.div>

          <motion.div
            className="md:w-1/2 flex justify-center relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative w-64 h-64 md:w-96 md:h-96">
              <div className="absolute inset-0 bg-yellow-300 rounded-tr-[60px] rounded-bl-[60px] transform md:hidden"></div>
              <Image
                src="/myimage.jpeg"
                layout="fill"
                objectFit="cover"
                className="rounded-tr-[60px] rounded-bl-[60px] transform md:rotate-12 shadow-lg shadow-yellow-500/50"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
