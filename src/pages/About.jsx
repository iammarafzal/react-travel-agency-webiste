const stats = [
  { value: "10+", label: "Years of experience" },
  { value: "2k+", label: "Happy travelers" },
  { value: "50+", label: "Destinations covered" },
]

function About() {
  return (
    <main className="bg-white pt-28">
      <section className="container mx-auto grid gap-10 px-4 pb-16 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
            About Us
          </p>
          <h1 className="mt-3 text-4xl font-bold leading-tight text-slate-900 md:text-5xl">
            We make travel planning simple, personal, and memorable.
          </h1>
          <p className="mt-6 leading-7 text-slate-600">
            Travel Agency helps travelers discover beautiful destinations with
            thoughtful itineraries, reliable bookings, and friendly support. We
            handle the details so you can focus on the experience.
          </p>
          <p className="mt-4 leading-7 text-slate-600">
            From romantic island escapes to cultural city tours, our team builds
            trips around your style, budget, and schedule.
          </p>
        </div>

        <div className="overflow-hidden rounded-lg shadow-xl">
          <img
            src="/Images/hero.png"
            alt="Tropical travel destination"
            className="h-full max-h-[480px] w-full object-cover"
          />
        </div>
      </section>

      <section className="bg-gray-100 py-14">
        <div className="container mx-auto grid gap-6 px-4 md:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.label} className="rounded-lg bg-white p-6 text-center shadow-md">
              <p className="text-4xl font-bold text-blue-600">{stat.value}</p>
              <p className="mt-2 text-sm font-medium text-slate-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-lg border border-gray-200 p-6">
            <h2 className="text-xl font-semibold text-slate-900">Trusted Planning</h2>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Every trip is planned with dependable routes, comfortable stays,
              and practical timing.
            </p>
          </div>
          <div className="rounded-lg border border-gray-200 p-6">
            <h2 className="text-xl font-semibold text-slate-900">Personal Service</h2>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              We listen first, then recommend destinations and experiences that
              match how you love to travel.
            </p>
          </div>
          <div className="rounded-lg border border-gray-200 p-6">
            <h2 className="text-xl font-semibold text-slate-900">Support Anytime</h2>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Our team is ready to help with changes, questions, and special
              requests before and during your journey.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}

export default About
