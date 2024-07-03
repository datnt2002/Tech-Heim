import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

import { RootState } from "../../../redux/store";
import { cn } from "../../../utils/utils";

const CategoryListWithIcon = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const categoriesList = useSelector(
    (state: RootState) => state.product.categories
  );
  //   index start based 2 ????
  const pathSnippets = location.pathname.split("/").filter((i) => i);
  const handleOnClick = (name: string) => {
    navigate(`${name}`);
  };
  return (
    <div className="flex justify-center gap-8 p-2 mb-12">
      {categoriesList.map((item) => {
        return (
          <div
            onClick={() => {
              handleOnClick(item.name.toLowerCase());
            }}
            className={cn(
              "flex flex-col items-center gap-4 cursor-pointer",
              item.name.toLowerCase() === pathSnippets[length + 1]
                ? "border-b-2 border-b-primary"
                : "hover:border-b-2 hover:border-b-primary-50"
            )}
            key={item.id}
          >
            <img src={item.icon} alt="" className="h-12 w-12" />
            <p className="px-2 pb-2">{item.name}</p>
          </div>
        );
      })}
    </div>
  );
};

export default CategoryListWithIcon;
