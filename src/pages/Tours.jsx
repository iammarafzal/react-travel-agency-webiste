import { useState, useEffect } from "react"
import { useLocation } from "react-router-dom"
import { tours } from "../data/travelData"
import Hero from "../components/Hero"
import TourCard from "../components/TourCard"
import Button from "../components/Button"
import { FiGrid, FiList, FiSearch, FiSliders, FiTrash2, FiChevronDown, FiChevronUp } from "react-icons/fi"

function Tours() {
  const location = useLocation()
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedDestination, setSelectedDestination] = useState("")
  const [selectedActivity, setSelectedActivity] = useState("")
  const [selectedTripType, setSelectedTripType] = useState("")
  const [viewMode, setViewMode] = useState("grid") // "grid" | "list"
  const [showMobileFilters, setShowMobileFilters] = useState(false)

  // Load search from homepage routing state if present
  useEffect(() => {
    if (location.state?.search) {
      setSearchTerm(location.state.search)
      // Clear location state after reading to prevent sticky values
      window.history.replaceState({}, document.title)
    }
  }, [location.state])


  // Extract unique destinations (base city/country names) for filter dropdown
  const destList = Array.from(new Set(tours.map(t => t.destination.split(", ")[0])))
  const activitiesList = ["Sightseeing", "Adventure", "Hiking", "Relaxation"]
  const tripTypesList = ["Luxury", "Budget", "Family", "Solo"]

  // Filtering Logic
  const filteredTours = tours.filter((tour) => {
    const matchesSearch = tour.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tour.destination.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesDestination = selectedDestination === "" || tour.destination.toLowerCase().includes(selectedDestination.toLowerCase())
    const matchesActivity = selectedActivity === "" || tour.activity === selectedActivity
    const matchesTripType = selectedTripType === "" || tour.tripType === selectedTripType

    return matchesSearch && matchesDestination && matchesActivity && matchesTripType
  })

  const handleClearFilters = () => {
    setSearchTerm("")
    setSelectedDestination("")
    setSelectedActivity("")
    setSelectedTripType("")
  }

  return (
    <main className="bg-slate-50 min-h-screen pb-24 pt-20">
      {/* Hero Banner */}
      <Hero
        backgroundImage="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1600&q=80"
        title="Find Your Next Adventure"
        subtitle="Explore our handpicked travel packages curated just for you."
        height="h-[45vh]"
      />

      <section className="max-w-7xl mx-auto px-6 lg:px-8 mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-8 items-start">

          {/* FILTER PANEL (Sidebar) */}
          <aside className="bg-white rounded-2xl border border-slate-100 shadow-sm lg:sticky lg:top-28 overflow-hidden transition-all duration-300">
            {/* Header / Mobile Toggle */}
            <div
              onClick={() => setShowMobileFilters(!showMobileFilters)}
              className="flex items-center justify-between p-5 cursor-pointer lg:cursor-default lg:pointer-events-none select-none border-b border-slate-100"
            >
              <h3 className="font-extrabold text-slate-900 flex items-center gap-2">
                <FiSliders className="text-blue-600" />
                Filters
              </h3>

              <div className="flex items-center gap-3">
                {(searchTerm || selectedDestination || selectedActivity || selectedTripType) && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation() // prevent accordion toggle
                      handleClearFilters()
                    }}
                    className="text-xs text-red-500 hover:text-red-700 font-bold flex items-center gap-1 transition-colors cursor-pointer pointer-events-auto"
                  >
                    <FiTrash2 /> Clear
                  </button>
                )}

                {/* Mobile Chevron Toggle */}
                <span className="lg:hidden text-slate-400">
                  {showMobileFilters ? <FiChevronUp size={20} /> : <FiChevronDown size={20} />}
                </span>
              </div>
            </div>

            {/* Filter Content (collapsible on mobile, always visible on desktop) */}
            <div className={`p-6 space-y-6 ${showMobileFilters ? "block animate-fade-in" : "hidden lg:block"}`}>
              {/* Search Input */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Search</label>
                <div className="relative flex items-center">
                  <FiSearch className="absolute left-3.5 text-slate-400" />
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Where to go..."
                    className="w-full pl-10 pr-4 py-2.5 rounded-full border border-slate-200 text-sm outline-none focus:border-blue-500 transition-colors"
                  />
                </div>
              </div>

              {/* Destination Filter */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Destination</label>
                <select
                  value={selectedDestination}
                  onChange={(e) => setSelectedDestination(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm outline-none focus:border-blue-500 bg-white"
                >
                  <option value="">All Destinations</option>
                  {destList.map(dest => (
                    <option key={dest} value={dest}>{dest}</option>
                  ))}
                </select>
              </div>

              {/* Activity Filter */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Activity</label>
                <select
                  value={selectedActivity}
                  onChange={(e) => setSelectedActivity(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm outline-none focus:border-blue-500 bg-white"
                >
                  <option value="">All Activities</option>
                  {activitiesList.map(act => (
                    <option key={act} value={act}>{act}</option>
                  ))}
                </select>
              </div>

              {/* Trip Type Filter */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Trip Type</label>
                <select
                  value={selectedTripType}
                  onChange={(e) => setSelectedTripType(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm outline-none focus:border-blue-500 bg-white"
                >
                  <option value="">All Types</option>
                  {tripTypesList.map(type => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>
            </div>
          </aside>

          {/* RESULTS AREA */}
          <div className="space-y-6">

            {/* Topbar: count and layout switch */}
            <div className="hidden md:flex bg-white rounded-2xl p-4 border border-slate-100 shadow-sm items-center justify-between">
              <p className="text-sm font-semibold text-slate-600">
                Showing <span className="text-blue-600 font-bold">{filteredTours.length}</span> {filteredTours.length === 1 ? "tour" : "tours"}
              </p>

              {/* Grid / List View Toggle */}
              <div className="flex gap-2 border border-slate-100 p-1.5 rounded-xl bg-slate-50">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-2 rounded-lg transition-colors cursor-pointer ${viewMode === "grid" ? "bg-white text-blue-600 shadow-sm" : "text-slate-400 hover:text-slate-600"
                    }`}
                  aria-label="Grid View"
                >
                  <FiGrid size={18} />
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`p-2 rounded-lg transition-colors cursor-pointer ${viewMode === "list" ? "bg-white text-blue-600 shadow-sm" : "text-slate-400 hover:text-slate-600"
                    }`}
                  aria-label="List View"
                >
                  <FiList size={18} />
                </button>
              </div>
            </div>

            {/* Tours Grid/List Container */}
            {filteredTours.length > 0 ? (
              <div
                className={`grid gap-6 ${viewMode === "grid" ? "grid-cols-1 md:grid-cols-2" : "grid-cols-1"
                  }`}
              >
                {filteredTours.map((tour) => (
                  <TourCard key={tour.id} tour={tour} viewMode={viewMode} />
                ))}
              </div>
            ) : (
              // Empty State
              <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-16 text-center max-w-xl mx-auto mt-8">
                <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <FiSearch size={28} />
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-2">No Tours Found</h4>
                <p className="text-slate-500 text-sm leading-relaxed mb-6">
                  We couldn't find any tour packages matching your search parameters. Try adjusting your search query or filters.
                </p>
                <Button variant="primary" onClick={handleClearFilters}>
                  Reset All Filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  )
}

export default Tours
