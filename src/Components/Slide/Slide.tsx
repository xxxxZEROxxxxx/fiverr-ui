import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import styled from "styled-components";
import React from "react";

type PropSlide={
  children:React.ReactNode,
  SlidesToShow:number,
  SlidesToScroll:number,
  title:string,
}
const Slide = ({children,SlidesToScroll,SlidesToShow,title}:PropSlide) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: SlidesToShow,
    slidesToScroll: SlidesToScroll,

    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <div className="flex  justify-center items-center   py-24  space-x-4 ">
      <div className="w-[1200px] ">
        <h1 className="text-3xl font-bold text-gray-700 mb-6 ">
        {title}
        </h1>
        <Slider {...settings}>
          {children}
          
        </Slider>
      </div>
    </div>
  );
};
const NextArrow = styled.div`
  width: 20px;
  height: 20px;
  background-color: rgb(228, 66, 66);
  border-radius: 50%;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  &:hover {
    background-color: #ff0000;
  }
`;

const PrevArrow = styled.div`
  width: 20px;
  height: 20px;
  background-color: rgb(203, 33, 33);
  border-radius: 50%;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;

  &:hover {
    background-color: #cc0000;
  }
`;
export default Slide;
