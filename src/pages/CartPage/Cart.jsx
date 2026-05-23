import { useState, useEffect, useRef } from "react";
import CartProductCard from "./CartProductCard";
import Button from "../../components/ui/Button";
import { useCart } from "../../Context/CartContext";
import getPrice from "../../utils/formatPrice";

export default function Cart() {
  const {
    cart,
    isCartOpen,
    handleCartView,
    addToCart,
    decreaseItem,
    removeFromCart,
    clearCart,
  } = useCart();

  // esc button event listener to close cart slider
  useEffect(() => {
    if (!isCartOpen) return;

    const esc = (e) => e.key === "Escape" && handleCartView();
    window.addEventListener("keydown", esc);
    return () => window.removeEventListener("keydown", esc);
  }, [isCartOpen]);

  // scroll stopper for the background while cart is open
  useEffect(() => {
    if (isCartOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isCartOpen]);

  let cartItemCount = 0;
  cart.forEach((item) => {
    cartItemCount += item.quantity;
  });

  let total = 0;
  cart.forEach((item) => {
    total += item.price;
  });

  return (
    <div
      className={`fixed inset-0 z-50 transition-opacity duration-300 ${
        isCartOpen
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}
    >
      <div
        className="absolute inset-0 bg-black/45"
        onClick={() => handleCartView()}
      />
      <div
        className={`absolute top-0 right-0 h-full w-124 bg-white transition-transform duration-500 flex flex-col justify-between ${
          isCartOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="max-h-full">
          <div className="flex justify-between mb-5 border-b border-gray-300 px-6 py-3">
            <div className="flex items-center gap-1.5 ">
              <svg
                focusable="false"
                width="18"
                height="16"
                className="icon icon--header-cart   "
                viewBox="0 0 20 18"
              >
                <path
                  d="M3 1h14l1 16H2L3 1z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                ></path>
                <path
                  d="M7 4v0a3 3 0 003 3v0a3 3 0 003-3v0"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                ></path>
              </svg>
              <span className="text-base">{cartItemCount} items</span>
            </div>
            <div className="cursor-pointer" onClick={() => handleCartView()}>
              <svg
                width="24px"
                height="24px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="rotate-45"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
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
          <div className="flex flex-col gap-4 px-4 max-h-[80vh] overflow-y-auto">
            {cart.map((item) => (
              <CartProductCard
                key={item.id}
                cartItem={item}
                addToCart={addToCart}
                decreaseItem={decreaseItem}
                removeFromCart={removeFromCart}
                clearCart={clearCart}
              />
            ))}
          </div>
        </div>

        <div className="px-4 py-3">
          <div className="flex justify-between items-center pb-2.5">
            <span className="text-xs underline text-gray-500">
              Add order note
            </span>
            <span className="text-xs text-gray-500">
              Shipping calculated at checkout
            </span>
          </div>
          <Button className="w-full flex justify-center items-center gap-2 h-14">
            <svg
              focusable="false"
              width="17"
              height="17"
              className="icon icon--lock"
              viewBox="0 0 17 17"
            >
              <path
                d="M2.5 7V15H14.5V7H2.5Z"
                stroke="currentColor"
                strokeWidth="1.5"
                fill="none"
              ></path>
              <path
                d="M5.5 4C5.5 2.34315 6.84315 1 8.5 1V1C10.1569 1 11.5 2.34315 11.5 4V7H5.5V4Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              ></path>
              <circle cx="8.5" cy="11" r="0.5" stroke="currentColor"></circle>
            </svg>
            <span className="text-base font-semibold">checkout</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
