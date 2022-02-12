import axios from "axios";

const getGeoCurrent = async (lat, lon) => {
  const API_KEY = `188c1a4300b1d7593bb62ca48d91e2f2`;
  const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`);
  return response.data;
}

export default getGeoCurrent;
