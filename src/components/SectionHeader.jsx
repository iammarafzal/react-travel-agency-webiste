import PropTypes from "prop-types"

function SectionHeader({
  title,
  subtitle,
  alignment = "center",
  className = ""
}) {
  const alignClass = alignment === "center" ? "text-center mx-auto" : "text-left"

  return (
    <div className={`max-w-3xl mb-12 ${alignClass} ${className}`}>
      {subtitle && (
        <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600 bg-blue-50 px-3 py-1 rounded-full inline-block mb-3">
          {subtitle}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
        {title}
      </h2>
      <div className={`h-1 w-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full mt-4 ${alignment === "center" ? "mx-auto" : ""}`} />
    </div>
  )
}

SectionHeader.propTypes = {
  title: PropTypes.node.isRequired,
  subtitle: PropTypes.node,
  alignment: PropTypes.oneOf(["left", "center"]),
  className: PropTypes.string
}

export default SectionHeader
