function ProductCard({ product }) {
  return (
    <div className="w-full max-w-65 mx-auto text-center">
      <div className="relative group overflow-hidden rounded-md">
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full aspect-[1/1.6] object-cover transition-opacity duration-500 group-hover:opacity-0"
        />

        <img
          src={product.images[1]}
          alt={product.name}
          className="absolute inset-0 w-full aspect-[1/1.6] object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        />

        <button
          className="
          absolute left-4 right-4 -bottom-5
          h-10
          bg-white
          border border-gray-200
          rounded-lg
          text-sm
          opacity-0
          transition-all duration-300
          group-hover:opacity-100
          group-hover:-translate-y-10
          cursor-pointer
        "
        >
          + Add To Cart
        </button>
      </div>

      <div className="mt-4 text-sm leading-relaxed">
        <p className="font-medium">{product.name}</p>

        <p className="text-gray-600">EGP {product.priceInCents}</p>
      </div>
    </div>
  );
}

export default ProductCard;
