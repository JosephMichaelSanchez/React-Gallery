import { useState } from 'react';
import './GalleryItem.css';

function GalleryItem ({galleryItem, addLike}) {

    // create isShowing state variable to facilitate the toggling from the picture to the description
    // default is true, and will show the image
    const [isShowing, setIsShowing] = useState(true);

    // function to call the addLike function upon click of the button
    const handleLike = () => {
        console.log('clicked Like It');
        // calling the addLike function for the image that is clicked
        addLike(galleryItem);
    }

    // function to change the isShowing state variable
    const handleShowHide = () => {
        console.log('clicked');
        
        // will make isShowing the opposite upon click
        setIsShowing(!isShowing);
    };

    // conditional to determine what is displayed on the DOM in the span underneath each picture
    const checkLikes = () => {
        
        // if 0 likes, 'Nobody likes this' and a frown face appears
        if (galleryItem.likes === 0) {
            return (
                <p>Nobody likes this : ^ /</p>
            );
        // if 1 like, 'One person likes this' appears    
        }else if (galleryItem.likes === 1) {
            return (
                <p>One person likes this.</p>
            );
        // if more than 1 like, '(# of likes) people like this' appears    
        }else if (galleryItem.likes > 1) {
            return (
                <p>{galleryItem.likes} people like this.</p>        
            )
        }
    }

return (

    <>
        {/* FlexItem div to hold each image, button, and description  */}
        <div className="FlexItem" key={galleryItem.id}>
                                                                            {/* Ternary operator for isShowing True and False, will toggle between image and description */}
          <span className="picButton" onClick={handleShowHide}>{isShowing ? <img src={galleryItem.path} /> : <p>{galleryItem.description}</p>}</span>
          {/* button click will call handleLike */}
          <p><button onClick={handleLike}>Like It!</button></p>
          {/* what is displayed in the span will be determined by the conditional in the checkLikes function */}
          <span>{checkLikes()}</span>  
        </div>
    </>

)

}

export default GalleryItem;

