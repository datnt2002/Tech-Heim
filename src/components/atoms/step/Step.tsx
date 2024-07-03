import { Steps as AntStep } from "antd";

type Props = {};

const Step = (props: Props) => {
  return (
    <AntStep
      items={[
        {
          title: "Login",
          status: "finish",
          icon: <img src="/assets/icons/shopping/bag_happy_icon.svg" />,
        },
        {
          title: "Verification",
          status: "finish",
          icon: <img src="/assets/icons/shopping/bag_happy_icon.svg" />,
        },
        {
          title: "Pay",
          status: "process",
          icon: <img src="/assets/icons/shopping/bag_happy_icon.svg" />,
        },
      ]}
    />
  );
};

export default Step;
