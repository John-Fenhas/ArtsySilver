import { createContext, useContext, useState } from "react";
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

  if (isLoading) {
    return;
  }

  const [filteredProducts, setFilteredProcucts] = useState(products);

  function sortProducts(sortBy) {
    switch (sortBy) {
      case "featured": {
        setFilteredProcucts(products);
        break;
      }
      case "flashSale": {
        setFilteredProcucts(products.filter((item) => item.is_on_sale));
        console.log(filteredProducts);
        break;
      }
      case "alphabetical-AZ": {
        const sortedProductsAZ = [...products].sort((a, b) => {
          const aStartsWithANumber = /^\d/.test(a.name);
          const bStartsWithANumber = /^\d/.test(b.name);

          // push numbered names to the end
          if (aStartsWithANumber && !bStartsWithANumber) return 1;
          if (!aStartsWithANumber && bStartsWithANumber) return -1;

          // normal alphabetical sorting
          return a.name.localeCompare(b.name);
        });
        setFilteredProcucts(sortedProductsAZ);

        break;
      }
      case "alphabetical-ZA": {
        const sortedProductsZA = [...products].sort((a, b) => {
          const aStartsWithANumber = /^\d/.test(a.name);
          const bStartsWithANumber = /^\d/.test(b.name);

          // still keep numbered names at the end
          if (aStartsWithANumber && !bStartsWithANumber) return 1;
          if (!aStartsWithANumber && bStartsWithANumber) return -1;

          // reverse alphabetical sorting
          return b.name.localeCompare(a.name);
        });
        setFilteredProcucts(sortedProductsZA);
        break;
      }
      case "priceAssending": {
        const sortedProductsHighToLow = [...products].sort(
          (a, b) => b.price_in_cents - a.price_in_cents,
        );
        setFilteredProcucts(sortedProductsHighToLow);

        break;
      }
      case "priceDescending": {
        const sortedProductsLowToHigh = [...products].sort(
          (a, b) => a.price_in_cents - b.price_in_cents,
        );
        setFilteredProcucts(sortedProductsLowToHigh);

        break;
      }
    }
  }

  function AvailabilityFilter(avail) {
    if (avail) {
      setFilteredProcucts(products.filter((item) => item.in_stock));
    }
    if (!avail) {
      setFilteredProcucts(products.filter((item) => !item.in_stock));
    }
  }
  function priceFilter(min, max) {
    setFilteredProcucts(
      products.filter((item) => max >= getPrice(item.price_in_cents) >= min),
    );
  }
  function sizeFilter(filterSize) {
    setFilteredProcucts(
      products.filter((item) => {
        const sizes = JSON.parse(item.size);
        if (sizes.includes(filterSize)) {
          return item;
        }
      }),
    );
  }
  function categoryFilter(productCategory) {
    setFilteredProcucts(
      products.filter((item) => item.category === productCategory),
    );
  }
  function clearFilters() {
    setFilteredProcucts(products);
  }

  // function filterProducts(filterBy) {
  //   switch (filterBy) {
  //     case "availability-inStock": {
  //       setFilteredProcucts(products.filter((item) => item.in_stock));
  //       break;
  //     }

  //     case "availability-outOfStock": {
  //       setFilteredProcucts(products.filter((item) => !item.in_stock));
  //       break;
  //     }

  //     case "size-6": {
  //       break;
  //     }
  //     case "size-7": {
  //       setFilteredProcucts(
  //         products.filter((item) => {
  //           const sizes = JSON.parse(item.size);
  //           if (sizes.includes(7)) {
  //             return item;
  //           }
  //         }),
  //       );
  //       break;
  //     }
  //     case "size-8": {
  //       setFilteredProcucts(
  //         products.filter((item) => {
  //           const sizes = JSON.parse(item.size);
  //           if (sizes.includes(8)) {
  //             return item;
  //           }
  //         }),
  //       );
  //       break;
  //     }
  //     case "size-9": {
  //       setFilteredProcucts(
  //         products.filter((item) => {
  //           const sizes = JSON.parse(item.size);
  //           if (sizes.includes(9)) {
  //             return item;
  //           }
  //         }),
  //       );
  //       break;
  //     }

  //     default:
  //       break;
  //   }
  // }

  return (
    <FilteredProductsContext.Provider
      value={{
        filteredProducts,
        isLoading,
        sortProducts,
        AvailabilityFilter,
        priceFilter,
        sizeFilter,
        categoryFilter,
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
