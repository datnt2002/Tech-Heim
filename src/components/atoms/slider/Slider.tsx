import { Slider as AntSlider, Button } from "antd";
type Props = {};

const Slider = (props: Props) => {
  return (
    <>
      <div className="px-12 pt-1 pb-3 flex justify-between">
        <Button className="bg-transparent text-gray-B4B4B4 border-gray-717171">
          min.
        </Button>
        <Button className="bg-transparent text-gray-B4B4B4 border-gray-717171">
          max.
        </Button>
      </div>
      <AntSlider range defaultValue={[20, 50]} className="" />
    </>
  );
};

export default Slider;
