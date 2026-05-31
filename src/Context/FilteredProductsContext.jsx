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
    stones: [],
    size: [],
    minPrice: 0,
    maxPrice: 5000,
    search: "",
  });

  //state for sorting by
  const [sortBy, setSortBy] = useState("featured");

  //state for the search feature
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

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
      result = result.filter((item) =>
        filters.category.includes(item.category),
      );
    }

    //checks if the item's matrial exists in the filter stones
    if (filters.stones.length > 0) {
      result = result.filter((item) => filters.stones.includes(item.material));
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
      console.log("Search");

      const query = filters.search.toLowerCase();
      result = result.filter((item) => item.name.toLowerCase().includes(query));
    }

    return result;
  }, [products, filters, sortBy]);

  //in stock setter fn
  function toggleInStock() {
    setFilters((prev) => ({
      ...prev,
      availability: {
        inStock: !prev.availability.inStock,
        outOfStock: prev.availability.outOfStock,
      },
    }));
  }

  //out of stock setter fn
  function toggleOutOfStock() {
    setFilters((prev) => ({
      ...prev,
      availability: {
        inStock: prev.availability.inStock,
        outOfStock: !prev.availability.outOfStock,
      },
    }));
  }

  //price setter fn
  function updatePriceFilter(min, max) {
    setFilters((prev) => ({
      ...prev,
      minPrice: min,
      maxPrice: max,
    }));
  }
  //size setter fn
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

  //category setter fn
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

  //category setter fn for the home page section. it resets the categories choosen and the category chossen on the home page is the only active one
  function categoryFilterHomePage(categoryChoosen) {
    setFilters((prev) => ({
      ...prev,
      category: [categoryChoosen],
    }));
  }

  //stones setter fn
  function updateStonesFilter(stoneToFilterBy) {
    if (filters.stones.includes(stoneToFilterBy)) {
      setFilters((prev) => ({
        ...prev,
        stones: [...prev.stones.filter((stone) => stone !== stoneToFilterBy)],
      }));
      return;
    }

    setFilters((prev) => ({
      ...prev,
      stones: [...prev.stones, stoneToFilterBy],
    }));
  }

  //stones setter fn for the home page section. it resets the stones choosen and the stone chossen on the home page is the only active one
  function stonesFilterHomePage(stoneChoosen) {
    setFilters((prev) => ({
      ...prev,
      stones: [stoneChoosen],
    }));
  }

  // setter fn to clear filters to defults
  function clearFilters() {
    setFilters({
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
    });
  }

  //sort by setter fn
  function updateSortBy(sortBy) {
    setSortBy(sortBy);
  }

  //toggle modal open dn close
  function toggleIsSearchOpen(params) {
    console.log(isSearchOpen);

    setIsSearchOpen((prev) => !prev);
  }

  //state update for the search temp results
  function updateSearchQuery(e) {
    console.log(e);

    setSearchQuery(e.target.value.toLocaleLowerCase());
  }

  //submit the query to get results in the shop page
  function submitSearchQuery() {
    setFilters((prev) => ({
      ...prev,
      search: searchQuery.toLocaleLowerCase(),
    }));
  }

  return (
    <FilteredProductsContext.Provider
      value={{
        filters,
        filteredProducts,
        isSearchOpen,
        searchQuery,
        isLoading,
        updateSortBy,
        toggleInStock,
        toggleOutOfStock,
        updatePriceFilter,
        updateSizeFilter,
        updateCategoryFilter,
        categoryFilterHomePage,
        updateStonesFilter,
        stonesFilterHomePage,
        clearFilters,
        toggleIsSearchOpen,
        updateSearchQuery,
        submitSearchQuery,
      }}
    >
      {children}
    </FilteredProductsContext.Provider>
  );
}

export function useFilteredProducts() {
  return useContext(FilteredProductsContext);
}
