import {
  formatNumber,
  formatNumberFixOneDigit,
} from "../../../utils/formatNumber";

type Props = {
  price: number;
  salePrice?: number;
  rating: number;
};

const ProductCardFooter = ({ price, rating, salePrice }: Props) => {
  return (
    <>
      <div className="flex justify-between">
        {salePrice ? (
          <div className="flex-1">
            <p className="text-gray-717171 line-through text-xs">
              ${formatNumber(price)}
            </p>
            <p className="text-sm">${formatNumber(salePrice)}</p>
          </div>
        ) : (
          <p className="text-sm">${formatNumber(price)}</p>
        )}
        <div className="flex-1 relative">
          <div className="flex absolute bottom-0 right-0 items-center">
            <img src="/assets/icons/star_icon.svg" className="p-[2.5px]" />
            <h6 className="text-base text-primary-500 font-semibold">
              {formatNumberFixOneDigit(rating)}
            </h6>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCardFooter;
