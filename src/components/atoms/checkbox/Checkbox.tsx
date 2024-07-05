import { Checkbox as AntCheckbox, GetProp } from "antd";
import { useNavigate } from "react-router-dom";
import queryString from "query-string";
// import { useDispatch } from "react-redux";
// import { AppDispatch } from "../../../redux/store";
// import { getProductThunk } from "../../../redux/slice/productSlice";

type Props = {
  options: string[] | number[];
  basePath: string;
  queryKey: string;
  defaultValue?: string[];
};

const Checkbox = ({ options, basePath, queryKey, defaultValue }: Props) => {
  const navigate = useNavigate();
  // const dispatch = useDispatch<AppDispatch>();
  const currentParams = queryString.parse(location.search);

  const onChange: GetProp<typeof AntCheckbox.Group, "onChange"> = (
    checkedValues
  ) => {
    console.log("checked = ", checkedValues);
    const newParams = {
      ...currentParams,
      [queryKey]: checkedValues.join(","),
    };
    // dispatch(getProductThunk({ discount: true, brand: checkedValues }));
    navigate({
      pathname: basePath,
      search: `?${queryString.stringify(newParams)}`,
    });
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
