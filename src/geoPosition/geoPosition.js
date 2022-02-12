import { useState } from 'react';
import getGeoCurrent from '../API/getGeoCurrent';
import geo from './map.svg';

const Geo = ({ onGeo }) => {

  const [dataGeoCurrent, setDataGeoCurrent] = useState({});


  const getPos = () => {
    navigator.geolocation.getCurrentPosition(onSuccess, onError);
  }

  const onSuccess = (pos) => {
    const lat = pos.coords.latitude;
    const lng = pos.coords.longitude;
    getGeo(lat, lng);
  }

  const onError = () => {
    alert('Geolocation is not available');
  }

  const getGeo = async (lat, lng) => {
    try {
      setDataGeoCurrent(null);
      const geoCurrentPos = await getGeoCurrent(lat, lng);
      setDataGeoCurrent(geoCurrentPos);
      console.log(geoCurrentPos);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <button className="button button-geolocation" onClick={getPos}>
      <img src={geo} alt="Geolocation" />
    </button>
  )
};

export default Geo;
