import { Link } from "react-router-dom";

export default function BreadCrumb() {
  return (
    <div className="text-xs">
      <Link to="/">
        <span className="font-semibold pr-1">Home</span>
      </Link>

      <span className="opacity-80">/All Products</span>
    </div>
  );
}
