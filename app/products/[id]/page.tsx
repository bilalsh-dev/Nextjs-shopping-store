"use client";

import useProductDetail from "./useProductDetail";
import ThumbsGallary from "../_components/thumbsGallary";
import ProductDetail from "../_components/productDetail";
import dynamic from "next/dynamic";
// const ProductDetail = dynamic(() => import("../_components/productDetail"), {
//   ssr: false,
// });
const Page = ({ params }: { params: { id: string } }) => {
  const {
    data: product,
    isLoading,
    isError,
  } = useProductDetail(parseInt(params.id));
  if (isLoading) return null;
  if (isError) return <h1> Error</h1>;
  return (
    <div className="container mx-auto p-4 product-section">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="md:order-1">
          <ThumbsGallary images={product!.images} />
        </div>

        <div className="md:order-2">
          <ProductDetail product={product!} />
        </div>
      </div>
    </div>
  );
};

export default Page;
