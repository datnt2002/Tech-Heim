import { useSelector } from "react-redux";

import CarouselWithButton from "../../atoms/carousel/CarouselWithButton";
import { RootState } from "../../../redux/store";
import ProductSaleCard from "../../atoms/cards/ProductSaleCard";

const ProductSale = () => {
  const productSale = useSelector(
    (state: RootState) => state.product.productSale
  );

  return (
    <section className="bg-primary-500 rounded-lg">
      <div className="pt-12 pb-2 grid grid-cols-12 pl-6">
        <div className="text-white pt-4 col-span-3 mr-16 text-center">
          <h4 className="text-2xl font-semibold">Products On Sale</h4>
          <h5 className="text-xl mt-2">Shop Now!</h5>
        </div>
        <div className="min-h-0 min-w-0 col-span-9">
          <CarouselWithButton slideToShow={5} arrows={false} slideButton>
            {productSale.map((item) => {
              return (
                <ProductSaleCard
                  id={item.id}
                  key={item.id}
                  favorite={item.favorite}
                  name={item.name}
                  newPrice={item.salePrice}
                  image={item.image}
                  percent={item.percent}
                  oldPrice={item.price}
                />
              );
            })}
          </CarouselWithButton>
        </div>
      </div>
    </section>
  );
};

export default ProductSale;
