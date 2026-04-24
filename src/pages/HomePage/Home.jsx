import Container from "../../components/ui/Container";
import HeroSlider from "./HeroImageSlider";
import CategoriesStonesSection from "./Categories&StonesSection";
import ProductSection from "../../components/prodcut/ProductsSection";
import categories from "../../data/categories";
import stones from "../../data/stones";
import { getProducts } from "../../data/products";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useMemo } from "react";

export default function Home() {
  function getRandomProducts(arr, count) {
    return [...arr].sort(() => 0.5 - Math.random()).slice(0, count);
  }

  const { data: products, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });
  const flashSaleProducts = useMemo(() => {
    return products ? getRandomProducts(products, 12) : [];
  }, [products]);
  const newArrivalsProducts = useMemo(() => {
    return products ? getRandomProducts(products, 12) : [];
  }, [products]);
  return (
    <>
      <HeroSlider />
      <Container>
        <ProductSection
          title="Flash Sale"
          products={flashSaleProducts}
          isLoading={isLoading}
        />

        <CategoriesStonesSection
          title={"Categories"}
          content={categories}
          classNameNext={"categories-next"}
          classNamePrev={"categories-prev"}
        />

        <ProductSection
          title="New Arrivals"
          products={newArrivalsProducts}
          isLoading={isLoading}
        />

        <CategoriesStonesSection
          title={"Shop By Gemstone"}
          content={stones}
          classNameNext={"stones-next"}
          classNamePrev={"stones-prev"}
        />
      </Container>
    </>
  );
}
