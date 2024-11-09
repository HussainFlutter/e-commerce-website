import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductCard from '../components/ProductCard';
import { v4 as uuidv4 } from 'uuid';

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

const ProductSlider = ({ products, title,}) => {
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
        {products.map((item) => {
          return <ProductCard key={uuidv4()} item={item} />
        })}
      </Slider>
    </div>
  );
};

export default ProductSlider;
