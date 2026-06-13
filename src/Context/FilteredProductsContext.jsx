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

  //state for pagination
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12;

  //reset shop pages on filter and sort to go back to first page
  useEffect(() => {
    setCurrentPage(1);
  }, [filters, sortBy]);

  const processedProducts = useMemo(() => {
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
    if (sortBy === "priceDescending") {
      result = result.sort((a, b) => b.price_in_cents - a.price_in_cents);
    }

    //sorting price Descending
    if (sortBy === "priceAssending") {
      result = result.sort((a, b) => a.price_in_cents - b.price_in_cents);
    }

    //search query
    if (filters.search.trim()) {
      const query = filters.search.toLowerCase();
      result = result.filter((item) => item.name.toLowerCase().includes(query));
    }

    return result;
  }, [products, filters, sortBy, currentPage]);

  //total page count derived from the processedProducts after sorting and filtering
  const totalPageCount = Math.ceil(processedProducts.length / productsPerPage);

  //final filtered products paginated from processedProducts
  const filteredProducts = useMemo(() => {
    let startIndex = (currentPage - 1) * productsPerPage;
    let endIndex = startIndex + productsPerPage;

    return processedProducts.slice(startIndex, endIndex);
  }, [processedProducts]);

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
    setSearchQuery(e.target.value.toLocaleLowerCase());
  }

  //submit the query to get results in the shop page
  function submitSearchQuery() {
    setFilters((prev) => ({
      ...prev,
      search: searchQuery.toLocaleLowerCase(),
    }));
  }

  //next page button function for pagination
  function nextPage() {
    if (currentPage >= totalPageCount) {
      setCurrentPage(1);
      return;
    }
    setCurrentPage((prev) => prev + 1);
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }
  //prev page button function for pagination
  function prevPage() {
    if (currentPage <= 1) {
      setCurrentPage(totalPageCount);
      return;
    }
    setCurrentPage((prev) => prev - 1);
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }

  //go to page function for pagination
  function goToPage(pageNumber) {
    setCurrentPage(pageNumber);
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }

  return (
    <FilteredProductsContext.Provider
      value={{
        filters,
        filteredProducts,
        processedProducts,
        isSearchOpen,
        searchQuery,
        totalPageCount,
        currentPage,
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
        nextPage,
        prevPage,
        goToPage,
      }}
    >
      {children}
    </FilteredProductsContext.Provider>
  );
}

export function useFilteredProducts() {
  return useContext(FilteredProductsContext);
}
