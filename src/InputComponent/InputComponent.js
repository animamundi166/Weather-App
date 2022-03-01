import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import Geo from "../geoPosition/geoPosition";
import { getDataCurrent, getDataForecast, resetWarning } from "../store/dataWeather";
import WarningDiv from "../WarningDiv/WarningDiv";

const InputComponent = () => {

  const { isWarning, isLoading } = useSelector(store => store.dataWeather);
  const dispatch = useDispatch();
  const [city, setCity] = useState("");

  const today = new Date().toLocaleDateString();

  const handleInputChange = (e) => {
    dispatch(resetWarning());
    setCity(e.target.value);
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter')
      handleButtonClick();
  }

  const handleButtonClick = () => {
    dispatch(getDataCurrent(city));
    dispatch(getDataForecast(city));
    setCity('');
  }


  return (
    <>
      <h1 className="title">Weather App</h1>
      <h1 className="date">Today: {today}</h1>
      <div className="container">
        <div className="input-container">
          <input
            className="input"
            placeholder="Enter city or country name"
            type="text"
            onChange={handleInputChange}
            onKeyPress={handleKeyPress}
            // onFocus={handleFocus}
            value={city}
          />
          <button
            className="button"
            onClick={handleButtonClick}
            disabled={isLoading}>
            Search
          </button>
          <Geo />
        </div>
        {isWarning && <WarningDiv />}
      </div>
    </>
  )
};

export default InputComponent;
