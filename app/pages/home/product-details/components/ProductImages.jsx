import React from "react";
import Image from "next/image";
const ProductImages = ({ images }) => {
  return (
    <div className="flex gap-2">
      <div className="flex flex-col justify-between">
        <Image src={images} alt="image" width={120} height={120}></Image>
        <Image src={images} alt="image" width={120} height={120}></Image>
        <Image src={images} alt="image" width={120} height={120}></Image>
        <Image src={images} alt="image" width={120} height={120}></Image>
      </div>
      <Image src={images} alt="image" width={500} height={500}></Image>
    </div>
  );
};

export default ProductImages;
