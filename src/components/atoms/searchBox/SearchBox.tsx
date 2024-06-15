import { Input } from "antd";

import SearchIcon from "../../../../public/assets/icons/search_icon.svg";
import BagIcon from "../../../../public/assets/icons/bag_icon.svg";
import { user } from "../../../constants/mock";
import { cn } from "../../../utils/utils";

const SearchBox = () => {
  const { username } = user;

  return (
    <div className="flex">
      <img
        className={cn("pl-1 py-2 pr-4", username && "hidden")}
        src={BagIcon}
        alt="bag_icon"
      />
      <Input
        className="bg-gray-EDEDED text-gray-717171 font-inter py-2 px-4 rounded  border-none"
        placeholder="What can we help you to find?"
        suffix={<img src={SearchIcon} alt="search" />}
      />
    </div>
  );
};

export default SearchBox;
