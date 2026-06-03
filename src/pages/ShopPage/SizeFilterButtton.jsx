import { useState, useEffect } from "react";
import { useFilteredProducts } from "../../Context/FilteredProductsContext";

export default function SizeFilterButton({ size }) {
  const { updateSizeFilter, filters } = useFilteredProducts();
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (filters.size) {
      setIsActive(filters.size.includes(size));
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
    <>
      {isActive ? (
        <button
          className="border border-gray-800 bg-gray-200 rounded-2xl py-1 text-sm font-medium cursor-pointer transition-colors duration-100"
          onClick={() => {
            updateSizeFilter(size);
            handleClick();
          }}
        >
          SIZE {size}
        </button>
      ) : (
        <button
          className="border border-gray-300 rounded-2xl py-1 text-sm font-medium cursor-pointer hover:bg-gray-50 transition-colors duration-100"
          onClick={() => {
            updateSizeFilter(size);
            handleClick();
          }}
        >
          SIZE {size}
        </button>
      )}
    </>
  );
}
