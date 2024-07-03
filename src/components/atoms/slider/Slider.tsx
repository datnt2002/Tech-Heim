import { Slider as AntSlider, Button } from "antd";
import { cn } from "../../../utils/utils";
type Props = {
  className?: string;
  defaultValue?: number[];
};

const Slider = ({ defaultValue = [0, 6000000], className }: Props) => {
  return (
    <>
      <div
        className={cn("px-12 pt-1 pb-3 flex justify-between gap-6", className)}
      >
        <Button className="bg-transparent text-gray-B4B4B4 border-gray-717171">
          min.
        </Button>
        <Button className="bg-transparent text-gray-B4B4B4 border-gray-717171">
          max.
        </Button>
      </div>
      <AntSlider
        min={0}
        max={6000000}
        range
        defaultValue={defaultValue}
        className=""
      />
    </>
  );
};

export default Slider;
