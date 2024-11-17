"use client"
import Separator from "@/app/components/Separator";
import CustomButton from "@/app/components/CustomButton";
import React from "react";
import Link from "next/link";
const CheckoutBox = ({ total, checkout=false}) => {
  return (
    <div className="pb-6">
      <div className={`flex flex-col w-96 py-5 px-4 gap-2 ${checkout == true ?"border-none":"border"}  border-black`}>
        {checkout == false && <p className="font-bold text-xl pl-2 pb-3">Cart Total</p>}
        <div className="flex justify-between">
          <p>Subtotal</p>
          <p>${total}</p>
        </div>
        <Separator />
        <div className="flex justify-between">
          <p>Shipping</p>
          <p>Free</p>
        </div>
        <Separator />
        <div className="flex justify-between">
          <p>Total</p>
          <p>${total}</p>
        </div>
        { checkout == false && <div className=" flex justify-center">
          <Link href={"cart/checkout"}>
            <CustomButton title={"Process to checkout"} onClick={()=>{
                "use client";
                localStorage.setItem("total", total);
            }} />
          </Link>
        </div>}
      </div>
    </div>
  );
};
export default CheckoutBox;
