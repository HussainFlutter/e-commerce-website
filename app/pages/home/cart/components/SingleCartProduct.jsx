"use client"
import React,{useState} from "react";
import { calculateSubtotal } from "@/app/lib/utils";
import { delelteCartProduct } from "@/app/data_source/cart_actions";

const SingleCartProduct = ({item,setRefresh}) => {
  const [quantityCounter, setQuantityCounter] = useState(item.quantity)
  return (
    <>
      <tr>
        <td className="-indent-96 block">@</td>
      </tr>
      <tr className="bg-white border-b">
        <td className="p-4">
          <img
            src={`${item.image}`}
            className="w-12 md:w-16 max-w-full max-h-full"
            alt="Apple Watch"
          />
        </td>
        <td className="px-2 py-4 font-semibold text-black ">{item.title}</td>
        <td className="px-6 py-4 text-black">
          <div className="inline-flex justify-between items-center border border-black px-2 gap-2">
            <div className="font-semibold w-3">{quantityCounter}</div>
            <div className="flex flex-col">
              <button onClick={() => quantityCounter > 9 ? null : setQuantityCounter((prev)=>prev+1)}>
                <img src="/arrow_up.svg" alt="up" />
              </button>
              <button onClick={() => quantityCounter < 2 ? null : setQuantityCounter((prev)=>prev-1)}>
                <img src="/arrow_down.svg" alt="down" />
              </button>
            </div>
          </div>
        </td>
        <td className="px-6 py-4 font-semibold text-black">${calculateSubtotal(quantityCounter,item.price,item.discount,item.discountPercentage)}</td>
        <td className="px-6 py-4">
          <button className="font-medium text-red-600 dark:text-red-500 hover:underline" onClick={()=>{
            delelteCartProduct(item.postId)
            setRefresh(true);
          }}>
            Remove
          </button>
        </td>
      </tr>
    </>
  );
};

export default SingleCartProduct;
