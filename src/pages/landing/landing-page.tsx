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

const blogs = [
  {
    content:
      "In this blog post, we explore the different ways to connect your iPhone to a laptop, providing step-by-step instructions for both Windows and macOS users.",
    title: "How to Connect Your iPhone to a Laptop",
    releaseDate: "2023-06-15",
    readTime: "5 min read",
  },
  {
    content:
      "Learn how to fix the Green Screen of Death (GSoD) error in Windows 10 and 11 with our comprehensive guide, including troubleshooting steps.",
    title: "How to Fix Green Screen of Death (GSoD) Error in Windows 10 and 11",
    releaseDate: "2023-06-20",
    readTime: "7 min read",
  },
  // Add more blog entries here if needed
];
const LandingPage = () => {
  const { newProducts, bestSellers, brandList } = useSelector(
    (state: RootState) => state.product
  );

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
        <div className="flex gap-6">
          <BlogCard
            className="h-[21.5rem]"
            title={blogs[0].title}
            releaseDate={blogs[0].releaseDate}
            readTime={blogs[0].readTime}
            content={blogs[0].content}
          />
          <div className="flex flex-col flex-1 gap-6">
            <BlogCard
              mode="horizontal"
              title={blogs[0].title}
              releaseDate={blogs[0].releaseDate}
              readTime={blogs[0].readTime}
              content={blogs[0].content}
            />
            <BlogCard
              mode="horizontal"
              title={blogs[1].title}
              releaseDate={blogs[1].releaseDate}
              readTime={blogs[1].readTime}
              content={blogs[1].content}
            />
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
