import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";
import MobileNavbar from "./MobileNavbar";
import MobileFooter from "./MobileFooter";

function Layout({ children, className = "" }) {
  return (
    <div className={`min-h-screen flex flex-col pt-12 ${className}`}>
      <MobileNavbar />

      <main className="flex-1">
        <Outlet />
      </main>

      <MobileFooter />
    </div>
  );
}

export default Layout;
