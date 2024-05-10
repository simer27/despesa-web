import { Link } from "react-router-dom";
import "./sidebar.css";
import icons from "../../styles/icons.js";


const Sidebar = () => {
  return <div className="sidebar">
    <Link to="/"><img className="icon" src={icons.home} /></Link>
    <Link to="/despesa/add"><img className="icon" src={icons.despesa} /></Link>
    
  </div>
}

export default Sidebar;