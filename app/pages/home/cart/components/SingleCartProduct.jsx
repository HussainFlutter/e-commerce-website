"use client";
import React from "react";
import { calculateSubtotal } from "@/app/lib/utils";
import { delelteCartProduct } from "@/app/data_source/cart_actions";
import Image from "next/image";
import { addToCart } from "@/app/data_source/cart_actions";

const SingleCartProduct = ({ item, setRefresh }) => {
  return (
    <>
      <tr>
        <td className="-indent-96 block">@</td>
      </tr>
      <tr className="bg-white border-b">
        <td className="p-4">
          <Image
            src={`${item.image}`}
            className="w-12 md:w-16 max-w-full max-h-full h-auto"
            alt="Product Image"
            width={64}
            height={64}
          ></Image>
        </td>
        <td className="px-2 py-4 font-semibold text-black ">{item.title}</td>
        <td className="px-6 py-4 text-black">
          <div className="inline-flex justify-between items-center border border-black px-2 gap-2">
            <div className="font-semibold w-3">{item.quantity}</div>
            <div className="flex flex-col">
              <button
                onClick={async () => {
                  if (item.quantity < 9) {
                    console.log("====================================");
                    console.log("agaya");
                    console.log("====================================");
                    await addToCart(1, item);
                    setRefresh(true);
                  }
                }}
              >
                <Image
                  src="/arrow_up.svg"
                  alt="up"
                  width={15}
                  height={15}
                ></Image>
              </button>
              <button
                onClick={async () => {
                  if (item.quantity > 1) {
                    console.log("====================================");
                    console.log("agaya");
                    console.log("====================================");
                    await addToCart(-1, item);
                    setRefresh(true);
                  }
                }}
              >
                <Image
                  src="/arrow_down.svg"
                  alt="up"
                  width={15}
                  height={15}
                ></Image>
              </button>
            </div>
          </div>
        </td>
        <td className="px-6 py-4 font-semibold text-black">
          $
          {calculateSubtotal(
            item.quantity,
            item.price,
            item.discount,
            item.discountPercentage
          )}
        </td>
        <td className="px-6 py-4">
          <button
            className="font-medium text-red-600 dark:text-red-500 hover:underline"
            onClick={() => {
              delelteCartProduct(item.postId);
              setRefresh(true);
            }}
          >
            Remove
          </button>
        </td>
      </tr>
    </>
  );
};

export default SingleCartProduct;
