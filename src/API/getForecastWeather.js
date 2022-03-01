import axios from "axios";

const getForecastWeather = async (city) => {
  const API_KEY_SECOND = '58b6f7c78582bffab3936dac99c31b25';
  const response = await axios.get(`https://api.openweathermap.org/data/2.5/forecast/daily?q=${city}&units=metric&cnt=16&appid=${API_KEY_SECOND}`);
  return response.data;
}

export default getForecastWeather;
