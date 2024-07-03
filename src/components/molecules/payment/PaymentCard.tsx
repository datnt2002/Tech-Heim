import { Button, Divider } from "antd";
import React from "react";
import { cn } from "../../../utils/utils";

type Props = {
  children?: React.ReactNode;
  className?: string;
};

const PaymentCard = ({ children, className }: Props) => {
  return (
    <div
      className={cn(
        "flex flex-col h-fit gap-10 border border-gray-EDEDED rounded-lg px-6 py-4 bg-white",
        className
      )}
    >
      {children}
      <div>
        <p className="flex justify-between text-sm ">
          <span className="text-gray-717171">Subtotal</span>
          <span className="text-gray-444444">$519.52</span>
        </p>

        <p className="flex justify-between text-sm ">
          <span className="text-gray-717171">Discount</span>
          <span className="text-gray-444444">$519.52</span>
        </p>
        <p className="flex justify-between text-sm ">
          <span className="text-gray-717171">Shipment cost</span>
          <span className="text-gray-444444">$519.52</span>
        </p>

        <Divider className="my-3" />
        <h6 className="flex justify-between text-gray-2D2D2D font-semibold">
          <span>Grand Total</span>
          <span>$519.52</span>
        </h6>
      </div>
      <Button size="large" type="primary">
        Proceed to checkout
      </Button>
    </div>
  );
};

export default PaymentCard;
