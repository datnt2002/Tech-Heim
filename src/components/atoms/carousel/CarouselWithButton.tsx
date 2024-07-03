import React, { useEffect, useRef, useState } from "react";
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
  const ref = useRef<CarouselRef>(null);
  const [slidesToShow, setSlidesToShow] = useState(slideToShow);

  useEffect(() => {
    //responsive carousel
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      switch (true) {
        case screenWidth < 640:
          setSlidesToShow(1);
          break;
        case screenWidth >= 640 && screenWidth < 768:
          setSlidesToShow(2);
          break;
        case screenWidth >= 768 && screenWidth <= 1024:
          setSlidesToShow(3);
          break;
        case screenWidth > 1300:
          setSlidesToShow(slideToShow);
          break;
        default:
          setSlidesToShow(4);
          break;
      }
    };
    // Set initial state
    handleResize();
    // Attach the event listener
    window.addEventListener("resize", handleResize);
    // Detach the event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <Carousel
        ref={ref}
        arrows={arrows}
        prevArrow={<NextArrow />}
        nextArrow={<PrevArrow />}
        dots={false}
        slidesToShow={slidesToShow}
        infinite
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
