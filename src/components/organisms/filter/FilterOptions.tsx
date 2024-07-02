import { Button, Divider, Switch } from "antd";
import CollapseCheckbox from "../../molecules/collapse/Collapse";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";

const FilterOptions = () => {
  const brand = useSelector((state: RootState) => state.product.brandList);
  const onChange = (checked: boolean) => {
    console.log(`switch to ${checked}`);
  };
  return (
    <div className="flex flex-col flex-1">
      <div className="flex px-4 py-1 items-center ">
        <h5 className="text-xl flex-1 font-semibold ">Filters</h5>
        <Button type="text" size="small" className="text-primary px-12 py-3">
          Clear all
        </Button>
      </div>
      <CollapseCheckbox
        key="brand"
        label="Brand"
        options={brand.map((item) => item.name)}
        defaultValue={[]}
      />
      <CollapseCheckbox
        key="color"
        label="Color"
        options={brand.map((item) => item.name)}
        defaultValue={[]}
      />
      <div className="flex justify-between items-center px-4 py-3">
        <h5>Discount</h5>
        <Switch defaultChecked onChange={onChange} />
      </div>
      <Divider className="m-0 bg-gray-9E9E9E" />
      <CollapseCheckbox
        key="price"
        label="Price"
        options={brand.map((item) => item.name)}
        defaultValue={[]}
      />
      <CollapseCheckbox
        key="ram"
        label="RAM"
        options={brand.map((item) => item.name)}
        defaultValue={[]}
      />
      <CollapseCheckbox
        key="screen"
        label="Screen Size"
        options={brand.map((item) => item.name)}
        defaultValue={[]}
      />
      <CollapseCheckbox
        key="processor"
        label="Processor"
        options={brand.map((item) => item.name)}
        defaultValue={[]}
      />
      <CollapseCheckbox
        key="gpu"
        label="GPU Brand"
        options={brand.map((item) => item.name)}
        defaultValue={[]}
      />
      <CollapseCheckbox
        key="drive"
        label="Drive Size"
        options={brand.map((item) => item.name)}
        defaultValue={[]}
      />
    </div>
  );
};

export default FilterOptions;
