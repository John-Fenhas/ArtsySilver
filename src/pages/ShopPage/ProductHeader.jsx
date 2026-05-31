import { useFilteredProducts } from "../../Context/FilteredProductsContext";
import SortDropDown from "./SortDropDown";

export default function ProductHeader() {
  const { processedProducts, isLoading } = useFilteredProducts();

  const productNumber = processedProducts.length;

  return (
    <div className="flex justify-between items-center pb-1.5">
      <p className="text-xs">{productNumber} Products</p>
      <SortDropDown />
    </div>
  );
}
