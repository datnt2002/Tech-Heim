import Banner, { SecondBanner } from "../../components/molecules/banner";
import CategoryHomeList from "../../components/molecules/categoryList";
import { ProductSale } from "../../components/molecules/product";
import ListProduct from "../../components/molecules/product/ListProduct";
import HomeSection from "../../components/organisms/section";
import { newProduct } from "../../constants/mock";

const LandingPage = () => {
  const products = newProduct;
  return (
    <>
      <Banner />
      <CategoryHomeList />
      <ProductSale />
      <HomeSection sectionName="New Products" viewAllButton>
        <ListProduct productList={products} />
      </HomeSection>
      <SecondBanner />
      <HomeSection sectionName="Best Sellers" viewAllButton>
        <ListProduct productList={products} />
      </HomeSection>
      <HomeSection sectionName="Top Brands" viewAllButton>
        <ListProduct productList={products} />
      </HomeSection>
    </>
  );
};

export default LandingPage;
