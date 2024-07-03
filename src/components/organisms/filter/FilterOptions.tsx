import { Button, Divider } from "antd";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import CollapseCheckbox from "../../molecules/collapse/Collapse";
import Switch from "../../atoms/switch";
import Checkbox from "../../atoms/checkbox";
import Slider from "../../atoms/slider";
import { useLocation } from "react-router-dom";

const FilterOptions = () => {
  const { brandList, filterProduct } = useSelector(
    (state: RootState) => state.product
  );
  const location = useLocation();

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
        children={
          <Checkbox
            queryKey="brand"
            options={brandList.map((item) => item.name)}
            basePath={location.pathname}
          />
        }
      />
      <CollapseCheckbox
        key="color"
        label="Color"
        children={
          <Checkbox
            queryKey="color"
            options={[...new Set(filterProduct.map((item) => item.color))]}
            basePath={location.pathname}
          />
        }
      />
      <Switch title="Discount" basePath={location.pathname} />
      <Divider className="m-0 bg-gray-9E9E9E" />
      <CollapseCheckbox key="price" label="Price" children={<Slider />} />
      <CollapseCheckbox
        key="ram"
        label="RAM"
        children={
          <Checkbox
            queryKey="ram"
            options={[...new Set(filterProduct.map((item) => item.memory))]}
            basePath={location.pathname}
          />
        }
      />
      <CollapseCheckbox
        key="screen"
        label="Screen Size"
        children={
          <Checkbox
            queryKey="screen"
            options={["13 - 13.9", "14 - 14.9", "15 - 15.9", "16 - 16.9"]}
            basePath={location.pathname}
          />
        }
      />
      <CollapseCheckbox
        key="processor"
        label="Processor"
        children={
          <Checkbox
            queryKey="processor"
            options={[...new Set(filterProduct.map((item) => item.processor))]}
            basePath={location.pathname}
          />
        }
      />
      <CollapseCheckbox
        key="gpu"
        label="GPU Brand"
        children={
          <Checkbox
            queryKey="gpu"
            options={[...new Set(filterProduct.map((item) => item.GPU))]}
            basePath={location.pathname}
          />
        }
      />
      <CollapseCheckbox
        key="drive"
        label="Drive Size"
        children={
          <Checkbox
            queryKey="drive"
            options={[...new Set(filterProduct.map((item) => item.memory))]}
            basePath={location.pathname}
          />
        }
      />
    </div>
  );
};

export default FilterOptions;
