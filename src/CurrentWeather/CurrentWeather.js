const CurrentWeather = ({ data }) => {

  function padTo2Digits(num) {
    return String(num).padStart(2, '0');
  }

  const timeBefore = new Date(data.sys.sunrise * 1e3);
  const timeSunrise = `${padTo2Digits(timeBefore.getHours())} : ${padTo2Digits(timeBefore.getMinutes())}`;
  const timeAfter = new Date(data.sys.sunset * 1e3);
  const timeSunset = `${padTo2Digits(timeAfter.getHours())} : ${padTo2Digits(timeAfter.getMinutes())}`;
  const temp = Math.round(data.main.temp);
  const tempMin = Math.floor(data.main.temp_min);
  const tempMax = Math.ceil(data.main.temp_max);
  const visibility = (data.visibility) >= 1000 ? (data.visibility) / 1000 : (data.visibility);


  return (
    <div className="container container-main">
      <div className="main-body">
        <div className="main-info">
          <div className="city">
            <span className="uppercase">{data.name}</span>
            <span className="type">{data.weather[0].description}</span>
          </div>
          <img
            className="icon"
            src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
            alt={data.weather[0].description}
          />
          <div className="temp">
            <div className="temp-value">
              <div className="temp-value-ui">{temp}</div>
              <div className="temp-controls">
                <button className="temp-type temp-type-c temp-type-active">°C</button>
              </div>
            </div>
            <div className="temp-value-minmax">(min. {tempMin} °C / max. {tempMax} °C)</div>
          </div>
        </div>
        <div className="info">
          <div className="info-row">
            <div className="info-row-label">Wind</div>
            <div className="info-row-value info-row-value-wind">{data.wind.speed} m/s</div>
          </div>
          <div className="info-row">
            <div className="info-row-label">Humidity</div>
            <div className="info-row-value info-row-value-humidity">{data.main.humidity}</div>
          </div>
          <div className="info-row">
            <div className="info-row-label">Pressure</div>
            <div className="info-row-value info-row-value-pressure">{data.main.pressure}</div>
          </div>
          <div className="info-row">
            <div className="info-row-label">Cloud</div>
            <div className="info-row-value info-row-value-cloud">{data.clouds.all} %</div>
          </div>
          <div className="info-row">
            <div className="info-row-label">Sunrise</div>
            <div className="info-row-value info-row-value-sunrise">{timeSunrise}</div>
          </div>
          <div className="info-row">
            <div className="info-row-label">Sunset</div>
            <div className="info-row-value info-row-value-sunset">{timeSunset}</div>
          </div>
          <div className="info-row">
            <div className="info-row-label">Visibility</div>
            <div className="info-row-value info-row-value-visibility">{visibility} m</div>
          </div>
          <div className="info-row">
            <div className="info-row-label">Rain</div>
            <div className="info-row-value info-row-value-rain">{data.rain ? data.rain["1h"] : "-"} mm</div>
          </div>
        </div>
      </div>
    </div>

  )
};

export default CurrentWeather;
