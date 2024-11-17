"use client";
import React from "react";
import CheckoutBox from "../components/CheckoutBox";
import RadioButtons from "./components/RadioButtons";
import Coupon from "../components/Coupon";
import CustomButton from "@/app/components/CustomButton";
import CustomForm from "./components/CustomForm";
const Checkout_Screen = () => {
  const total = localStorage.getItem("total");
  return (
    <div className="flex">
      {/* Half of the screen for Forms*/}
      <div className="flex flex-col w-[50%] ">
      <CustomForm/>
      </div>
       {/* Other Half of the screen for checkout and radio button and Place Order Button*/}
      <div className="w-[50%] flex flex-col gap-3 pt-[5%]">
        <CheckoutBox total={total} checkout={true} />
        <RadioButtons />
        <Coupon />
        <CustomButton className={"w-[30%] justify-end"} title={"Place Order"} />
      </div>
    </div>
  );
};

export default Checkout_Screen;
