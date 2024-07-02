import { useSelector } from "react-redux";

import Banner, {
  SecondBanner,
  ThirdBanner,
} from "../../components/molecules/banner";
import CategoryHomeList from "../../components/molecules/categoryList";
import { ProductSale } from "../../components/molecules/product";
import ListProduct from "../../components/molecules/product/ListProduct";
import HomeSection from "../../components/organisms/section";
import { BlogCard } from "../../components/atoms/cards";

import { RootState } from "../../redux/store";

const LandingPage = () => {
  const { newProducts, bestSellers, brandList } = useSelector(
    (state: RootState) => state.product
  );
  const blogsPost = useSelector((state: RootState) => state.blog.blogsPost);

  const blogLimit = blogsPost.slice(0, 3);
  return (
    <>
      <Banner />
      <CategoryHomeList />
      <ProductSale />
      <HomeSection sectionName="New Products" viewAllButton>
        <ListProduct productList={newProducts} className="grid-cols-4" />
      </HomeSection>
      <SecondBanner />
      <HomeSection sectionName="Best Sellers" viewAllButton>
        <ListProduct productList={bestSellers} className="grid-cols-4" />
      </HomeSection>
      <HomeSection sectionName="Top Brands" viewAllButton={false}>
        <div className="flex justify-between mb-24">
          {brandList.map((brand) => {
            return (
              <img
                key={brand.id}
                src={brand.image}
                alt=""
                className="object-contain"
              />
            );
          })}
        </div>
      </HomeSection>
      <ThirdBanner />
      <HomeSection sectionName="Our Blogs" viewAllButton>
        <div className="flex flex-row gap-6">
          <BlogCard
            className="basis-1/3"
            key={blogLimit[0].id}
            id={blogLimit[0].id}
            title={blogLimit[0].title}
            releaseDate={blogLimit[0].releaseDate}
            readTime={blogLimit[0].readTime}
            author={blogLimit[0].author}
            content={blogLimit[0].content}
            image={blogLimit[0].image}
          />

          <div className="flex flex-col flex-1 gap-6 basis-2/3">
            {/* <BlogCard
              mode="horizontal"
              key={blogLimit[1].id}
              id={blogLimit[1].id}
              title={blogLimit[1].title}
              releaseDate={blogLimit[1].releaseDate}
              readTime={blogLimit[1].readTime}
              author={blogLimit[1].author}
              content={blogLimit[1].content}
              image={blogLimit[1].image}
            />
            <BlogCard
              mode="horizontal"
              key={blogLimit[2].id}
              id={blogLimit[2].id}
              title={blogLimit[2].title}
              releaseDate={blogLimit[2].releaseDate}
              readTime={blogLimit[2].readTime}
              author={blogLimit[2].author}
              content={blogLimit[2].content}
              image={blogLimit[2].image}
            /> */}
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
