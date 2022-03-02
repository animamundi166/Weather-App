import axios from "axios";

const getGeoForecast = async (lat, lon) => {
  const API_KEY = `58b6f7c78582bffab3936dac99c31b25`;
  const response = await axios.get(`https://api.openweathermap.org/data/2.5/forecast/daily?lat=${lat}&lon=${lon}&units=metric&cnt=16&appid=${API_KEY}`);
  return response.data;
}

export default getGeoForecast;
