import CategoryFilter from "./CategoryFilter";
import CollapsibleBlock from "../../components/ui/CollapsibleBlock";
import RangeSlider from "./RangeSlider";
import { useFilteredProducts } from "../../Context/FilteredProductsContext";
import StockAvailability from "./StockAvailability";
import SizeFilter from "./SizeFilter";
import Button from "../../components/ui/Button";
export default function FilterSidebar() {
  const { filters, clearFilters } = useFilteredProducts();

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
    <div className="sticky top-12">
      <div className="flex justify-between border-b border-gray-200 py-4">
        <p className=" font-medium text-xl">Filters</p>
        {isDefault ? null : (
          <Button
            onClick={() => {
              clearFilters();
            }}
            className="bg-gray-200! hover:bg-gray-300! text-black! font-normal! px-4! py-2! rounded-md"
          >
            <span>Clear Filters</span>
          </Button>
        )}
      </div>
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
