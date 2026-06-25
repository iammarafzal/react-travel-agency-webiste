import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { HiMenuAlt3, HiX } from "react-icons/hi"
import Button from "./Button"

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()
  
  const isHomePage = location.pathname === "/"
  const isSolid = isScrolled || !isHomePage

  useEffect(() => {
    if (!isHomePage) {
      setIsScrolled(true)
      return
    }

    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    handleScroll()

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [isHomePage])

  useEffect(() => {
    setIsOpen(false)
  }, [location.pathname])

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Tours", path: "/tours" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ]

  return (
    <nav
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-500 ease-in-out ${
        isSolid
          ? "bg-white/90 backdrop-blur-md border-b border-slate-100/80 shadow-md shadow-slate-900/5 py-3"
          : "bg-transparent border-b border-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex justify-between items-center h-16">
        {/* Logo (Traviora Branding) */}
        <Link to="/" className="text-2xl font-black tracking-tight flex items-center select-none">
          <span className={isSolid ? "bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent" : "text-white"}>
            Traviora
          </span>
          <span className={isSolid ? "text-indigo-600" : "text-white"}>.</span>
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden space-x-8 text-sm font-bold items-center md:flex">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`group relative py-2 px-1 text-sm font-bold tracking-wide transition-colors duration-300 ${
                  isActive
                    ? isSolid ? "text-blue-600" : "text-white"
                    : isSolid
                    ? "text-slate-600 hover:text-blue-600"
                    : "text-white/80 hover:text-white"
                }`}
              >
                {link.name}
                <span
                  className={`absolute bottom-0 left-0 h-[2px] transition-all duration-300 ${
                    isActive
                      ? isSolid ? "w-full bg-blue-600" : "w-full bg-white"
                      : `w-0 group-hover:w-full ${isSolid ? "bg-blue-600" : "bg-white"}`
                  }`}
                />
              </Link>
            )
          })}
          <Button
            variant={isSolid ? "primary" : "lightOutline"}
            size="md"
            onClick={() => {}}
          >
            Login
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`p-2 rounded-xl transition-all duration-200 ${
              isSolid ? "text-slate-800 hover:bg-slate-100" : "text-white hover:bg-white/10"
            }`}
            aria-label="Toggle Menu"
          >
            {isOpen ? <HiX className="w-6 h-6" /> : <HiMenuAlt3 className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-white/95 backdrop-blur-xl border-b border-slate-100 shadow-xl py-6 px-8 flex flex-col space-y-4 md:hidden animate-fade-in-down">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`font-semibold text-lg py-2 transition-colors border-b border-slate-50 last:border-0 ${
                  isActive ? "text-blue-600" : "text-slate-700 hover:text-blue-600"
                }`}
              >
                {link.name}
              </Link>
            )
          })}
          <Button variant="primary" size="lg" className="w-full mt-4">
            Login
          </Button>
        </div>
      )}
    </nav>
  )
}

export default Navbar
