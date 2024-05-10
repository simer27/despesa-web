import icons from "../../styles/icons.js";
import "./navbar.css";
import { useState } from "react";

const Navbar =(props) => {

const [filtro, setFiltro] = useState("");

  return <div className="navbar">
  <div>
    <img className="navbar img" src={icons.logo} />
  </div>

    <div>
      {
        props.search && <>
        <input onChange={(e) => setFiltro(e.target.value)} className="input" type="text" id="" />
        <button onClick={() => props.onClickSearch(filtro)} className="btn btn-blue">Buscar</button>
        </>
      }
    </div>

    <div className="dashboard">
      {
        props.total &&<>
        <div className="indice-texto"> Total de Gastos</div>
        <div className="indice-total">R$ {props.total.toLocaleString('pt-BR',{minimumFractionDigits: 2})}</div>
        </>
      }
    </div>
  </div>

}

export default Navbar;