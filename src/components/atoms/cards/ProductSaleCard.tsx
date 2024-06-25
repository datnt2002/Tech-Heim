import { formatNumber } from "../../../utils/formatNumber";
import HeartTag from "../Tag/HeartTag";

type Props = {
  id: string;
  image: string;
  name: string;
  newPrice?: number;
  oldPrice?: number;
  percent?: number;
  favorite?: boolean;
};

const ProductSaleCard = ({
  id,
  name,
  image,
  newPrice,
  oldPrice,
  percent,
  favorite,
}: Props) => {
  return (
    <div className="relative rounded-md bg-white w-44 flex flex-col gap-3 shadow-md group cursor-pointer">
      {percent && (
        <p className="absolute top-2 left-0 py-1 px-[6px] text-secondary-400 bg-secondary-100 rounded-tr-xl rounded-br-xl group-hover:hidden">
          {percent}%
        </p>
      )}
      <HeartTag favorite={favorite} id={id} key={id} />
      <div className="flex justify-center items-center w-44 h-36">
        <img
          src={image}
          alt={name}
          className="object-contain w-full h-full p-2"
        />
      </div>
      <div className="pb-2 px-2">
        <h5 className="text-xs line-clamp-2">{name}</h5>
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
