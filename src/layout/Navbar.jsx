import Container from "../components/ui/Container";

import logo from "../assets/logo.webp";
import searchIcon from "../assets/search.png";
import accountIcon from "../assets/account.png";
import cartIcon from "../assets/cart.png";

function Navbar() {
  return (
    <header className="border-b border-gray-300  fixed top-0 right-0 left-0 bg-white z-50">
      <Container className="flex items-center justify-between h-16">
        {/* LOGO */}
        <a href="/">
          <img src={logo} alt="Artsy Silver" className="h-8" />
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
            <img src={searchIcon} className="h-5 w-5" />
          </button>

          <button>
            <img src={accountIcon} className="h-5 w-5" />
          </button>

          <a href="#" className="relative">
            <img src={cartIcon} className="h-5 w-5" />

            <span className="absolute -top-2 -right-2 bg-black text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
              0
            </span>
          </a>
        </div>
      </Container>
    </header>
  );
}

export default Navbar;
