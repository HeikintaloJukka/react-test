import axios from 'axios';
const config = require('../config.json');

function getWeather(){
    return axios.get(config.serverUrl+"/api/weather", {
    })
}

export default getWeather;