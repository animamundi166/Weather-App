import axios from "axios";


const getCurrentWeather = async (city) => {
  const API_KEY = `188c1a4300b1d7593bb62ca48d91e2f2`;
  const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&cnt=16&appid=${API_KEY}`);
  return response.data;
};

export default getCurrentWeather;
