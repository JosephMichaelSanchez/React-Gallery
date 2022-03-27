import { useState } from 'react';
import './GalleryItem.css';

function GalleryItem ({galleryItem, addLike}) {

    const handleLove = () => {
        console.log('clicked Like It');
        addLike(galleryItem);
    }

    const checkLikes = () => {
        if (galleryItem.likes === 0) {
            return (
                <p>Nobody likes this :\</p>
            );
        }else if (galleryItem.likes === 1) {
            return (
                <p>1 person likes this</p>
            );
        }else if (galleryItem.likes > 1) {
            return (
                <p>{galleryItem.likes} people like this.</p>        
            )
        }
    }

return (

    <>
        <div className="flexItem" key={galleryItem.id}>
          <p><img src={galleryItem.path} /></p>
          <p><button onClick={handleLove}>Like It!</button></p>
          <span>{checkLikes()}</span>  
        </div>
    </>

)

}

export default GalleryItem;