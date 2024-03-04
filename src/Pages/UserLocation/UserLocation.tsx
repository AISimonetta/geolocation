import "./UserLocatio.scss";
import { useState, useEffect } from "react";
import SideBar from "../../Layout/SideBar/SideBar";
import Header from "../../Layout/Header/Header";
import LocationCard from "../../Container/LocationCard/LocationCard";
import Footer from "../../Layout/Footer/Footer";
import { LocationType } from "../../Types/LocationType";

const UserLocation = () => {
  const [location, setlocation] = useState<LocationType | null>(null);

  const success = (position: GeolocationPosition) => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    getLocation(latitude, longitude);
  };

  const error = () => {
    console.log("Unable to retrieve your location");
  };

  const getLocation = async (latitude: number, longitude: number) => {
    try {
      const uniqueApiKey = "f2f1a8737e2f4a47b2a110826242802";
      const locationResponse = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=${uniqueApiKey}&q=${latitude},${longitude}`
        );
      const locationData = await locationResponse.json();
      console.log("locationData :", locationData);

      setlocation({
        name: locationData.location.name,
        region: locationData.location.region,
        country: locationData.location.country,
        localtime: locationData.location.localtime,
      });

      console.log(locationData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success, error);
  }, []);

  if (!location) {
    return <div>Data not found</div>;
  }

  return (
    <div className="userLocation">
      <Header />
      <SideBar />
      <LocationCard
        name={location.name}
        region={location.region}
        country={location.country}
        localtime={location.localtime}
      />
      <Footer />
    </div>
  );
};

export default UserLocation;
