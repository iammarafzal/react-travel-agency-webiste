import { Link } from "react-router-dom"
import Button from "../components/Button"
import { FiAlertTriangle, FiHome } from "react-icons/fi"

function NotFound() {
  return (
    <main className="min-h-screen bg-slate-50 flex items-center justify-center px-6 py-24">
      <div className="max-w-md w-full bg-white border border-slate-100 rounded-3xl p-10 text-center shadow-xl">
        <div className="w-20 h-20 bg-amber-50 text-amber-500 rounded-full flex items-center justify-center mx-auto mb-8 shadow-inner animate-bounce">
          <FiAlertTriangle size={36} />
        </div>
        
        <h1 className="text-8xl font-black bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent tracking-tight leading-none">
          404
        </h1>
        <h2 className="text-2xl font-bold text-slate-900 mt-4">Page Not Found</h2>
        
        <p className="text-slate-500 text-sm leading-relaxed mt-4 mb-8">
          The destination you are looking for doesn't exist, has been moved, or is temporarily unavailable. Let's get you back on track!
        </p>

        <Link to="/" className="inline-block w-full">
          <Button variant="primary" size="lg" className="w-full flex gap-2">
            <FiHome size={16} /> Back to Home
          </Button>
        </Link>
      </div>
    </main>
  )
}

export default NotFound
