import React from "react";
import CustomInput from "./CustomInput";
const CustomForm = ({ register, errors }) => {
  return (
    <form action="" className="flex flex-col gap-6 pl-5 pb-3">
      <h2 className="font-semibold text-2xl tracking-wider py-2">
        Billing Details
      </h2>
      <CustomInput
        label={"First Name"}
        register={{
          ...register("firstName", {
            required: { value: true, message: "This field is required" },
            minLength: {
              value: 3,
              message: "Name must be atleast 3 letters long",
            },
          }),
        }}
        error={
          errors.firstName && (
            <div className="text-red-800 text-xs">
              {errors.firstName.message}
            </div>
          )
        }
      />
      <CustomInput
        label={"Company Name"}
        register={{
          ...register("companyName", {
            required: { value: true, message: "This field is required" },
          }),
        }}
        error={
          errors.companyName && (
            <div className="text-red-800 text-xs">
              {errors.companyName.message}
            </div>
          )
        }
      />
      <CustomInput
        label={"Street Address"}
        register={{
          ...register("streetAddress", {
            required: { value: true, message: "This field is required" },
            minLength: { value: 10, message: "Enter a valid street address" },
          }),
        }}
        error={
          errors.streetAddress && (
            <div className="text-red-800 text-xs">
              {errors.streetAddress.message}
            </div>
          )
        }
      />
      <CustomInput
        label={"Apartment,floor,etc (optinal)"}
        required={false}
        register={{ ...register("apartment", {}) }}
      />
      <CustomInput
        label={"Town/City"}
        register={{
          ...register("town_city", {
            required: { value: true, message: "This field is required" },
          }),
        }}
        error={
          errors.town_city && (
            <div className="text-red-800 text-xs">
              {errors.town_city.message}
            </div>
          )
        }
      />
      <CustomInput
        type="number"
        label={"Phone Number"}
        register={{
          ...register("phoneNumber", {
            required: { value: true, message: "This field is required" },
            minLength: { value: 11, message: "Enter a valid phone number" },
            maxLength: { value: 15, message: "Enter a valid phone number" },
          }),
        }}
        error={
          errors.phoneNumber && (
            <div className="text-red-800 text-xs">
              {errors.phoneNumber.message}
            </div>
          )
        }
      />
      <CustomInput
        type="email"
        label={"Email Address"}
        
        register={{
          ...register("emailAddress", {
            required: { value: true, message: "This field is required" },
            pattern: {
              value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              message: 'Please enter a valid email',
          },
          }),
        }}
        error={
          errors.emailAddress && (
            <div className="text-red-800 text-xs">
              {errors.emailAddress.message}
            </div>
          )
        }
      />
    </form>
  );
};

export default CustomForm;
