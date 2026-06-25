import { FaConciergeBell, FaHotel, FaPlane, FaUmbrellaBeach } from "react-icons/fa"
import SectionHeader from "./SectionHeader"

const services = [
  {
    icon: <FaPlane className="text-4xl" />,
    title: "Flight Booking",
    description: "Find convenient flights with flexible routes, fair prices, and smooth booking support.",
  },
  {
    icon: <FaHotel className="text-4xl" />,
    title: "Hotel Booking",
    description: "Choose trusted stays from boutique hotels to luxury resorts in top destinations.",
  },
  {
    icon: <FaUmbrellaBeach className="text-4xl" />,
    title: "Beach Tours",
    description: "Relax with curated beach getaways, island escapes, and sunny coastal experiences.",
  },
  {
    icon: <FaConciergeBell className="text-4xl" />,
    title: "Travel Support",
    description: "Get personalized assistance for itineraries, transfers, reservations, and trip changes.",
  },
]

function Services() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeader
          title="What We Offer Our Travelers"
          subtitle="Our Premium Services"
        />
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.title}
              className="group bg-white rounded-2xl p-8 border border-slate-100 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col items-center text-center"
            >
              <div className="mb-6 p-4 bg-blue-50 text-blue-600 rounded-2xl group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                {service.icon}
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h4>
              <p className="text-sm leading-relaxed text-slate-500">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
