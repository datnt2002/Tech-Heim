import { Input } from "antd";
import React from "react";

type Props = {
  value?: string;
  label?: string;
  disable?: boolean;
  icon?: React.ReactNode;
  className?: string;
};

const InputFormField = ({
  value,
  label,
  disable = false,
  icon,
  className,
}: Props) => {
  return (
    <div className={className}>
      <h5 className="text-xl mb-2 font-semibold">{label}</h5>
      <Input
        size="large"
        disabled={disable}
        value={value}
        suffix={icon}
        className="!bg-gray-F6F6F6 text-sm !text-gray-2D2D2D !cursor-default"
      />
    </div>
  );
};

export default InputFormField;
