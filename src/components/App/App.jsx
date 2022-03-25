import React from 'react';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';


function App() {

  const [galleryList, setGalleryList] = useState([]);

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
    getGallery();
  }, [])

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <p>Gallery goes here</p>
        <img src="images/goat_small.jpg"/>
      </div>
    );
}

export default App;
