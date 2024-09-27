import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Button, Divider } from "antd";
import { RootState } from "../../../redux/store";
import { cn } from "../../../utils/utils";
import { formatNumber } from "../../../utils/formatNumber";

type Props = {
  children?: React.ReactNode;
  className?: string;
  buttonLabel: string;
  onClick?: () => void;
  setGrandTotal?: React.Dispatch<React.SetStateAction<number>>;
  depositAmount?: number;
  shippingCost?: number;
};

const PaymentCartCard = ({
  children,
  buttonLabel,
  onClick,
  className,
  setGrandTotal,
  depositAmount = 0,
}: Props) => {
  const { shipCost } = useSelector((state: RootState) => state.product);
  const { user } = useSelector((state: RootState) => state.order);
  const cart = user?.cart;

  const total = cart?.reduce((res, curr) => {
    return res + curr.price * curr.quantity;
  }, 0);

  const discount = cart?.reduce((res, curr) => {
    if (curr.salePrice) {
      return res + (curr.price - curr.salePrice) * curr.quantity;
    }
    return res;
  }, 0);

  const shippingCost = shipCost?.price ?? 0; // Default to 0 if shipCost is null or undefined

  const grandTotal = (total as number) - (discount as number) + shippingCost;
  const remainingAmount = grandTotal - depositAmount;

  useEffect(() => {
    if (setGrandTotal) {
      setGrandTotal(grandTotal);
    }
  }, [discount, shippingCost, total, depositAmount]);

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
          <span className="text-gray-444444">
            {shippingCost ? `$${formatNumber(shippingCost)}` : `$ ${0.0}`}
          </span>
        </p>

        <Divider className="my-3" />
        <h6 className="flex justify-between text-gray-2D2D2D font-semibold">
          <span>Grand Total</span>
          <span>${formatNumber(grandTotal)}</span>
        </h6>
        {depositAmount && (
          <>
            <p className="flex justify-between text-sm ">
              <span className="text-gray-717171">Deposit Amount</span>
              <span className="text-gray-444444">
                ${formatNumber(depositAmount)}
              </span>
            </p>
            <p className="flex justify-between text-sm ">
              <span className="text-gray-717171">Remaining Amount</span>
              <span className="text-gray-444444">
                ${formatNumber(remainingAmount)}
              </span>
            </p>
          </>
        )}
      </div>
      {depositAmount && remainingAmount <= 0 ? (
        <>
          <div className="text-green-500 text-lg font-medium">
            This order is already done
          </div>
        </>
      ) : (
        <>
          <Button size="large" type="primary" onClick={onClick}>
            {buttonLabel}
          </Button>
        </>
      )}
    </div>
  );
};

export default PaymentCartCard;
