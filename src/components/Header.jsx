import Link from "next/link"
import { Button } from "./ui/button"

// components
import Navbar from "./Navbar"

const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white ">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <h1 className="text-4xl font-semibold">
            Kim<span className="text-accent">.</span>
          </h1>
        </Link>

        <div className="hidden xl:flex items-center gap-8">
          <Navbar />
          <Link href="/contact">
            <Button>Hire me</Button>
          </Link>
        </div>
        {/* mobile navbar */}
        <div className="xl:hidden">mobile navbar</div>
      </div>
    </header>
  )
}

export default Header
