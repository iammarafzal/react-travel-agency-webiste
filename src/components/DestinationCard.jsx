import PropTypes from "prop-types"

function DestinationCard({ destination }) {
  const { image, title, description, tourCount } = destination

  return (
    <div className="group relative overflow-hidden rounded-2xl bg-white shadow-md transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl flex flex-col h-full">
      <div className="relative overflow-hidden aspect-video md:aspect-[4/3] w-full">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          loading="lazy"
        />
        {tourCount && (
          <span className="absolute top-4 right-4 bg-slate-900/70 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-full">
            {tourCount}
          </span>
        )}
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-slate-950 transition-colors duration-300 group-hover:text-blue-600">
          {title}
        </h3>
        <p className="mt-3 text-slate-600 text-sm leading-relaxed flex-grow">
          {description}
        </p>
      </div>
    </div>
  )
}

DestinationCard.propTypes = {
  destination: PropTypes.shape({
    id: PropTypes.number,
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    tourCount: PropTypes.string
  }).isRequired
}

export default DestinationCard
