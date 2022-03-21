import axios from 'axios';
const config = require('../config.json');

export function getWeather(){
    return axios.get(config.serverUrl+"/api/weather", {
    })
}