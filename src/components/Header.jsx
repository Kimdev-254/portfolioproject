"use client"

import React from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"

const Header = () => {
  const router = useRouter()

  const handleLogoClick = (e) => {
    e.preventDefault()
    router.refresh()
  }

  return (
    <header
      id="home"
      className="w-full py-5 bg-gradient-to-r from-gray-800 via-black to-slate-900 text-white shadow-lg"
    >
      <div className="container mx-auto px-4">
        <Link
          href="/"
          onClick={handleLogoClick}
          className="inline-block text-4xl font-extrabold font-mono tracking-tight"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500 hover:text-cyan-500 transition-colors duration-300">
            Kimdev-254
          </span>
          <span className="text-white">.</span>
        </Link>
      </div>
    </header>
  )
}

export default Header
