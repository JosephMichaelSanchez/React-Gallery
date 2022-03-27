import React from 'react';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import GalleryList from '../GalleryList/GalleryList'


function App() {

  const [galleryList, setGalleryList] = useState([]);

  const addLike = (galleryItem) => {
    console.log('addLike func')

    axios.put(`/like/${galleryItem.id}`)
    .then( response => {
        console.log('likng:', galleryItem.description);
        console.log(response);
        getGalleryList();
    })
    .catch( error => {
        console.log(error)
    })
}

  const getGalleryList = () => {

    axios.get('/gallery')
    .then((response) => {
      console.log('Entire response:', response);
      console.log('Just the data:', response.data);
      setGalleryList(response.data);
    }).catch((error) => {
      console.log('Error in get:', error);
    })
  }

  useEffect(() => {
    getGalleryList();
  }, [])

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        {/* <p>Gallery goes here</p> */}
        {/* <img src="images/goat_small.jpg"/> */}
       <GalleryList 
       galleryList={galleryList}
       addLike={addLike}
       />
      </div>
    );
}

export default App;
