import ProductGrid from "./productGrid";
import ProductHeader from "./ProductHeader";

export default function ShopProductSection({
  products,
  isLoading,
  sortProducts,
}) {
  const productNumber = products.length;

  return (
    <>
      <ProductHeader
        productNumber={productNumber}
        sortProducts={sortProducts}
      />
      <ProductGrid isLoading={isLoading} products={products} />
    </>
  );
}
