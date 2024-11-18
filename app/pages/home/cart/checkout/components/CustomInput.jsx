import React from "react";

const CustomInput = ({
  type = "text",
  label = "placeholder",
  required = true,
  register,
  error,
}) => {
  const handleKeyDown = (e) => {
    // Prevent any non-numeric character (including dots) on key press
    const key = e.key;
    if (!/[0-9]/.test(key) && key !== "Backspace" && key !== "Delete") {
      e.preventDefault();
    }
  };
  return (
    <div className="flex flex-col">
      <label className="text-gray-500 flex" htmlFor="">
        {label}
        {required == true && <p className="text-red-600">*</p>}{" "}
      </label>
      <input
        {...register}
        type={type}
        className="bg-gray-300 p-2 w-80 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
        onKeyDown={type == "number" ? handleKeyDown : ()=>{}}
        
      />
      {error}
    </div>
  );
};

export default CustomInput;
