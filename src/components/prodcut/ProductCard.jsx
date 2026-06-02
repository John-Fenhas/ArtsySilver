import { Link } from "react-router-dom";
import getPrice from "../../utils/formatPrice";
import { useCart } from "../../Context/CartContext";
import useIsMobile from "../../hooks/isMobile";

export default function ProductCard({ product, className = "w-full" }) {
  const { cart, addToCart, handleCartView } = useCart();

  const productAlreadyInCart = cart.find((item) => item.id === product.id);
  const isMobile = useIsMobile();

  return (
    <div className={`${className}`}>
      <div className="relative group/card overflow-hidden rounded-md cursor-pointer w-full">
        <Link to={`/product/${product.category}/${product.slug}`}>
          <img
            src={product.images[0].url}
            alt={product.name}
            className="w-full aspect-[1/1.6] object-cover transition-opacity duration-800 group-hover/card:opacity-0"
          />

          <img
            src={product.images[1].url}
            alt={product.name}
            className="absolute inset-0 w-full aspect-[1/1.6] object-cover opacity-0 transition-opacity duration-800 group-hover/card:opacity-100"
          />
        </Link>
        {isMobile ? (
          <div
            className="absolute bottom-4 right-4 bg-gray-300 p-1 rounded-md"
            onClick={() => {
              addToCart(product.id, productAlreadyInCart?.quantity + 1);
              handleCartView(true);
            }}
          >
            <svg
              focusable="false"
              width="24"
              height="24"
              className="icon icon--quick-buy-shopping-bag   "
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                d="M14 4H5L4 20H20C19.7517 16.0273 19.375 10 19.375 10"
                stroke="currentColor"
                strokwidth="1.6"
              ></path>
              <path
                d="M9 7V7C9 8.65685 10.3431 10 12 10V10C13.6569 10 15 8.65685 15 7V7"
                stroke="currentColor"
                strokwidth="1.6"
              ></path>
              <path
                d="M20 0V8M16 4H24"
                stroke="currentColor"
                strokwidth="1.6"
              ></path>
            </svg>
          </div>
        ) : (
          <>
            <button
              className={`
            absolute left-4 right-4 -bottom-12
            h-10
            bg-white
            border border-gray-200
            rounded-lg
            text-sm
            opacity-0
            z-50
            transition-all duration-500
            group-hover/card:opacity-100
            group-hover/card:-translate-y-14
            cursor-pointer
            group-hover
            `}
              onClick={() => {
                addToCart(product.id, productAlreadyInCart?.quantity + 1);
                handleCartView(true);
              }}
            >
              + Add To Cart
            </button>
          </>
        )}
      </div>

      <div className="flex flex-col items-center mt-4 text-sm leading-relaxed w-full">
        <Link to={`/product/${product.category}/${product.slug}`}>
          <p className="font-medium text-gray-700 cursor-pointer text-center w-fit">
            {product.name}
          </p>
        </Link>

        {product.is_on_sale ? (
          <div className="flex gap-1">
            <span className="text-red-700 text-xs">
              {getPrice(product.price_in_cents)}
            </span>
            <span className="text-gray-800 line-through text-xs">
              {getPrice(product.old_price_in_cents)}
            </span>
          </div>
        ) : (
          <p className="text-gray-800 text-xs">
            {getPrice(product.price_in_cents)} EGP
          </p>
        )}
      </div>
    </div>
  );
}
