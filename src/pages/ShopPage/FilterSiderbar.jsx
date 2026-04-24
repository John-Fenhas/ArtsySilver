import FilterBlock from "./FilterBlock";
import RangeSlider from "../../components/ui/RangeSlider";
export default function FilterSidebar() {
  return (
    <div>
      <h1>Filters</h1>
      <FilterBlock title={"Availability"}>
        <label className="flex gap-2 items-center py-1 px-3">
          <input
            type="checkbox"
            name="availability"
            className="accent-black w-3.5 h-3.5"
          />
          In Stock
        </label>
        <label className="flex gap-2 items-center py-1 px-3">
          <input
            type="checkbox"
            name="availability"
            className="accent-black w-3.5 h-3.5"
          />
          Out Of Stock
        </label>
      </FilterBlock>
      <FilterBlock title={"Price"} className={"w-full"}>
        <RangeSlider />
      </FilterBlock>
    </div>
  );
}
