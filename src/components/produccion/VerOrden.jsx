// import './App.css';
import logozenu from '../logo-zenu.png'
import foto from '../usuario.png'
import React, { useEffect,useState} from "react";
import { Link } from "react-router-dom";

function VerOrden() {
    const listaNombre = JSON.parse(localStorage.getItem("nombreUsuario"));
    var [listadoordenes, setListadoordenes] = useState([]);
    useEffect(() => {
        fetch("http://localhost:8081/produccion/listado") 
            .then(res => res.json())
            .then(res => {
                if (res.estado ==="ok")
                    setListadoordenes(res.data);
                    console.log(res.data);

            }).catch(error => console.log(error))
    }, []);

    const eliminar= async(_id)=>{

        await fetch("http://localhost:8081/produccion/eliminar", {
         method: "POST",
         headers: { "content-type": "application/json" },
         body: JSON.stringify({_id})
         }).then(res => res.json())
         .then(res=>{
             if (res.estado === "ok"){
             // alert("Eliminó");
             { window.location.href = "/produccion/listado" }
             }
          })

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
            
                <h1 className="fw-bold col-12 col-sm-8 col-lg-8 text-start" style={{ color: "white" }}>Ordenes de producción</h1>

                <img className="col-6 col-sm-2 col-lg-2" src={foto} style={{ height:"65px", width: "85px" }} alt="user"/>

                <div className="col-6 col-sm-2 col-lg-2 fw-bold fs-4 text-center" style={{ color: "rgb(243, 7, 7)", backgroundColor: "white", borderRadius: "10px", height:"60px" }}>
                    <p className="my-2">{listaNombre}</p>
                </div>

            </div>
            

            {/*- contenido -*/}
            <div className="row mx-auto my-5 d-flex flex-row flex-wrap justify-content-center">

            {listadoordenes.map(m=><div className="card mx-2 my-2" style={{ width: "18rem", backgroundColor: "darkred", color:"white", textAlign: "center" }}>
                <div className="card-body text-center" style={{ textAlign: "center" }}>
                        <p className="card-text">Producto:{m.nombre}</p>
                        <p className="card-text">Cantidad:{m.cantidad}</p>
                        <p className="card-text">Descripcion:{m.estado}</p>
                        
                        {/* <Link to={`/produccion/editar/${m._id}`}> */}
                            <button  type="button" className="btn btn-success mx-4" data-bs-toggle="modal" data-bs-target="#editar">Editar</button> 
                        {/* </Link> */}

                        <button onClick={()=>eliminar(m._id)} type="button" className="btn btn-warning">Eliminar</button>               
                    </div>
                </div>)}             
                
            </div>
        </div>
    </div>  
    </main>
    
    );
}

export default VerOrden;
