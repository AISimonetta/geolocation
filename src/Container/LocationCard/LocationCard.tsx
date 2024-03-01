import './LocationCard.scss'
import { MapPinned,ArrowRightCircle } from 'lucide-react';

type LocationCardProps = {
  name :string;
  region: string;
  country: string;
  localtime: string;
}

const LocationCard = ({name, region, country, localtime }:LocationCardProps) => {
  return (
    <div className='location'>
        <h1 className='location__title'><MapPinned className='mapPinned'/>Your Location</h1>
        <ul className='location__list'>
            <li className='location__list--item'><ArrowRightCircle className='location__icon' />City: <span>{name}</span></li>
            <li className='location__list--item'><ArrowRightCircle className='location__icon'/>Region: <span>{region}</span></li>
            <li className='location__list--item'><ArrowRightCircle className='location__icon'/>Country: <span>{country}</span></li>
            <li className='location__list--item'><ArrowRightCircle className='location__icon'/>Local time: <span>{localtime}</span></li>
        </ul>
    </div>
  )
}

export default LocationCard