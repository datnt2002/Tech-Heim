import { Button } from "antd";

type Props = {
  tags?: [];
};

const BlogCatTag = ({ tags }: Props) => {
  return (
    <>
      <div className="flex flex-wrap gap-2">
        <Button>{tags}</Button>
      </div>
    </>
  );
};

export default BlogCatTag;
