"use client"
import React from "react";
import SingleProduct from "./SingleProduct";
const ProductsTable = () => {
    
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg h-[35vh]">
      <table className="w-full text-sm text-left rtl:text-right  overflow-y-hidden">
        <thead className=" text-black bg-gray-50 shadow-md rounded-md sticky z-10 top-0">
            <tr>
              <th scope="col" className="px-16 py-3">
              Product
              </th>
              <th scope="col" className="px-6 py-3">
              Price
              </th>
              <th scope="col" className="px-6 py-3">
                Quantity
              </th>
              <th scope="col" className="px-6 py-3">
                Subtotal
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
        </thead>
        <tbody>
        <SingleProduct/>
        <SingleProduct/>
        <SingleProduct/>
        <SingleProduct/>
        </tbody>
      </table>
    </div>
  );
};

export default ProductsTable;
