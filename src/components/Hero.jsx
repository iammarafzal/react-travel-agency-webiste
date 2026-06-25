import PropTypes from "prop-types"

function Hero({
  backgroundImage,
  title,
  subtitle,
  children,
  height = "h-[60vh]"
}) {
  return (
    <div
      className={`relative ${height} bg-cover bg-center flex items-center justify-center`}
      style={{ backgroundImage: `url('${backgroundImage}')` }}
    >
      {/* Dark overlay to guarantee readability of white text */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Hero content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white flex flex-col items-center">
        {title && (
          <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-tight drop-shadow-md">
            {title}
          </h1>
        )}
        {subtitle && (
          <p className="mt-4 text-base md:text-xl text-slate-100 max-w-2xl drop-shadow-sm font-medium">
            {subtitle}
          </p>
        )}
        {children && <div className="w-full mt-8">{children}</div>}
      </div>
    </div>
  )
}

Hero.propTypes = {
  backgroundImage: PropTypes.string.isRequired,
  title: PropTypes.node,
  subtitle: PropTypes.node,
  children: PropTypes.node,
  height: PropTypes.string
}

export default Hero
