"use client";
import React, { useMemo } from "react";
import CheckoutBox from "../components/CheckoutBox";
import RadioButtons from "./components/RadioButtons";
import Coupon from "../components/Coupon";
import CustomButton from "@/app/components/CustomButton";
import CustomForm from "./components/CustomForm";
import { useForm } from "react-hook-form";
import { placeOrder } from "@/app/actions/checkout_actions";
const Checkout_Screen = () => {
  const total = useMemo(() => localStorage.getItem("total"), []);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    await placeOrder(data, total);
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
