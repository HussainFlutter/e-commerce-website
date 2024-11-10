import React from 'react'
import Rating from "react-rating";

import { averageRatingCalculator } from '@/app/lib/utils'
const RatingReviewsStock = ({product}) => {
  return (
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
  )
}

export default RatingReviewsStock
