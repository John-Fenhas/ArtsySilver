import ProductCard from "../../components/prodcut/ProductCard";
import SkeletonProductCard from "../../components/prodcut/skeletonProductCard";
import { useFilteredProducts } from "../../Context/FilteredProductsContext";
import Pagination from "./Pagination";

export default function ProductGrid() {
  const { filteredProducts, processedProducts, isLoading } =
    useFilteredProducts();

  const productNumber = processedProducts.length;

  return (
    <div className="flex flex-col items-center">
      <span className="text-xs pb-6">{productNumber} Products</span>
      <div className="grid grid-cols-2 xl:grid-cols-3 gap-2 md:gap-4 pb-12">
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
