import { useState, useEffect } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import "./App.css"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import ScrollToTop from "./components/ScrollToTop"
import Home from "./pages/Home"
import About from "./pages/About"
import Tours from "./pages/Tours"
import Blog from "./pages/Blog"
import Contact from "./pages/Contact"
import NotFound from "./pages/NotFound"

const App = () => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate initial portfolio page load spinner
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 600)
    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return (
      <div className="fixed inset-0 z-[9999] bg-slate-950 flex flex-col items-center justify-center text-white">
        <div className="relative flex items-center justify-center">
          <div className="w-16 h-16 rounded-full border-4 border-slate-800 border-t-blue-600 animate-spin"></div>
          <span className="absolute text-xs font-black uppercase tracking-wider text-blue-500">TR</span>
        </div>
        <p className="mt-6 text-sm font-bold tracking-[0.2em] text-slate-400 animate-pulse">
          Loading Traviora...
        </p>
      </div>
    )
  }

  return (
    <BrowserRouter>
      {/* Scroll to Top on Page Changes */}
      <ScrollToTop />
      
      {/* Dynamic Header */}
      <Navbar />
      
      {/* Main Pages */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/tours" element={<Tours />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        {/* Wildcard 404 Route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      
      {/* Footer */}
      <Footer />
    </BrowserRouter>
  )
}

export default App
