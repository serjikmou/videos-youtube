import React from "react";
import VideoItem from "./VideoItem";
// Video list components
const VideoList = (props) => {
  const renderList = props.videos.map((element) => {
    return (
      <VideoItem
        key={element.id.videoId}
        element={element}
        onVideo1={props.onVideo}
      />
    );
  });
  return <div className="ui relaxed divided list">{renderList}</div>;
};

export default VideoList;
