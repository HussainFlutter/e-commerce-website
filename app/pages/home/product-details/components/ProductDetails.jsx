import React from "react";
import Rating from "react-rating";
import { averageRatingCalculator, calculateDiscount } from "@/app/lib/utils";
import Sizes from "./Sizes";
import CounterBuyNowFavourite from "./CounterBuyNowFavourite";
import FreeDeliveryReturnDelivery from "./FreeDeliveryReturnDelivery";

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
  return (
    <div className="flex flex-col pl-6">
      <p className="tracking-wider font-bold text-xl">{product.title}</p>
      {/* Rating  Reviews and stock availibity*/}
      <div className=" flex gap-2 items-center ">
        <Rating
          initialRating={averageRatingCalculator(product.rating)}
          emptySymbol={<img src="/star_grey.png" className="icon" />}
          placeholderSymbol={<img src="/star_yellow.png" className="icon" />}
          fullSymbol={<img src="/star_yellow.png" className="icon" />}
          readonly={true}
        />
        <p className="text-gray-500">({product.rating.length} Reviews)</p>|
        <p className="text-green-400">In Stock</p>
      </div>
      {/* Rating  Reviews and stock availibity*/}
      {/* Price */}
      <div className=" flex gap-3">
        {product.discount == true ? grayedOutPrice : <></>}
        {discountCalculatedPrice}
      </div>
      {/* Price */}
      {/* Description */}
      <div className="text-xs font-semibold pt-1">{product.desc}</div>
      {/* Description */}
      <div className="w-full h-[1px] bg-black mt-10"></div>
      {/* Sizes */}
      <Sizes sizes={product.size} />
      {/* Sizes */}
      {/* Counter buttons Buy Now button Favourite icon*/}
      <CounterBuyNowFavourite />
      {/* Counter buttons Buy Now button Favourite icon*/}
      <FreeDeliveryReturnDelivery/>
    </div>
  );
};

export default ProductDetails;
