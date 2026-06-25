import PropTypes from "prop-types"
import { FaQuoteLeft, FaStar } from "react-icons/fa"

function TestimonialCard({ testimonial }) {
  const { image, name, location, rating = 5, body } = testimonial

  return (
    <article className="relative bg-white rounded-2xl p-8 border border-slate-100 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col h-full">
      {/* Quote Icon Background */}
      <div className="absolute top-6 right-6 text-slate-100/80">
        <FaQuoteLeft size={40} />
      </div>

      {/* Star Rating */}
      <div className="flex gap-1 mb-5">
        {[...Array(5)].map((_, i) => (
          <FaStar
            key={i}
            className={`w-4 h-4 ${
              i < rating ? "text-amber-400 fill-amber-400" : "text-slate-200"
            }`}
          />
        ))}
      </div>

      {/* Review Content */}
      <p className="text-slate-600 text-sm leading-relaxed mb-6 italic relative flex-grow">
        "{body}"
      </p>

      {/* Reviewer Details */}
      <div className="flex items-center gap-4 mt-auto">
        <img
          src={image}
          alt={name}
          className="w-12 h-12 rounded-full object-cover border-2 border-blue-500/20 shadow-sm"
          loading="lazy"
        />
        <div>
          <h4 className="font-bold text-slate-900 leading-tight">{name}</h4>
          <p className="text-slate-500 text-xs mt-0.5">{location}</p>
        </div>
      </div>
    </article>
  )
}

TestimonialCard.propTypes = {
  testimonial: PropTypes.shape({
    id: PropTypes.number,
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    rating: PropTypes.number,
    body: PropTypes.string.isRequired
  }).isRequired
}

export default TestimonialCard
