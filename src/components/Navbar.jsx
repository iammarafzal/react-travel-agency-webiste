import { useState } from "react"
import { Link } from "react-router-dom"
import { FaTimes, FaBars } from "react-icons/fa"

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed px-8 py-4 top-0 right-0 left-0 shadow-lg z-50 bg-white">
      <div className="container px-4 flex justify-between items-center h-16">
        <h3 className="text-2xl font-bold">Travel</h3>
        <div className="hidden space-x-4 text-sm font-bold items-center md:flex">
          <Link to="/" className="px-6 py-2 hover:border-b-2">Home</Link>
          <Link to="/gallery" className="px-6 py-2 hover:bg-gray-600 hover:text-white">Gallery</Link>
          <Link to="/contact" className="px-6 py-2 hover:bg-gray-600 hover:text-white">Contact</Link>
          <Link to="/about" className="px-6 py-2 hover:bg-gray-600 hover:text-white">About</Link>
          <button className="py-2 px-6 text-white rounded-lg bg-blue-600 border-0 hover:bg-blue-800">Login</button>
        </div>

        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="flex flex-col items-center space-y-6 bg-white py-4 md:hidden">
          <Link to="/" className="px-6 py-2 hover:bg-gray-600 hover:text-white">Home</Link>
          <Link to="/gallery" className="px-6 py-2 hover:bg-gray-600 hover:text-white">Gallery</Link>
          <Link to="/contact" className="px-6 py-2 hover:bg-gray-600 hover:text-white">Contact</Link>
          <Link to="/about" className="px-6 py-2 hover:bg-gray-600 hover:text-white">About</Link>
          <button className="py-2 px-6 border bg-gray-300">Login</button>
        </div>
      )}
    </nav>
  )
}

export default Navbar
