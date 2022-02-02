import axios from 'axios';

async function getWeather(){
    return await axios.get('https://api.openweathermap.org/data/2.5/weather?lat=60.192059&lon=24.945831&appid=401e4898475b2481187358992f4bf34e&units=metric', {
      })
      .then(function (response) {
        console.log(response.data.main.temp)
        return response.data.main.temp;
      })
      .catch(function (error) {
        console.log(error);
      });
}

export default getWeather;