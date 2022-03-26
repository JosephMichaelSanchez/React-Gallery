import GalleryItem from "../GalleryItem/GalleryItem";

function GalleryList({galleryList}) {
    console.log(galleryList);
    return (
        <>
            <div>
                {galleryList.map(galleryItem =>
                    (<GalleryItem 
                    key={galleryItem.id}
                    galleryItem={galleryItem}
                    />)
                )}
            </div>
        </>
    );
}

export default GalleryList;

