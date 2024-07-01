type VideoProps = {
  title?: string;
  image?: string;
  url?: string;
};

const VideoCard = ({ title, image, url }: VideoProps) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="block overflow-hidden rounded-lg shadow-lg w-full h-[206px] relative"
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <span className="text-white text-4xl">&#9654;</span>
      </div>
      <div className="absolute bottom-0 w-full bg-black bg-opacity-40 text-white p-4 text-center">
        <p className="mt-2 text-m font-bold">{title}</p>
      </div>
    </a>
  );
};

export default VideoCard;
