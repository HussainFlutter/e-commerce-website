import React from "react";
import Rating from "react-rating";
import { calculateDiscount, averageRatingCalculator } from "@/app/lib/utils";
// import { Link } from "react-feather";
import Link from "next/link";

const ProductCard = ({ item }) => {
  
  const grayedOutPrice = (
    <p className="line-through text-gray-700">{`$${item.price}`}</p>
  );
  const discountCalculatedPrice = (
    <p className="text-red-600">
      {item.discount == true
        ? `$${calculateDiscount(item.price, item.discountPercentage)}`
        : `$${item.price}`}
    </p>
  );

  const discountPercentageDiv = (
    <div className="bg-red-500 absolute left-5 top-2 text-white rounded-md py-1 px-1 ">{`-${item.discountPercentage}%`}</div>
  );

  return (
    <Link href={`home/product-details/${item.postId}`} >
    <div className="flex flex-col pl-10 ">
      <div className="relative ">
        <img src={item.image} className="w-3/4 object-contain " />
        {item.discount == true ? discountPercentageDiv : <></>}
        <div className="py-1 px-1 right-[28%] top-0 absolute ">
          <img src="/fill_heart.png" alt="h" />
        </div>
        <div className="py-1 px-1 right-[28%] top-[15%] absolute">
          <img src="/fill_eye.png" alt="e" />
        </div>
      </div>
      <div className="flex-col font-semibold ">
        <p>{item.title}</p>
        <div className=" flex gap-3">
          {item.discount == true ? grayedOutPrice : <></>}
          {discountCalculatedPrice}
        </div>
        <div className="flex gap-2 items-center ">
          <Rating
            initialRating={averageRatingCalculator(item.rating)}
            emptySymbol={<img src="/star_grey.png" className="icon" />}
            placeholderSymbol={<img src="/star_yellow.png" className="icon" />}
            fullSymbol={<img src="/star_yellow.png" className="icon" />}
            readonly={true}
          />
          <p className="text-gray-600">({item.rating.length})</p>
        </div>
      </div>
    </div>
    </Link>
  );
};

export default ProductCard;
