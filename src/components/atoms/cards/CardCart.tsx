import { Button } from "antd";
import { cn } from "../../../utils/utils";
import { useState } from "react";

type Props = {
  className?: string;
};

const CardCart = ({ className }: Props) => {
  const [count, setCount] = useState(1);
  return (
    <div className={cn("w-full h-40", className)}>
      <div className="flex shadow-md rounded-lg overflow-hidden h-full gap-2">
        <div className="w-2/5">
          <img
            className="object-cover h-full w-full"
            src="https://flowbite.com/docs/images/blog/image-1.jpg"
            alt=""
          />
        </div>

        <div className="px-5 py-2 flex flex-col justify-center w-3/5">
          <h6 className="font-semibold font-inter text-base truncate tracking-tight ">
            MacBook Pro M2 MNEJ3 2022 LLA 13.3 inch
          </h6>
          <p className="text-xs font-inter text-gray-717171 font-light">
            Black
          </p>
          <p className="text-xs font-inter text-gray-717171 font-light">
            x{count}
          </p>
          <div className="mt-3">
            <p className="text-xs font-inter text-gray-717171 font-light">
              Free Delivery
            </p>
            <p className="text-xs font-inter text-gray-717171 font-light">
              Guaranteed
            </p>
          </div>
          <div className="flex  justify-between items-end">
            <p className="text-xs">$433.00</p>
            <div className="flex">
              <img src="/assets/icons/trash_icon.svg" alt="" />
              <div className="flex items-center space-x-4 border-b border-b-gray-717171 ml-2">
                <Button
                  type="text"
                  size="small"
                  onClick={() => setCount(count - 1)}
                  className="flex items-center justify-center border-none shadow-none "
                >
                  -
                </Button>
                <span className="text-sm">{count}</span>
                <Button
                  type="text"
                  size="small"
                  onClick={() => setCount(count + 1)}
                  className="flex items-center justify-center border-none shadow-none "
                >
                  +
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardCart;
