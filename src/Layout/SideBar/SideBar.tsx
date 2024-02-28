import "./SideBar.scss";
import { Link } from "react-router-dom";
import { CloudSun } from "lucide-react";
import { NotebookPen } from "lucide-react";
import { Home } from "lucide-react";

const SideBar = () => {
  return (
    <div className="sideBar">
      <Link to="/">
        <button className="sideBar__homeBtn">
          <Home strokeWidth={2.5} className="homeIcon" />
        </button>
      </Link>
      <Link to="/weather">
        <button className="sideBar__weatherBtn">
          <CloudSun strokeWidth={2.5} className="cloudSun" />
        </button>
      </Link>
      <Link to="/todo">
        <button className="sideBar__toDoListBtn">
          <NotebookPen strokeWidth={2.5} className="noteBookPen" />
        </button>
      </Link>
    </div>
  );
};

export default SideBar;
