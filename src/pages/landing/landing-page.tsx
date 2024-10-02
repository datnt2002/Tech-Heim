import { useSelector } from 'react-redux'

import Banner, {
  SecondBanner,
  ThirdBanner
} from '../../components/molecules/banner'
import CategoryHomeList from '../../components/molecules/categoryList'
import { ProductSale } from '../../components/molecules/product'
import HomeSection from '../../components/organisms/section'

import { RootState } from '../../redux/store'
import BlogCard from '../../components/atoms/cards/blog/BlogCard'
import ListProductFromLanding from '../../components/molecules/product/ListProductFromLanding'

import BrandCarousel from '../../components/molecules/brandList/BrandCarousel'

const LandingPage = () => {
  const { listNewProducts, listBestSellerProducts, listBrand } = useSelector(
    (state: RootState) => state.product
  )
  const { listNewBlogPost, loading } = useSelector(
    (state: RootState) => state.blog
  )
  console.log(
    listNewBlogPost,
    listNewProducts,
    listBestSellerProducts,
    listBrand
  )

  return (
    <div className='px-6 md:px-28 mb-14'>
      <Banner />
      <CategoryHomeList />
      <ProductSale />
      <HomeSection sectionName='New Products' viewAllButton>
        <ListProductFromLanding
          productList={listNewProducts}
          className='grid-cols-2 lg:grid-cols-4'
        />
      </HomeSection>
      <SecondBanner />
      <HomeSection sectionName='Best Sellers' viewAllButton>
        <ListProductFromLanding
          productList={listBestSellerProducts}
          className='grid-cols-2 lg:grid-cols-4'
        />
      </HomeSection>
      <HomeSection sectionName='Top Brands' viewAllButton={false}>
        <BrandCarousel brand={listBrand} />
      </HomeSection>
      <ThirdBanner />
      <HomeSection sectionName='Our Blogs' viewAllButton>
        <div className='flex flex-col lg:flex-row gap-6 h-full'>
          <BlogCard
            loading={loading}
            className='w-full lg:basis-1/3'
            key={listNewBlogPost[0]?.id}
            id={listNewBlogPost[0]?.id}
            title={listNewBlogPost[0]?.title}
            releaseDate={listNewBlogPost[0]?.releaseDate}
            readTime={listNewBlogPost[0]?.readTime}
            author={listNewBlogPost[0]?.author}
            content={listNewBlogPost[0]?.content}
            image={listNewBlogPost[0]?.image}
          />
          <div className='flex flex-col flex-1 gap-6 basis-2/3 h-fit'>
            <BlogCard
              loading={loading}
              mode='horizontal'
              key={listNewBlogPost[1]?.id}
              id={listNewBlogPost[1]?.id}
              title={listNewBlogPost[1]?.title}
              releaseDate={listNewBlogPost[1]?.releaseDate}
              readTime={listNewBlogPost[1]?.readTime}
              author={listNewBlogPost[1]?.author}
              content={listNewBlogPost[1]?.content}
              image={listNewBlogPost[1]?.image}
            />
            <BlogCard
              loading={loading}
              mode='horizontal'
              key={listNewBlogPost[2]?.id}
              id={listNewBlogPost[2]?.id}
              title={listNewBlogPost[2]?.title}
              releaseDate={listNewBlogPost[2]?.releaseDate}
              readTime={listNewBlogPost[2]?.readTime}
              author={listNewBlogPost[2]?.author}
              content={listNewBlogPost[2]?.content}
              image={listNewBlogPost[2]?.image}
            />
          </div>
        </div>
      </HomeSection>
      <section className='lg:flex flex-col gap-4 md:flex-row justify-between items-start md:items-center my-14 hidden'>
        <div className='flex gap-4 '>
          <img src='/assets/icons/service/computer_icon.svg' alt='' />
          <p className='text-xl self-center'>Latest and Greatest Tech</p>
        </div>
        <div className='flex gap-4'>
          <img src='/assets/icons/service/guard_icon.svg' alt='' />
          <p className='text-xl self-center'>Guarantee</p>
        </div>
        <div className='flex gap-4'>
          <img src='/assets/icons/service/shipping_icon.svg' alt='' />
          <p className='text-xl self-center'>Free Shipping over 1000$</p>
        </div>
        <div className='flex gap-4'>
          <img src='/assets/icons/service/time_support_icon.svg' alt='' />
          <p className='text-xl self-center'>24/7 Support</p>
        </div>
      </section>
    </div>
  )
}

export default LandingPage
