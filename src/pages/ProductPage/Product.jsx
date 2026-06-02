import { useParams } from "react-router-dom";
import BreadCrumb from "../../components/ui/Breadcrumb";
import ProductGallary from "./ProductGallary";
import ProductInfo from "./ProductInfo";
import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../../data/products";
import GallarySkeleton from "./GallarySkeleton";
import ProductsSection from "../../components/prodcut/ProductsSection";
import PageTransition from "../../components/ui/PageTransition";

export default function ProductPage() {
  const param = useParams();

  const { data: products, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });

  const productData = products?.find((p) => p.slug === param.slug);

  const similarItems = products?.filter(
    (item) => item.category === productData.category,
  );

  return (
    <PageTransition>
      <div className="w-full px-3 lg:w-10/12 min-h-fit mx-auto">
        <BreadCrumb isLoading={isLoading} productData={productData} />
        <div className="flex flex-col lg:flex-row lg:justify-between lg:mx-auto w-11/12">
          <div className="w-full lg:w-1/2 flex justify-center pb-4 lg:pb-1">
            <ProductGallary isLoading={isLoading} productData={productData} />
          </div>
          <div className="w-full md:w-2xl h-full ">
            <ProductInfo isLoading={isLoading} productData={productData} />
          </div>
        </div>
        <ProductsSection
          title="Similar Items"
          products={similarItems}
          isLoading={isLoading}
        />
      </div>
    </PageTransition>
  );
}
