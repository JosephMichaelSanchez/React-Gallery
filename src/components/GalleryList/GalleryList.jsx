import GalleryItem from "../GalleryItem/GalleryItem";
import './GalleryList.css';

function GalleryList({galleryList}) {
    console.log(galleryList);
    return (
        
            <div className = "flexContainer">
                {galleryList.map(galleryItem =>
                    (<GalleryItem 
                    key={galleryItem.id}
                    galleryItem={galleryItem}
                    />)
                )}
            </div>
        
    );
}

export default GalleryList;

