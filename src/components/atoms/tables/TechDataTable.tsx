import { Product } from "../../../types/Product";

type Props = {
  product: Product | null;
};

const TechDataTable = ({ product }: Props) => {
  const displayKey: (keyof Product)[] = [
    "id",
    "name",
    "color",
    "categoryId",
    "brand",
    "screenSize",
    "processor",
    "GPU",
    "memory",
  ];
  return (
    <>
      <table className="w-full text-left rounded-md">
        {displayKey.map((key, index) => (
          <tr
            key={key}
            className={
              index % 2 === 0 ? "bg-gray-100 rounded-md" : "bg-white rounded-md"
            }
          >
            <th className="py-2 px-4 text-gray-700 capitalize font-medium">
              {key}
            </th>
            <td className=" ">{product?.[key]}</td>
          </tr>
        ))}
      </table>
    </>
  );
};
export default TechDataTable;
