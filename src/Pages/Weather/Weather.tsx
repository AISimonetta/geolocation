import SideBar from '../../Layout/SideBar/SideBar'
import WeatherCard from '../../Container/WeatherCard/WeatherCard'
import Footer from '../../Layout/Footer/Footer'
import Header from '../../Layout/Header/Header'
import ForescastCard from '../../Container/ForecastCard/ForescastCard'
import './Weather.scss'

const Weather = () => {
  return (
    <div>
      <Header />
      <SideBar/>
      <div className='weather__container'>
        <WeatherCard/>
        <ForescastCard/>
      </div>
      <Footer/>
      </div>
  )
}

export default Weather