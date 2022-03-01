import { useSelector } from "react-redux";
import ForecastWeatherData from "./ForecastWeatherData";

const ForecastWeatherTitle = () => {

  const { dataForecast } = useSelector(store => store.dataWeather);
  const data = dataForecast;

  return (
    <div className="container container-forecast">
      <div className="container-title">{data.list.length}-day forecast</div>
      <div className="forecast">
        <ForecastWeatherData />
      </div>
    </div>

  )
};

export default ForecastWeatherTitle;
