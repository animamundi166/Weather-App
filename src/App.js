import { useSelector } from 'react-redux';
import CurrentWeather from './CurrentWeather/CurrentWeather';
import ForecastWeather from './ForecastWeather/ForecastWeather';
import InputComponent from './InputComponent/InputComponent';
import Loader from './Loader/Loader';

const App = () => {

  const { dataCurrent, dataForecast, isLoading } = useSelector(store => store.dataWeather);

  return (
    <div>
      <InputComponent />
      {isLoading && <Loader />}
      {dataCurrent && <CurrentWeather />}
      {dataForecast && <ForecastWeather />}
    </div>
  );
}

export default App;
