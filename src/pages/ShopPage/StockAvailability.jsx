import { useState } from "react";
import { useFilteredProducts } from "../../Context/FilteredProductsContext";

export default function StockAvailability() {
  const { isLoading, toggleInStock, toggleOutOfStock } = useFilteredProducts();

  return (
    <form>
      <label className="flex gap-2 items-center py-1 px-3">
        <input
          type="checkbox"
          name="availability"
          className="accent-black w-3.5 h-3.5"
          onChange={() => toggleInStock()}
        />
        In Stock
      </label>
      <label className="flex gap-2 items-center py-1 px-3">
        <input
          type="checkbox"
          name="availability"
          className="accent-black w-3.5 h-3.5"
          onChange={() => toggleOutOfStock()}
        />
        Out Of Stock
      </label>
    </form>
  );
}
