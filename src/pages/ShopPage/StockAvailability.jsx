import { useState } from "react";
import { useFilteredProducts } from "../../Context/FilteredProductsContext";

export default function StockAvailability() {
  const { filters, isLoading, toggleInStock, toggleOutOfStock } =
    useFilteredProducts();

  return (
    <form>
      <label className="flex gap-2 items-center py-1 px-3">
        <input
          type="checkbox"
          checked={!filters.availability.inStock}
          name="availability"
          className="accent-black w-3.5 h-3.5"
          onChange={() => {
            toggleInStock();
            window.scrollTo({
              top: 0,
              left: 0,
              behavior: "smooth",
            });
          }}
        />
        In Stock
      </label>
      <label className="flex gap-2 items-center py-1 px-3">
        <input
          type="checkbox"
          name="availability"
          checked={!filters.availability.outOfStock}
          className="accent-black w-3.5 h-3.5"
          onChange={() => {
            toggleOutOfStock();
            window.scrollTo({
              top: 0,
              left: 0,
              behavior: "smooth",
            });
          }}
        />
        Out Of Stock
      </label>
    </form>
  );
}
