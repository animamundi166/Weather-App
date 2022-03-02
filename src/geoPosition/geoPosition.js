import { useDispatch } from 'react-redux';
import { getGeo, getGeo16 } from '../store/dataWeather';
import geo from './map.svg';

const Geo = () => {

  const dispatch = useDispatch();

  const getPos = () => {
    navigator.geolocation.getCurrentPosition(onSuccess, onError);
  };

  const onSuccess = (pos) => {
    const lat = pos.coords.latitude;
    const lon = pos.coords.longitude;
    dispatch(getGeo({ lat, lon }));
    dispatch(getGeo16({ lat, lon }));
  };

  const onError = () => {
    alert('Geolocation is not available');
  };

  return (
    <button className="button button-geolocation" onClick={getPos}>
      <img src={geo} alt="Geolocation" />
    </button>
  )
};

export default Geo;
