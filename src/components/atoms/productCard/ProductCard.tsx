import ProductCardFooter from "./ProductCardFooter";

type Props = {
  type?: "sale" | "default" | "favorite" | "cart";
  sale?: number;
  url: string;
  name: string;
  oldPrice?: number;
  newPrice?: number;
  rating?: number;
};

const ProductCard = ({
  sale,
  name,
  url,
  newPrice,
  oldPrice,
  rating,

  type = "default",
}: Props) => {
  return (
    <div className="relative rounded-md bg-white w-72 h-96 flex flex-col gap-3 shadow-md">
      {type === "sale" && (
        <p className="absolute top-2 left-0 py-1 px-[6px] text-secondary-400 bg-secondary-100 rounded-tr-xl rounded-br-xl">
          {sale}%
        </p>
      )}
      {type === "favorite" && (
        <img
          src="/assets/icons/heart_icon.svg"
          alt=""
          className="absolute top-2 left-0 px-1"
        />
      )}
      <div className="flex justify-center items-center w-full h-auto ">
        <img
          src={url}
          alt={name}
          className="object-contain w-full h-full p-2"
        />
      </div>
      {/* gradient */}
      <div className="gradient mx-2"></div>
      {/* title */}
      <div className="pb-2 px-2">
        <h5 className="pb-4 truncate ">{name}</h5>
        <ProductCardFooter
          type={type}
          oldPrice={oldPrice}
          newPrice={newPrice}
          rating={rating}
        />
      </div>
    </div>
  );
};

export default ProductCard;
