import React from "react";

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;

  return (
    <div className="w-72 gap-2 shadow-sm hover:cursor-pointer rounded-lg m-4">
      <img
        alt="video thumbnail"
        src={thumbnails?.medium?.url}
        className=" p-2"
      />
      <ul>
        <li className="font-semibold text-left">{title}</li>
        <li className="">{channelTitle}</li>
        <li className=" inline-block">{statistics?.viewCount} views</li>
      </ul>
    </div>
  );
};

export default VideoCard;
