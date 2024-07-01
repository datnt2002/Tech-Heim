import { Tag } from "antd";
type Props = {
  name: string;
};

const FilterTag = ({ name }: Props) => {
  const handleCloseTag = () => {};
  return (
    <>
      <Tag
        closeIcon={
          <img
            src="/assets/icons/essential/close_square_icon.svg"
            className="w-6 h-6"
          />
        }
        onClose={handleCloseTag}
        className="flex justify-between w-32 px-2 py-2 border-2 border-black rounded-lg text-base font-semibold"
      >
        {name}
      </Tag>
    </>
  );
};

export default FilterTag;
