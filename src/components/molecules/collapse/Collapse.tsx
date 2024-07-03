import { Collapse as AntCollapse, CollapseProps, Divider } from "antd";

import { cn } from "../../../utils/utils";

type Props = {
  className?: string;
  label: string;
  children?: React.ReactNode;
};

const Collapse = ({ className, label, children }: Props) => {
  const items: CollapseProps["items"] = [
    {
      key: label,
      label: label,
      children: children,
    },
  ];
  return (
    <>
      <AntCollapse
        ghost
        items={items}
        expandIcon={({ isActive }) => (
          <img
            src="/assets/icons/arrow/arrow_down_icon.svg"
            className={cn("w-6 h-6", isActive ? "rotate-180" : "")}
          />
        )}
        expandIconPosition="end"
        className={cn(className)}
      />
      <Divider className="bg-gray-9E9E9E my-0" />
    </>
  );
};

export default Collapse;
