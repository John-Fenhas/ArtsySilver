import ProductGrid from "./productGrid";
import ProductHeader from "./ProductHeader";

export default function ShopProductSection({ products, isLoading }) {
  return (
    <>
      <ProductHeader />
      <ProductGrid isLoading={isLoading} products={products} />
    </>
  );
}
