"use client";
import React from "react";

const CustomButton = ({ title, onClick ,className}) => {
  return (
    <button
      className={`bg-red-500 px-6 py-3 text-white rounded-sm ${className}`}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default CustomButton;
