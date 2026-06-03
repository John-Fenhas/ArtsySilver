import ProductCard from "../../components/prodcut/ProductCard";
import SkeletonProductCard from "../../components/prodcut/skeletonProductCard";
import Button from "../../components/ui/Button";
import { useFilteredProducts } from "../../Context/FilteredProductsContext";
import useIsMobile from "../../hooks/isMobile";
import Pagination from "./Pagination";

export default function ProductGrid() {
  const {
    filteredProducts,
    processedProducts,
    isLoading,
    filters,
    clearFilters,
  } = useFilteredProducts();

  const productNumber = processedProducts.length;

  const isMobile = useIsMobile();

  const defaultFilters = {
    availability: {
      inStock: true,
      outOfStock: true,
    },
    category: [],
    stones: [],
    size: [],
    minPrice: 0,
    maxPrice: 5000,
    search: "",
  };

  const isDefault = JSON.stringify(filters) === JSON.stringify(defaultFilters);

  return (
    <div className="flex flex-col items-center">
      {isMobile ? (
        <span className="text-xs mb-3">{productNumber} Products</span>
      ) : null}
      {isMobile && !isDefault ? (
        <Button
          onClick={() => {
            clearFilters();
          }}
          className="bg-gray-200! hover:bg-gray-300! text-black! font-normal! px-4! py-2! mb-3 rounded-md"
        >
          <span>Clear Filters</span>
        </Button>
      ) : null}
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
