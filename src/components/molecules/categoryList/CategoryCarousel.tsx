import { useSelector } from "react-redux";

import { ImgAndNameCard } from "../../atoms/cards";
import CarouselWithButton from "../../atoms/carousel/CarouselWithButton";

import { RootState } from "../../../redux/store";

const CategoryCarousel = () => {
  const categoriesList = useSelector(
    (state: RootState) => state.product.categories
  );
  return (
    <section className="px-24 py-12">
      <CarouselWithButton>
        {categoriesList.map((item) => {
          return (
            <ImgAndNameCard key={item.id} name={item.name} img={item.image} />
          );
        })}
      </CarouselWithButton>
    </section>
  );
};

export default CategoryCarousel;
