import React from "react";

const VideoDetail = ({ video }) => {
  if (!video) {
    return "Loding";
  }
  const videosrc = `https://www.youtube.com/embed/${video.id.videoId}`;
  return (
    <div style={{ margin: "6px" }}>
      <div className="ui embed">
        <iframe src={videosrc} title={videosrc} />
      </div>
      <div className="ui segment">
        <h4 className="ui header">{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;
