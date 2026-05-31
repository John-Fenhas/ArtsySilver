import CategoryFilter from "./CategoryFilter";
import CollapsibleBlock from "../../components/ui/CollapsibleBlock";
import RangeSlider from "./RangeSlider";
import { useFilteredProducts } from "../../Context/FilteredProductsContext";
import StockAvailability from "./StockAvailability";
import SizeFilter from "./SizeFilter";
export default function FilterSidebar() {
  const {
    filteredProducts,
    isLoading,
    updateSortBy,
    toggleInStock,
    toggleOutOfStock,
    updatePriceFilter,
    updateSizeFilter,
    updateCategoryFilter,
    clearFilters,
  } = useFilteredProducts();
  return (
    <div className="sticky top-12">
      <p className="border-b border-gray-200 py-4 font-medium text-xl">
        Filters
      </p>
      <CollapsibleBlock title={"Availability"}>
        <StockAvailability />
      </CollapsibleBlock>
      <CollapsibleBlock title={"Price"}>
        <RangeSlider />
      </CollapsibleBlock>
      <CollapsibleBlock title={"Size"}>
        <SizeFilter />
      </CollapsibleBlock>
      <CollapsibleBlock title={"Product Type"}>
        <CategoryFilter />
      </CollapsibleBlock>
    </div>
  );
}
