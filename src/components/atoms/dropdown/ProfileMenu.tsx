import { Button, Dropdown, MenuProps } from "antd";
import { cn } from "../../../utils/utils";

interface DropdownItemProps {
  icon: string;
  label: string;
  className?: string;
}
const DropdownItem = ({ icon, label, className }: DropdownItemProps) => {
  return (
    <div className={cn("flex gap-4", className)}>
      <img src={icon} alt="profile" />
      <p className="font-inter text-lg">{label}</p>
    </div>
  );
};

const items: MenuProps["items"] = [
  {
    key: "user",
    label: (
      <>
        <DropdownItem
          icon={"/assets/icons/profile_icon.svg"}
          label="Jimmy Smith"
          className="text-primary"
        />
        <p className="ml-10">Jimmy.smith1996@gmail.com</p>
      </>
    ),
  },
  {
    key: "orders",
    label: (
      <DropdownItem icon={"/assets/icons/order_icon.svg"} label="Orders" />
    ),
  },
  {
    key: "wishlist",
    label: (
      <DropdownItem icon={"/assets/icons/heart_icon.svg"} label="Wish List" />
    ),
  },
  {
    key: "payments",
    label: (
      <DropdownItem icon={"/assets/icons/payment_icon.svg"} label="Payments" />
    ),
  },
  {
    key: "logout",
    label: (
      <DropdownItem icon={"/assets/icons/logout_icon.svg"} label="Log out" />
    ),
  },
];

const ProfileMenu = () => {
  return (
    <Dropdown
      dropdownRender={(menu) => {
        return <div className="mt-[31px] flex flex-col gap-24">{menu}</div>;
      }}
      menu={{ items }}
      placement="bottomRight"
    >
      <Button
        className="border-none shadow-none"
        icon={
          <img
            className=""
            src="/assets/icons/user/user_icon.svg"
            alt="user_icon"
          />
        }
      />
    </Dropdown>
  );
};

export default ProfileMenu;
