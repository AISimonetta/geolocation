import "./SideBar.scss";
import { Link, useLocation } from "react-router-dom";
import { CloudSun, NotebookPen, Home, MapPin } from "lucide-react";

const SideBar = () => {
  const location = useLocation();

  return (
    <div className="sideBar">
      <Link to="/">
        <button className="sideBar__homeBtn">
          <Home strokeWidth={2.5} className="homeIcon" />
        </button>
      </Link>

      {location.pathname !== "/userlocation" && (
        <Link to="/userlocation" className="icon">
          <button className="sideBar__locationBtn">
            <MapPin strokeWidth={2.5} className="mapPin" />
          </button>
        </Link>
      )}

      {location.pathname !== "/weather" && (
        <Link to="/weather">
          <button className="sideBar__weatherBtn">
            <CloudSun strokeWidth={2.5} className="cloudSun" />
          </button>
        </Link>
      )}

      {location.pathname !== "/todo" && (
        <Link to="/todo">
          <button className="sideBar__toDoListBtn">
            <NotebookPen strokeWidth={2.5} className="noteBookPen" />
          </button>
        </Link>
      )}
    </div>
  );
};

export default SideBar;
