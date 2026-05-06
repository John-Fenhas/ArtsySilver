import { useParams } from "react-router-dom";
import BreadCrumb from "../../components/ui/Breadcrumb";
import ProductGallary from "./ProductGallary";
import ProductInfo from "./ProductInfo";
import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../../data/products";
import GallarySkeleton from "./GallarySkeleton";

export default function ProductPage() {
  const param = useParams();

  const { data: products, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });

  const productData = products?.find((p) => p.slug === param.slug);

  return (
    <div className="w-10/12 min-h-fit mx-auto">
      <BreadCrumb></BreadCrumb>
      <div className="flex justify-between mx-auto w-11/12">
        <div className="w-1/2 flex justify-center">
          <ProductGallary isLoading={isLoading} productData={productData} />
        </div>
        <div className="w-2xl h-full ">
          <ProductInfo isLoading={isLoading} productData={productData} />
        </div>
      </div>
    </div>
  );
}
