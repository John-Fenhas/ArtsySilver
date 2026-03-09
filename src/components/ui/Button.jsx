function Button({ children, onClick, className = "", type = "button" }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`
        bg-neutral-800 
        text-white 
        text-xs
        uppercase 
        font-semibold 
        tracking-wide
        px-8 
        py-4 
        rounded-2xl
        hover:bg-neutral-700
        transition-colors
        duration-200
        cursor-pointer
        ${className}
      `}
    >
      {children}
    </button>
  );
}

export default Button;
