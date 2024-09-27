import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../../redux/store";

import HeartTag from "../../Tag/HeartTag";
import ProductCardFooter from "./ProductCardFooter";

import { User } from "../../../../types/User";
import { ProductInCart } from "../../../../types/Product";
import { v4 as uuidv4 } from "uuid";
import {
  getUserDetailThunk,
  usingCartfromUserThunk,
} from "../../../../redux/slice/orderSlice";

type Props = {
  id: string;
  color: string;
  name: string;
  image: string;
  price: number;
  salePrice?: number;
  percent?: number;
  favorite?: boolean;
  rating: number;
};

const ProductCard = ({
  id,
  image,
  color,
  name,
  price,
  favorite,
  percent,
  rating,
  salePrice,
}: Props) => {
  const nav = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  const handleClick = () => {
    nav(`/products/${id}`);
  };

  const handleAddToCart = async () => {
    const userID = localStorage.getItem("token");
    if (userID) {
      const userResponse = await dispatch(getUserDetailThunk(userID)).unwrap();
      const user = userResponse.data as User;

      const cartItems: ProductInCart = {
        id: uuidv4(),
        productId: id,
        color: color,
        image: image,
        name: name,
        price: price,
        salePrice: salePrice,
        quantity: 1,
      };
      const updatedUser: User = {
        ...user,
        cart: [...(user?.cart || []), cartItems],
      };
      dispatch(
        usingCartfromUserThunk({ id: updatedUser.id, user: updatedUser })
      );
    }
  };

  return (
    <div
      className="relative rounded-md bg-white  sm:w-full
     md:w-full lg:w-full xl:w-72 h-auto flex flex-col gap-3 shadow-md group hover:shadow-lg cursor-pointer p-4 "
    >
      <>
        {percent && (
          <p className="absolute top-2 left-0 py-1 px-[6px] text-secondary-400 bg-secondary-100 rounded-tr-xl rounded-br-xl group-hover:hidden">
            {percent}%
          </p>
        )}
        <HeartTag id={id} favorite={favorite} key={id} />
        <div
          className="flex justify-center items-center w-full h-40 md:h-32 lg:h-48"
          onClick={handleClick}
        >
          <img
            src={image}
            alt={name}
            className="object-contain w-full h-full p-2"
          />
        </div>
        <div className="gradient-black mx-2"></div>
        <div className="flex-1 flex flex-col justify-between pb-2 px-2">
          <div className="pb-2 group-hover:text-primary text-sm sm:text-base lg:text-lg max-h-fit truncate ">
            {name}
          </div>
          <div className="static h-[30px] content-end">
            <ProductCardFooter
              price={price}
              salePrice={salePrice}
              rating={rating}
              onClick={handleAddToCart}
            />
          </div>
        </div>
      </>
    </div>
  );
};

export default ProductCard;
