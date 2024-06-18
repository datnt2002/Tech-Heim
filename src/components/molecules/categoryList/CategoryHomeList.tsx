import { CategoryCard } from "../../atoms/cards";
import phone from "../../../assets/images/phone.png";
const categories = [
  {
    category: "Accessory",
    img: phone,
  },
  {
    category: "Accessory",
    img: phone,
  },
  {
    category: "Accessory",
    img: phone,
  },
  {
    category: "Accessory",
    img: phone,
  },
  {
    category: "Accessory",
    img: phone,
  },
  {
    category: "Accessory",
    img: phone,
  },
];
const CategoryHomeList = () => {
  return (
    <section className="flex gap-6 overflow-hidden px-24 py-12">
      {categories.map((item) => {
        return <CategoryCard category={item.category} img={item.img} />;
      })}
    </section>
  );
};

export default CategoryHomeList;
