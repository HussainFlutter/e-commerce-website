"use client";
import React, { useEffect, useMemo } from "react";
import CheckoutBox from "../components/CheckoutBox";
import RadioButtons from "./components/RadioButtons";
import Coupon from "../components/Coupon";
import CustomButton from "@/app/components/CustomButton";
import CustomForm from "./components/CustomForm";
import { useForm } from "react-hook-form";
import { placeOrder } from "@/app/actions/checkout_actions";
import {toast } from 'react-toastify';
import { redirect } from "next/navigation";

const Checkout_Screen = () => {
  const total = useMemo(() => localStorage.getItem("total"), []);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    const result = await placeOrder(data, total);
    if(result === 400)
    {
      toast.error("No items in cart");
    }
else if (result === 200)
{ 
  localStorage.setItem("total",0)
}
      redirect("/pages/home");
    }
    toast.success("Order Placed");
    redirect("/pages/home");
  };
  return (
    <div className="flex">
      {/* Half of the screen for Forms*/}
      <div className="flex flex-col w-[50%] ">
        <CustomForm register={register} errors={errors} />
      </div>
      {/* Other Half of the screen for checkout and radio button and Place Order Button*/}
      <div className="w-[50%] flex flex-col gap-3 pt-[5%]">
        <CheckoutBox total={total} checkout={true} />
        <RadioButtons register={register} errors={errors} />
        <Coupon />
        <CustomButton
          onClick={handleSubmit(onSubmit)}
          className={"w-[30%] justify-end"}
          title={"Place Order"}
        />
      </div>
    </div>
  );
};

export default Checkout_Screen;
