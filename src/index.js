import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


// import Main from './components/Main';
import Login from './components/Login.jsx';
import DashboardAdmin from './components/administrador/DashboardAdmin.jsx';
import DashboardRegistrar from './components/administrador/DashboardRegistrar.jsx';

import Inventario from './components/inventario/Inventario.jsx';
import IngresarMat from './components/inventario/IngresarMat.jsx'
import ConsultarMat from './components/inventario/ConsultarMat.jsx';
import EditarMat from './components/inventario/EditarMat.jsx';
import ReportesInventario from './components/inventario/ReportesInventario.jsx';

import Produccion from './components/produccion/Produccion.jsx';
import IngresarProd from './components/produccion/IngresarProd.jsx';
import CrearOrden from './components/produccion/CrearOrden.jsx';
import VerOrden from './components/produccion/VerOrden.jsx';
import ReportesProduccion from './components/produccion/ReportesProduccion.jsx';



import reportWebVitals from './reportWebVitals';

import { BrowserRouter as Router, Route, Routes} from "react-router-dom";

const tipoUsuario = JSON.parse(localStorage.getItem("tipoUsuario")); 

// import logozenu from '../logo-zenu.png'
// import foto from '../usuario.png'
// import React, { useEffect, useState } from "react";



// import { Link } from "react-router-dom";

// function ConsultarMat() {
//     const [listadomaterias, setListadomaterias] = useState([]);
//     useEffect(() => {
//         fetch("http://localhost:8082/inventario/consultar")
//             .then(res => res.json())
//             .then(res => {
//                 if (res.estado ==="ok")
//                     setListadomaterias(res.data);
//             }).catch(error => console.log(error))
//     }, []);


if (tipoUsuario === "administrador") {
  ReactDOM.render(
    <React.StrictMode>
      <Router>
        <Routes>

          <Route path="/" element={<Login/>} />
          
          <Route path="/dashboard" element={<DashboardAdmin />} />
          <Route path="/dashboard/registrar" element={<DashboardRegistrar />} />
            
          <Route path="/inventario" element={<Inventario/>} />
          <Route path="/inventario/ingresar" element={<IngresarMat/>} />
          <Route path="/inventario/consultar" element={<ConsultarMat/>} />
          <Route path="/inventario/editar" element={<EditarMat/>} />
          <Route path="/inventario/reportes" element={<ReportesInventario/>} />
          
          <Route path="/produccion" element={<Produccion/>} />
          <Route path="/produccion/crear" element={<IngresarProd/>} />
          <Route path="/produccion/orden" element={<CrearOrden/>} />
          <Route path="/produccion/listado" element={<VerOrden/>} />
          <Route path="/produccion/reportes" element={<ReportesProduccion/>} />
          
        </Routes>
      </Router>
    </React.StrictMode>,
    document.getElementById('root')
  ) 
} else if (tipoUsuario === "inventario") {
  ReactDOM.render(
    <React.StrictMode>
      <Router>
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/inventario" element={<Inventario/>} />
          <Route path="/inventario/ingresar" element={<IngresarMat/>} />
          <Route path="/inventario/consultar" element={<ConsultarMat/>} />
          
          <Route path="/inventario/editar" element={<EditarMat/>} />
          <Route path="/inventario/reportes" element={<ReportesInventario/>} />
        </Routes>
      </Router>
    </React.StrictMode>,
    document.getElementById('root')
  )
} else if (tipoUsuario === "produccion") {
  ReactDOM.render(
    <React.StrictMode>
      <Router>
        <Routes>         
          <Route path="/" element={<Login/>} />
          <Route path="/produccion" element={<Produccion/>} />
          <Route path="/produccion/crear" element={<IngresarProd/>} />
          <Route path="/produccion/orden" element={<CrearOrden/>} />
          <Route path="/produccion/listado" element={<VerOrden/>} />
          <Route path="/produccion/reportes" element={<ReportesProduccion/>} />
        </Routes>
      </Router>
    </React.StrictMode>,
    document.getElementById('root')
  )
} 


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
