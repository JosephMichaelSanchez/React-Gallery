import GalleryItem from "../GalleryItem/GalleryItem";
import './GalleryList.css';

function GalleryList({galleryList, addLike}) {
    console.log(galleryList);
    return (
            // flex container to hold the gallery items
            <div className = "flexContainer">
                {/* mapping/looping through the gallery array */}
                {galleryList.map(galleryItem =>
                    // inserting the GalleryItem component, and giving it a key of the item's id,
                    // and passing down the galleryItem and addLike function
                    (<GalleryItem 
                    key={galleryItem.id}
                    galleryItem={galleryItem}
                    addLike={addLike}
                    />)
                )}
            </div>
        
    );
}

export default GalleryList;

