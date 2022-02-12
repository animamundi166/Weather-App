import ForecastWeatherData from "./ForecastWeatherData";

const ForecastWeatherTitle = ({ data }) => {

  return (
    <div className="container container-forecast">
      <div className="container-title">{data.list.length}-day forecast</div>
      <div className="forecast">
        <ForecastWeatherData data={data} />
      </div>
    </div>

  )
};

export default ForecastWeatherTitle;
