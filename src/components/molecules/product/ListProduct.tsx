import { Product } from "../../../types/Product";
import { ProductCard } from "../../atoms/cards";

type Props = {
  productList: Product[];
};

const ListProduct = ({ productList }: Props) => {
  return (
    <div className="grid grid-cols-4 gap-6">
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
