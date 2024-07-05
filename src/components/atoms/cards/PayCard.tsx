import { Button, Radio, RadioChangeEvent } from "antd";
import { useState } from "react";

type Props = { price?: number; percent?: number };

const PayCard = ({ price, percent }: Props) => {
  const [paymentMethod, setPaymentMethod] = useState(1);
  const [installmentPeriod, setInstallmentPeriod] = useState<
    number | undefined
  >(undefined);

  const [disable, setDisable] = useState(true);
  const periods = [3, 6, 12, 18];

  const onChange = (e: RadioChangeEvent) => {
    setPaymentMethod(e.target.value);
    console.log(paymentMethod);
    if (paymentMethod != 2) {
      setDisable(false);
    } else {
      setDisable(true);
    }
  };

  const salePrice = () => {
    const currentprice = price ?? 0;
    const currentpercent = percent ?? 0;
    return (currentprice * currentpercent) / 100;
  };

  const pricePerMonth = () => {
    const currentInstallmentPeriod = installmentPeriod ?? 0;
    const currentprice = price ?? 0;
    if (percent) {
      return (salePrice() / currentInstallmentPeriod).toFixed(2);
    }
    return (currentprice / currentInstallmentPeriod).toFixed(2);
  };

  return (
    <div className="flex flex-col gap-4 shadow-md w-fit p-6 rounded-md">
      {percent ? (
        <div className="flex flex-col gap-1">
          <div className="flex justify-between ">
            <div className="font-medium text-2xl">{salePrice()}</div>
            <div className="flex flex-row content-center gap-1 ">
              <img src="/assets/icons/discount/discount-shape.svg" />
              <div className="text-secondary text-base font-medium justify-center">
                {percent}%
              </div>
            </div>
          </div>
          <div className="flex gap-2 text-sm font-light text-neutral-500">
            <div>Last Price</div>
            <div>{price} $</div>
          </div>
        </div>
      ) : (
        <div className="font-medium text-2xl">$ {price}</div>
      )}

      <Radio.Group
        onChange={onChange}
        value={paymentMethod}
        className="flex flex-col"
      >
        <Radio value={1} className="text-base font-light dark:border-gray-44">
          Pay Now
        </Radio>
        <Radio value={2} className="font-light text-base">
          Buy in installments
        </Radio>
      </Radio.Group>
      <div className="flex flex-col gap-4">
        <div className="flex flex-row gap-2">
          {periods.map((month) => (
            <label key={month} className="flex flex-col items-center">
              <input
                type="radio"
                name="installmentPeriod"
                value={month}
                checked={installmentPeriod === month}
                onChange={() => setInstallmentPeriod(month)}
                className="hidden"
                disabled={disable}
              />
              <div
                className={`border rounded-lg px-3 py-1 cursor-pointer ${
                  disable
                    ? "bg-gray-100 "
                    : installmentPeriod === month
                    ? "bg-blue-100 border-blue-500 text-blue-700"
                    : "bg-gray-100"
                }`}
              >
                <span className="block text-lg text-center font-light">
                  {month}
                </span>
                <span className="text-gray-717171 font-medium text-xs">
                  Months
                </span>
              </div>
            </label>
          ))}
        </div>
        <div className="text-sm" hidden={disable}>
          ${pricePerMonth()}
          <span className="text-gray-717171 font-light text-xs">/Month</span>
        </div>
      </div>
      <Button type="primary" className="p-6">
        Buy Now
      </Button>
      <Button className="p-6 text-primary border-primary hover:{">
        Add to Cart
      </Button>
    </div>
  );
};

export default PayCard;
