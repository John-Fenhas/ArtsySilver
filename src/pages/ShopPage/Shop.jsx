import { Layout } from "lucide-react";
import BreadCrumb from "../../components/ui/Breadcrumb";
import ShopLayout from "../../layout/ShopLayout";
import FilterSidebar from "./FilterSiderbar";
import ShopProductSection from "./ShopProductSection";
import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../../data/products";
import Container from "../../components/ui/Container";
import { useState } from "react";
import { useFilteredProducts } from "../../Context/FilteredProductsContext";
import PageTransition from "../../components/ui/PageTransition";
import MobileShopLayout from "../../layout/MobileShopLayout";
import MobileFilterSidebar from "./MobileFilterSidebar";
import ProductGrid from "./ProductGrid";
import MobileSortDropDown from "./MobileSortDropDown";
export default function Shop() {
  // const { data: products, isLoading } = useQuery({
  //   queryKey: ["products"],
  //   queryFn: getProducts,
  // });
  // console.log(products);

  // const [filteredProducts, setFilteredProcucts] = useState(products);

  // function sortProducts(sortBy) {
  //   switch (sortBy) {
  //     case "featured": {
  //       setFilteredProcucts(products);
  //       break;
  //     }
  //     case "flashSale": {
  //       setFilteredProcucts(products.filter((item) => item.is_on_sale));
  //       console.log(filteredProducts);
  //       break;
  //     }
  //     case "alphabetical-AZ": {
  //       const sortedProductsAZ = [...products].sort((a, b) => {
  //         const aStartsWithANumber = /^\d/.test(a.name);
  //         const bStartsWithANumber = /^\d/.test(b.name);

  //         // push numbered names to the end
  //         if (aStartsWithANumber && !bStartsWithANumber) return 1;
  //         if (!aStartsWithANumber && bStartsWithANumber) return -1;

  //         // normal alphabetical sorting
  //         return a.name.localeCompare(b.name);
  //       });
  //       setFilteredProcucts(sortedProductsAZ);

  //       break;
  //     }
  //     case "alphabetical-ZA": {
  //       const sortedProductsZA = [...products].sort((a, b) => {
  //         const aStartsWithANumber = /^\d/.test(a.name);
  //         const bStartsWithANumber = /^\d/.test(b.name);

  //         // still keep numbered names at the end
  //         if (aStartsWithANumber && !bStartsWithANumber) return 1;
  //         if (!aStartsWithANumber && bStartsWithANumber) return -1;

  //         // reverse alphabetical sorting
  //         return b.name.localeCompare(a.name);
  //       });
  //       setFilteredProcucts(sortedProductsZA);
  //       break;
  //     }
  //     case "priceAssending": {
  //       const sortedProductsHighToLow = [...products].sort(
  //         (a, b) => b.price_in_cents - a.price_in_cents,
  //       );
  //       setFilteredProcucts(sortedProductsHighToLow);

  //       break;
  //     }
  //     case "priceDescending": {
  //       const sortedProductsLowToHigh = [...products].sort(
  //         (a, b) => a.price_in_cents - b.price_in_cents,
  //       );
  //       setFilteredProcucts(sortedProductsLowToHigh);

  //       break;
  //     }
  //   }
  // }

  return (
    <PageTransition>
      <Container className="">
        <MobileShopLayout>
          <BreadCrumb />
          <>
            <MobileFilterSidebar />
            <MobileSortDropDown />
          </>
          <ProductGrid />
        </MobileShopLayout>
      </Container>
    </PageTransition>
  );
}
