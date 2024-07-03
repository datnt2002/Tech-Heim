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
  const blogsPost = useSelector((state: RootState) => state.blog.newBlogPost);

  return (
    <div className="px-6 md:px-28">
      <Banner />
      <CategoryHomeList />
      <ProductSale />
      <HomeSection sectionName="New Products" viewAllButton>
        <ListProduct
          productList={newProducts}
          className="grid-cols-2 lg:grid-cols-4"
        />
      </HomeSection>
      <SecondBanner />
      <HomeSection sectionName="Best Sellers" viewAllButton>
        <ListProduct
          productList={bestSellers}
          className="grid-cols-2 lg:grid-cols-4"
        />
      </HomeSection>
      <HomeSection sectionName="Top Brands" viewAllButton={false}>
        <div className="flex flex-row overflow-hidden justify-between mb-24">
          {brandList.map((brand) => {
            return (
              <div className="w-14 md:w-auto mx-auto" key={brand.id}>
                <img
                  src={brand.image}
                  alt=""
                  className="object-contain w-full h-full aspect-square"
                />
              </div>
            );
          })}
        </div>
      </HomeSection>
      <ThirdBanner />
      <HomeSection sectionName="Our Blogs" viewAllButton>
        <div className="flex flex-row gap-6">
          <BlogCard
            className="basis-1/3"
            key={blogsPost[0]?.id}
            id={blogsPost[0]?.id}
            title={blogsPost[0]?.title}
            releaseDate={blogsPost[0]?.releaseDate}
            readTime={blogsPost[0]?.readTime}
            author={blogsPost[0]?.author}
            content={blogsPost[0]?.content}
            image={blogsPost[0]?.image}
          />

          <div className="flex flex-col flex-1 gap-6 basis-2/3">
            <BlogCard
              mode="horizontal"
              key={blogsPost[1]?.id}
              id={blogsPost[1]?.id}
              title={blogsPost[1]?.title}
              releaseDate={blogsPost[1]?.releaseDate}
              readTime={blogsPost[1]?.readTime}
              author={blogsPost[1]?.author}
              content={blogsPost[1]?.content}
              image={blogsPost[1]?.image}
            />
            <BlogCard
              mode="horizontal"
              key={blogsPost[2]?.id}
              id={blogsPost[2]?.id}
              title={blogsPost[2]?.title}
              releaseDate={blogsPost[2]?.releaseDate}
              readTime={blogsPost[2]?.readTime}
              author={blogsPost[2]?.author}
              content={blogsPost[2]?.content}
              image={blogsPost[2]?.image}
            />
          </div>
        </div>
      </HomeSection>
      <section className="flex flex-col gap-4 md:flex-row justify-between items-start md:items-center my-14">
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
    </div>
  );
};

export default LandingPage;
