import Sidebar from '../../components/sidebar/sidebar.jsx';
import Navbar from '../../components/navbar/navbar.jsx';
import "./home.css";
import icons from '../../styles/icons.js';
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


  const Home = () => {

    const navigate = useNavigate();

    let dados = [
      {id: "001", icon: <img src={icons.carro} />, categoria: "Carro", descricao: "Pagamento IPVA", valor: 2500 , data: "05-05-2024"},
      {id: "002", icon: <img src={icons.casa_familia} />, categoria: "Casa", descricao: "Condominio", valor: 620 , data: "30-04-2024" },
      {id: "003", icon: <img src={icons.bicicleta} />, categoria: "Lazer", descricao: "Parque ecológico", valor: 50 , data: "02-05-2024" },
      {id: "004", icon: <img src={icons.estudo} />, categoria: "Cultura Inglesa", descricao: "Curso de Ingles", valor: 750 , data: "05-05-2024" },
      {id: "005", icon: <img src={icons.viagem} />, categoria: "Viagem", descricao: "Férias em Caldas Novas", valor: 2900 , data: "20-04-2024" },
      {id: "006", icon: <img src={icons.mercado} />, categoria: "Mercado", descricao: "Compra do Mês", valor: 920 , data: "05-05-2024" },
    ];

  const [despesas, setDespesas] = useState([]);

  const ListarDespesa = () => {
    setDespesas(dados);
  }

  const OpenDespesa = (id) => {
    navigate("/despesa/" + id);
    console.log(id);
  }

  useEffect(() => {
    ListarDespesa();
  }, []);

  return <>
  <Sidebar />
  <Navbar />

    <div className="container-home">
      <div className="title-home">
        <h1>Despesas</h1>
        <button onClick={() => navigate("/despesa/add")} className="btn btn-green">Adicionar Despesa</button>
      </div>

      <div className="box-despesas">
        <table>
          <thead className="color-indice">
            <tr>
              <th>Id. Despesa</th>
              <th>Descrição</th>
              <th>Categoria</th>
              <th className="text-right">Valor</th>
              <th className="text-right">Data</th>
              <th></th>
            </tr>
          </thead>
          <tbody className="color-grid">
          {
          despesas.map((desp) => {
              return <tr>
              <td>{desp.id}</td>
              <td>{desp.descricao}</td>
              <td>{desp.categoria}</td>
              <td className="text-right">R$ {desp.valor.toLocaleString('pt-BR',{minimumFractionDigits: 2})}</td>
              <td className="text-right">{desp.data}</td>
              <td className="text-right">
                <button onClick={() => OpenDespesa(desp.id)} className="btn btn-blue">
                  <img  className="icon-sm" src={icons.editar} />
                </button>
                <button className="btn btn-red ml-10">
                  <img className="icon-sm" src={icons.deletar} />
                </button>
              </td>
            </tr>
            })
          }
          </tbody>
        </table>
      </div>
    </div>
  </>
}

export default Home;