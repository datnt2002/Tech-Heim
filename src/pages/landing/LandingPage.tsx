import Banner, {
  SecondBanner,
  ThirdBanner,
} from "../../components/molecules/banner";
import CategoryHomeList from "../../components/molecules/categoryList";
import { ProductSale } from "../../components/molecules/product";
import ListProduct from "../../components/molecules/product/ListProduct";
import HomeSection from "../../components/organisms/section";
import { newProduct } from "../../constants/mock";

import apple from "../../assets/images/logo/apple.png";
import canon from "../../assets/images/logo/canon.png";
import flower from "../../assets/images/logo/flower.png";
import lenovo from "../../assets/images/logo/lenovo.png";
import samsung from "../../assets/images/logo/samsung.png";
import sony from "../../assets/images/logo/sony.png";

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
      <HomeSection sectionName="Top Brands" viewAllButton={false}>
        <div className="flex justify-between mb-24">
          <img src={apple} alt="" className="object-contain" />
          <img src={sony} alt="" className="object-contain" />
          <img src={samsung} alt="" className="object-contain" />
          <img src={canon} alt="" className="object-contain" />
          <img src={flower} alt="" className="object-contain" />
          <img src={lenovo} alt="" className="object-contain" />
        </div>
      </HomeSection>
      <ThirdBanner />
    </>
  );
};

export default LandingPage;
