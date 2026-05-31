import { getProducts } from "../../data/products";
import { useQuery } from "@tanstack/react-query";
import getPrice from "../../utils/formatPrice";
import Button from "../../components/ui/Button";
import { useCart } from "../../Context/CartContext";
import { Link } from "react-router-dom";

export default function CartProductCard({ cartItem }) {
  const { data: products, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });

  const {
    cart,
    isCartOpen,
    handleCartView,
    addToCart,
    decreaseItem,
    removeFromCart,
    clearCart,
  } = useCart();

  if (isLoading) {
    return;
  }

  const product = products.find((item) => item.id === cartItem.id);

  return (
    <div className="flex gap-4">
      <div>
        <Link
          to={`/product/${product.category}/${product.slug}`}
          onClick={() => {
            handleCartView();
            window.scrollTo({
              top: 0,
              left: 0,
              behavior: "smooth",
            });
          }}
        >
          <img
            src={product.images[0].url}
            alt={product.name}
            className="w-24 h-24 object-cover transition-opacity duration-600 group-hover/card:opacity-0 rounded-md"
          />
        </Link>
      </div>
      <div className="w-2/3 flex flex-col justify-between items-start">
        <div className="flex w-full justify-between">
          <Link
            to={`/product/${product.category}/${product.slug}`}
            onClick={() => {
              handleCartView();
              window.scrollTo({
                top: 0,
                left: 0,
                behavior: "smooth",
              });
            }}
          >
            <span className="text-xs text-wrap max-w-2/3">{product.name}</span>
          </Link>
          {product.is_on_sale ? (
            <div className="flex flex-col">
              <span className="text-xs text-red-800">
                {getPrice(product.price_in_cents)}
              </span>
              <span className="text-xs line-through">
                {getPrice(product.old_price_in_cents)}
              </span>
            </div>
          ) : (
            <span className="text-xs">{getPrice(product.price_in_cents)}</span>
          )}
        </div>

        <div className="flex items-end gap-4">
          <div className="flex items-center pt-3">
            <div
              className="flex justify-center items-center h-8 w-8 text-4xl rounded-s-2xl border border-gray-300 border-r-0"
              onClick={() => decreaseItem(product.id)}
            >
              <svg
                width="12px"
                height="12px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    d="M6 12L18 12"
                    stroke="#000000"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </g>
              </svg>
            </div>
            <span className="flex justify-center items-center text-xs h-8 px-4 border-y border-gray-300">
              {cartItem.quantity}
            </span>
            <div
              className="flex justify-center items-center h-8 w-8 text-2xl rounded-e-2xl border border-gray-300 border-l-0"
              onClick={() => addToCart(product.id)}
            >
              <svg
                width="12px"
                height="12px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    d="M4 12H20M12 4V20"
                    stroke="#000000"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </g>
              </svg>
            </div>
          </div>
          <div
            className="cursor-pointer"
            onClick={() => removeFromCart(product.id)}
          >
            <span className="text-[0.6rem] underline text-gray-500">
              remove item
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
