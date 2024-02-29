import './LocationCard.scss'
import { MapPinned,ArrowRightCircle } from 'lucide-react';

const LocationCard = () => {
  return (
    <div className='location'>
        <h1 className='location__title'><MapPinned />Your Location</h1>
        <ul className='location__list'>
            <li className='location__list--item'><ArrowRightCircle className='location__icon' />City:</li>
            <li className='location__list--item'><ArrowRightCircle className='location__icon'/>Region:</li>
            <li className='location__list--item'><ArrowRightCircle className='location__icon'/>Country:</li>
            <li className='location__list--item'><ArrowRightCircle className='location__icon'/>Local time:</li>
        </ul>
    </div>
  )
}

export default LocationCard