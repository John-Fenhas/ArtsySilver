import Container from "../components/ui/Container";

function Navbar() {
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
        <nav className="flex gap-6 text-sm font-mono font-light">
          <a href="#">New Arrivals</a>
          <a href="#">Shop</a>
          <a href="#">Gift Guide</a>
          <a href="#">Trending</a>
          <a href="#">About</a>
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

          <a href="#" className="relative">
            <img
              src="https://rjkfpympkaiwclrnhulw.supabase.co/storage/v1/object/public/general/cart.png"
              className="h-5 w-5"
            />

            <span className="absolute -top-2 -right-2 bg-black text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
              0
            </span>
          </a>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
