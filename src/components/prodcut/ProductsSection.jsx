import Container from "../../components/ui/Container";
import ProductCarousel from "./ProductCarousel";
import Button from "../../components/ui/Button";

export default function ProductSection({ title, isLoading, products }) {
  return (
    <section className="py-16 bg-white">
      {/* TITLE */}
      <h2 className="text-3xl text-center font-semibold mb-10">{title}</h2>

      {/* PRODUCTS */}
      <ProductCarousel products={products} isLoading={isLoading} />

      {/* BUTTON */}
      <div className="flex justify-center mt-12">
        <Button>View All</Button>
      </div>
    </section>
  );
}
