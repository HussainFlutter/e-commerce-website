import React from 'react'
import CustomInput from './CustomInput';
const CustomForm = () => {
  return (
    <form action="" className="flex flex-col gap-6 pl-5 pb-3">
    <h2 className="font-semibold text-2xl tracking-wider py-2">
      Billing Details
    </h2>
    <CustomInput label={"First Name"} />
    <CustomInput label={"Company Name"} />
    <CustomInput label={"Street Address"} />
    <CustomInput
      label={"Apartment,floor,etc (optinal)"}
      required={false}
    />
    <CustomInput label={"Town/City"} />
    <CustomInput type="number" label={"Phone Number"} />
    <CustomInput type="email" label={"Email Address"} />
  </form>
  )
}

export default CustomForm
