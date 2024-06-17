import { Button } from "antd";

import { user } from "../../../constants/mock";
import { cn } from "../../../utils/utils";
import ProfileMenu from "../../atoms/dropdown";
import { useState } from "react";
import { AuthModal } from "../../organisms/modal";

const ActionBar = () => {
  const { username } = user;
  const [isOpen, setIsOpen] = useState(false);
  const handleModalAuth = () => {
    setIsOpen(true);
  };
  return (
    <>
      <div className="flex items-center gap-2 my-5 py-2">
        <img
          className="hidden md:block md:p-2"
          src="/assets/icons/search_icon.svg"
          alt="search_icon"
        />

        <img
          className={cn("md:p-2 md:block", !username && "hidden")}
          src="/assets/icons/bag_icon.svg"
          alt="bag_icon"
        />
        {username ? (
          <>
            <ProfileMenu />
          </>
        ) : (
          <>
            <Button
              className="md:block hidden self-center"
              type="primary"
              onClick={handleModalAuth}
            >
              Login / Sign Up
            </Button>
            <Button
              type="text"
              className="text-primary font-inter flex items-center md:hidden"
              icon={<img src="/assets/icons/login_icon.svg" alt="" />}
            >
              Login
            </Button>
          </>
        )}
      </div>
      {isOpen && <AuthModal open={isOpen} setOpen={setIsOpen} />}
    </>
  );
};

export default ActionBar;
