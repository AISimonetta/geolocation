import { Link } from "react-router-dom";
import "./Home.scss";
import { CloudSun, NotebookPen, MapPin } from "lucide-react";
import Footer from "../../Layout/Footer/Footer";
import Header from "../../Layout/Header/Header";


const Home = () => {

  const greeting = () => {
    let currentDay = new Date();
    let currentHour = currentDay.getHours();

    if (currentHour < 12) {
      return "Good morning Sunshine!"
    } else if (currentHour < 18) {
      return "Good afternoon!"
    } else if (currentHour >= 18) {
      return "Good evening!"; 
    }
  }

  return (
    <div className="home__linear-gradient">
      <Header/>
      <div className="home">
        <h1 className="greeting">{greeting()}</h1>
        <Link to="/userlocation" className="icon">
          <button className="home__locationBtn">
            <MapPin strokeWidth={3} className="mapPin" />
            <br></br>My Location
          </button>
        </Link>
        <Link to="/weather" className="icon">
          <button className="home__weatherBtn">
            <CloudSun strokeWidth={3.5} className="cloudSun" />
            <br></br>Today's weather
          </button>
        </Link>
        <Link to="/todo" className="icon">
          <button className="home__toDoListBtn">
            <NotebookPen strokeWidth={3} className="noteBookPen" />
            <br></br>Today's to do list
          </button>
        </Link>
      </div>
      <Footer/>
    </div>
  );
};

export default Home;
