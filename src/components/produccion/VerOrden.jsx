// import './App.css';
import logozenu from '../logo-zenu.png'
import foto from '../usuario.png'

import { Link } from "react-router-dom";

function VerOrden() {
    const listaNombre = JSON.parse(localStorage.getItem("nombreUsuario"));
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
                    <p className="my-2">{listaNombre}</p>
                </div>

            </div>
            

            {/*- contenido -*/}
            <div className="row mx-auto my-5 d-flex flex-row flex-wrap justify-content-center">
                    
                <div className="card mx-2 my-2" style={{ width: "18rem", backgroundColor: "darkred", color: "white"  }}>
                    <div className="card-body text-center">
                        <h5 className="card-title fw-bold">Orden cod: S01</h5>
                        <p className="card-text">Nombre producto: Salchichón</p>
                        <p className="card-text">Cantidad: 100 kilos</p>
                        <p className="card-text">Estado: en proceso</p>
                        <button type="button" className="btn btn-success mx-4" data-bs-toggle="modal" data-bs-target="#editar">Editar</button>
                        <button type="button" className="btn btn-warning">Eliminar</button>
                    </div>
                </div>

                <div className="card mx-2 my-2" style={{ width: "18rem", backgroundColor: "darkred", color: "white"  }}>
                    <div className="card-body text-center">
                        <h5 className="card-title fw-bold">Orden cod: J01</h5>
                        <p className="card-text">Nombre producto: Jamón</p>
                        <p className="card-text">Cantidad: 60 kilos</p>
                        <p className="card-text">Estado: en proceso</p>
                        <button type="button" className="btn btn-success mx-4" data-bs-toggle="modal" data-bs-target="#editar">Editar</button>
                        <button type="button" className="btn btn-warning">Eliminar</button>
                    </div>
                </div>

                <div className="card mx-2 my-2" style={{ width: "18rem", backgroundColor: "darkred", color: "white"  }}>
                    <div className="card-body text-center">
                        <h5 className="card-title fw-bold">Orden cod: B01</h5>
                        <p className="card-text">Nombre producto: bacon</p>
                        <p className="card-text">Cantidad: 30 kils</p>
                        <p className="card-text">Estado: Finalizado</p>
                        <button type="button" className="btn btn-success mx-4" data-bs-toggle="modal" data-bs-target="#editar">Editar</button>
                        <button type="button" className="btn btn-warning">Eliminar</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    
    {/* - modal - */}
    <div className="modal fade" id="editar" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Modificar Orden #Enumero</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            
            {/* - parte del cuerpo - */}
            <div className="modal-body">
                <form>
                    <div className="form-group fw-bold fs-4" style={{ color: "white" }}>

                        <table className="table text-center" style={{ color: "white" }}>
                            
                            <thead>
                                <tr>
                                    <th scope="col">Producto</th>
                                    <th scope="col">Cantidad</th>
                                    <th className="col">Estado</th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr>
                                    <td>
                                        <select className="form-control">
                                            <option>Producto1</option>
                                        </select>
                                    </td>
                                    <td>
                                        <input type="number" className="form-control" id="nombre" placeholder="Digite la cantidad" />
                                    </td>
                                    <td>
                                        <select className="form-control">
                                            <option>En proceso</option>
                                            <option>Terminado</option>
                                        </select>
                                    </td>
                                </tr>
                               
                            </tbody>
                        </table>
                    </div>
                </form>
            </div>
            
            {/* - parte del cuerpo final - */ }
            <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                <button type="button" className="btn btn-danger">Modificar</button>
            </div>
          </div>
        </div>
      </div>
    </main>
    
    );
}

export default VerOrden;
