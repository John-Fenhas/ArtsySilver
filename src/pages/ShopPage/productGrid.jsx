import ProductCard from "../../components/prodcut/ProductCard";
import SkeletonProductCard from "../../components/prodcut/skeletonProductCard";

export default function ProductGrid({ products, isLoading }) {
  return (
    <div className="grid grid-cols-3 gap-8">
      {isLoading
        ? Array.from({ length: 12 }).map((_, i) => (
            <SkeletonProductCard key={i} />
          ))
        : products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
    </div>
  );
}
