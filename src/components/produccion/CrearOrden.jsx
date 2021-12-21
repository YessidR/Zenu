import logozenu from '../logo-zenu.png'
import foto from '../usuario.png'
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

export function Orden() {
    const listaNombre = JSON.parse(localStorage.getItem("nombreUsuario"));
    const [ListadoProductos, setListadoProductos] = useState([]);
    const productoRef = useRef();
    const cantidadRef = useRef();
    const estadoRef = useRef();

    useEffect(() => {
        fetch("http://localhost:8081/produccion/consultar")
            .then(res => res.json())
            .then(res => {
                if (res.estado === "ok")
                    setListadoProductos(res.data);
            }).catch(error => console.log(error))
    }, []);

    function crearOrden() {
    const producto =  productoRef.current.value;
    const cantidad = cantidadRef.current.value;
    const estado = estadoRef.current.value;
    const combo = document.getElementById("sproducto");
    const selected = combo.options[combo.selectedIndex].text;
    const nombre = selected;

    fetch("http://localhost:8081/produccion/crearOrden", {
            headers: { "content-type": "application/json" },
            method: "POST",
            body: JSON.stringify({ producto, nombre, cantidad, estado})
        }).then(res => res.json())
            .then(res => {
                alert(res.msg);
            }).catch(error => console.log(error))
    }

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
            <Link to="/produccion/reportes" className="col-6 nav-link fs-4 fw-bold my-3" style={{ color: "rgb(48, 2, 2)", width: "250px", height:"50px" }}>
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
            
                <h1 className="fw-bold col-12 col-sm-8 col-lg-8 text-start" style={{ color: "white" }}>Crear orden de producción</h1>

                <img className="col-6 col-sm-2 col-lg-2" src={foto} style={{ height:"65px", width: "85px" }} alt="user"/>

                <div className="col-6 col-sm-2 col-lg-2 fw-bold fs-4 text-center" style={{ color: "rgb(243, 7, 7)", backgroundColor: "white", borderRadius: "10px", height:"60px" }}>
                    <p className="my-2">{listaNombre}</p>
                </div>

            </div>
            

            {/*- contenido -*/}
            <div className="row mx-auto my-5 d-flex flex-row justify-content-center">
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
                                            <select id="sproducto" ref={productoRef} className="form-control">
                                            <option value="">-- Seleccione --</option>
                                            {
                                            ListadoProductos.map(p => <option key={p._id} value={p._id}>{p.nombre}</option>)
                                            }
                                            </select>
                                        </td>
                                        <td>
                                            <input type="number" className="form-control" id="nombre" placeholder="Digite la cantidad" ref={cantidadRef} />
                                        </td>
                                        <td>
                                            <select ref={estadoRef} className="form-control">
                                            <option value="">-- Seleccione --</option>
                                            <option value="En proceso">En proceso</option>
                                            <option value="Terminado">Terminado</option>
                                                
                                            </select>
                                        </td>
                                    </tr>
                                   
                                </tbody>
                            </table>

                        <div className="form-group" style={{ textAlign:"center", paddingTop:"10px" }} >
                            <button type="button" className="fw-bold" onClick={crearOrden} style= {{ border: "none", backgroundColor: "darkred", color: "white", borderRadius: "10px", height: "40px", width: "200px" }} >Crear Orden</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
    </main>
  );
}

export default Orden;