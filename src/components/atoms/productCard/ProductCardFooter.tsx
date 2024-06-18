import { Button } from "antd";

type Props = {
  type?: "sale" | "default" | "favorite" | "cart";
  oldPrice?: number;
  newPrice?: number;
  rating?: number;
};

const ProductCardFooter = ({ newPrice, oldPrice, rating, type }: Props) => {
  return (
    <>
      {type === "cart" ? (
        <div className="flex justify-between">
          <div className="flex-1">
            <Button
              size="large"
              className="border-primary text-primary border-2"
            >
              <img src="/assets/icons/shopping_cart_icon.svg" className="" />
              Add to cart
            </Button>
          </div>
          <div className="flex-1 relative">
            <img
              src="/assets/icons/heart_icon.svg"
              className="absolute bottom-0 right-0"
            />
          </div>
        </div>
      ) : (
        <div className="flex justify-between">
          <div className="flex-1">
            {oldPrice && (
              <p className="text-gray-717171 line-through text-xs">
                ${oldPrice}
              </p>
            )}
            <p className="text-sm">${newPrice}</p>
          </div>
          <div className="flex-1 relative">
            <div className="flex absolute bottom-0 right-0 items-center">
              <img src="/assets/icons/star_icon.svg" className="p-[2.5px]" />
              <h6 className="text-base text-primary-500 font-semibold">
                {rating}
              </h6>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductCardFooter;
