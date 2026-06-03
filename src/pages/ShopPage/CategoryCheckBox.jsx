import { useEffect, useState } from "react";
import { useFilteredProducts } from "../../Context/FilteredProductsContext";

export default function CategoryCheckBox({ categoryName, categoryValue }) {
  const { filters, updateCategoryFilter } = useFilteredProducts();
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (filters.category) {
      setIsActive(filters.category.includes(categoryValue));
    }
  }, [filters]);

  function handleClick() {
    setIsActive((prev) => !prev);
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }

  return (
    <div
      className="flex items-center cursor-pointer"
      onClick={() => {
        updateCategoryFilter(categoryValue);
        handleClick();
      }}
    >
      <input type="checkbox" className="hidden peer" />

      {isActive ? (
        <div
          className="w-3.5 h-3.5 border
                  bg-black
                  border-black
                  flex items-center justify-center"
        >
          <span className=" text-white text-xs">✓</span>
        </div>
      ) : (
        <div className="w-3.5 h-3.5 border flex items-center justify-center"></div>
      )}

      <span className="px-2 py-0.5 text-sm">{categoryName}</span>
    </div>
  );
}
