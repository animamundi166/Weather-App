import { useState } from 'react';
import getCurrentWeather from './API/getCurrentWeather';
import CurrentWeather from './CurrentWeather/CurrentWeather';
import InputComponent from './InputComponent/InputComponent';

const App = () => {

  const [data, setData] = useState(null);

  const searchCity = async (city) => {
    setData(null);
    const newCurrentWeather = await getCurrentWeather(city);
    setData(newCurrentWeather);
  }


  return (
    <div>
      <InputComponent searchCity={searchCity} />
      {/* {!data && <img src="./images/loading.svg" className="loader" alt='loader' />} */}
      {data && <CurrentWeather data={data} />}
    </div>
  );
}

export default App;
