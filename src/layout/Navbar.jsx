import { Link } from "react-router-dom";
import { useCart } from "../Context/CartContext";
import Cart from "../pages/CartPage/Cart";

function Navbar() {
  const { cart, isCartOpen, handleCartView } = useCart();

  let cartItemCount = 0;
  cart.forEach((item) => {
    cartItemCount += item.quantity;
  });

  return (
    <header className="flex justify-center items-center h-12 border-b border-gray-300 fixed top-0 right-0 left-0 bg-white z-50">
      <div className="flex items-center justify-between mx-auto w-10/12">
        {/* LOGO */}
        <a href="/">
          <img
            src="https://rjkfpympkaiwclrnhulw.supabase.co/storage/v1/object/public/general/logo.webp"
            alt="Artsy Silver"
            className="h-8"
          />
        </a>

        {/* NAV LINKS */}
        <nav className="flex gap-6 text-sm font-light">
          <Link to="/shop">
            <p>New Arrivals</p>
          </Link>
          <Link to="/shop">
            <p>Shop</p>
          </Link>
          <Link to="/shop">
            <p>Gift Guide</p>
          </Link>
          <Link to="/shop">
            <p>Trending</p>
          </Link>
          <Link to="/shop">
            <p>About</p>
          </Link>
        </nav>

        {/* RIGHT ICONS */}
        <div className="flex items-center gap-4">
          <button>
            <img
              src="https://rjkfpympkaiwclrnhulw.supabase.co/storage/v1/object/public/general/search.png"
              className="h-5 w-5"
            />
          </button>

          <button>
            <img
              src="https://rjkfpympkaiwclrnhulw.supabase.co/storage/v1/object/public/general/account.png"
              className="h-5 w-5"
            />
          </button>
          <div
            className="relative cursor-pointer"
            onClick={() => handleCartView()}
          >
            <img
              src="https://rjkfpympkaiwclrnhulw.supabase.co/storage/v1/object/public/general/cart.png"
              className="h-5 w-5"
            />

            <span className="absolute -top-2 -right-2 bg-black text-white text-[0.65rem] w-4.5 h-4.5 flex items-center justify-center rounded-full">
              {cartItemCount}
            </span>
          </div>
        </div>
      </div>
      {<Cart />}
    </header>
  );
}

export default Navbar;
