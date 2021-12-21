import logozenu from '../logo-zenu.png'
import foto from '../usuario.png'
import React, { useEffect,useState} from "react";

import { Link } from "react-router-dom";

function DashboardUsuarios() {
    var [listadoUsuarios, setListadoUsuarios] = useState([]);
    useEffect(() => {
        fetch("http://localhost:8081/dashboard/usuarios")
            .then(res => res.json())
            .then(res => {
                if (res.estado ==="ok")
                setListadoUsuarios(res.data);
                    console.log(res.data);
                    
            }).catch(error => console.log(error))
    }, []);

    const eliminar= async(user)=>{
       
        await fetch(`http://localhost:8081/dashboard/eliminar`, {
         method: "POST",
         headers: { "content-type": "application/json" },
         body: JSON.stringify({user})
         }).then(res => res.json())
         .then(res=>{
             if (res.estado === "ok"){
             // alert("Eliminó");
             { window.location.href = "/dashboard/usuarios" }
             }
          })  
         
 }

    const listaNombre = JSON.parse(localStorage.getItem("nombreUsuario")); 
  return (
  
    <main className="container-fluid"  style={{ fontFamily:"sans-serif"}}>
    
    <div className="row vw-100 vh-100">
        
    <div className="col-12 col-sm-3 col-lg-3" style={{ backgroundColor: "white", borderRadius:"20px" }}>

    <nav className="navbar d-flex flex-column justify-content-center mx-auto vh-95 ">

    <ul className="navbar-nav" style={{ color: "floralwhite" }}>

        <li className="nav-item">
            <Link to= "/dashboard" >
                <img className="mx-auto d-block" src= {logozenu} style={{ height:"90px" }} alt="icono de la empresa zenu"/>
            </Link>

        </li>

        <li className="nav-item my-2 text-center " style={{ textDecoration: "none", height:"90px", width:"250px", backgroundColor:"#ffd2bb", borderRadius:"8px" }}>
            <Link to="/inventario" className="col-6 nav-link fs-4 fw-bold my-3" style={{ color:"rgb(48, 2, 2)", width:"250px", height:"50px", }}>
                Ir a Inventario
            </Link>
        </li>

        <li className="nav-item my-2 text-center" style={{ textSecoration: "none", height: "90px", width: "250px", backgroundColor:"#ffd2bb", borderRadius:"8px" }}>
            <Link to="/produccion" className="col-6 nav-link fs-4 fw-bold my-3" style={{ color: "rgb(48, 2, 2)", width: "250px", height:"50px" }}>
            Ir a Produccion
            </Link>
        </li>

        <li className="nav-item my-2 text-center" style={{ textSecoration: "none", height: "90px", width: "250px", backgroundColor:"#ffd2bb", borderRadius:"8px" }}>
            <Link to="/dashboard/registrar" className="col-6 nav-link fs-4 fw-bold my-3" style={{ color: "rgb(48, 2, 2)", width: "250px", height:"50px" }}>
            Registro empleados
            </Link>
        </li>

        <li className="nav-item my-2 text-center" style={{ textSecoration: "none", height: "90px", width: "250px", backgroundColor:"#ffd2bb", borderRadius:"8px" }}>
            <Link to="/dashboard/usuarios" className="col-6 nav-link fs-4 fw-bold my-3" style={{ color: "rgb(48, 2, 2)", width: "250px", height:"50px" }}>
            Lista empleados
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

                <h1 className="fw-bold col-12 col-sm-8 col-lg-8 text-start" style={{ color: "white" }}>Lista de empleados</h1>

                <img className="col-6 col-sm-2 col-lg-2" src={foto} style={{ height:"65px", width: "85px" }} alt="user"/>

                <div className="col-6 col-sm-2 col-lg-2 fw-bold fs-4 text-center" style={{ color: "rgb(243, 7, 7)", backgroundColor: "white", borderRadius: "10px", height:"60px" }}>
                    <p className="my-2">{listaNombre}</p>
                </div>
            </div>

            {/* contenido */}

            <div className="row mx-auto my- d-flex flex-row flex-wrap justify-content-center">

             {listadoUsuarios.map(m=><div className="card mx-2 my-2" style={{ width: "18rem", backgroundColor: "darkred", color:"white", textAlign: "center" }}>
                <div className="card-body text-center" style={{ textAlign: "center" }}>
                        <h5 className="card-title fw-bold" id="codigo">Código:{m.cod}</h5>
                        <p className="card-text">Nombre: {m.nombre}</p>
                        <p className="card-text">Usuario: {m.user}</p>
                        <p className="card-text">Correo: {m.email}</p>
                        <p className="card-text">Cargo: {m.cargo}</p>
                        
                        <Link to={`/dashboard/editar/${m.user}`}><button  type="button" className="btn btn-success mx-4" data-bs-toggle="modal" data-bs-target="#editar">Editar</button></Link>
                        <button onClick={()=>eliminar(m.user)} type="button" className="btn btn-warning">Eliminar</button>
                    </div>
                </div>)}        
            

            </div>

        </div>
    </div>
    
    </main>
  );
}

export default DashboardUsuarios;