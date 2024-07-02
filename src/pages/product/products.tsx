import { useSelector } from "react-redux";
import { CategoryListWithIcon } from "../../components/molecules/categoryList";
import ListProduct from "../../components/molecules/product/ListProduct";
import FilterOptions from "../../components/organisms/filter/FilterOptions";
import { RootState } from "../../redux/store";

const Products = () => {
  const { newProducts } = useSelector((state: RootState) => state.product);
  return (
    <section>
      <CategoryListWithIcon />
      <div className="flex">
        <div className="basis-1/4 mr-6">
          <FilterOptions />
        </div>
        <div className="basis-3/4">
          <ListProduct productList={newProducts} className="grid-cols-3" />
        </div>
      </div>
    </section>
  );
};

export default Products;
