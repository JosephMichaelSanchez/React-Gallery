import { useState } from 'react';
import './GalleryItem.css';

function GalleryItem ({galleryItem}) {

return (

    <>
        <div className="flexItem" key={galleryItem.id}><img src={galleryItem.path} /></div>
    </>

)

}

export default GalleryItem;