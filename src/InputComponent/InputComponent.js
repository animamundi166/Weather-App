import { useState } from "react";
import WarningDiv from "../WarningDiv/WarningDiv";

const InputComponent = ({ searchCity, warning }) => {

  const today = new Date().toLocaleDateString();

  const [city, setCity] = useState("");

  const handleInputChange = (e) => {
    setCity(e.target.value);
  }

  const handleKeyPress = (e) => {
    if (e.key === "Enter")
      handleButtonClick();
  }

  const handleButtonClick = () => {
    if (city.trim() === "")
      return;
    searchCity(city);
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
            value={city}
          />
          <button className="button" onClick={handleButtonClick}>Search</button>
        </div>
        {warning && <WarningDiv />}
      </div>
    </>
  )
};

export default InputComponent;