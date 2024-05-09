import { useNavigate , useParams} from "react-router-dom";
import Sidebar from '../../components/sidebar/sidebar';
import Navbar from '../../components/navbar/navbar.jsx';
import "./cad-despesa.css";
import { useState } from "react";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { format } from 'date-fns';

const Despesa = () => {

const{idUrl} = useParams();
  const navigate = useNavigate();
  const[valor, setValor] = useState(0);
  const[descricao, setDescricao] = useState("");
  const[categoria, setCategoria] = useState("");
  const [selectedDate, setSelectedDate] = useState(new Date());
  

  const SalvarDados = () => {
    //navigate("/");

    console.log(valor);
    console.log(descricao);
    console.log(categoria);
    console.log(format(selectedDate, 'dd-MM-yyyy'));
  }

  const onChange = (date) => {
    setSelectedDate(date);
  };


  return <>
      <Sidebar />
      <Navbar />

      <div className="container-despesa">
        <div className="box-despesa-cad">

        {
          idUrl == "add" ?  <h1>Nova Despesa</h1> : <h1>Editar Despesa</h1>
        }

          <div className="input-group">
            <p>Valor</p>
            <input type="text" className="input input-lg w100" id="valor"
            onChange={(e) => setValor(e.target.value)} />
          </div>

          <div className="input-group">
            <p>Descrição</p>
            <input type="text" className="input w100" id="descricao"
              onChange={(e) => setDescricao(e.target.value)}
            />
          </div>

          <div className="input-group">
            <p>Categoria</p>
            <select id="categoria" className="input w100" defaultValue=""
            onChange={(e) => setCategoria(e.target.value)}>
            <option value="" disabled hidden>Selecione</option>
              <option value="Carro">Carro</option>
              <option value="Casa">Casa</option>
              <option value="Educação">Educação</option>
              <option value="Lazer">Lazer</option>
              <option value="Mercado">Mercado</option>
              <option value="Viagem">Viagem</option>
            </select>
          </div>
          <div className="input-group">
          <div>
      <p>Selecione uma data:</p>
      <Calendar
        onChange={onChange}
        value={selectedDate}
      />
    </div>
          </div>

          <div className="btn-group text-right">
            <button onClick={() => navigate("/")} className="btn btn-red-outline">Cancelar</button>
            <button onClick={SalvarDados} className="btn btn-blue ml-20">Salvar</button>
          </div>
        </div>
      </div>
  </>
}

export default Despesa;