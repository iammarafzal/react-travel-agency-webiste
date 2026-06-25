import { useState } from "react"
import { faqs } from "../data/travelData"
import Hero from "../components/Hero"
import SectionHeader from "../components/SectionHeader"
import { FiChevronDown, FiChevronUp, FiAward, FiShield, FiHeart } from "react-icons/fi"

const stats = [
  { value: "10+", label: "Years of Experience" },
  { value: "5k+", label: "Happy Travelers" },
  { value: "80+", label: "Destinations Covered" },
]

function About() {
  const [openFaqId, setOpenFaqId] = useState(null)

  const toggleFaq = (id) => {
    setOpenFaqId(openFaqId === id ? null : id)
  }

  return (
    <main className="bg-slate-50 min-h-screen pb-24 pt-20">
      {/* Hero Header */}
      <Hero
        backgroundImage="/Images/hero.png"
        title="Our Story"
        subtitle="We make travel planning simple, personal, and memorable."
        height="h-[45vh]"
      />

      {/* Main Story & Stats */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="space-y-6">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600 bg-blue-50 px-3 py-1 rounded-full inline-block">
              Who We Are
            </span>
            <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight">
              Crafting Unforgettable Journeys Since 2016
            </h1>
            <p className="text-slate-600 text-sm leading-relaxed">
              At Traviora, we believe that traveling is more than just visiting new locations; it is about discovering new perspectives, experiencing rich cultures, and building lifelong memories.
            </p>
            <p className="text-slate-600 text-sm leading-relaxed">
              Our travel experts design handpicked itineraries, manage logistics, and secure boutique stays so you can focus entirely on the adventure. From luxury cruises in Santorini to cultural walks in Kyoto, we build trips around your style, budget, and schedule.
            </p>
            
            {/* Stats Row */}
            <div className="grid gap-4 grid-cols-3 pt-6">
              {stats.map((stat) => (
                <div key={stat.label} className="bg-white border border-slate-100 rounded-2xl p-5 text-center shadow-sm">
                  <p className="text-2xl md:text-3xl font-black text-blue-600">{stat.value}</p>
                  <p className="mt-1 text-[10px] font-bold uppercase tracking-wider text-slate-400">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Visual Showcase */}
          <div className="overflow-hidden rounded-3xl shadow-xl border-4 border-white aspect-[4/3] relative">
            <img
              src="/Images/hero.png"
              alt="Tropical travel destination"
              className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="bg-white py-20 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeader
            title="Why Travelers Choose Traviora"
            subtitle="Our Core Strengths"
          />

          <div className="grid gap-8 md:grid-cols-3 mt-12">
            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100/50 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6">
                <FiShield size={24} />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">Trusted Planning</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Every trip is planned with dependable routes, comfortable stays, and practical timing to ensure a hassle-free vacation.
              </p>
            </div>

            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100/50 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6">
                <FiHeart size={24} />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">Personalized Touch</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                We listen first, then recommend destinations and custom activities that align perfectly with how you love to explore.
              </p>
            </div>

            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100/50 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6">
                <FiAward size={24} />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">Support Anytime</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Our support team is on standby to help with itineraries, flight changes, or immediate requests before and during your journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive FAQ Accordion Section */}
      <section className="max-w-4xl mx-auto px-6 lg:px-8 py-20">
        <SectionHeader
          title="Frequently Asked Questions"
          subtitle="FAQ"
        />

        <div className="space-y-4 mt-12">
          {faqs.map((faq) => {
            const isOpen = openFaqId === faq.id
            return (
              <div
                key={faq.id}
                className="bg-white border border-slate-100 rounded-2xl shadow-sm overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left font-bold text-slate-900 hover:text-blue-600 transition-colors select-none cursor-pointer"
                >
                  <span className="text-sm md:text-base">{faq.question}</span>
                  {isOpen ? (
                    <FiChevronUp className="text-blue-600" size={18} />
                  ) : (
                    <FiChevronDown className="text-slate-400" size={18} />
                  )}
                </button>
                
                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-sm text-slate-500 border-t border-slate-50 leading-relaxed animate-fade-in">
                    {faq.answer}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </section>
    </main>
  )
}

export default About
