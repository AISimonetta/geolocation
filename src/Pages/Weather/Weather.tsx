import { useState , useEffect} from 'react'
import SideBar from '../../Layout/SideBar/SideBar'
import WeatherCard from '../../Container/WeatherCard/WeatherCard'
import Footer from '../../Layout/Footer/Footer'
import Header from '../../Layout/Header/Header'
import ForescastCard from '../../Container/ForecastCard/ForescastCard'
import './Weather.scss'
import { ForecastType } from '../../Types/ForecastType'

const Weather = () => {
  const [weatherForecast, setWeatherForecast] = useState<ForecastType | null>(null);

  const getweatherForecast = async () => {
    try {
      const uniqueApiKey = 'f2f1a8737e2f4a47b2a110826242802';
      const forecastResponse = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=${uniqueApiKey}&q=07112&days=1`);
      const forecastData = await forecastResponse.json();
      console.log(forecastData);

      setWeatherForecast({
        maxtemp_c: forecastData.forecast.forecastday[0].day.maxtemp_c,
        mintemp_c: forecastData.forecast.forecastday[0].day.mintemp_c,
      }
      );

    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    getweatherForecast();
  }, []);

  return (
    <div>
      <Header />
      <SideBar/>
      <div className='weather__container'>
        <WeatherCard/>
        {weatherForecast ? (
        <ForescastCard maxtemp_c={weatherForecast?.maxtemp_c} mintemp_c= {weatherForecast?.mintemp_c}  />) : <h6>Loading</h6>}
      </div>
      <Footer/>
      </div>
  )
}

export default Weather

// console:
// forecast
// : 
// forecastday
// : 
// Array(1)
// 0
// : 
// astro
// : 
// {sunrise: '06:30 AM', sunset: '05:49 PM', moonrise: 'No moonrise', moonset: '09:02 AM', moon_phase: 'Waning Gibbous', …}
// date
// : 
// "2024-03-01"
// date_epoch
// : 
// 1709251200
// day
// : 
// avghumidity
// : 
// 37
// avgtemp_c
// : 
// 3.1
// avgtemp_f
// : 
// 37.6
// avgvis_km
// : 
// 10
// avgvis_miles
// : 
// 6
// condition
// : 
// {text: 'Sunny', icon: '//cdn.weatherapi.com/weather/64x64/day/113.png', code: 1000}
// daily_chance_of_rain
// : 
// 0
// daily_chance_of_snow
// : 
// 0
// daily_will_it_rain
// : 
// 0
// daily_will_it_snow
// : 
// 0
// maxtemp_c
// : 
// 7.3
// maxtemp_f
// : 
// 45.1
// maxwind_kph
// : 
// 16.9
// maxwind_mph
// : 
// 10.5
// mintemp_c
// : 
// -0.4
// mintemp_f
// : 
// 31.3
// totalprecip_in
// : 
// 0
// totalprecip_mm
// : 
// 0
// totalsnow_cm
// : 
// 0
// uv
// : 
// 4
// [[Prototype]]
// : 
// Object
// hour
// : 
// (24) [{…}, {…