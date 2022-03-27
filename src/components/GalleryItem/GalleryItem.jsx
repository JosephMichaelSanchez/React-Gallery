import { useState } from 'react';
import './GalleryItem.css';

function GalleryItem ({galleryItem}) {

return (

    <>
        <div className="flexItem" key={galleryItem.id}>
          <p><img src={galleryItem.path} /></p>
          <p><button>Love It!</button></p>
          <p>{galleryItem.likes} people love this!</p>  
        </div>
    </>

)

}

export default GalleryItem;