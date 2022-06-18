import './App.css';
import { useState } from 'react';
import ImageAndButton from '../ImageAndButton';
import FavouritesButton from '../FavouritesButton';
import Gallery from '../Gallery';

function App() {
  const [catURL, setCatURL] = useState('https://cdn2.thecatapi.com/images/afk.jpg');
  const [favourites, setFavourites] = useState([]);

  async function getRandomCatURL() {
    const data = await fetch('https://api.thecatapi.com/v1/images/search', {
        method: 'GET',
        headers: {
            "x-api-key": "884a74b5-ddc8-40d7-863e-7c80efe76c05"
        }
    })
    const cat = await data.json();
    setCatURL(cat[0].url);
  }

  function addToFavourites() {
    if (!favourites.includes(catURL)) {
      let newFavourites = [...favourites, catURL];
      setFavourites(newFavourites);
    } else {
      alert('Image already included in favourites 😎')
    }
  }

  function deleteFromFavourites(index){
    setFavourites([...favourites.slice(0, index), ...favourites.slice(index + 1)])
  }
  
  return (
    <div className="App">
      <header  className="App-header">
        <h1>CUTE CAT LOVERS CLUB</h1>
        <ImageAndButton className="randomCat" imgURL={catURL} handleClick={getRandomCatURL} buttonText={'Get a random cat!'}/>
        <FavouritesButton handleClick={addToFavourites}/>
      </header>
      <body>
        <h2>Favourites</h2>
        <Gallery imagesArray={favourites} deleteFromFavorites={deleteFromFavourites}/>
      </body>
    </div>
  );
}

export default App;


