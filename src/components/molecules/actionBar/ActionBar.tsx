import { useDispatch, useSelector } from "react-redux";
import { Button } from "antd";

import { AppDispatch, RootState } from "../../../redux/store";
import { setModalState } from "../../../redux/slice/modalSlice";
import { user } from "../../../constants/mock";
import ProfileMenu, { CartDropdown } from "../../atoms/dropdown";
import { AuthModal, SearchModal } from "../../organisms/modal";

const ActionBar = () => {
  const { username } = user;

  const { authModal, searchModal } = useSelector(
    (state: RootState) => state.appModal
  );
  const dispatch = useDispatch<AppDispatch>();
  const handleToggleModalAuth = (isOpen: boolean) => {
    dispatch(
      setModalState({
        key: "authModal",
        isOpen: isOpen,
      })
    );
  };

  const handleToggleModalSearch = (isOpen: boolean) => {
    dispatch(
      setModalState({
        key: "searchModal",
        isOpen: isOpen,
      })
    );
  };
  return (
    <>
      <div className="flex items-center gap-2 my-5 py-2">
        <Button
          className="border-none shadow-none"
          onClick={() => handleToggleModalSearch(true)}
          type="text"
          icon={
            <img
              className="hidden md:block"
              src="/assets/icons/search_icon.svg"
              alt="search_icon"
            />
          }
        />

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
              onClick={() => handleToggleModalAuth(true)}
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

      {authModal && (
        <AuthModal open={authModal} setOpen={handleToggleModalAuth} />
      )}

      {searchModal && (
        <SearchModal isOpen={searchModal} setIsOpen={handleToggleModalSearch} />
      )}
    </>
  );
};

export default ActionBar;
