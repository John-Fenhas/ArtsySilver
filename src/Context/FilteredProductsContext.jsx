import { createContext, useContext, useEffect, useState, useMemo } from "react";
import cartReducer from "./CartReducer";
import { getProducts } from "../data/products";
import { useQuery } from "@tanstack/react-query";
import getPrice from "../utils/formatPrice";

const FilteredProductsContext = createContext();

export function FilteredProductsProvider({ children }) {
  const { data: products, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });

  //state for filters
  const [filters, setFilters] = useState({
    availability: {
      inStock: true,
      outOfStock: true,
    },
    category: [],
    size: [],
    minPrice: 0,
    maxPrice: 5000,
    search: "",
  });

  //state for sorting by
  const [sortBy, setSortBy] = useState("featured");

  const filteredProducts = useMemo(() => {
    let result = [...products];

    //checks for in stock and out of stock...   both true or both false should not filter the products
    if (filters.availability.inStock && !filters.availability.outOfStock) {
      result = result.filter((item) => !item.in_stock);
    }
    if (!filters.availability.inStock && filters.availability.outOfStock) {
      result = result.filter((item) => item.in_stock);
    }

    // checks if the item's category exists in the filter category
    if (filters.category.length > 0) {
      console.log(filters.category);
      console.log(result.map((p) => p.category));
      result = result.filter((item) =>
        filters.category.includes(item.category),
      );
    }

    // checks if the item is available in the size filter applied
    if (filters.size.length > 0) {
      result = result.filter((item) => {
        if (!item.size) return false;

        const sizes = JSON.parse(item.size);

        return sizes.some((size) => filters.size.includes(size));
      });
    }

    //always filtering based on price with defults set
    result = result.filter(
      (item) =>
        item.price_in_cents / 100 >= filters.minPrice &&
        item.price_in_cents / 100 <= filters.maxPrice,
    );

    //sorting with on_sale products first
    if (sortBy === "flashSale") {
      result = result.sort((a, b) => b.is_on_sale - a.is_on_sale);
    }

    //sorting Alphabetical A to Z with numbers at the end
    if (sortBy === "alphabetical-AZ") {
      result = result.sort((a, b) => {
        const aStartsWithANumber = /^\d/.test(a.name);
        const bStartsWithANumber = /^\d/.test(b.name);

        // push numbered names to the end
        if (aStartsWithANumber && !bStartsWithANumber) return 1;
        if (!aStartsWithANumber && bStartsWithANumber) return -1;

        // normal alphabetical sorting
        return a.name.localeCompare(b.name);
      });
    }

    //sorting Alphabetical Z to A with numbers at the end
    if (sortBy === "alphabetical-ZA") {
      result = result.sort((a, b) => {
        const aStartsWithANumber = /^\d/.test(a.name);
        const bStartsWithANumber = /^\d/.test(b.name);

        // push numbered names to the end
        if (aStartsWithANumber && !bStartsWithANumber) return 1;
        if (!aStartsWithANumber && bStartsWithANumber) return -1;

        // normal alphabetical sorting
        return b.name.localeCompare(a.name);
      });
    }

    //sorting price Assending
    if (sortBy === "priceAssending") {
      result = result.sort((a, b) => b.price_in_cents - a.price_in_cents);
    }

    //sorting price Descending
    if (sortBy === "priceDescending") {
      result = result.sort((a, b) => a.price_in_cents - b.price_in_cents);
    }

    //search query
    if (filters.search.trim()) {
      const query = filters.search.toLowerCase();
      result = result.filter((item) => item.name.toLowerCase().includes(query));
    }

    return result;
  }, [products, filters, sortBy]);

  function toggleInStock() {
    setFilters((prev) => ({
      ...prev,
      availability: {
        inStock: !prev.availability.inStock,
        outOfStock: prev.availability.outOfStock,
      },
    }));
  }

  function toggleOutOfStock() {
    setFilters((prev) => ({
      ...prev,
      availability: {
        inStock: prev.availability.inStock,
        outOfStock: !prev.availability.outOfStock,
      },
    }));
  }

  function updatePriceFilter(min, max) {
    setFilters((prev) => ({
      ...prev,
      minPrice: min,
      maxPrice: max,
    }));
  }

  function updateSizeFilter(sizeToFilterBy) {
    if (filters.size.includes(sizeToFilterBy)) {
      setFilters((prev) => ({
        ...prev,
        size: [...prev.size.filter((size) => size !== sizeToFilterBy)],
      }));
      return;
    }
    setFilters((prev) => ({
      ...prev,
      size: [...prev.size, sizeToFilterBy],
    }));
  }

  function updateCategoryFilter(categoryToFilterBy) {
    if (filters.category.includes(categoryToFilterBy)) {
      setFilters((prev) => ({
        ...prev,
        category: [
          ...prev.category.filter(
            (category) => category !== categoryToFilterBy,
          ),
        ],
      }));
      return;
    }

    setFilters((prev) => ({
      ...prev,
      category: [...prev.category, categoryToFilterBy],
    }));
  }

  function clearFilters() {
    setFilters({
      availability: {
        inStock: true,
        outOfStock: true,
      },
      category: [],
      size: [],
      minPrice: 0,
      maxPrice: 5000,
      search: "",
    });
  }

  function updateSortBy(sortBy) {
    setSortBy(sortBy);
  }

  return (
    <FilteredProductsContext.Provider
      value={{
        filteredProducts,
        isLoading,
        updateSortBy,
        toggleInStock,
        toggleOutOfStock,
        updatePriceFilter,
        updateSizeFilter,
        updateCategoryFilter,
        clearFilters,
      }}
    >
      {children}
    </FilteredProductsContext.Provider>
  );
}

export function useFilteredProducts() {
  return useContext(FilteredProductsContext);
}
