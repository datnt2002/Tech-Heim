import { Button } from "antd";

import { Footer as AntFooter } from "antd/es/layout/layout";

const Footer = () => {
  return (
    <AntFooter className="bg-primary-900 relative font-inter px-24 text-center text-surface/75 text-white lg:text-left">
      <div className="mx-6 py-10 text-center md:text-left">
        <div className="col-span-12 grid gap-8 md:grid-cols-2 lg:grid-cols-12">
          <div className="col-span-2">
            <h6 className="mb-4 flex justify-center font-normal md:justify-start">
              Company
            </h6>
            <p className="text-gray-CBCBCB font-light mb-4">about us</p>
            <p className="text-gray-CBCBCB font-light mb-4">blogs</p>
            <p className="text-gray-CBCBCB font-light mb-4">returns</p>
            <p className="text-gray-CBCBCB font-light ">order status</p>
          </div>

          <div className="col-span-2">
            <h6 className="mb-4 flex justify-center font-normal md:justify-start">
              Info
            </h6>
            <p className="text-gray-CBCBCB font-light mb-4">How it works?</p>
            <p className="text-gray-CBCBCB font-light mb-4">our promises</p>
            <p className="text-gray-CBCBCB font-light ">FAQ</p>
          </div>

          <div className="col-span-4">
            <h6 className="mb-4 flex justify-center font-normal  md:justify-start">
              Contact us
            </h6>

            <p className="mb-4 flex items-center text-xs text-gray-CBCBCB justify-center md:justify-start">
              <span className="mr-1">
                <img
                  src="/assets/icons/location/location_icon.svg"
                  alt=""
                  className="text-xs"
                />
              </span>
              123 Main Street, Anytown,USA
            </p>
            <p className="mb-4 flex items-center text-xs text-gray-CBCBCB justify-center md:justify-start">
              <span className="mr-1">
                <img
                  src="/assets/icons/device/phone_calling_icon.svg"
                  alt=""
                  className="text-xs"
                />
              </span>
              +1 (555) 123-4567
            </p>
            <p className="mb-4 flex items-center text-xs text-gray-CBCBCB justify-center md:justify-start">
              <span className="mr-1">
                <img
                  src="/assets/icons/email/sms_icon.svg"
                  alt=""
                  className="text-xs"
                />
              </span>
              TechHeimSupport@gmail.com
            </p>
          </div>
          <div className="col-span-3">
            <h6 className="mb-4 flex justify-center font-normal  md:justify-start">
              Sign up for News and updates
            </h6>
            <Button
              type="text"
              size="large"
              className="text-gray-F9F9F9 flex justify-between border border-gray-F9F9F9 w-full hover:text-white"
            >
              <div className="flex gap-1">
                <img
                  src="/assets/icons/user/user_icon.svg"
                  className="order-first"
                />
                <span className="order-2">E-mail Address</span>
              </div>
              <img
                src="/assets/icons/arrow/arrow_right_icon.svg"
                className="order-last"
              />
            </Button>
            <div className="flex gap-5 mt-5">
              <img
                src="/assets/icons/crypto/facebook_outline_icon.svg"
                alt=""
                className="h-6 w-6"
              />
              <img
                src="/assets/icons/crypto/twitter_icon.svg"
                alt=""
                className="h-6 w-6"
              />
              <img
                src="/assets/icons/crypto/instagram_icon.svg"
                alt=""
                className="h-6 w-6"
              />
              <img
                src="/assets/icons/crypto/youtube_icon.svg"
                alt=""
                className="h-6 w-6"
              />
            </div>
          </div>
          <div className="col-span-1">
            <div className="flex flex-col justify-between h-full py-7">
              <Button className="w-9 h-9 rounded-full p-0">
                <img
                  src="/assets/icons/like/message_question_icon.svg"
                  alt=""
                  className="w-6 h-6"
                />
              </Button>
              <Button className="w-9 h-9 rounded-full p-0">
                <img
                  src="/assets/icons/arrow/arrow_up_icon.svg"
                  alt=""
                  className="w-6 h-6"
                />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* copyright */}
      <div className="bg-primary-900 p-6 flex justify-between">
        <div className="flex items-center gap-2">
          <img src="/assets/icons/content/copyright_icon.svg" alt="" />
          <p className="text-xs">2023 TechHeim</p>
        </div>
        <div className="text-xs text-gray-CBCBCB gap-12 flex justify-between">
          <p>cookie settings</p>
          <p>Privacy Policy</p>
          <p>Terms and Conditions </p>
          <p>Imprint </p>
        </div>
      </div>
    </AntFooter>
  );
};

export default Footer;
