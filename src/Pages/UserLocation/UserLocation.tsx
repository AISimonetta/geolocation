import './UserLocatio.scss'
import SideBar from '../../Layout/SideBar/SideBar'
import Header from '../../Layout/Header/Header'
import LocationCard from '../../Container/LocationCard/LocationCard'
import Footer from '../../Layout/Footer/Footer'

const UserLocation = () => {
  return (
    <div>
      <Header />
      <SideBar/>
      <LocationCard/>
      <Footer />
    </div>
  )
}

export default UserLocation