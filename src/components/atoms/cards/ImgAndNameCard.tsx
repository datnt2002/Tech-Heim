import { cn } from "../../../utils/utils";

type Props = {
  img: string;
  name: string;
  className?: string;
};

const ImgAndNameCard = ({ img, name, className }: Props) => {
  return (
    <div
      className={cn(
        "flex flex-col items-center w-44 rounded-lg shadow-md",
        className
      )}
    >
      <img src={img} alt={name} className="w-36 h-36 pt-2 px-4" />
      <h5 className="font-inter py-2 text-gray-2D2D2D">{name}</h5>
    </div>
  );
};

export default ImgAndNameCard;
