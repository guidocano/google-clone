import React from "react";
import VideoItem from "./VideoItem"
import "./VideoItem.css"

const VideoList = ({videos, onVideoSelect}) => {
    const renderedList = videos.map((video) => {
        return <VideoItem 
            key={video.id.videoId}
            onVideoSelectprop={onVideoSelect} 
            videoprop={video} 
        />
    })
    return <div className="video-container">{renderedList}</div>
};

export default VideoList;
