"use client"

import React from "react"
import Link from "next/link"

const Header = () => {
  return (
    <header
      id="home"
      className="w-full py-5 bg-gradient-to-r from-gray-800 via-black to-slate-900 text-white shadow-lg border-none"
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo with a pop effect */}
        <Link
          href="/"
          className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500 font-mono tracking-tight"
        >
          Kim<span className="text-white">.</span>
        </Link>
      </div>
    </header>
  )
}

export default Header
