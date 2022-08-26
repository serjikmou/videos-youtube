import React from "react";
import "./Video.css";

const VideoItem = (props) => {
  console.log(props.element);
  return (
    <div
      className="video-item item"
      onClick={() => props.onVideo1(props.element)}
    >
      <img
        className="ui image"
        src={props.element.snippet.thumbnails.medium.url}
        alt="/"
      />

      <div className="content">
        <div className="header">{props.element.snippet.title}</div>
      </div>
    </div>
  );
};

export default VideoItem;
