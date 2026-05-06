import { Layout } from "lucide-react";
import BreadCrumb from "../../components/ui/Breadcrumb";
import ShopLayout from "../../layout/ShopLayout";
import FilterSidebar from "./FilterSiderbar";
import ShopProductSection from "./ShopProductSection";
import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../../data/products";
import Container from "../../components/ui/Container";
export default function Shop() {
  function getRandomProducts(arr, count) {
    return [...arr].sort(() => 0.5 - Math.random()).slice(0, count);
  }

  const { data: products, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });

  return (
    <Container className="pt-16 w-10/12">
      <BreadCrumb />
      <ShopLayout>
        <FilterSidebar />
        <ShopProductSection isLoading={isLoading} products={products} />
      </ShopLayout>
    </Container>
  );
}
