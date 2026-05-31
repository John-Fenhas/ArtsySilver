import { Link } from "react-router-dom";
import getPrice from "../../utils/formatPrice";

export default function SearchProductCard({ product }) {
  return (
    <div className="flex gap-4">
      <div>
        <Link to={`/product/${product.category}/${product.slug}`}>
          <img
            src={product.images[0].url}
            alt={product.name}
            className="w-24 h-24 object-cover transition-opacity duration-600 group-hover/card:opacity-0 rounded-md"
          />
        </Link>
      </div>
      <div className="w-2/3 flex items-start">
        <div className="flex w-full justify-between">
          <Link to={`/product/${product.category}/${product.slug}`}>
            <span className="text-xs text-wrap max-w-2/3">{product.name}</span>
          </Link>
          {product.is_on_sale ? (
            <div className="flex flex-col">
              <span className="text-xs text-red-800">
                {getPrice(product.price_in_cents)}
              </span>
              <span className="text-xs line-through">
                {getPrice(product.old_price_in_cents)}
              </span>
            </div>
          ) : (
            <span className="text-xs">{getPrice(product.price_in_cents)}</span>
          )}
        </div>
      </div>
    </div>
  );
}
