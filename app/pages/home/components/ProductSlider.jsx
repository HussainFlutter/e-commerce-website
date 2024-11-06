import React from "react";
import Slider from "react-slick";
import { calculateDiscount } from "@/app/lib/utils";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const ProductSlider = ({ saleProducts, title }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
  
    ],
  };
  return (
    <div className="w-full ">
      <h2 className="pl-9 pb-5 font-bold text-2xl tracking-wider">{title}</h2>
      <Slider {...settings}>
        {saleProducts.map((item, index) => {
          return (
            <div key={index} className="flex flex-col pl-10 ">
              <div className="relative">
                <img src={item.image} className="w-3/4 object-contain" />
                <div className="bg-red-500 absolute left-5 top-2 text-white rounded-md py-1 px-1 ">{`-${item.discountPercentage}%`}</div>
                <div className="py-1 px-1 right-[28%] top-0 absolute ">
                  <img src="/fill_heart.png" alt="h" />
                </div>
                <div className="py-1 px-1 right-[28%] top-[10%] absolute">
                  <img src="/fill_eye.png" alt="e" />
                </div>
              </div>
              <div className="flex-col font-semibold ">
                <p className="">{item.title}</p>
                <div className=" flex gap-3">
                  <p className="text-red-600">{`$${calculateDiscount(
                    item.price,
                    item.discountPercentage
                  )}`}</p>
                  <p className="line-through text-gray-700">{`$${item.price}`}</p>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default ProductSlider;
