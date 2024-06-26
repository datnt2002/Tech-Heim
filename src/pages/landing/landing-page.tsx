import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Banner, {
  SecondBanner,
  ThirdBanner,
} from "../../components/molecules/banner";
import CategoryHomeList from "../../components/molecules/categoryList";
import { ProductSale } from "../../components/molecules/product";
import ListProduct from "../../components/molecules/product/ListProduct";
import HomeSection from "../../components/organisms/section";
import { BlogCard } from "../../components/atoms/cards";

import { AppDispatch, RootState } from "../../redux/store";
import {
  getBestSellerProductThunk,
  getBrandThunk,
  getCategoryThunk,
  getNewProductThunk,
  getProductSaleThunk,
} from "../../redux/thunk/productThunk";

const LandingPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { newProducts, bestSellers, brandList } = useSelector(
    (state: RootState) => state.product
  );

  useEffect(() => {
    dispatch(getCategoryThunk());
    dispatch(getProductSaleThunk());
    dispatch(getNewProductThunk());
    dispatch(getBestSellerProductThunk());
    dispatch(getBrandThunk());
  }, []);

  return (
    <>
      <Banner />
      <CategoryHomeList />
      <ProductSale />
      <HomeSection sectionName="New Products" viewAllButton>
        <ListProduct productList={newProducts} />
      </HomeSection>
      <SecondBanner />
      <HomeSection sectionName="Best Sellers" viewAllButton>
        <ListProduct productList={bestSellers} />
      </HomeSection>
      <HomeSection sectionName="Top Brands" viewAllButton={false}>
        <div className="flex justify-between mb-24">
          {brandList.map((brand) => {
            return <img src={brand.image} alt="" className="object-contain" />;
          })}
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
          <img src="/assets/icons/service/computer_icon.svg" alt="" />
          <p className="text-xl self-center">Latest and Greatest Tech</p>
        </div>
        <div className="flex gap-4">
          <img src="/assets/icons/service/guard_icon.svg" alt="" />
          <p className="text-xl self-center">Guarantee</p>
        </div>
        <div className="flex gap-4">
          <img src="/assets/icons/service/shipping_icon.svg" alt="" />
          <p className="text-xl self-center">Free Shipping over 1000$</p>
        </div>
        <div className="flex gap-4">
          <img src="/assets/icons/service/time_support_icon.svg" alt="" />
          <p className="text-xl self-center">24/7 Support</p>
        </div>
      </section>
    </>
  );
};

export default LandingPage;
