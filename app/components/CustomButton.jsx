import React from "react";

const CustomButton = ({title,onClick}) => {
  return (
    <button className="bg-red-500 px-6 py-3 text-white rounded-sm" onClick={onClick}>
      {title}
    </button>
  );
};

export default CustomButton;
