import { Switch as AntSwitch } from "antd";
import { cn } from "../../../utils/utils";

type Props = {
  title: string;
  className?: string;
};

const Switch = ({ title, className }: Props) => {
  const onChange = (checked: boolean) => {
    console.log(`switch to ${checked}`);
  };
  return (
    <div
      className={cn("flex justify-between items-center px-4 py-3", className)}
    >
      <h5>{title}</h5>
      <AntSwitch defaultChecked onChange={onChange} />
    </div>
  );
};

export default Switch;
