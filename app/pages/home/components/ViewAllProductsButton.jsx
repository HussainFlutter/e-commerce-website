import React from "react";
import Link from "next/link";
const ViewAllProductsButton = () => {
  
  return (
    <div className="flex justify-center pt-14">
      <button
        className="bg-red-500 px-6 py-3 text-white rounded-sm "
      >
        <Link href={"home/all-products"} >View All Products</Link>
      </button>
    </div>
  );
};

export default ViewAllProductsButton;
