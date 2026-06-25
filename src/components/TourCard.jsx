import PropTypes from "prop-types"
import { FiClock, FiStar, FiMapPin } from "react-icons/fi"
import Button from "./Button"

function TourCard({ tour, viewMode = "grid" }) {
  const { name, destination, price, duration, rating, reviews, image, tripType, activity, description } = tour

  const isList = viewMode === "list"

  return (
    <div
      className={`group bg-white rounded-2xl border border-slate-100 shadow-md hover:shadow-xl transition-all duration-500 overflow-hidden ${
        isList ? "flex flex-col md:flex-row gap-6 md:h-64" : "flex flex-col h-full hover:-translate-y-2"
      }`}
    >
      {/* Tour Image */}
      <div className={`relative overflow-hidden ${isList ? "w-full md:w-[35%] h-56 md:h-full shrink-0" : "aspect-[4/3] w-full"}`}>
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />
        {/* Category Badge */}
        <div className="absolute top-4 left-4 flex gap-2">
          <span className="bg-blue-600 text-white text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full shadow-sm">
            {activity}
          </span>
          <span className="bg-slate-900/80 backdrop-blur-sm text-white text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full shadow-sm">
            {tripType}
          </span>
        </div>
      </div>

      {/* Tour Details */}
      <div className={`p-6 flex flex-col justify-between flex-grow`}>
        <div>
          {/* Rating and Destination */}
          <div className="flex items-center justify-between text-xs text-slate-500 mb-3">
            <span className="flex items-center gap-1 font-semibold text-slate-600 bg-slate-50 px-2.5 py-1 rounded-md">
              <FiMapPin className="text-blue-500" />
              {destination}
            </span>
            <span className="flex items-center gap-1 text-amber-500 font-bold bg-amber-50 px-2.5 py-1 rounded-md">
              <FiStar className="fill-amber-500" />
              {rating.toFixed(1)} ({reviews})
            </span>
          </div>

          {/* Title */}
          <h3 className="text-lg md:text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors duration-300 line-clamp-1 mb-2">
            {name}
          </h3>

          {/* Description */}
          <p className="text-slate-600 text-sm leading-relaxed line-clamp-2 mb-4">
            {description}
          </p>
        </div>

        {/* Footer info: price, duration, and CTA */}
        <div className="flex items-center justify-between pt-4 border-t border-slate-100 mt-auto">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 text-slate-500 text-xs">
              <FiClock className="text-slate-400" />
              {duration}
            </span>
            <div className="flex flex-col">
              <span className="text-[10px] text-slate-400 font-medium uppercase tracking-wider leading-none">From</span>
              <span className="text-lg font-black text-slate-950">${price}</span>
            </div>
          </div>
          <Button variant="primary" size="sm">
            View Details
          </Button>
        </div>
      </div>
    </div>
  )
}

TourCard.propTypes = {
  tour: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    destination: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    duration: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    reviews: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    tripType: PropTypes.string.isRequired,
    activity: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
  viewMode: PropTypes.oneOf(["grid", "list"]),
}

export default TourCard
