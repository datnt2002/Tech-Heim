type Props = {
  url: string;
  name: string;
  newPrice?: number;
  oldPrice?: number;
  percent?: number;
};

const SaleSectionCard = ({ name, url, newPrice, oldPrice, percent }: Props) => {
  return (
    <div className="relative rounded-md  bg-white w-44  flex flex-col gap-3 shadow-md">
      <p className="absolute top-2 left-0 py-1 px-[6px] text-secondary-400 bg-secondary-100 rounded-tr-xl rounded-br-xl">
        {percent}%
      </p>
      <div className="flex justify-center items-center w-44 h-36 ">
        <img
          src={url}
          alt={name}
          className="object-contain w-full h-full p-2"
        />
      </div>
      <div className="pb-2 px-2">
        <h5 className="pb-2 text-xs truncate ">{name}</h5>
        <div className="flex justify-between">
          <p className="text-gray-717171 line-through text-xs">${oldPrice}</p>
          <p className="text-sm">${newPrice}</p>
        </div>
      </div>
    </div>
  );
};

export default SaleSectionCard;
