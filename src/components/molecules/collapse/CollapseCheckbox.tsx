import { Checkbox, Collapse, CollapseProps, Divider, GetProp } from "antd";

import { cn } from "../../../utils/utils";

type Props = {
  className?: string;
  key: string;
  label: string;
  options: string[];
  defaultValue?: string[];
};

const CollapseCheckbox = ({
  defaultValue,
  key,
  className,
  label,
  options,
}: Props) => {
  const onChange: GetProp<typeof Checkbox.Group, "onChange"> = (
    checkedValues
  ) => {
    console.log("checked = ", checkedValues);
  };

  const items: CollapseProps["items"] = [
    {
      key: key,
      label: label,
      children: (
        <Checkbox.Group
          options={options}
          defaultValue={defaultValue}
          onChange={onChange}
          className="flex flex-col gap-4"
        />
      ),
    },
  ];
  return (
    <>
      <Collapse
        ghost
        items={items}
        expandIcon={({ isActive }) => (
          <img
            src="/assets/icons/arrow/arrow_down_icon.svg"
            className={cn("w-6 h-6", isActive ? "rotate-180" : "")}
          />
        )}
        expandIconPosition="end"
        className={cn("", className)}
      />
      <Divider className="bg-gray-9E9E9E my-0" />
    </>
  );
};

export default CollapseCheckbox;
