import './Footer.scss'
import { Github } from 'lucide-react';


const Footer = () => {
  return (
    <div className='footer__container'>
      <a href='https://github.com/AISimonetta/geolocation' target='_blank'><button className='footer__button'><Github className='footer__icon'/></button></a>
    </div>
  )
}

export default Footer