import SearchIcon from "../../../../public/assets/icons/search_icon.svg";
import BagIcon from "../../../../public/assets/icons/bag_icon.svg";
import UserIcon from "../../../../public/assets/icons/user_icon.svg";

const ActionBar = () => {
  return (
    <div className="flex gap-2 my-5 py-2">
      <img className="p-2" src={SearchIcon} alt="search_icon" />
      <img className="p-2" src={BagIcon} alt="bag_icon" />
      <img className="p-2" src={UserIcon} alt="user_icon" />
    </div>
  );
};

export default ActionBar;
