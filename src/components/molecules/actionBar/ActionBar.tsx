import { Button } from "antd";

import { user } from "../../../constants/mock";
import ProfileMenu, { CartDropdown } from "../../atoms/dropdown";
import { useState } from "react";
import { AuthModal, SearchModal } from "../../organisms/modal";

const ActionBar = () => {
  const { username } = user;
  const [isModalAuthOpen, setIsModalAuthOpen] = useState(false);
  const handleModalAuth = () => {
    setIsModalAuthOpen(true);
  };
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
  const handleModalSearch = () => {
    setIsSearchModalOpen(true);
  };
  return (
    <>
      <div className="flex items-center gap-2 my-5 py-2">
        <Button
          className="border-none shadow-none"
          onClick={handleModalSearch}
          type="text"
          icon={
            <img
              className="hidden md:block"
              src="/assets/icons/search_icon.svg"
              alt="search_icon"
            />
          }
        ></Button>

        <CartDropdown />
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
      {isModalAuthOpen && (
        <AuthModal open={isModalAuthOpen} setOpen={setIsModalAuthOpen} />
      )}
      {isSearchModalOpen && (
        <SearchModal
          isOpen={isSearchModalOpen}
          setIsOpen={setIsSearchModalOpen}
        />
      )}
    </>
  );
};

export default ActionBar;
