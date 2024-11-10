import React from "react";
import { calculateDiscount } from "@/app/lib/utils";
import Sizes from "./Sizes";
import CounterBuyNowFavourite from "./CounterBuyNowFavourite";
import FreeDeliveryReturnDelivery from "./FreeDeliveryReturnDelivery";
import RatingReviewsStock from "./RatingReviewsStock";
const ProductDetails = ({ product }) => {
  const grayedOutPrice = (
    <p className="line-through text-gray-700 text-xl">{`$${product.price}`}</p>
  );
  const discountCalculatedPrice = (
    <p className="text-red-600 text-xl">
      {product.discount == true
        ? `$${calculateDiscount(product.price, product.discountPercentage)}`
        : `$${product.price}`}
    </p>
  );
  const productTitle = <p className="tracking-wider font-bold text-xl">{product.title}</p>;
  const productPrice = (
    <div className=" flex gap-3">
    {product.discount == true ? grayedOutPrice : <></>}
    {discountCalculatedPrice}
  </div>
  )
  const productDescription = <div className="text-xs font-semibold pt-1">{product.desc}</div>;
  const separator =<div className="w-full h-[1px] bg-black mt-10"></div>;
  return (
    <div className="flex flex-col pl-6">
      {productTitle}
      <RatingReviewsStock product={product}/>
      {productPrice}
      {productDescription}
      {separator}
      <Sizes sizes={product.size} />
      <CounterBuyNowFavourite />
      <FreeDeliveryReturnDelivery/>
    </div>
  );
};

export default ProductDetails;
