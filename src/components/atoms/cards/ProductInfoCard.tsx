import { Product } from "../../../types/Product";

type Props = {
  product: Product | null;
};

const ProductInfoCard = ({ product }: Props) => {
  const displayKey: (keyof Product)[] = [
    "brand",
    "screenSize",
    "processor",
    "GPU",
    "memory",
  ];
  return (
    <div className="flex flex-col gap-8 w-full">
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
          <div className="text-xl font-light">sold </div>
        </div>
        <div className="gap-8 flex flex-row ">
          <div className="flex flex-row ">
            <img src="/assets/icons/policy/shop.svg" />
            <div className="text-gray-717171 font-medium text-xs content-center">
              In Stock
            </div>
          </div>
          <div className="flex flex-row">
            <img src="/assets/icons/policy/verify.svg" />
            <div className="text-gray-717171 font-medium text-xs content-center">
              Guaranteed
            </div>
          </div>
          <div className="flex flex-row">
            <img src="/assets/icons/policy/truck.svg" />
            <div className="text-gray-717171 font-medium text-xs content-center">
              Free Delivery
            </div>
          </div>
        </div>
        <div className="flex flex-row gap-10">
          <div className="font-light text-base">Select Color</div>
        </div>
        <table className="table-auto border-spacing-2">
          {displayKey.map((key) => (
            <tr className="flex basis-2/3">
              <td className="font-medium text-sm text-gray-717171 w-4 flex">
                •
              </td>
              <td className="font-medium text-sm text-gray-717171 content-center w-full flex-1">
                {key}
              </td>
              <th className="font-medium text-sm w-full text-left flex-1">
                {product?.[key]}
              </th>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
};
export default ProductInfoCard;
