import { useState } from 'react';
import getCurrentWeather from './API/getCurrentWeather';
import CurrentWeather from './CurrentWeather/CurrentWeather';
import InputComponent from './InputComponent/InputComponent';
// import Loader from './Loader/Loader';

const App = () => {

  const [data, setData] = useState(null);
  const [warning, setWarning] = useState(false);

  const searchCity = async (city) => {
    try {
      setData(null);
      setWarning(false);
      const newCurrentWeather = await getCurrentWeather(city);
      setData(newCurrentWeather);
    } catch (error) {
      setWarning(true);
      console.log(error);
    }
  }


  return (
    <div>
      <InputComponent searchCity={searchCity} warning={warning} />
      {/* {!data && <Loader />} */}
      {data && <CurrentWeather data={data} />}
    </div>
  );
}

export default App;
