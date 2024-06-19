import { Button } from "antd";
import ipImg from "../../../assets/images/banner2ip.png";

const SecondBanner = () => {
  return (
    <section className="flex mx-24 h-[420px] rounded-lg gap-6 mt-12">
      <div className="basis-7/12 flex bg-gradient-to-br from-[#1975B9] via-[#1FB6CF] to-[#B0E9C9]">
        <div className="basis-7/12">
          <h4 className="ml-12 mt-6 text-2xl text-black font-inter">
            Iphone <span className="text-white">15 Series</span>
          </h4>
          <div className="ml-6 mt-14">
            <img src={ipImg} alt="" className="object-contain h-full" />
          </div>
        </div>
        <div className="basis-5/12 pr-[72px]">
          <div className="flex gap-3 mt-11 ">
            <div className="border border-black px-1 text-center rounded-lg w-12 max-h-11">
              <h6 className="font-bold">8</h6>
              <p className="-mt-2">Days</p>
            </div>
            <div className="border border-black px-1 text-center rounded-lg w-12 max-h-11">
              <h6 className="font-bold">8</h6>
              <p className="-mt-2">Days</p>
            </div>
            <div className="border border-black px-1 text-center rounded-lg w-12 max-h-11">
              <h6 className="font-bold">8</h6>
              <p className="-mt-2">Days</p>
            </div>
            <div className="border border-black px-1 text-center rounded-lg w-12 max-h-11">
              <h6 className="font-bold">8</h6>
              <p className="-mt-2">Days</p>
            </div>
          </div>
          <h5 className="mt-8 text-xl font-semibold">
            It feels good to be the first
          </h5>
          <p className="pl-3 text-gray-2D2D2D font-inter">
            Get ready for the future of smartphones.Experience innovation like
            never before. Stay tuned for the big iPhone 15 pre-sale.
          </p>
          <Button
            size="large"
            className="mt-6 bg-primary text-white block mx-auto border-none"
          >
            Register Now
          </Button>
        </div>
      </div>
      <div className="basis-5/12">ef</div>
    </section>
  );
};

export default SecondBanner;
