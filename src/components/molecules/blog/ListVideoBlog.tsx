import { VideoBlog } from "../../../types/Blog";
import VideoCard from "../../atoms/cards/VideoCard";

type Props = {
  videoBlogList: VideoBlog[];
};

const ListVideoBlog = ({ videoBlogList }: Props) => {
  return (
    <div>
      <div className="text-xl font-bold mb-4">Video</div>
      <div className="flex flex-col gap-4">
        {videoBlogList.map((video) => (
          <VideoCard
            key={video.id}
            id={video.id}
            image={video.image}
            title={video.title}
            url={video.url}
          />
        ))}
      </div>
    </div>
  );
};

export default ListVideoBlog;
