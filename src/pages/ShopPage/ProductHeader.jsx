import { useFilteredProducts } from "../../Context/FilteredProductsContext";
import SortDropDown from "./SortDropDown";

export default function ProductHeader() {
  const { filteredProducts, isLoading } = useFilteredProducts();

  const productNumber = filteredProducts.length;

  return (
    <div className="flex justify-between items-center pb-1.5">
      <p className="text-xs">{productNumber} Products</p>
      <SortDropDown />
    </div>
  );
}
