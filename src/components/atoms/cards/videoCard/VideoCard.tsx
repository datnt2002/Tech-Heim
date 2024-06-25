type VideoProps = {
  title?: string;
  image?: string;
  url?: string;
};

const VideoCard = ({ title, image, url }: VideoProps) => {
  return (
    <div>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="block overflow-hidden rounded-lg shadow-lg"
      >
        <div className="relative">
          {image && (
            <img src={image} alt={title} className="w-full ob h-48 sm:h-64" />
          )}
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <span className="text-white text-4xl">&#9654;</span>
          </div>
        </div>
        <div className=" bg-black bg-opacity-75 text-white p-4 text-center">
          <p className="mt-2 text-lg font-bold">{title}</p>
        </div>
      </a>
    </div>
  );
};
export default VideoCard;
