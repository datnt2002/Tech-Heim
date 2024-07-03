import { Product } from "../../../types/Product";
import { cn } from "../../../utils/utils";
import ProductCard from "../../atoms/cards/ProductCard";

type Props = {
  productList: Product[];
  className?: string;
};

const ListProduct = ({ productList, className }: Props) => {
  return (
    <div className={cn("grid gap-6", className)}>
      {productList?.map((product) => {
        return (
          <ProductCard
            key={product.id}
            name={product.name}
            id={product.id}
            image={product.image}
            price={product.price}
            rating={product.rating}
            favorite={product.favorite}
            percent={product.percent}
            salePrice={product.salePrice}
          />
        );
      })}
    </div>
  );
};

export default ListProduct;
