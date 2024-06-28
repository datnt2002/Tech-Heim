import { Input } from "antd";
import { useSelector } from "react-redux";

import { cn } from "../../../utils/utils";
import { RootState } from "../../../redux/store";

const SearchBox = () => {
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);

  return (
    <div className="flex">
      <img
        className={cn("pl-1 py-2 pr-4", isLoggedIn && "hidden")}
        src="/assets/icons/shopping/bag_icon.svg"
        alt="bag_icon"
      />
      <Input
        className="bg-gray-EDEDED text-gray-717171 font-inter py-2 px-4 rounded  border-none"
        placeholder="What can we help you to find?"
        suffix={<img src="/assets/icons/search/search_icon.svg" alt="search" />}
      />
    </div>
  );
};

export default SearchBox;
