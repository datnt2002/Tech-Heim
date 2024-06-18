import { SaleSectionCard } from "../../atoms/cards";
import mouse from "../../../assets/images/mouse.png";
const products = [
  {
    url: mouse,
    name: "ahahahahaha",
    newPrice: 38.0,
    oldPrice: 21,
    percent: 23,
  },
  {
    url: mouse,
    name: "NPET K10 Wired Gaming Keyboard, LED Backlit, Spill-Resistant",
    newPrice: 19.0,
    oldPrice: 40.0,
    percent: -50,
  },
  {
    url: mouse,
    name: "Apple Watch Series 7 (GPS, 41MM)",
    newPrice: 343.0,
    oldPrice: 123,
    percent: 30,
  },
  {
    url: mouse,
    name: "Apple 2022 MacBook Air M2 Chip (8GB RAM, 256GB SSD)",
    newPrice: 950.22,
    oldPrice: 712.66,
    percent: -25,
  },
  {
    url: mouse,
    name: "Samsung Tita",
    newPrice: 120.0,
    oldPrice: 100,
    percent: 20,
  },
];

const ProductSale = () => {
  return (
    <div className="mx-24 bg-primary-500 rounded-lg">
      <div className="py-12 flex pl-6">
        <div className="text-white pt-4 basis-60 mr-16 text-center">
          <h4 className="text-2xl font-semibold">Products On Sale</h4>
          <h5 className="text-xl mt-2">Shop Now!</h5>
        </div>
        <div className="flex overflow-hidden gap-6">
          {products.map((item) => {
            return (
              <SaleSectionCard
                name={item.name}
                newPrice={item.newPrice}
                url={item.url}
                percent={item.percent}
                oldPrice={item.oldPrice}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProductSale;
