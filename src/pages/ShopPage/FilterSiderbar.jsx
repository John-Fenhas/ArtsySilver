import CategoryCheckBox from "./CategoryCheckBox";
import FilterBlock from "./FilterBlock";
import RangeSlider from "./RangeSlider";
export default function FilterSidebar() {
  return (
    <div>
      <p className="border-b border-gray-200 py-4 font-medium text-xl">
        Filters
      </p>
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
      <FilterBlock title={"Price"}>
        <RangeSlider />
      </FilterBlock>
      <FilterBlock title={"Size"}>
        <div className="w-2/3 grid grid-cols-2 gap-2.5 m-auto">
          <button className="border border-gray-300 rounded-2xl py-1 text-sm font-medium cursor-pointer hover:bg-gray-50 transition-colors duration-100">
            SIZE 6
          </button>
          <button className="border border-gray-300 rounded-2xl py-1 text-sm font-medium cursor-pointer hover:bg-gray-50 transition-colors duration-100">
            SIZE 7
          </button>
          <button className="border border-gray-300 rounded-2xl py-1 text-sm font-medium cursor-pointer hover:bg-gray-50 transition-colors duration-100">
            SIZE 8
          </button>{" "}
          <button className="border border-gray-300 rounded-2xl py-1 text-sm font-medium cursor-pointer hover:bg-gray-50 transition-colors duration-100">
            SIZE 9
          </button>
        </div>
      </FilterBlock>
      <FilterBlock title={"Product Type"}>
        <CategoryCheckBox />
      </FilterBlock>
    </div>
  );
}
