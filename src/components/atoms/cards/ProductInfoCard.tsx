import { useState } from "react";
import { Product } from "../../../types/Product";

type Props = {
  product?: Product | null;
};

const ProductInfoCard = ({ product }: Props) => {
  const displayKey: (keyof Product)[] = [
    "brand",
    "screenSize",
    "processor",
    "GPU",
    "memory",
  ];
  const [showMore, setShowMore] = useState(false);

  const handleShowMore = () => {
    setShowMore(!showMore);
  };
  return (
    <div className="flex flex-col gap-8 w-fit ">
      <div className="flex flex-col gap-6">
        <div className="font-medium text-xl">{product?.name}</div>
        <div className="flex flex-row  gap-2">
          <div className="bg-primary-500 rounded-lg text-white p-1 flex flex-row justify-center w-fit ">
            <img src="/assets/icons/like/white_star.svg" className="p-[2.5] " />
            <div className="font-medium text-xs content-center">
              {product?.rating}
            </div>
          </div>
          <img src="/assets/icons/line/line.svg" />
          <div className="text-xl font-light">sold 123</div>
        </div>
        <div className="gap-8 flex flex-row content-center">
          <div className="flex flex-grow ">
            <img src="/assets/icons/policy/shop.svg" />
            <div className="text-gray-717171 font-medium text-xs content-center">
              In Stock
            </div>
          </div>
          <div className="flex flex-grow ">
            <img src="/assets/icons/policy/verify.svg" />
            <div className="text-gray-717171 font-medium text-xs content-center">
              Guaranteed
            </div>
          </div>
          <div className="flex flex-grow ">
            <img src="/assets/icons/policy/truck.svg" />
            <div className="text-gray-717171 font-medium text-xs content-center">
              Free Delivery
            </div>
          </div>
        </div>
        <div className="flex flex-row gap-10">
          <div className="font-light text-base">Select Color</div>
        </div>

        <div className="flex flex-col">
          <table className="table-auto mx-2">
            {displayKey
              .slice(0, showMore ? displayKey.length : 3)
              .map((key) => (
                <tr>
                  <td className="font-medium text-sm text-gray-717171">•</td>
                  <td className="font-medium text-sm text-gray-717171 content-center">
                    {key}
                  </td>
                  <th className="font-medium text-sm text-left w-fit">
                    {product?.[key]}
                  </th>
                </tr>
              ))}
          </table>
          <div className="ml-7 flex flex-row" onClick={handleShowMore}>
            <a className="font-light text-sm text-primary content-end py-1 pl-1">
              {showMore ? "Show less" : "Show more"}
            </a>
            <img src="/assets/icons/arrow/arrow_right_blue_icon.svg" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductInfoCard;
