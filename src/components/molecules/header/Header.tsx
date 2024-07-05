import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { Button } from "antd";

import ActionBar from "../actionBar";
import Navbar from "../navbar";
import SearchBox from "../searchBox";

import { AppDispatch } from "../../../redux/store";

import {
  getBestSellerProductThunk,
  getBrandThunk,
  getCategoryThunk,
  getNewProductThunk,
  getProductSaleThunk,
} from "../../../redux/slice/productSlice";
import {
  getBlogThunk,
  getNewBlogThunk,
  getVideoBlogThunk,
} from "../../../redux/slice/blogSlice";
import { getCurrentUserThunk } from "../../../redux/slice/authSlice";

const Header = () => {
  const dispatch = useDispatch<AppDispatch>();
  const token = localStorage.getItem("token");
  useEffect(() => {
    dispatch(getCategoryThunk());
    dispatch(getProductSaleThunk());
    dispatch(getNewProductThunk());
    dispatch(getBestSellerProductThunk());
    dispatch(getBrandThunk());
    dispatch(getBlogThunk());
    dispatch(getVideoBlogThunk());
    dispatch(getNewBlogThunk());
  }, []);

  useEffect(() => {
    if (token) {
      dispatch(getCurrentUserThunk(token));
    }
  }, [token]);

  return (
    <>
      <header className="flex justify-between items-center py-2 md:py-0 px-1 md:px-6 lg:px-28 md:h-[100px] h-10">
        <img
          src="/assets/images/logo.svg"
          alt="Logo"
          className="hidden md:block md:h-full md:py-5"
        />
        <Button
          className="block md:hidden border-none"
          icon={<img src="/assets/icons/essential/menu_icon.svg" alt="menu" />}
        />
        <h1 className="block md:hidden text-primary-400">Tech Heim</h1>
        <Navbar />
        <ActionBar />
      </header>
      <div className="gradient hidden md:block" />
      <div className="mt-3 md:hidden">
        <SearchBox />
      </div>
    </>
  );
};

export default Header;
