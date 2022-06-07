import "./VideoItem.css"
import React from "react";


const VideoItem = ({videoprop, onVideoSelectprop}) => {
    // console.log(videoprop)
    return (
        // <div onClick={() => onVideoSelectprop(videoprop)} className="video-item item">
        <div className="video-item item">
            <img 
                src={videoprop.snippet.thumbnails.medium.url} 
                alt={videoprop.snippet.title}/>
            <div className="texts">
                <div className="title">{videoprop.snippet.title}</div>
                <div className="channel">{videoprop.snippet.channelTitle}</div>
                <div className="description">{videoprop.snippet.description}</div>
            </div>
            
        </div>
    );
}

export default VideoItem;