import { Button } from "antd";
import { useDispatch } from "react-redux";

import { AppDispatch } from "../../../redux/store";
import {
  deleteCartItemThunk,
  updateQuantityCartItemThunk,
} from "../../../redux/thunk/productThunk";
import { formatNumber } from "../../../utils/formatNumber";
import { cn } from "../../../utils/utils";

type Props = {
  id: string;
  className?: string;
  name: string;
  color?: string;
  price: number;
  image?: string;
  quantity: number;
};

const CardCart = ({
  id,
  name,
  color,
  price,
  image,
  quantity,
  className,
}: Props) => {
  const dispatch = useDispatch<AppDispatch>();

  const handleDeleteItem = (id: string) => {
    dispatch(deleteCartItemThunk(id));
  };

  const handleIncreaseQuantity = () => {
    dispatch(
      updateQuantityCartItemThunk({
        id: id,
        quantity: quantity + 1,
      })
    );
  };

  const handleDecreaseQuantity = () => {
    if (quantity > 0) {
      dispatch(
        updateQuantityCartItemThunk({
          id: id,
          quantity: quantity - 1,
        })
      );
    }
  };

  return (
    <div className={cn("w-full h-44", className)}>
      <div className="flex shadow-md rounded-lg overflow-hidden h-full gap-2">
        <div className="w-2/5">
          <img className="object-cover h-full w-full" src={image} alt="" />
        </div>

        <div className="px-5 py-2 flex flex-col justify-center w-3/5">
          <h6 className="font-semibold font-inter text-base line-clamp-2 pb-2">
            {name}
          </h6>
          <p className="text-xs font-inter text-gray-717171 font-light">
            {color}
          </p>
          <p className="text-xs font-inter text-gray-717171 font-light">
            x{quantity}
          </p>
          <div className="mt-3">
            <p className="text-xs flex gap-1 font-inter text-gray-717171 font-light">
              <span>
                <img src="/assets/icons/delivery/truck_icon.svg" alt="" />
              </span>
              Free Delivery
            </p>
            <p className="text-xs flex gap-1 font-inter text-gray-717171 font-light">
              <span>
                <img src="/assets/icons/essential/verify_icon.svg" alt="" />
              </span>
              Guaranteed
            </p>
          </div>
          <div className="flex  justify-between items-end">
            <p className="text-xs">${formatNumber(price)}</p>
            <div className="flex">
              <Button
                type="text"
                className="p-0"
                onClick={() => handleDeleteItem(id)}
              >
                <img src="/assets/icons/trash_icon.svg" alt="" />
              </Button>
              <div className="flex items-center space-x-4 border-b border-b-gray-717171 ml-2">
                <Button
                  type="text"
                  size="small"
                  onClick={handleDecreaseQuantity}
                  className="flex items-center justify-center border-none shadow-none "
                >
                  -
                </Button>
                <span className="text-sm">{quantity}</span>
                <Button
                  type="text"
                  size="small"
                  onClick={handleIncreaseQuantity}
                  className="flex items-center justify-center border-none shadow-none "
                >
                  +
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardCart;
