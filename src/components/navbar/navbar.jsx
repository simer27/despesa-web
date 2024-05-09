import icons from "../../styles/icons.js";
import "./navbar.css";

const Navbar =() => {
  return <div className="navbar">
  <div>
    <img className="navbar img" src={icons.logo} />
  </div>

    <div>
    <input className="input" type="text" id="" />
    <button className="btn btn-blue">Buscar</button>
    </div>

    <div className="dashboard"> 
       <div> Total de Gastos</div>
       <div>R$ 5.000,00</div>
    </div>
  </div>

}

export default Navbar;