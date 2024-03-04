import "./WeatherCard.scss";
import { SunSnow, ArrowRightCircle } from 'lucide-react';

type WeatherCardProps = {
  temp_c: number;
  condition: { text: string; icon: string; };
  wind_mph: number;
};

const WeatherCard = ({ temp_c, condition, wind_mph }: WeatherCardProps) => {
  return (
    <div>
      <div className="weather">
        <h1 className="weather__title">
          <SunSnow className="weather__icon" />
          The Weather in Your Location
        </h1>
        <ul className="weather__list">
          <li className="weather__list--item">
            <ArrowRightCircle className="weather__icon--list" />
            Temperature in celsius: <span>{temp_c} Celsius </span>
          </li>
          <li className="weather__list--item">
            <ArrowRightCircle  className="weather__icon--list" />
            Weather condition: <span>{condition.text}</span>
            <img src={condition.icon} alt="weather icon" />
          </li>
          <li className="weather__list--item">
            <ArrowRightCircle className="weather__icon--list" />
            Wind speed in miles per hour: <span>{wind_mph}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default WeatherCard;