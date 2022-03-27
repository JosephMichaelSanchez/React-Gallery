import GalleryItem from "../GalleryItem/GalleryItem";
import './GalleryList.css';

function GalleryList({galleryList, addLove}) {
    console.log(galleryList);
    return (
        
            <div className = "flexContainer">
                {galleryList.map(galleryItem =>
                    (<GalleryItem 
                    key={galleryItem.id}
                    galleryItem={galleryItem}
                    addLove={addLove}
                    />)
                )}
            </div>
        
    );
}

export default GalleryList;

