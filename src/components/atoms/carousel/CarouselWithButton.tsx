import React from "react";
import { Carousel } from "antd";

import { cn } from "../../../utils/utils";

type Props = {
  children: React.ReactNode;
};

type ArrowProps = {
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
};

const CarouselWithButton = ({ children }: Props) => {
  const responsiveSettings = [
    {
      breakpoint: 360,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 720,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
  ];

  function NextArrow(props: ArrowProps) {
    const { className, style, onClick } = props;
    return (
      <img
        src="/assets/icons/arrow/arrow_left_icon.svg"
        className={cn("rounded-full", className)}
        style={{ ...style, background: "gray", padding: 4 }}
        onClick={onClick}
      />
    );
  }

  function PrevArrow(props: ArrowProps) {
    const { className, style, onClick } = props;
    return (
      <img
        src="/assets/icons/arrow/arrow_right_icon.svg"
        className={cn("rounded-full", className)}
        style={{ ...style, background: "gray", padding: 4 }}
        onClick={onClick}
      />
    );
  }

  return (
    <>
      <Carousel
        arrows
        prevArrow={<NextArrow />}
        nextArrow={<PrevArrow />}
        dots={false}
        slidesToShow={6}
        infinite
        responsive={responsiveSettings}
      >
        {children}
      </Carousel>
    </>
  );
};

export default CarouselWithButton;
