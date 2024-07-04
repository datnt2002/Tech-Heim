import React from "react";
import { useSelector } from "react-redux";
import { Button, Divider } from "antd";
import { RootState } from "../../../redux/store";
import { cn } from "../../../utils/utils";
import { formatNumber } from "../../../utils/formatNumber";

type Props = {
  children?: React.ReactNode;
  className?: string;

  buttonLabel: string;
  shipCost?: number;
  onClick?: () => void;
};

const PaymentCard = ({
  children,
  buttonLabel,
  onClick,
  className,
  shipCost = 0,
}: Props) => {
  const { cartItems } = useSelector((state: RootState) => state.product);

  const total = cartItems.reduce((res, curr) => {
    return res + curr.price * curr.quantity;
  }, 0);

  const discount = cartItems.reduce((res, curr) => {
    if (curr.salePrice) {
      return res + (curr.price - curr.salePrice) * curr.quantity;
    }
    return res;
  }, 0);

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
          <span className="text-gray-444444">${formatNumber(total)}</span>
        </p>

        <p className="flex justify-between text-sm ">
          <span className="text-gray-717171">Discount</span>
          <span className="text-gray-444444">${formatNumber(discount)}</span>
        </p>
        <p className="flex justify-between text-sm ">
          <span className="text-gray-717171">Shipment cost</span>
          <span className="text-gray-444444">${formatNumber(shipCost)}</span>
        </p>

        <Divider className="my-3" />
        <h6 className="flex justify-between text-gray-2D2D2D font-semibold">
          <span>Grand Total</span>
          <span>${formatNumber(total - discount + shipCost)}</span>
        </h6>
      </div>
      <Button size="large" type="primary" onClick={onClick}>
        {buttonLabel}
      </Button>
    </div>
  );
};

export default PaymentCard;
