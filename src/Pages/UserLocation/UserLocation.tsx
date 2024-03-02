import './UserLocatio.scss'
import { useState, useEffect } from 'react'
import SideBar from '../../Layout/SideBar/SideBar'
import Header from '../../Layout/Header/Header'
import LocationCard from '../../Container/LocationCard/LocationCard'
import Footer from '../../Layout/Footer/Footer'
import { LocationType } from '../../Types/LocationType'

const UserLocation = () => {

const [location, setlocation] = useState<LocationType | null>(null);

///it has identify user locaction and display data accordingly. change London for current location
const getLocation = async () => {
  try {
    const uniqueApiKey = 'f2f1a8737e2f4a47b2a110826242802';
    const locationResponse = await fetch(`https://api.weatherapi.com/v1/current.json?key=${uniqueApiKey}&q=location`);
    const locationData = await locationResponse.json();

    setlocation({
      name: locationData.location.name,
      region: locationData.location.region,
      country: locationData.location.country,
      localtime: locationData.location.localtime,
    });
    console.log(locationData);

  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

useEffect(() => {
  getLocation();
}, []);

if (!location) {
  return <div>Data not found</div>;
}

  return (
    <div>
      <Header />
      <SideBar/>
      <LocationCard name={location.name} region={location.region} country={location.country} localtime={location.localtime}/>
      <Footer />
    </div>
  )
}

export default UserLocation