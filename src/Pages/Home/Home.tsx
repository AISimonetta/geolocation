import { Link } from "react-router-dom";
import "./Home.scss";
import { MapPin } from "lucide-react";
import { CloudSun } from "lucide-react";
import { NotebookPen } from "lucide-react";

const Home = () => {
  return (
    <div className="home home__linear-gradient">
      <Link to="userlocation" className="icon">
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
  );
};

export default Home;
