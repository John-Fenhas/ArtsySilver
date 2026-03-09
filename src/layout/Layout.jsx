import Footer from "./Footer";
import Navbar from "./Navbar";

function Layout({ children, className = "" }) {
  return (
    <div className={`min-h-screen flex flex-col pt-20 ${className}`}>
      <Navbar />

      <main className="flex-1">{children}</main>

      <Footer />
    </div>
  );
}

export default Layout;
