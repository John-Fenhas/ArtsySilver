import { useEffect, useState } from "react";
import { useFilteredProducts } from "../../Context/FilteredProductsContext";

export default function CategoryCheckBox({ categoryName, categoryValue }) {
  const [isActive, setIsActive] = useState(false);

  const { filters, updateCategoryFilter } = useFilteredProducts();

  useEffect(() => {
    if (filters.category.includes(categoryValue)) {
      console.log(categoryValue);

      setIsActive(true);
    }
  }, []);

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
