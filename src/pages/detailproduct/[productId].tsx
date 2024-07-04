import PayCard from "../../components/atoms/cards/PayCard";
import ProductInfoCard from "../../components/atoms/cards/ProductInfoCard";

const DetailProduct = () => {
  return (
    <div className="flex flex-col">
      <PayCard percent={12} price={151} />
      <ProductInfoCard />
    </div>
  );
};
export default DetailProduct;
