export default function ProductCard({ product, className = "w-full" }) {
  return (
    <div className={`${className}`}>
      <div className="relative group/card overflow-hidden rounded-md cursor-pointer w-full">
        <img
          src={product.images[0].url}
          alt={product.name}
          className="w-full aspect-[1/1.6] object-cover transition-opacity duration-600 group-hover/card:opacity-0"
        />

        <img
          src={product.images[1].url}
          alt={product.name}
          className="absolute inset-0 w-full aspect-[1/1.6] object-cover opacity-0 transition-opacity duration-600 group-hover/card:opacity-100"
        />

        <button
          className={`
          absolute left-4 right-4 -bottom-12
          h-10
          bg-white
          border border-gray-200
          rounded-lg
          text-sm
          opacity-0
          transition-all duration-500
          group-hover/card:opacity-100
          group-hover/card:-translate-y-14
          cursor-pointer
          group-hover
          `}
        >
          + Add To Cart
        </button>
      </div>

      <div className="flex flex-col items-center mt-4 text-sm leading-relaxed w-full">
        <p className="font-medium text-gray-700 cursor-pointer text-center w-fit">
          {product.name}
        </p>

        <p className="text-gray-800 text-xs">{product.price_in_cents} EGP</p>
      </div>
    </div>
  );
}
