import { Button, Dropdown, MenuProps } from "antd";

interface DropdownItemProps {
  icon: string;
  label: string;
}
const DropdownItem = ({ icon, label }: DropdownItemProps) => {
  return (
    <div className="flex gap-4">
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
          <img className="" src="/assets/icons/user_icon.svg" alt="user_icon" />
        }
      />
    </Dropdown>
  );
};

export default ProfileMenu;
