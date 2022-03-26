function GalleryList({galleryList}) {
    console.log(galleryList);
    return (
        <>
            <div>
                {galleryList.map(galleryItem =>
                    (<div key={galleryItem.id}><img src={galleryItem.path} /></div>)
                )}
            </div>
        </>
    );
}

export default GalleryList;

