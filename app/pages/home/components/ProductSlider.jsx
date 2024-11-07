import React from "react";
import Slider from "react-slick";
import { calculateDiscount, averageRatingCalculator } from "@/app/lib/utils";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Rating from "react-rating";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <img
    className={className}
    style={{...style, background:"black", borderRadius:"20px"}}
    onClick={onClick}
      src="/right_arrow.svg"
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <img
    className={className}
    style={{...style, background:"black", borderRadius:"20px"}}
    onClick={onClick}
      src="/left_arrow.svg"
    />
    
  );
}

const ProductSlider = ({ saleProducts, title, discount = false }) => {
  const settings = {
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
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
    <div className="w-full px-10">
      <h2 className="pl-9 pb-5 font-bold text-2xl tracking-wider">{title}</h2>
      <Slider {...settings} >
        {saleProducts.map((item, index) => {
          return (
            <div key={index} className="flex flex-col pl-10 ">
              <div className="relative ">
                <img src={item.image} className="w-3/4 object-contain " />
                {discount == true ? (
                  <div className="bg-red-500 absolute left-5 top-2 text-white rounded-md py-1 px-1 ">{`-${item.discountPercentage}%`}</div>
                ) : (
                  <></>
                )}
                <div className="py-1 px-1 right-[28%] top-0 absolute ">
                  <img src="/fill_heart.png" alt="h" />
                </div>
                <div className="py-1 px-1 right-[28%] top-[15%] absolute">
                  <img src="/fill_eye.png" alt="e" />
                </div>
              </div>
              <div className="flex-col font-semibold ">
                <p className="">{item.title}</p>
                <div className=" flex gap-3">
                  {discount == true ? (
                    <p className="line-through text-gray-700">{`$${item.price}`}</p>
                  ) : (
                    <></>
                  )}
                  <p className="text-red-600">
                    {discount == true ? 
                    `$${calculateDiscount(item.price,item.discountPercentage)}`
                    :  `$${item.price}`
                  }
                    </p>
                </div>
                <div className="flex gap-2 items-center ">
                  <Rating
                    initialRating={averageRatingCalculator(item.rating)}
                    emptySymbol={<img src="/star_grey.png" className="icon" />}
                    placeholderSymbol={
                      <img src="/star_yellow.png" className="icon" />
                    }
                    fullSymbol={<img src="/star_yellow.png" className="icon" />}
                    readonly={true}
                  />
                  <p className="text-gray-600">({item.rating.length})</p>
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
