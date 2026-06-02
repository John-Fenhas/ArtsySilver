import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";
import MobileNavbar from "./MobileNavbar";
import MobileFooter from "./MobileFooter";
import useIsMobile from "../hooks/isMobile";

function Layout({ children, className = "" }) {
  const isMobile = useIsMobile();
  return (
    <div className={`min-h-screen flex flex-col pt-12 ${className}`}>
      {isMobile ? <MobileNavbar /> : <Navbar />}

      <main className="flex-1">
        <Outlet />
      </main>

      {isMobile ? <MobileFooter /> : <Footer />}
    </div>
  );
}

export default Layout;
