import React from 'react';
import './ImageList.css';
import ImageCard from './ImageCard';
const ImageList = (props) =>{
    
const NewImageList = props.images.map(image => 
 <ImageCard image={image} key={image.id}/>

);
    


    return <div className="image-list">{NewImageList}</div>
}
export default ImageList;