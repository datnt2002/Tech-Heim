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
import { BlogCard } from "../../components/atoms/cards";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";
import { useEffect } from "react";
import { getCategoryThunk } from "../../redux/thunk/productThunk";

const LandingPage = () => {
  const products = newProduct;
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getCategoryThunk());
  }, []);

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
      <HomeSection sectionName="Our Blogs" viewAllButton>
        <div className="flex gap-6">
          <BlogCard className="h-[21.5rem]" />
          <div className="flex flex-col flex-1 gap-6">
            <BlogCard mode="horizontal" />
            <BlogCard mode="horizontal" />
          </div>
        </div>
      </HomeSection>
      <section className="flex mx-24 justify-between h-24 items-center mt-14">
        <div className="flex gap-4">
          <img src="/assets/icons/computer.svg" alt="" />
          <p className="text-xl self-center">Latest and Greatest Tech</p>
        </div>
        <div className="flex gap-4">
          <img src="/assets/icons/guard.svg" alt="" />
          <p className="text-xl self-center">Guarantee</p>
        </div>
        <div className="flex gap-4">
          <img src="/assets/icons/shipping.svg" alt="" />
          <p className="text-xl self-center">Free Shipping over 1000$</p>
        </div>
        <div className="flex gap-4">
          <img src="/assets/icons/time_support.svg" alt="" />
          <p className="text-xl self-center">24/7 Support</p>
        </div>
      </section>
    </>
  );
};

export default LandingPage;
