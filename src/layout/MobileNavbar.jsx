import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../Context/CartContext";
import Cart from "../pages/CartPage/Cart";
import SearchModal from "../pages/SearchPage/SearchModal";
import { useFilteredProducts } from "../Context/FilteredProductsContext";

export default function MobileNavbar() {
  const { cart, handleCartView } = useCart();
  const { toggleIsSearchOpen } = useFilteredProducts();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleIsMenuOpen() {
    setIsMenuOpen((prev) => !prev);
  }

  let cartItemCount = 0;
  cart.forEach((item) => {
    cartItemCount += item.quantity;
  });

  // esc listener
  useEffect(() => {
    if (!isMenuOpen) return;

    const esc = (e) => e.key === "Escape" && toggleIsMenuOpen();

    window.addEventListener("keydown", esc);

    return () => window.removeEventListener("keydown", esc);
  }, [isMenuOpen]);

  // stop background scroll
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <>
      <header className="flex justify-center items-center h-12 border-b border-gray-300 fixed top-0 right-0 left-0 bg-white z-50">
        <div className="flex items-center justify-between w-11/12 ">
          <button onClick={toggleIsMenuOpen}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 16 16"
              fill="#000000"
            >
              <path
                fill="#000000"
                fill-rule="evenodd"
                d="M0 3.75A.75.75 0 0 1 .75 3h14.5a.75.75 0 0 1 0 1.5H.75A.75.75 0 0 1 0 3.75ZM0 8a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H.75A.75.75 0 0 1 0 8Zm.75 3.5a.75.75 0 0 0 0 1.5h14.5a.75.75 0 0 0 0-1.5H.75Z"
                clip-rule="evenodd"
              />
            </svg>
          </button>

          {/* LOGO */}
          <Link to="/">
            <img
              src="https://rjkfpympkaiwclrnhulw.supabase.co/storage/v1/object/public/general/logo.webp"
              alt="Artsy Silver"
              className="h-8"
            />
          </Link>

          {/* CART */}

          <div className="flex gap-4 relative cursor-pointer">
            <button onClick={() => toggleIsSearchOpen()}>
              <img
                src="https://rjkfpympkaiwclrnhulw.supabase.co/storage/v1/object/public/general/search.png"
                className="h-5 w-5"
              />
            </button>
            <img
              src="https://rjkfpympkaiwclrnhulw.supabase.co/storage/v1/object/public/general/cart.png"
              className="h-5 w-5"
              onClick={() => handleCartView()}
            />

            <span className="absolute -top-2 -right-2 bg-black text-white text-[0.65rem] w-4.5 h-4.5 flex items-center justify-center rounded-full">
              {cartItemCount}
            </span>
          </div>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-50 transition-opacity duration-300 ${
          isMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className="absolute inset-0 bg-black/45"
          onClick={toggleIsMenuOpen}
        />

        <div
          className={`absolute top-0 left-0 h-full w-[80vw] md:w-[50vw] bg-white transition-transform duration-500 flex flex-col justify-between ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div>
            <div className="px-6 py-5">
              <button onClick={toggleIsMenuOpen}>
                <svg
                  width="24px"
                  height="24px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="rotate-45"
                >
                  <path
                    d="M4 12H20M12 4V20"
                    stroke="#000000"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>

            <nav className="px-6">
              <Link
                to="/"
                onClick={toggleIsMenuOpen}
                className="block py-5 border-b border-gray-200"
              >
                Home
              </Link>
              <Link
                to="/shop"
                onClick={toggleIsMenuOpen}
                className="block py-5 border-b border-gray-200"
              >
                New Arrivals
              </Link>

              <Link
                to="/shop"
                onClick={toggleIsMenuOpen}
                className="block py-5 border-b border-gray-200"
              >
                Shop
              </Link>

              <div className="py-5 border-b border-gray-200">Gift Guide</div>

              <Link
                to="/shop"
                onClick={toggleIsMenuOpen}
                className="block py-5 border-b border-gray-200"
              >
                Trending
              </Link>

              <div className="py-5 border-b border-gray-200">About</div>
            </nav>
          </div>

          {/* BOTTOM ACCOUNT */}
          <div className="border-t border-gray-200 px-6 py-4">
            <div className="flex items-center gap-3">
              <img
                src="https://rjkfpympkaiwclrnhulw.supabase.co/storage/v1/object/public/general/account.png"
                className="h-5 w-5"
              />

              <span>Account</span>
            </div>
          </div>
        </div>
      </div>

      {<Cart />}
      {<SearchModal />}
    </>
  );
}
