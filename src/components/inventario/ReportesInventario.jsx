// import './App.css';
import logozenu from '../logo-zenu.png'
import foto from '../usuario.png'

import { Link } from "react-router-dom";

function ReportesInventario() {
    const listaNombre = JSON.parse(localStorage.getItem("nombreUsuario"));
  return (
  
    <main className="container-fluid"  style={{ fontFamily:"sans-serif"}}>

    <div className="row vw-100 vh-100">

        <div className="col-12 col-sm-3 col-lg-3" style={{ backgroundColor: "white", borderRadius:"20px" }}>

            <nav className="navbar d-flex flex-column justify-content-center mx-auto vh-95 ">

                <ul className="navbar-nav" style={{ color: "floralwhite" }}>

                    <li className="nav-item">
                        <Link to= "/inventario" >
                            <img className="mx-auto d-block" src= {logozenu} style={{ height:"90px" }} alt="icono de la empresa zenu"/>
                        </Link>
                    </li>

                    <li className="nav-item my-2 text-center " style={{ textDecoration: "none", height:"90px", width:"250px", backgroundColor:"#ffd2bb", borderRadius:"8px" }}>
                        <Link to="/inventario/ingresar" className="col-6 nav-link fs-4 fw-bold my-3" style={{ color:"rgb(48, 2, 2)", width:"250px", height:"50px", }}>
                            Ingresar Materia
                        </Link>
                    </li>

                    <li className="nav-item my-2 text-center" style={{ textSecoration: "none", height: "90px", width: "250px", backgroundColor:"#ffd2bb", borderRadius:"8px" }}>
                        <Link to="/inventario/consultar" className="col-6 nav-link fs-4 fw-bold my-3" style={{ color: "rgb(48, 2, 2)", width: "250px", height:"50px" }}>
                        Consultar Materia
                        </Link>
                    </li>

                    <li className="nav-item my-2 text-center" style={{ textSecoration: "none", height: "90px", width: "250px", backgroundColor:"#ffd2bb", borderRadius:"8px" }}>
                        <Link to="/inventario/reportes" className="col-6 nav-link fs-4 fw-bold my-3" style={{ color: "rgb(48, 2, 2)", width: "250px", height:"50px" }}>
                        Reportes
                        </Link>
                    </li>

                    <div className="nav-item rounded " style={{ textDecoration: "none", height:"90px", width:"250px", paddingTop:"45%"  }}>
                        <Link to="/" className="col-6 nav-link fs-4 fw-bold text-center" style={{ color: "rgb(48, 2, 2)", width: "250px", height: "90px" }}>
                        Logout</Link>
                    </div>


                </ul>


            </nav>
        </div>

        <div className="col-12 col-sm-9 col-lg-9 border border-dark bg-danger" >

            {/* - head del contenido -  */}
            <div className="row mx-auto my-3 d-flex flex-row justify-content-center" style={{marginBottom: "0px"}}>
                
                <h1 className="fw-bold col-12 col-sm-8 col-lg-8 text-start" style={{ color: "white" }}>Reportes</h1>

                <img className="col-6 col-sm-2 col-lg-2" src={foto} style={{ height:"65px", width: "85px" }} alt="user"/>

                <div className="col-6 col-sm-2 col-lg-2 fw-bold fs-4 text-center" style={{ color: "rgb(243, 7, 7)", backgroundColor: "white", borderRadius: "10px", height:"60px" }}>
                    <p className="my-2">{listaNombre}</p>
                </div>

            </div>

            {/* <div className="row mx-auto my-5 d-flex flex-row flex-wrap justify-content-center">
                <div className="card mx-2 my-2" style={{ width: "50rem", backgroundColor: "darkred", color: "white"  }}>
                    <div className="card-body text-center">
                        <h3 className="card-title fw-bold">Reportes</h3>
                    </div>
                </div>
            </div> */}
            <br/><br/><br/>
            {/*- contenido -*/}
            <div className="row mx-auto my-5 d-flex flex-row flex-wrap justify-content-center">
                        
                <div className="card mx-2 my-2" style={{ width: "18rem", backgroundColor: "#ffd2bb", color: "rgb(48, 2, 2)", borderRadius:"8px" }}>
                    <div className="card-body text-center">
                        <h3 className="card-title fw-bold">Materia Prima más vendida</h3>
                    </div>
                </div>
        
                <div className="card mx-2 my-2" style={{ width: "18rem", backgroundColor: "#ffd2bb", color: "rgb(48, 2, 2)", borderRadius:"8px"  }}>
                    <div className="card-body text-center">
                        <h3 className="card-title fw-bold">Pedidos por Despachar</h3>
                    </div>
                </div>
            </div>

            <div className="row mx-auto my-5 d-flex flex-row flex-wrap justify-content-center">
                <div className="card mx-2 my-2" style={{ width: "18rem", backgroundColor: "#ffd2bb", color: "rgb(48, 2, 2)", borderRadius:"8px"  }}>
                    <div className="card-body text-center">
                        <h3 className="card-title fw-bold">Pedidos despachados</h3>
                    </div>
                </div>
            </div>
        </div>
    </div>
        
    </main>
  );
}

export default ReportesInventario;
