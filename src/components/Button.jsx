import PropTypes from "prop-types"

function Button({
  variant = "primary",
  size = "md",
  onClick,
  type = "button",
  className = "",
  children,
  ...props
}) {
  const baseStyle = "inline-flex items-center justify-center font-bold rounded-full transition-all duration-300 select-none active:scale-95 cursor-pointer"
  
  const variants = {
    primary: "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md shadow-blue-500/10 hover:from-blue-700 hover:to-indigo-700 hover:shadow-lg hover:shadow-blue-500/20 hover:scale-[1.03]",
    secondary: "bg-slate-800 text-white hover:bg-slate-950 hover:scale-[1.03] shadow-sm",
    outline: "border border-slate-200 text-slate-700 bg-white/50 backdrop-blur-sm hover:bg-slate-50 hover:border-slate-300 hover:text-slate-900 hover:scale-[1.03]",
    lightOutline: "border border-white/30 text-white bg-white/10 backdrop-blur-sm hover:bg-white hover:text-slate-900 hover:border-white shadow-sm hover:scale-[1.03]"
  }

  const sizes = {
    sm: "px-4 py-1.5 text-xs",
    md: "px-6 py-2.5 text-sm",
    lg: "px-8 py-3.5 text-base"
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyle} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}

Button.propTypes = {
  variant: PropTypes.oneOf(["primary", "secondary", "outline", "lightOutline"]),
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  onClick: PropTypes.func,
  type: PropTypes.oneOf(["button", "submit", "reset"]),
  className: PropTypes.string,
  children: PropTypes.node.isRequired
}

export default Button
