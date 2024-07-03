import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Divider } from "antd";
import { cn } from "../../../utils/utils";

type Props = {
  children?: React.ReactNode;
  className?: string;
  href: string;
  buttonLabel: string;
};

const PaymentCard = ({ children, buttonLabel, href, className }: Props) => {
  const navigate = useNavigate();
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
      <Button size="large" type="primary" onClick={() => navigate(href)}>
        {buttonLabel}
      </Button>
    </div>
  );
};

export default PaymentCard;
