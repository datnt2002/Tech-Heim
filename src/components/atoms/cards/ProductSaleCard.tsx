import { formatNumber } from "../../../utils/formatNumber";

type Props = {
  image: string;
  name: string;
  newPrice?: number;
  oldPrice?: number;
  percent?: number;
};

const ProductSaleCard = ({
  name,
  image,
  newPrice,
  oldPrice,
  percent,
}: Props) => {
  return (
    <div className="relative rounded-md bg-white w-44 flex flex-col gap-3 shadow-md">
      {percent && (
        <p className="absolute top-2 left-0 py-1 px-[6px] text-secondary-400 bg-secondary-100 rounded-tr-xl rounded-br-xl">
          {percent}%
        </p>
      )}
      <div className="flex justify-center items-center w-44 h-36 ">
        <img
          src={image}
          alt={name}
          className="object-contain w-full h-full p-2"
        />
      </div>
      <div className="pb-2 px-2">
        <h5 className="text-xs line-clamp-2">
          NPET K10 Wired Gaming Keyboard, LED Backlit, Spill-Resistant Design
        </h5>
        <div className="flex justify-between pt-2">
          <p className="text-gray-717171 line-through text-xs">
            ${formatNumber(oldPrice)}
          </p>
          <p className="text-sm">${formatNumber(newPrice)}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductSaleCard;
