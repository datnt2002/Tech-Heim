import { Button } from "antd";
import clock from "../../../assets/images/clocks.png";

const ThirdBanner = () => {
  return (
    <div className="relative bg-[#223949] h-48 md:h-[26.25rem] rounded-lg">
      <div className="absolute w-1/3 h-full bg-[#FF6951] right-0 rounded-l-[45%]"></div>
      <div className="absolute text-white font-inter ml-2 md:ml-16 mt-6 md:mt-32  md:text-center">
        <h1 className="text-base md:text-[44px]">SMART WATCH</h1>
        <p className="text-[9px] md:text-2xl font-light mt-4">
          Various designs and brands
        </p>
        <Button
          size="large"
          className="mt-8 text-black bg-[#FF6951] border-none"
        >
          view
        </Button>
      </div>
      <div className="absolute w-56 md:w-auto top-0 my-12 md:my-10 mr-4 md:mr-44 right-0">
        <img src={clock} alt="" className="object-contain w-full" />
      </div>
    </div>
  );
};

export default ThirdBanner;
