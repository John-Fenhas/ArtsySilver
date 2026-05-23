import { Layout } from "lucide-react";
import BreadCrumb from "../../components/ui/Breadcrumb";
import ShopLayout from "../../layout/ShopLayout";
import FilterSidebar from "./FilterSiderbar";
import ShopProductSection from "./ShopProductSection";
import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../../data/products";
import Container from "../../components/ui/Container";
import { useState } from "react";
export default function Shop() {
  const { data: products, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });

  const [filteredProducts, setFilteredProcucts] = useState(products);

  function sortProducts(sortBy) {
    switch (sortBy) {
      case "flashSale": {
        setFilteredProcucts(products.filter((item) => item.is_on_sale));
        console.log(filteredProducts);
        break;
      }
      case "alphabetical-AZ": {
        const sortedProductsAZ = [...products].sort((a, b) => {
          const aStartsWithNumber = /^\d/.test(a.name);
          const bStartsWithNumber = /^\d/.test(b.name);

          // push numbered names to the end
          if (aStartsWithNumber && !bStartsWithNumber) return 1;
          if (!aStartsWithNumber && bStartsWithNumber) return -1;

          // normal alphabetical sorting
          return a.name.localeCompare(b.name);
        });
        setFilteredProcucts(sortedProductsAZ);

        break;
      }
      case "alphabetical-ZA": {
        const sortedProductsZA = [...products].sort((a, b) => {
          const aStartsWithNumber = /^\d/.test(a.name);
          const bStartsWithNumber = /^\d/.test(b.name);

          // still keep numbered names at the end
          if (aStartsWithNumber && !bStartsWithNumber) return 1;
          if (!aStartsWithNumber && bStartsWithNumber) return -1;

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

  return (
    <Container className="pt-16 w-10/12">
      <BreadCrumb />
      <ShopLayout>
        <FilterSidebar />
        <ShopProductSection
          isLoading={isLoading}
          products={filteredProducts}
          sortProducts={sortProducts}
        />
      </ShopLayout>
    </Container>
  );
}
