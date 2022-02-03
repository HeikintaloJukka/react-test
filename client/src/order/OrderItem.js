import React, { useState, useEffect  } from 'react';
import axios from 'axios';
import '../app/css/OrderItem.css';
import getWeather from '../api/api.js';
//import getWeather from './api/api.js';
const config = require('../config.json');

function App() {
  const [weather, setWeather] = useState(0);
  const [nimi, setNimi] = useState("");
  const [osoite, setOsoite] = useState("");

  //Runs only on the first render when 2nd option is empty array
  useEffect(() => {
    getWeather().then(function (res) {
      console.log(res);
      setWeather(res.data.temp);
      })
      .catch(function (error) {
      console.log(error);
    });
  }, []);

  const handleChange = (event) => {
    if(event.target.name === "nimi"){
      setNimi(event.target.value)
    }

    if(event.target.name === "osoite"){
      setOsoite(event.target.value)
    }
  }

  const order = () => {
    console.log("order: "+osoite+" "+nimi);
    axios.post(config.serverUrl+"/api/order", {
      nimi: nimi,
      osoite: osoite
    })
    .then(function (res) {
      console.log(res.data);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  return (
    <div className="OrderItem d-flex justify-content-center">
      <div>
        <h1>Kuulokkeet</h1>
        <p>Laatu kuulokkeet halpaan hintaan. Joka sään kestävät. 30€</p>
        <p>Paikallinen sää: {weather}</p>
        <div className="input-group mb-3">
          <div className="input-group-prepend col-3">
            <span className="input-group-text" id="">Nimi</span>
          </div>
          <input type="text" className="form-control" name="nimi" value={nimi} onChange={handleChange}/>
        </div>
        <div className="input-group mb-3">
          <div className="input-group-prepend col-3">
            <span className="input-group-text" id="">Osoite</span>
          </div>
          <input type="text" className="form-control" name="osoite" value={osoite} onChange={handleChange}/>
        </div>
        <button type="button" className="btn btn-primary" onClick={order}>Lähetä tilaus</button>
      </div>
    </div>
  );
}

export default App;