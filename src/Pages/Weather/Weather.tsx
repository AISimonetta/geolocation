import { useState, useEffect } from 'react';
import SideBar from '../../Layout/SideBar/SideBar';
import WeatherCard from '../../Container/WeatherCard/WeatherCard';
import Footer from '../../Layout/Footer/Footer';
import Header from '../../Layout/Header/Header';
import ForescastCard from '../../Container/ForecastCard/ForescastCard';
import './Weather.scss';
import { ForecastType } from '../../Types/ForecastType';
import { WeatherType } from '../../Types/WeatherType';

const Weather = () => {
  const [weatherForecast, setWeatherForecast] = useState<ForecastType | null>(null);
  const [currentWeather, setCurrentWeather] = useState<WeatherType | null>(null);

  const getWeatherForecast = async () => {
    try {
      const uniqueApiKey = 'f2f1a8737e2f4a47b2a110826242802';
      const forecastResponse = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=${uniqueApiKey}&q=07112&days=1`);
      const forecastData = await forecastResponse.json();
      console.log(forecastData);

      setWeatherForecast({
        maxtemp_c: forecastData.forecast.forecastday[0].day.maxtemp_c,
        mintemp_c: forecastData.forecast.forecastday[0].day.mintemp_c,
      });
    } catch (error) {
      console.error('Error fetching weather forecast:', error);
    }
  };

  const getCurrentWeather = async () => {
    try {
      const uniqueApiKey = 'f2f1a8737e2f4a47b2a110826242802';
      const currentWeatherResponse = await fetch(`http://api.weatherapi.com/v1/current.json?key=${uniqueApiKey}&q=07112`);
      const currentWeatherData = await currentWeatherResponse.json();
      console.log(currentWeatherData);

      setCurrentWeather({
        temp_c: currentWeatherData.current.temp_c,
        condition: {
          text: currentWeatherData.current.condition.text,
          icon: currentWeatherData.current.condition.icon,
          code: currentWeatherData.current.condition.code,
        },
        wind_mph: currentWeatherData.current.wind_mph,
      });
    } catch (error) {
      console.error('Error fetching current weather:', error);
    }
  };

  useEffect(() => {
    getWeatherForecast();
    getCurrentWeather();
  }, []);

  return (
    <div>
      <Header />
      <SideBar />
      <div className='weather__container'>
        {currentWeather && (
          <WeatherCard
            temp_c={currentWeather.temp_c}
            condition={currentWeather.condition}
            wind_mph={currentWeather.wind_mph}
          />
        )}
        {weatherForecast ? (
          <ForescastCard maxtemp_c={weatherForecast?.maxtemp_c} mintemp_c={weatherForecast?.mintemp_c} />
        ) : (
          <h6>Loading</h6>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Weather;
