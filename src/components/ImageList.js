import './ImageList.css'
import React from "react";
import ImageCard from "./ImageCard"

const ImageList = (props) => {

    const images = props.images.map((image) => {
        return <ImageCard key={image.id} image={image}/>
    })

    if(props.images.length === 0){
        return (
            <div className='not-found'>No image results? Try with a different term.</div>
             )
    } else {
        return (
                <div className='image-list'>{images}</div>
            )

    }

    
};

export default ImageList;