// import './App.css';
import logozenu from '../logo-zenu.png'
import foto from '../usuario.png'

import { Link } from "react-router-dom";

function Produccion() {
  return (
  
    <main className="container-fluid"  style={{ fontFamily:"sans-serif"}}>
    
    <div className="row vw-100 vh-100">
        
    <div className="col-12 col-sm-3 col-lg-3" style={{ backgroundColor: "white", borderRadius:"20px" }}>

<nav className="navbar d-flex flex-column justify-content-center mx-auto vh-95 ">

    <ul className="navbar-nav" style={{ color: "floralwhite" }}>

        <li className="nav-item">
            <Link to= "/produccion" >
                <img className="mx-auto d-block" src= {logozenu} style={{ height:"90px" }} alt="icono de la empresa zenu"/>
            </Link>

        </li>

        <li className="nav-item my-2 text-center " style={{ textDecoration: "none", height:"90px", width:"250px", backgroundColor:"#ffd2bb", borderRadius:"8px" }}>
            <Link to="/produccion/crear" className="col-6 nav-link fs-4 fw-bold my-3" style={{ color:"rgb(48, 2, 2)", width:"250px", height:"50px", }}>
                Crear Producto
            </Link>
        </li>

        <li className="nav-item my-2 text-center" style={{ textSecoration: "none", height: "90px", width: "250px", backgroundColor:"#ffd2bb", borderRadius:"8px" }}>
            <Link to="/produccion/orden" className="col-6 nav-link fs-4 fw-bold my-3" style={{ color: "rgb(48, 2, 2)", width: "250px", height:"50px" }}>
            Crear Orden
            </Link>
        </li>

        <li className="nav-item my-2 text-center" style={{ textSecoration: "none", height: "90px", width: "250px", backgroundColor:"#ffd2bb", borderRadius:"8px" }}>
            <Link to="/produccion/listado" className="col-6 nav-link fs-4 fw-bold my-3" style={{ color: "rgb(48, 2, 2)", width: "250px", height:"50px" }}>
            Ver Ordenes
            </Link>
        </li>

        <li className="nav-item my-2 text-center" style={{ textSecoration: "none", height: "90px", width: "250px", backgroundColor:"#ffd2bb", borderRadius:"8px" }}>
            <Link to="" className="col-6 nav-link fs-4 fw-bold my-3" style={{ color: "rgb(48, 2, 2)", width: "250px", height:"50px" }}>
            Reportes
            </Link>
        </li>

        <div className="nav-item rounded " style={{ textDecoration: "none", height:"90px", width:"250px", paddingTop:"5%"  }}>
            <Link to="/" className="col-6 nav-link fs-4 fw-bold text-center" style={{ color: "rgb(48, 2, 2)", width: "250px", height: "90px" }}>
            Logout</Link>
        </div>

    </ul>

</nav>
</div>
        
        <div className="col-12 col-sm-9 col-lg-9 border border-dark bg-danger" >
            {/* - head del contenido -  */}
            <div className="row mx-auto my-3 d-flex flex-row justify-content-center" style={{marginBottom: "0px"}}>
            
                <h1 className="fw-bold col-12 col-sm-8 col-lg-8 text-start" style={{ color: "white" }}>Usuario Produccion</h1>

                <img className="col-6 col-sm-2 col-lg-2" src={foto} style={{ height:"65px", width: "85px" }} alt="user"/>

                <div className="col-6 col-sm-2 col-lg-2 fw-bold fs-4 text-center" style={{ color: "rgb(243, 7, 7)", backgroundColor: "white", borderRadius: "10px", height:"60px" }}>
                    <p className="my-2">Camilo</p>
                </div>

            </div>
            
            
        </div>
    </div>
    </main>
  );
}

export default Produccion;
