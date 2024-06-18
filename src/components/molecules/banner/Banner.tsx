import { Button } from "antd";
import BannerImage from "../../../assets/images/banner_img.png";

const Banner = () => {
  return (
    <div className="relative h-40 md:h-[544px] md:px-6 lg:px-28">
      <div className="absolute md:my-14">
        <h1 className="text-primary-700 mt-4 md:mb-12 md:text-[44px] lg:text-[64px]">
          Tech Heim
        </h1>
        <h3 className="font-inter font-medium mb-[54px] mt-[7px] text-[9px] md:text-xl lg:text-3xl md:mb-28">
          "Join the <span className="text-secondary">digital revolution</span>"
        </h3>
        <Button
          type="primary"
          className="bg-secondary rounded-[4.4px] text-[10px] py-[10px] px-[13px] leading-none box-content md:px-24 md:py-4 md:text-base md:rounded-lg"
        >
          Explore More
        </Button>
      </div>
      <img
        className="absolute top-0 right-0 h-full w-4/5 object-contain"
        src={BannerImage}
        alt="banner_image"
      />
    </div>
  );
};

export default Banner;
