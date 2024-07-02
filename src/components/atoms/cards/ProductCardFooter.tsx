import { Button } from "antd";
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
  const renderPrice = salePrice ? (
    <div className="flex-1">
      <p className="text-gray-717171 line-through text-xs">
        ${formatNumber(price)}
      </p>
      <p className="text-sm">${formatNumber(salePrice)}</p>
    </div>
  ) : (
    <p className="text-sm">${formatNumber(price)}</p>
  );
  return (
    <div className="group">
      <div className="flex justify-between group-hover:hidden">
        {renderPrice}
        <div className="flex-1 relative">
          <div className="flex absolute bottom-0 right-0 items-center">
            <img src="/assets/icons/like/star_icon.svg" className="p-[2.5px]" />
            <h6 className="text-base text-primary-500 font-semibold">
              {formatNumberFixOneDigit(rating)}
            </h6>
          </div>
        </div>
      </div>
      <div className="group-hover:block hidden">
        <Button
          icon={
            <img
              src="/assets/icons/shopping/shopping_cart_blue_icon.svg"
              className="w-4 h-4"
            />
          }
          className="text-primary border-primary border-2"
          size="middle"
        >
          Add to cart
        </Button>
      </div>
    </div>
  );
};

export default ProductCardFooter;
