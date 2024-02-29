import "./WeatherCard.scss";
import { SunSnow, ArrowRightCircle } from 'lucide-react';

const WeatherCard = () => {
  return (
    <div>
      <div className="weather">
        <h1 className="weather__title">
          <SunSnow className="weather__icon" />
          Weather in Your Location
        </h1>
        <ul className="weather__list">
          <li className="weather__list--item">
            <ArrowRightCircle className="weather__icon" />
            Temperature in celsius:
          </li>
          <li className="weather__list--item">
            <ArrowRightCircle className="weather__icon" />
            Weather condition text:
          </li>
          <li className="weather__list--item">
            <ArrowRightCircle className="weather__icon" />
            Weather icon url:
          </li>
          <li className="weather__list--item">
            <ArrowRightCircle className="weather__icon" />
            Wind speed in miles per hour:
          </li>
        </ul>
      </div>
    </div>
  );
};

export default WeatherCard;
