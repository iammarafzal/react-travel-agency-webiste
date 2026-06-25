const galleryImages = [
  { image: "/Images/santorini.png", title: "Santorini Escape", location: "Greece" },
  { image: "/Images/bali.png", title: "Bali Rice Terraces", location: "Indonesia" },
  { image: "/Images/kyoto.png", title: "Kyoto Traditions", location: "Japan" },
  { image: "/Images/paris.png", title: "Paris City Lights", location: "France" },
  { image: "/Images/maldives.png", title: "Maldives Lagoon", location: "Maldives" },
  { image: "/Images/hero.png", title: "Coastal Adventure", location: "Tropical Coast" },
]

function Gallery() {
  return (
    <main className="bg-gray-100 pt-28">
      <section className="container mx-auto px-4 pb-16">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
            Travel Gallery
          </p>
          <h1 className="mt-3 text-4xl font-bold text-slate-900 md:text-5xl">
            Beautiful places waiting for you
          </h1>
          <p className="mt-5 text-slate-600">
            Browse a few of our favorite destinations and start imagining your
            next unforgettable trip.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {galleryImages.map((item) => (
            <article
              key={item.title}
              className="group overflow-hidden rounded-lg bg-white shadow-md"
            >
              <div className="h-72 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <h2 className="text-xl font-semibold text-slate-900">{item.title}</h2>
                <p className="mt-1 text-sm text-blue-600">{item.location}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}

export default Gallery
