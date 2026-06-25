
const destinations = [
  {
    image: "/Images/santorini.png",
    title: "Santorini, Greece",
    description: "Whitewashed cliffside villages, blue domes, and glowing Aegean sunsets.",
  },
  {
    image: "/Images/bali.png",
    title: "Bali, Indonesia",
    description: "Lush rice terraces, tropical beaches, and peaceful island escapes.",
  },
  {
    image: "/Images/kyoto.png",
    title: "Kyoto, Japan",
    description: "Historic temples, serene gardens, and timeless cultural experiences.",
  },
  {
    image: "/Images/paris.png",
    title: "Paris, France",
    description: "Romantic streets, iconic landmarks, and unforgettable food and art.",
  },
  {
    image: "/Images/maldives.png",
    title: "Maldives",
    description: "Crystal lagoons, overwater villas, and relaxed luxury by the sea.",
  },
]

function PopularDestinations() {
  return (
    <div className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h3 className="mb-8 text-center text-3xl font-bold">Popular Destinations</h3>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {destinations.map((city) => (
            <div
              key={city.title}
              className="cursor-pointer overflow-hidden rounded-lg bg-white shadow-md transition hover:-translate-y-1 hover:shadow-xl"
            >
              <img
                src={city.image}
                alt={city.title}
                className="h-56 w-full object-cover"
              />
              <div className="p-5">
                <h4 className="text-xl font-semibold text-slate-900">{city.title}</h4>
                <p className="mt-3 text-sm leading-6 text-slate-600">{city.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default PopularDestinations
