import React from "react";
import Image from "next/image";
const RadioButtons = ({ register,errors }) => {
  return (
    <div className="flex flex-col gap-2 w-96">
      <div className="flex justify-between items-center  me-4">
        <div>
          <input
            {...register("payment", {
              required: { value: true, message: "This field is required" },
            })}
            id="Card"
            type="radio"
            value="Card"
            name="payment"
            className="w-4 h-4 text-black bg-gray-100 border-gray-300 focus:ring-black  focus:ring-2"
          />
          <label
            htmlFor="Card"
            className="ms-2 text-sm font-medium text-gray-900 "
          >
            Card
          </label>
        </div>
        <div>
          <Image
            src={"/card_names.png"}
            alt="card-names"
            width={192}
            height={1}
          ></Image>
        </div>
      </div>
      <div className="flex items-center me-4">
        <input
        {...register("payment", {
          required: { value: true, message: "This field is required" },
        })}
          id="COD"
          type="radio"
          value="COD"
          name="payment"
          className="w-4 h-4 text-black bg-gray-100 border-gray-300 focus:ring-black focus:ring-2"
        />
        <label
          htmlFor="COD"
          className="ms-2 text-sm font-medium text-gray-900 "
        >
          Cash on Delivery
        </label>
      </div>
      {errors.payment && (
            <div className="text-red-800 text-xs">
              {errors.payment.message}
            </div>
          )}
    </div>
  );
};

export default RadioButtons;
