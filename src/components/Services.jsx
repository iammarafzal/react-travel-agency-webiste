import { FaConciergeBell, FaHotel, FaPlane, FaUmbrellaBeach } from "react-icons/fa"

const services = [
  {
    icon: <FaPlane className="text-4xl text-blue-500" />,
    title: "Flight Booking",
    description: "Find convenient flights with flexible routes, fair prices, and smooth booking support.",
  },
  {
    icon: <FaHotel className="text-4xl text-blue-500" />,
    title: "Hotel Booking",
    description: "Choose trusted stays from boutique hotels to luxury resorts in top destinations.",
  },
  {
    icon: <FaUmbrellaBeach className="text-4xl text-blue-500" />,
    title: "Beach Tours",
    description: "Relax with curated beach getaways, island escapes, and sunny coastal experiences.",
  },
  {
    icon: <FaConciergeBell className="text-4xl text-blue-500" />,
    title: "Travel Support",
    description: "Get personalized assistance for itineraries, transfers, reservations, and trip changes.",
  },
]

function Services() {
  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h3 className="mb-8 text-center text-3xl font-bold">Our Services</h3>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.title}
              className="cursor-pointer rounded-lg bg-white p-6 text-center shadow-md transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="mb-4 flex justify-center">{service.icon}</div>
              <h4 className="text-xl font-semibold text-slate-900">{service.title}</h4>
              <p className="mt-3 text-sm leading-6 text-slate-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Services
