import { ProductCard } from "../../atoms/cards";

type Props = {
  productList: {
    type?: "sale" | "default" | "favorite" | "cart";
    sale?: number;
    url: string;
    name: string;
    oldPrice?: number;
    newPrice?: number;
    rating?: number;
  }[];
};

const ListProduct = ({ productList }: Props) => {
  return (
    <div className="grid grid-cols-4 gap-6">
      {productList?.map((product) => {
        return (
          <ProductCard
            key={product.name}
            name={product.name}
            type={product.type}
            url={product.url}
            rating={product.rating}
            newPrice={product.newPrice}
          />
        );
      })}
    </div>
  );
};

export default ListProduct;
