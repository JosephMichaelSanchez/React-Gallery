import { useState } from 'react';
import './GalleryItem.css';

function GalleryItem ({galleryItem}) {

return (

    <>
        <div className="flexItem" key={galleryItem.id}>
          <p><img src={galleryItem.path} /></p>
          <p><button>Love It!</button></p>
          <p>Test text for people liking the picture</p>  
        </div>
    </>

)

}

export default GalleryItem;