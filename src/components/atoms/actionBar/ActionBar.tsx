import { Button } from "antd";

import SearchIcon from "../../../../public/assets/icons/search_icon.svg";
import BagIcon from "../../../../public/assets/icons/bag_icon.svg";
import UserIcon from "../../../../public/assets/icons/user_icon.svg";
import LoginIcon from "../../../../public/assets/icons/login_icon.svg";
import { user } from "../../../constants/mock";
import { cn } from "../../../utils/utils";

const ActionBar = () => {
  const { username } = user;
  return (
    <>
      <div className="flex gap-2 my-5 py-2">
        {/* Search icon */}
        <img
          className="hidden md:block md:p-2"
          src={SearchIcon}
          alt="search_icon"
        />

        <img
          className={cn("md:p-2 md:block", !username && "hidden")}
          src={BagIcon}
          alt="bag_icon"
        />
        {username ? (
          <img className="md:p-2" src={UserIcon} alt="user_icon" />
        ) : (
          <>
            <Button className="md:block hidden self-center" type="primary">
              Login / Sign Up
            </Button>
            <Button
              type="text"
              className="text-primary font-inter flex items-center md:hidden"
              icon={<img src={LoginIcon} alt="" />}
            >
              Login
            </Button>
          </>
        )}
      </div>
    </>
  );
};

export default ActionBar;
