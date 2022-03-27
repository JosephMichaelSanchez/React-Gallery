import { useState } from 'react';
import './GalleryItem.css';

function GalleryItem ({galleryItem, addLike}) {

    const [isShowing, setIsShowing] = useState(true);

    const handleLike = () => {
        console.log('clicked Like It');
        addLike(galleryItem);
    }

    const handleShowHide = () => {
        console.log('clicked');
        //change a state variable 
        // that is telling us whether or not to show the id
        setIsShowing(!isShowing);
    };

    const checkLikes = () => {
        if (galleryItem.likes === 0) {
            return (
                <p>Nobody likes this : ^ /</p>
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
        <div className="FlexItem" key={galleryItem.id}>
          <span className="picButton" onClick={handleShowHide}>{isShowing ? <img src={galleryItem.path} /> : <p className="taco">{galleryItem.description}</p>}</span>
          <p><button onClick={handleLike}>Like It!</button></p>
          <span>{checkLikes()}</span>  
        </div>
    </>

)

}

export default GalleryItem;

{/* <img src={galleryItem.path} /> */}