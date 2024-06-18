type Props = {
  img: string;
  category: string;
};

const CategoryCard = ({ img, category }: Props) => {
  return (
    <div className="flex flex-col items-center w-44 rounded-lg shadow-md">
      <img src={img} alt={category} className="w-36 h-36 pt-2 px-4" />
      <h5 className="font-inter py-2 text-gray-2D2D2D">{category}</h5>
    </div>
  );
};

export default CategoryCard;
