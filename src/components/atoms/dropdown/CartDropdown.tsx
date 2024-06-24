import { Button, Dropdown, MenuProps } from "antd";
import { CardCart } from "../cards";

const items: MenuProps["items"] = [
  {
    key: "1",
    label: <CardCart />,
  },
  {
    key: "2",
    label: <CardCart />,
  },
  {
    key: "3",
    label: <CardCart />,
  },
  {
    key: "4",
    label: <CardCart />,
  },
  {
    key: "5",
    label: <CardCart />,
  },
];
const CartDropdown = () => {
  return (
    <Dropdown
      dropdownRender={(menu) => {
        return (
          <div className="mt-[31px] border rounded-b-lg max-w-lg w-[32rem] flex flex-col bg-white">
            <p className="pt-6 pl-6 text-lg pb-3">3 items</p>
            <div className="max-h-[35rem] overflow-auto"> {menu}</div>

            <div className="flex justify-between px-6 pb-6 pt-2">
              <div className="flex flex-col justify-center mr-8 font-inter text-center">
                <p className="text-sm text-gray-2D2D2D font-light">
                  Grand total
                </p>
                <h6 className="font-bold">$543.02</h6>
              </div>
              <Button size="large" className="flex-1" type="primary">
                Proceed to Cart
              </Button>
            </div>
          </div>
        );
      }}
      menu={{ items }}
      placement="bottomRight"
    >
      <Button
        className="border-none shadow-none"
        icon={
          <img
            className=""
            src="/assets/icons/shopping/bag_icon.svg"
            alt="user_icon"
          />
        }
      />
    </Dropdown>
  );
};

export default CartDropdown;
