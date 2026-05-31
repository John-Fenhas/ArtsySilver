import ProductCard from "../../components/prodcut/ProductCard";
import SkeletonProductCard from "../../components/prodcut/skeletonProductCard";
import { useFilteredProducts } from "../../Context/FilteredProductsContext";
import Pagination from "./pagination";

export default function ProductGrid() {
  const { filteredProducts, isLoading } = useFilteredProducts();

  return (
    <div className="flex flex-col items-center gap-16">
      <div className="grid grid-cols-3 gap-8">
        {isLoading
          ? Array.from({ length: 12 }).map((_, i) => (
              <SkeletonProductCard key={i} />
            ))
          : filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
      </div>
      <Pagination />
    </div>
  );
}
