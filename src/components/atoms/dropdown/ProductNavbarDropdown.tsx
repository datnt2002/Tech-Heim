import { Button, Dropdown, MenuProps } from "antd";
import { ImgAndNameCard } from "../cards";
import { Link } from "react-router-dom";
import { cn } from "../../../utils/utils";
import img from "../../../assets/images/phone.png";
const items: MenuProps["items"] = [
  {
    key: "1",
    label: "Laptops & Computers ",
  },
  {
    key: "2",
    label: "Laptops & Computers ",
  },
  {
    key: "3",
    label: "Laptops & Computers ",
  },
  {
    key: "4",
    label: "Laptops & Computers ",
  },
  {
    key: "5",
    label: "Laptops & Computers ",
  },
  {
    key: "6",
    label: "Laptops & Computers ",
  },
  {
    key: "7",
    label: "Laptops & Computers ",
  },
  {
    key: "8",
    label: "Laptops & Computers ",
  },
  {
    key: "9",
    label: "Laptops & Computers ",
  },
];
const ProductNavbarDropdown = () => {
  return (
    <Dropdown
      align={{ offset: [100, 4] }}
      dropdownRender={(menu) => {
        return (
          <div className="pr-6 mt-[35px] w-full border rounded-b-lg grid grid-cols-12 gap-2 bg-white">
            <div className="max-h-96 col-span-3 shadow-none border-r pt-6">
              {menu}
            </div>

            <div className="col-span-2 pt-6">
              <p className="p-2">Smart Phones</p>
              <p className="p-2">Smart Phones</p>
              <Button>View all</Button>
            </div>
            <div className="col-span-7 grid grid-cols-4 items-center gap-4">
              <ImgAndNameCard img={img} name="Watch & Earpods" className="" />
              <ImgAndNameCard img={img} name="Watch & Earpods" />
              <ImgAndNameCard img={img} name="Watch & Earpods" />
              <ImgAndNameCard img={img} name="Watch & Earpods" />
            </div>
          </div>
        );
      }}
      menu={{ items }}
      placement="bottomCenter"
    >
      <div>
        <Link
          to={"/products"}
          className={
            (cn("p-2"), location.pathname === "/products" ? "text-primary" : "")
          }
        >
          <p>Products</p>
        </Link>
        {location.pathname === "/products" && (
          <div className="gradient w-full" />
        )}
      </div>
    </Dropdown>
  );
};

export default ProductNavbarDropdown;
