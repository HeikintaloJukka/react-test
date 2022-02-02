import React, { useState, useEffect  } from 'react';
import './App.css';
import getWeather from './api/api.js';

function App() {
  const [weather, setWeather] = useState(0);

  useEffect(() => {
    getWeather().then((value) => {
      //promised value got
      setWeather(value+"c")
    })
  });

  return (
    <div className="App">
      <h1>Kuulokkeet</h1>
      <p>Laatu kuulokkeet halpaan hintaan. Joka sään kestävät. 30€</p>
      <p>Paikallinen sää: {weather}</p>
      Nimi<input type="text"></input><br/>
      Osoite<input type="text"></input><br/>
      <button>Lähetä tilaus</button>
    </div>
  );
}

export default App;
