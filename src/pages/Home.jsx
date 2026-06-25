import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { destinations, tours, testimonials, blogs } from "../data/travelData"
import Hero from "../components/Hero"
import SectionHeader from "../components/SectionHeader"
import DestinationCard from "../components/DestinationCard"
import TourCard from "../components/TourCard"
import TestimonialCard from "../components/TestimonialCard"
import Services from "../components/Services"
import Button from "../components/Button"
import { FiSearch, FiCalendar, FiClock, FiArrowRight } from "react-icons/fi"
import { Link } from "react-router-dom"

function Home() {
  const [searchQuery, setSearchQuery] = useState("")
  const navigate = useNavigate()

  const handleSearchSubmit = (e) => {
    e.preventDefault()
    navigate("/tours", { state: { search: searchQuery } })
  }

  // Get a subset of data for homepage previews
  const featuredTours = tours.filter(tour => tour.featured).slice(0, 3)
  const popularDestinations = destinations.slice(0, 4)
  const recentBlogs = blogs.slice(0, 3)

  return (
    <main className="pb-16 bg-slate-50/50">
      {/* Hero Banner with Search Bar */}
      <Hero
        backgroundImage="/Images/hero.webp"
        title={
          <span>
            Explore the World <br />
            with <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">Traviora</span>
          </span>
        }
        subtitle="Discover breathtaking destinations, book unique experiences, and create memories that last forever."
        height="h-screen"
      >
        {/* Interactive Search Bar */}
        <form
          onSubmit={handleSearchSubmit}
          className="max-w-2xl w-full mx-auto bg-white/10 backdrop-blur-md p-2.5 rounded-full border border-white/20 shadow-2xl flex items-center"
        >
          <div className="flex-1 flex items-center px-4">
            <FiSearch className="text-slate-200 mr-3 shrink-0" size={20} />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Where is your dream destination?"
              className="w-full bg-transparent border-none text-white outline-none placeholder:text-slate-300 text-sm md:text-base"
            />
          </div>
          <Button type="submit" variant="primary" size="md" className="py-3 px-8 shrink-0">
            Search
          </Button>
        </form>
      </Hero>

      {/* Services Section */}
      <Services />

      {/* Popular Destinations Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
            <SectionHeader
              title="Popular Destinations"
              subtitle="Unmissable Spots"
              alignment="left"
              className="mb-0!"
            />
            <Link to="/tours" className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-700 transition-colors mt-4 md:mt-0">
              View All Destinations <FiArrowRight />
            </Link>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {popularDestinations.map((dest) => (
              <div
                key={dest.id}
                onClick={() => navigate("/tours", { state: { search: dest.title.split(",")[0] } })}
                className="cursor-pointer"
              >
                <DestinationCard destination={dest} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Tours Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
            <SectionHeader
              title="Featured Packages"
              subtitle="Top Rated Tours"
              alignment="left"
              className="mb-0!"
            />
            <Link to="/tours" className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-700 transition-colors mt-4 md:mt-0">
              Browse All Packages <FiArrowRight />
            </Link>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {featuredTours.map((tour) => (
              <TourCard key={tour.id} tour={tour} viewMode="grid" />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeader
            title="What Our Travelers Say"
            subtitle="Client Testimonials"
          />

          <div className="grid gap-8 md:grid-cols-3 mt-12">
            {testimonials.map((t) => (
              <TestimonialCard key={t.id} testimonial={t} />
            ))}
          </div>
        </div>
      </section>

      {/* Recent Blogs Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
            <SectionHeader
              title="From the Travel Journal"
              subtitle="Latest Articles"
              alignment="left"
              className="mb-0!"
            />
            <Link to="/blog" className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-700 transition-colors mt-4 md:mt-0">
              Read More Stories <FiArrowRight />
            </Link>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {recentBlogs.map((blog) => (
              <article
                key={blog.id}
                className="group bg-white rounded-2xl border border-slate-100 shadow-md hover:shadow-xl transition-all duration-500 flex flex-col h-full overflow-hidden"
              >
                <div className="relative aspect-video w-full overflow-hidden">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <span className="absolute bottom-4 left-4 bg-blue-600 text-white text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full">
                    {blog.category}
                  </span>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center gap-4 text-xs text-slate-400 font-medium mb-3">
                    <span className="flex items-center gap-1">
                      <FiCalendar size={13} />
                      {blog.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <FiClock size={13} />
                      {blog.readTime}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 leading-snug group-hover:text-blue-600 transition-colors duration-300 mb-3">
                    <Link to="/blog">{blog.title}</Link>
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-4 line-clamp-2">
                    {blog.summary}
                  </p>
                  <Link to="/blog" className="text-xs font-bold text-blue-600 hover:underline mt-auto flex items-center gap-1">
                    Read Article <FiArrowRight size={12} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default Home
