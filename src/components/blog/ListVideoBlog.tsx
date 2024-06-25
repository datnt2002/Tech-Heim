import VideoCard from "../atoms/cards/videoCard/VideoCard";
import { useEffect, useState } from "react";
import greenScreen from "../../assets/images/greenscreen.png";
import laptop from "../../assets/images/laptop.png";
import ip14 from "../../assets/images/ip14.png";

type Video = { image?: string; title?: string; url?: string };
const videos: Video[] = [
  {
    image: laptop,
    title: "How to connect your iPhone to a laptop?",
    url: "https://www.youtube.com/watch?v=zTbDqlDi268",
  },
  {
    image: greenScreen,
    title:
      "How to fix Green Screen of Death (GSoD) error in Windows 10 and 11?",
    url: "https://www.youtube.com/watch?v=qTY428hjuzs",
  },
  {
    image: ip14,
    title: "Iphone 14Promax review, Still powerful and flagship",
    url: "https://www.youtube.com/watch?v=FT3ODSg1GFE",
  },
  {
    image: ip14,
    title: "10 things you should never store in your smartphone!",
    url: "https://example.com/video4",
  },
  {
    image: ip14,
    title: "How to prevent the laptop from turning off after closing the door?",
    url: "https://example.com/video5",
  },
  {
    image: ip14,
    title:
      "5 quick and easy ways to check the health of the graphics card in Windows 11",
    url: "https://example.com/video6",
  },
];

const ListVideoBlog = () => {
  return (
    <div className="basis-1/3">
      <div className="flex flex-col gap-2">
        <div className="text-xl font-bold ">Video</div>
        {videos.map((video, index) => (
          <VideoCard
            key={index}
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
