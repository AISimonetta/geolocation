import './ForescastCard.scss'
import { ThermometerSun } from 'lucide-react';


const ForescastCard = () => {
  return (
    <div className='forecast'>
        <h1 className='forecast__title'> <ThermometerSun className='forecast__icon'/>
 Forecast</h1>
        <ul className='forecast__list'>
            <li className='forecast__list--item' >Maximum temperature in celsius for the day:</li>
            <li className='forecast__list--item'>Minimum temperature in celsius for the day:</li>
        </ul>
    </div>
  )
}

export default ForescastCard