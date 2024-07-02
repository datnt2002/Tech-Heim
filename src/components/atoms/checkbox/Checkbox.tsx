import { Checkbox as AntCheckbox, GetProp } from "antd";

type Props = {
  options: string[];
  defaultValue?: string[];
};

const Checkbox = ({ options, defaultValue }: Props) => {
  const onChange: GetProp<typeof AntCheckbox.Group, "onChange"> = (
    checkedValues
  ) => {
    console.log("checked = ", checkedValues);
  };
  return (
    <AntCheckbox.Group
      options={options}
      defaultValue={defaultValue}
      onChange={onChange}
      className="flex flex-col gap-4"
    />
  );
};

export default Checkbox;
