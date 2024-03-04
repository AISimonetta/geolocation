import "./ForescastCard.scss";
import { ThermometerSun } from "lucide-react";

type ForescastCardProps = {
  maxtemp_c: number;
  mintemp_c: number;
};

const ForescastCard = ({ mintemp_c, maxtemp_c }: ForescastCardProps) => {
  return (
    <div className="forecast">
      <h1 className="forecast__title">
        {" "}
        <ThermometerSun className="forecast__icon" />
        Forecast
      </h1>
      <ul className="forecast__list">
        <li className="forecast__list--item">
          Maximum temperature in celsius for the day: <span>{maxtemp_c}</span>
        </li>
        <li className="forecast__list--item">
          Minimum temperature in celsius for the day: <span>{mintemp_c}</span>
        </li>
      </ul>
    </div>
  );
};

export default ForescastCard;
