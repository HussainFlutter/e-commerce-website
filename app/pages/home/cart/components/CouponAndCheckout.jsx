import React, { useMemo } from "react";
import Coupon from "./Coupon";
import CheckoutBox from "./CheckoutBox";
import { calculateSubtotal } from "@/app/lib/utils";
const CouponAndCheckout = ({ cartProducts }) => {
  const getSubtotals =  useMemo(()=>cartProducts.map((item) => {
    return calculateSubtotal(
      item.quantity,
      item.price,
      item.discount,
      item.discountPercentage
    );
  }))
  const total =  useMemo(()=>getSubtotals.reduce((a,b)=>a+b,0))
  
  return (
    <div className="flex justify-between px-6">
      <Coupon />
      <CheckoutBox total={total}/>
    </div>
  );
};

export default CouponAndCheckout;
