import React, { useRef } from "react";
import { Carousel } from "antd";
import { CarouselRef } from "antd/es/carousel";

import { cn } from "../../../utils/utils";

type Props = {
  children: React.ReactNode;
  className?: string;
  slideToShow?: number;
  arrows?: boolean;
  slideButton?: boolean;
};

type ArrowProps = {
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
};

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

const CarouselWithButton = ({
  children,
  slideToShow = 6,
  arrows = true,
  slideButton,
  className,
}: Props) => {
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

  const ref = useRef<CarouselRef>(null);

  return (
    <>
      <Carousel
        ref={ref}
        arrows={arrows}
        prevArrow={<NextArrow />}
        nextArrow={<PrevArrow />}
        dots={false}
        slidesToShow={slideToShow}
        infinite
        responsive={responsiveSettings}
        className={className}
      >
        {children}
      </Carousel>
      {slideButton && (
        <div className="flex justify-end mt-2 gap-1 mr-2">
          <NextArrow
            onClick={() => {
              ref.current?.prev();
            }}
            className="h-6 w-6"
          />
          <PrevArrow
            onClick={() => {
              ref.current?.next();
            }}
            className="h-6 w-6"
          />
        </div>
      )}
    </>
  );
};

export default CarouselWithButton;
