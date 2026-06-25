import { useState } from "react"
import { Link } from "react-router-dom"
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa"
import { FiSend } from "react-icons/fi"

const quickLinks = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Explore Tours", to: "/tours" },
  { label: "Travel Blog", to: "/blog" },
  { label: "Contact Us", to: "/contact" },
]

function Footer() {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState("") // "", "error", "success"

  const handleSubscribe = (e) => {
    e.preventDefault()
    if (!email) {
      setStatus("error")
      return
    }
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!regex.test(email)) {
      setStatus("error")
      return
    }

    setStatus("success")
    setEmail("")
    setTimeout(() => {
      setStatus("")
    }, 4000)
  }

  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-900">
      <div className="max-w-7xl mx-auto grid gap-10 px-6 py-16 md:grid-cols-3 lg:px-8">
        {/* Brand Information */}
        <div className="space-y-6">
          <Link to="/" className="text-2xl font-black tracking-tight text-white select-none">
            <span className="bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent">
              Traviora
            </span>
            <span className="text-indigo-500">.</span>
          </Link>
          <p className="text-sm leading-relaxed text-slate-400 max-w-sm">
            Your trusted partner for unforgettable travel experiences. Explore the world with carefully planned trips, trusted stays, and friendly 24/7 support.
          </p>
          <div className="flex gap-4">
            <a href="#" aria-label="Facebook" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-slate-400 hover:text-blue-500 hover:bg-slate-800 transition-all duration-300">
              <FaFacebook size={18} />
            </a>
            <a href="#" aria-label="Twitter" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-slate-400 hover:text-sky-400 hover:bg-slate-800 transition-all duration-300">
              <FaTwitter size={18} />
            </a>
            <a href="#" aria-label="Instagram" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-slate-400 hover:text-pink-500 hover:bg-slate-800 transition-all duration-300">
              <FaInstagram size={18} />
            </a>
            <a href="#" aria-label="LinkedIn" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-slate-400 hover:text-blue-600 hover:bg-slate-800 transition-all duration-300">
              <FaLinkedin size={18} />
            </a>
          </div>
        </div>

        {/* Quick Navigation Links */}
        <div>
          <h3 className="text-white text-base font-bold tracking-wide uppercase mb-6">Quick Links</h3>
          <nav className="flex flex-col gap-4 text-sm font-medium">
            {quickLinks.map((link) => (
              <Link key={link.label} to={link.to} className="hover:text-white transition-colors duration-200 w-fit">
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Newsletter Subscription */}
        <div>
          <h3 className="text-white text-base font-bold tracking-wide uppercase mb-6">Stay Updated</h3>
          <p className="text-sm leading-relaxed text-slate-400 mb-6">
            Subscribe to receive travel deals, custom itineraries, and seasonal vacation offers.
          </p>
          <form onSubmit={handleSubscribe} className="flex flex-col gap-2">
            <div className="flex overflow-hidden rounded-full border border-slate-800 bg-slate-900/50 focus-within:border-slate-700 transition-all">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="min-w-0 flex-1 bg-transparent px-5 py-3 text-sm text-white outline-none placeholder:text-slate-500"
              />
              <button
                type="submit"
                className="bg-blue-600 px-5 py-3 text-white transition hover:bg-blue-500 flex items-center justify-center active:scale-95 duration-200 cursor-pointer"
                aria-label="Subscribe"
              >
                <FiSend size={16} />
              </button>
            </div>
            
            {/* Status messages */}
            {status === "error" && (
              <p className="text-xs text-red-400 font-semibold px-2">Please enter a valid email address.</p>
            )}
            {status === "success" && (
              <p className="text-xs text-emerald-400 font-semibold px-2">Thank you! You have subscribed successfully.</p>
            )}
          </form>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="border-t border-slate-900 bg-slate-950 py-6">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col gap-4 text-xs font-semibold text-slate-500 md:flex-row md:items-center md:justify-between">
          <p>&copy; {new Date().getFullYear()} Traviora. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
