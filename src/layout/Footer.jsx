import Container from "../components/ui/Container";

import facebookIcon from "../assets/facebook-icon.svg";
import instagramIcon from "../assets/instagram-icon.svg";

function Footer() {
  return (
    <footer className="bg-white">
      <Container className="pb-5 pt-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-80">
          <div>
            <p className="text-sm font-semibold mb-2">MORE</p>

            <ul className="space-y-2 text-xs text-gray-600">
              <li>
                <a href="#">FAQs</a>
              </li>
              <li>
                <a href="#">Stores</a>
              </li>
              <li>
                <a href="#">Care Guide</a>
              </li>
              <li>
                <a href="#">Our Materials</a>
              </li>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Ring Size Chart</a>
              </li>
              <li>
                <a href="#">Track Order</a>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold mb-4">POLICIES</p>

            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <a href="#">Return Policies</a>
              </li>
              <li>
                <a href="#">Exchange Policies</a>
              </li>
              <li>
                <a href="#">Shipping Policies</a>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold mb-4">FOLLOW US</p>

            <div className="flex">
              <button className="border border-gray-300 border-r-0 rounded-l-md p-2 hover:bg-gray-100 cursor-pointer">
                <img src={facebookIcon} alt="Facebook" className="h-4 w-4" />
              </button>

              <button className="border border-gray-300 rounded-r-md p-2 hover:bg-gray-100 cursor-pointer">
                <img src={instagramIcon} alt="Instagram" className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
