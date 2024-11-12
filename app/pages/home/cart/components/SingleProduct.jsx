import React from "react";

const SingleProduct = () => {
  return (
    <>
      <tr>
        <td className="-indent-96 block">@</td>
      </tr>
      <tr className="bg-white border-b">
        <td className="p-4">
          <img
            src="/google.png"
            className="w-12 md:w-16 max-w-full max-h-full"
            alt="Apple Watch"
          />
        </td>
        <td className="px-2 py-4 font-semibold text-black ">Apple Watch</td>
        <td className="px-6 py-4 text-black">
          <div className="inline-flex justify-between items-center border border-black px-2 gap-2">
            <div className="font-semibold">22</div>
            <div className="flex flex-col">
              <button onClick={() => {}}>
                <img src="/arrow_up.svg" alt="up" />
              </button>
              <button onClick={() => {}}>
                <img src="/arrow_down.svg" alt="down" />
              </button>
            </div>
          </div>
        </td>
        <td className="px-6 py-4 font-semibold text-black">$599</td>
        <td className="px-6 py-4">
          <button className="font-medium text-red-600 dark:text-red-500 hover:underline">
            Remove
          </button>
        </td>
      </tr>
    </>
  );
};

export default SingleProduct;
