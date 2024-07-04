import { Steps as AntStep } from "antd";
import { cn } from "../../../utils/utils";

type Props = {
  current: number;
  iconCart: React.ReactNode;
  iconCheckout: React.ReactNode;
  iconPayment: React.ReactNode;
  className?: string;
};

const Step = ({
  current,
  iconCart,
  iconCheckout,
  iconPayment,
  className,
}: Props) => {
  return (
    <AntStep
      labelPlacement="vertical"
      current={current}
      className={cn("", className)}
      items={[
        {
          title: "Cart",
          icon: <div className="w-10 h-10">{iconCart}</div>,
        },
        {
          title: "Checkout",
          icon: <div className="w-10 h-10">{iconCheckout}</div>,
        },
        {
          title: "Payment",
          icon: <div className="w-10 h-10">{iconPayment}</div>,
        },
      ]}
    />
  );
};

export default Step;
