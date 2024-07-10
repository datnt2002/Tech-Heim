import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addCartItemThunk } from "../../../../redux/slice/productSlice";
import { AppDispatch } from "../../../../redux/store";

import HeartTag from "../../Tag/HeartTag";
import ProductCardFooter from "./ProductCardFooter";

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

  const handleAddToCart = () => {
    dispatch(
      addCartItemThunk({ productId: id, color, image, name, price, salePrice })
    );
  };

  return (
    <div className="relative rounded-md bg-white w-72 h-[347px] flex flex-col gap-3 shadow-md group hover:shadow-lg cursor-pointer p-4">
      {percent && (
        <p className="absolute top-2 left-0 py-1 px-[6px] text-secondary-400 bg-secondary-100 rounded-tr-xl rounded-br-xl group-hover:hidden">
          {percent}%
        </p>
      )}
      <HeartTag id={id} favorite={favorite} key={id} />
      <div
        className="flex justify-center items-center w-64 h-48"
        onClick={handleClick}
      >
        <img
          src={image}
          alt={name}
          className="object-contain w-full h-full p-2"
        />
      </div>
      {/* gradient */}
      <div className="gradient-black mx-2 group-hover:gradient"></div>
      {/* title */}
      <div className="flex-1 flex flex-col justify-between pb-2 px-2">
        <h5 className="pb-2 line-clamp-2 group-hover:text-primary">{name}</h5>
        <ProductCardFooter
          price={price}
          salePrice={salePrice}
          rating={rating}
          onClick={handleAddToCart}
        />
      </div>
    </div>
  );
};

export default ProductCard;
