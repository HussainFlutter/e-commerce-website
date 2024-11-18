import React, { useState } from "react";
import { addToCart } from "@/app/actions/cart_actions";
const CounterBuyNowFavourite = ({ item }) => {
  const [counter, setCounter] = useState(1);
  return (
    <div className="flex items-center pt-6 justify-between">
      <div className="border border-black flex items-center">
        <button
          className="border-r-[1px] border-black border-0 text-3xl py-1 px-2 w-10"
          onClick={counter < 2 ? null : () => setCounter((prev) => prev - 1)}
        >
          -
        </button>
        <p className="w-12  font-semibold flex justify-center">{counter}</p>
        <button
          className="border-l-[1px] border-black border-0 text-3xl py-1 px-2 w-10 bg-red-500 text-white"
          onClick={counter > 9 ? null : () => setCounter((prev) => prev + 1)}
        >
          +
        </button>
      </div>
      <button
        className="bg-red-500 text-white rounded-md py-3 px-8"
        onClick={() => addToCart(counter, item)}
      >
        Add to Cart
      </button>
      <div className="border border-black p-1 rounded-md">
        <img src="/fill_heart.png" alt="heart" width={30} />
      </div>
    </div>
  );
};

export default CounterBuyNowFavourite;
