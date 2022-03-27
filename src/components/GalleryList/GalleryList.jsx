import GalleryItem from "../GalleryItem/GalleryItem";
import './GalleryList.css';

function GalleryList({galleryList, addLike}) {
    console.log(galleryList);
    return (
        
            <div className = "flexContainer">
                {galleryList.map(galleryItem =>
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

