import { Radio, RadioChangeEvent } from "antd";

type Props = {
  label?: string;
  className?: string;
  value: number;
  setValue: React.Dispatch<React.SetStateAction<number>>;
};

type RadioCardProps = {
  label: string;
  time: string;
  price: number;
};

const RadioCard = ({ label, price, time }: RadioCardProps) => {
  return (
    <div>
      <p className="text-base">{label}</p>
      <p className="text-sm font-inter text-gray-505050">
        <span className="">{time} business days</span>
        <span className="absolute right-0">${price}</span>
      </p>
    </div>
  );
};

const RadioFormField = ({ label, className, setValue, value }: Props) => {
  const onChange = (e: RadioChangeEvent) => {
    setValue(e.target.value);
  };
  return (
    <div className={className}>
      <h5 className="text-xl mb-2 font-semibold">{label}</h5>
      <Radio.Group
        className="flex flex-col gap-2"
        onChange={onChange}
        value={value}
      >
        <Radio value={0} className="relative">
          <RadioCard label="Free Shipping" time="7-30" price={0} />
        </Radio>
        <Radio value={7.5} className="relative">
          <RadioCard label="Regular Shipping" time="3-14" price={7.5} />
        </Radio>
        <Radio value={22.5} className="relative">
          <RadioCard label="Express Shipping" time="1-3" price={22.5} />
        </Radio>
      </Radio.Group>
    </div>
  );
};

export default RadioFormField;
