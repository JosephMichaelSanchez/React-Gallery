import { useState } from 'react';

function GalleryItem ({galleryItem}) {

return (

    <>
        <div key={galleryItem.id}><img src={galleryItem.path} /></div>
    </>

)

}

export default GalleryItem;