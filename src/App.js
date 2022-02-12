import { useState } from 'react';
import getCurrentWeather from './API/getCurrentWeather';
import getForecastWeather from './API/getForecastWeather';
import CurrentWeather from './CurrentWeather/CurrentWeather';
import ForecastWeather from './ForecastWeather/ForecastWeather';
import InputComponent from './InputComponent/InputComponent';
import Loader from './Loader/Loader';

const App = () => {

  const [dataCurrent, setDataCurrent] = useState(null);
  const [dataForecast, setDataForecast] = useState(null);


  const [isWarning, setIsWarning] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const searchCity = async (city) => {
    try {
      setIsLoading(true);
      setDataCurrent(null);
      setDataForecast(null);
      setIsWarning(false);
      const dataCurrentWeather = await getCurrentWeather(city);
      const dataForecastWeather = await getForecastWeather(city);
      setDataCurrent(dataCurrentWeather);
      setDataForecast(dataForecastWeather);
      setIsLoading(false);
    } catch (error) {
      setIsWarning(true);
      setIsLoading(false);
      console.log(error);
    }
  }


  return (
    <div>
      <InputComponent searchCity={searchCity} warning={isWarning} loading={isLoading} />
      {isLoading && <Loader />}
      {dataCurrent && <CurrentWeather data={dataCurrent} />}
      {dataForecast && <ForecastWeather data={dataForecast} />}
    </div>
  );
}

export default App;
