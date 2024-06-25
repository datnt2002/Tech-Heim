import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../redux/store";
import { toggleLikeProductThunk } from "../../../redux/thunk/productThunk";

type Props = {
  favorite?: boolean;
  id: string;
};

const HeartTag = ({ favorite, id }: Props) => {
  const dispatch = useDispatch<AppDispatch>();
  const handleClickUnlike = () => {
    dispatch(toggleLikeProductThunk({ id, favorite: false }));
  };
  const handleClickLike = () => {
    dispatch(toggleLikeProductThunk({ id, favorite: true }));
  };
  return (
    <div className="absolute top-2 left-0 py-1 px-[6px] hidden group-hover:block">
      {favorite ? (
        <img
          src="/assets/icons/like/heart_bold_icon.svg"
          alt=""
          onClick={handleClickUnlike}
        />
      ) : (
        <img
          src="/assets/icons/like/heart_outline_icon.svg"
          alt=""
          onClick={handleClickLike}
        />
      )}
    </div>
  );
};

export default HeartTag;
