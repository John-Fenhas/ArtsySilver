import { Link } from "react-router-dom";

export default function BreadCrumb({ isLoading, productData }) {
  if (isLoading) {
    return;
  }

  return (
    <div className="text-[0.68rem] sm:text-xs py-3">
      <Link to="/">
        <span className="font-semibold pr-1">Home</span>
      </Link>
      <Link to="/shop">
        <span className="opacity-80 px-0.5">/All Products</span>
      </Link>
      {productData ? (
        <Link to="/">
          <span className="opacity-80 px-0.5">/{productData.name}</span>
        </Link>
      ) : null}
    </div>
  );
}
