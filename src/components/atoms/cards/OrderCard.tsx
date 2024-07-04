import { formatNumber } from "../../../utils/formatNumber";
import { cn } from "../../../utils/utils";

type Props = {
  name: string;
  color: string;
  quantity: number;
  price: number;
  salePrice?: number;
  className?: string;
  image: string;
};

const OrderCard = ({
  name,
  color,
  price,
  quantity,
  className,
  salePrice,
  image,
}: Props) => {
  return (
    <div
      className={cn(
        "flex gap-2 py-2 pl-2 border-b border-b-gray-CBCBCB",
        className
      )}
    >
      <div className="basis-1/4">
        <img src={image} alt="" className="object-cover w-full h-full" />
      </div>
      <div className="flex flex-col flex-1 gap-2">
        <p className="text-xs text-gray-2D2D2D">{name}</p>
        <div>
          <p className="text-[10px] text-gray-717171">{color}</p>
          <p className="text-[10px] text-gray-717171">x{quantity}</p>
        </div>
        <p className="text-xs text-right">
          {salePrice ? (
            <>
              <span>${formatNumber(salePrice)}</span>
              <span className="text-gray-717171 ml-1">
                from ${formatNumber(price)}
              </span>
            </>
          ) : (
            <span>${formatNumber(price)}</span>
          )}
        </p>
      </div>
    </div>
  );
};

export default OrderCard;
