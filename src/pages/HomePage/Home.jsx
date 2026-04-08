import Container from "../../components/ui/Container";
import products from "../../data/products";
import HeroSlider from "./HeroImageSlider";
import CategoriesStonesSection from "./Categories&StonesSection";
import ProductSection from "../../components/prodcut/ProductsSection";
import categories from "../../data/categories";
import stones from "../../data/stones";

function getRandomProducts(arr, count) {
  return [...arr].sort(() => 0.5 - Math.random()).slice(0, count);
}

export default function Home() {
  return (
    <>
      <HeroSlider />
      <Container>
        <ProductSection
          title="Flash Sale"
          products={getRandomProducts(products, 12)}
        />

        <CategoriesStonesSection title={"Categories"} content={categories} />

        <ProductSection
          title="New Arrivals"
          products={getRandomProducts(products, 12)}
        />

        <CategoriesStonesSection title={"Shop By Gemstone"} content={stones} />
      </Container>
    </>
  );
}
