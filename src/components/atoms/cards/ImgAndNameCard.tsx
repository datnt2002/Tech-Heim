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
      <div className="h-16 md:h-36">
        <img
          src={img}
          alt={name}
          className="object-cover aspect-square w-full h-full pt-2 px-4"
        />
      </div>
      <h5 className="text-sm md:text-base font-inter py-2 text-gray-2D2D2D">
        {name}
      </h5>
    </div>
  );
};

export default ImgAndNameCard;
