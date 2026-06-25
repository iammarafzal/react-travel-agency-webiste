import { Link } from "react-router-dom"
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa"

const quickLinks = [
  { label: "Home", to: "/" },
  { label: "Destinations", to: "/destinations" },
  { label: "About Us", to: "/about" },
  { label: "Contact", to: "/contact" },
]

function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto grid gap-10 px-4 py-12 md:grid-cols-3">
        <div>
          <h2 className="text-2xl font-bold">Travel Agency</h2>
          <p className="mt-4 max-w-sm text-sm leading-6 text-slate-300">
            Your trusted partner for unforgettable travel experiences. Explore
            the world with carefully planned trips, trusted stays, and friendly
            support.
          </p>
          <div className="mt-6 flex gap-4">
            <a href="#" aria-label="Facebook" className="text-slate-300 transition hover:text-blue-400">
              <FaFacebook size={22} />
            </a>
            <a href="#" aria-label="Twitter" className="text-slate-300 transition hover:text-blue-400">
              <FaTwitter size={22} />
            </a>
            <a href="#" aria-label="Instagram" className="text-slate-300 transition hover:text-pink-400">
              <FaInstagram size={22} />
            </a>
            <a href="#" aria-label="LinkedIn" className="text-slate-300 transition hover:text-blue-400">
              <FaLinkedin size={22} />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold">Quick Links</h3>
          <nav className="mt-4 flex flex-col gap-3 text-sm text-slate-300">
            {quickLinks.map((link) => (
              <Link key={link.label} to={link.to} className="transition hover:text-white">
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div>
          <h3 className="text-lg font-semibold">Stay Updated</h3>
          <p className="mt-4 text-sm leading-6 text-slate-300">
            Subscribe for travel deals, destination ideas, and seasonal offers.
          </p>
          <form className="mt-5 flex overflow-hidden rounded-md border border-slate-700 bg-slate-800">
            <input
              type="email"
              placeholder="Your email"
              className="min-w-0 flex-1 bg-transparent px-4 py-3 text-sm text-white outline-none placeholder:text-slate-400"
            />
            <button
              type="submit"
              className="bg-blue-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-blue-500"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="border-t border-slate-800">
        <div className="container mx-auto flex flex-col gap-4 px-4 py-5 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
          <p>2026 Travel Agency. All rights reserved.</p>
          <div className="flex gap-5">
            <Link to="/privacy" className="transition hover:text-white">Privacy Policy</Link>
            <Link to="/terms" className="transition hover:text-white">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
