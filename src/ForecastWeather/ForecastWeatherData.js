const ForecastWeatherData = ({ data }) => {

  function forecastDay(item) {
    const date = new Date(item.dt * 1e3);
    const dateDay = `${date.toString().slice(0, 3)}`;
    return dateDay
  }

  return (
    data.list.map(item => (
      <div key={item.sunrise} className="forecast-item" >
        <div className="fotecast-item-date">{forecastDay(item)}</div>
        <div className="fotecast-item-type">{item.weather[0].description}</div>
        <img
          className="forecast-item-icon"
          src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
          alt={item.weather[0].description}
        />
        <div className="forecast-item-temp">{Math.floor(item.temp.min)} °C /  {Math.round(item.temp.max)} °C</div>
      </div >
    ))
  )
};

export default ForecastWeatherData;
