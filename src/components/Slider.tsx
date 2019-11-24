import React from "react";
import { default as SlickSlider } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
};

export const Slider: React.FC = ({ children }) => {
  return <SlickSlider {...settings}>{children}</SlickSlider>;
};
