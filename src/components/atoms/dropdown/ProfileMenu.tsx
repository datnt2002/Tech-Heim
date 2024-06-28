import { useSelector } from "react-redux";
import { Button, Dropdown, MenuProps } from "antd";
import { cn } from "../../../utils/utils";
import { RootState, store } from "../../../redux/store";
import { logoutAction } from "../../../redux/slice/authSlice";

interface DropdownItemProps {
  icon: string;
  label?: string;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLDivElement> | undefined;
}
const DropdownItem = ({
  icon,
  label,
  className,
  onClick,
}: DropdownItemProps) => {
  return (
    <div className={cn("flex gap-4", className)} onClick={onClick}>
      <img src={icon} alt="profile" />
      <p className="font-inter text-lg">{label}</p>
    </div>
  );
};

const items: MenuProps["items"] = [
  {
    key: "orders",
    label: (
      <DropdownItem
        icon={"/assets/icons/shopping/order_icon.svg"}
        label="Orders"
      />
    ),
  },
  {
    key: "wishlist",
    label: (
      <DropdownItem
        icon={"/assets/icons/like/heart_outline_icon.svg"}
        label="Wish List"
      />
    ),
  },
  {
    key: "payments",
    label: (
      <DropdownItem
        icon={"/assets/icons/crypto/payment_icon.svg"}
        label="Payments"
      />
    ),
  },
  {
    key: "logout",
    label: (
      <DropdownItem
        icon={"/assets/icons/arrow/logout_icon.svg"}
        label="Log out"
        onClick={() => {
          store.dispatch(logoutAction());
        }}
      />
    ),
  },
];

const ProfileMenu = () => {
  const currentUser = useSelector((state: RootState) => state.auth.currentUser);
  return (
    <Dropdown
      className="bg-transparent"
      dropdownRender={(menu) => {
        return (
          <div className="mt-[31px] bg-white">
            <div className="cursor-pointer pt-4 px-4">
              <DropdownItem
                icon={"/assets/icons/user/profile_icon.svg"}
                label={currentUser?.fullName}
                className="text-primary "
              />
              {currentUser?.email && (
                <p className="ml-10">{currentUser?.email}</p>
              )}
            </div>

            {menu}
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
            src="/assets/icons/user/user_icon.svg"
            alt="user_icon"
          />
        }
      />
    </Dropdown>
  );
};

export default ProfileMenu;
