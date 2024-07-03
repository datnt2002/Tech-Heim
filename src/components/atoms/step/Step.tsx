import { Steps as AntStep } from "antd";

type Props = {
  status: "process" | "finish" | "error" | "wait";
  current: number;
};

const Step = ({ status, current }: Props) => {
  return (
    <AntStep
      labelPlacement="vertical"
      current={current}
      items={[
        {
          title: "Cart",
          status: "process",
          icon: <img src="/assets/icons/shopping/bag_happy_icon.svg" />,
        },
        {
          title: "Checkout",
          status: "finish",
          icon: <img src="/assets/icons/shopping/bag_happy_icon.svg" />,
        },
        {
          title: "Payment",
          status: "process",
          icon: <img src="/assets/icons/shopping/bag_happy_icon.svg" />,
        },
      ]}
    />
  );
};

export default Step;
