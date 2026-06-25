import { useState } from "react"
import { blogs } from "../data/travelData"
import Hero from "../components/Hero"
import SectionHeader from "../components/SectionHeader"
import Button from "../components/Button"
import { FiCalendar, FiClock, FiSearch, FiUser } from "react-icons/fi"

function Blog() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")

  const categories = ["All", ...new Set(blogs.map(blog => blog.category))]

  const filteredBlogs = blogs.filter(blog => {
    const matchesSearch = blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          blog.summary.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "All" || blog.category === selectedCategory

    return matchesSearch && matchesCategory
  })

  return (
    <main className="bg-slate-50 min-h-screen pb-24 pt-20">
      {/* Hero Banner */}
      <Hero
        backgroundImage="https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1600&q=80"
        title="The Traviora Journal"
        subtitle="Travel stories, guides, and inspiration from our global adventurers."
        height="h-[45vh]"
      />

      <section className="max-w-7xl mx-auto px-6 lg:px-8 mt-16">
        <SectionHeader
          title="Latest Travel Insights"
          subtitle="Our Travel Blog"
        />

        {/* Filter bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12 bg-white p-5 rounded-2xl border border-slate-100 shadow-sm">
          {/* Category Chips */}
          <div className="flex flex-wrap gap-2">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? "bg-blue-600 text-white shadow-md shadow-blue-500/10"
                    : "bg-slate-50 text-slate-600 hover:bg-slate-100"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search bar */}
          <div className="relative max-w-sm w-full">
            <FiSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search articles..."
              className="w-full pl-10 pr-4 py-2 rounded-full border border-slate-200 text-sm outline-none focus:border-blue-500 transition-colors"
            />
          </div>
        </div>

        {/* Articles Grid */}
        {filteredBlogs.length > 0 ? (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredBlogs.map(blog => (
              <article
                key={blog.id}
                className="group bg-white rounded-2xl border border-slate-100 shadow-md hover:shadow-xl transition-all duration-500 flex flex-col h-full overflow-hidden"
              >
                {/* Thumbnail */}
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

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  {/* Meta */}
                  <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400 font-medium mb-3">
                    <span className="flex items-center gap-1">
                      <FiCalendar size={13} />
                      {blog.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <FiClock size={13} />
                      {blog.readTime}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg md:text-xl font-bold text-slate-900 leading-snug group-hover:text-blue-600 transition-colors duration-300 mb-3">
                    {blog.title}
                  </h3>

                  {/* Summary */}
                  <p className="text-slate-600 text-sm leading-relaxed mb-6 line-clamp-3">
                    {blog.summary}
                  </p>

                  {/* Author and CTA */}
                  <div className="flex items-center justify-between pt-4 border-t border-slate-100 mt-auto">
                    <span className="flex items-center gap-2 text-xs font-bold text-slate-700">
                      <div className="w-6 h-6 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center">
                        <FiUser size={12} />
                      </div>
                      {blog.author}
                    </span>
                    <Button variant="outline" size="sm">
                      Read Article
                    </Button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-16 text-center max-w-xl mx-auto">
            <h4 className="text-xl font-bold text-slate-900 mb-2">No Articles Found</h4>
            <p className="text-slate-500 text-sm leading-relaxed mb-6">
              We couldn't find any articles matching your search criteria. Try selecting another category or resetting the search input.
            </p>
            <Button
              variant="primary"
              onClick={() => {
                setSearchTerm("")
                setSelectedCategory("All")
              }}
            >
              Reset Filters
            </Button>
          </div>
        )}
      </section>
    </main>
  )
}

export default Blog
