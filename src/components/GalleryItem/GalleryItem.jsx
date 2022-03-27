import { useState } from 'react';
import './GalleryItem.css';

function GalleryItem ({galleryItem, addLove}) {

    const handleLove = () => {
        console.log('clicked Love It');
        addLove(galleryItem);
    }

return (

    <>
        <div className="flexItem" key={galleryItem.id}>
          <p><img src={galleryItem.path} /></p>
          <p><button onClick={handleLove}>Love It!</button></p>
          <p>{galleryItem.likes} people love this!</p>  
        </div>
    </>

)

}

export default GalleryItem;