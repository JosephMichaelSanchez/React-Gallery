import React from 'react';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import GalleryList from '../GalleryList/GalleryList'


function App() {

  // wild hold the array
  const [galleryList, setGalleryList] = useState([]);

  // function to add likes to the pictures
  const addLike = (galleryItem) => {
    console.log('addLike func')
    // axios request
    axios.put(`/gallery/like/${galleryItem.id}`)
    .then( response => {
        console.log('liking:', galleryItem.description);
        console.log(response);
        // get the images again
        getGalleryList();
    })
    .catch( error => {
        console.log(error)
    })
}
  // function to get the images to display to the DOM
  const getGalleryList = () => {

    // axios GET request
    axios.get('/gallery')
    .then((response) => {
      console.log('Entire response:', response);
      console.log('Just the data:', response.data);
      setGalleryList(response.data);
    }).catch((error) => {
      console.log('Error in get:', error);
    })
  }

  // react version of ready-now function, will get the gallery on page load
  useEffect(() => {
    getGalleryList();
  }, [])

    return (
      
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        {/* insert GalleryList component and pass it the galleryList and addLike function */}
       <GalleryList 
       galleryList={galleryList}
       addLike={addLike}
       />
      </div>
    );
}

export default App;
