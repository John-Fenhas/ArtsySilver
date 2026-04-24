import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";

function Layout({ children, className = "" }) {
  return (
    <div className={`min-h-screen flex flex-col pt-12 ${className}`}>
      <Navbar />

      <main className="flex-1">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default Layout;
