// import './App.css';
import logozenu from '../logo-zenu.png'
import foto from '../usuario.png'

import { Link } from "react-router-dom";
import { useRef, useState } from 'react';

function DashboardRegistrar() {
    const nombreR=useRef();
    const userR=useRef();
    const passR=useRef();
    const emailR=useRef();
    const cargoR=useRef();
    const [guardado,setGuardado]=useState();
    const [mensaje,setmensaje]=useState();

    function guardar(){
        const nombre=nombreR.current.value;
        const user=userR.current.value;
        const password=passR.current.value;
        const email=emailR.current.value;
        const cargo=cargoR.current.value;

        fetch(`http://localhost:8082/dashboard/registrar`, {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({ nombre,user,password,email,cargo })
        }).then(res => res.json())
            .then(res => {
                if(res.estado === "ok"){
                    setGuardado(true);
                    setmensaje(res.msg);
                    setTimeout(()=>setGuardado(false),2000);
                    limpiar();
                }
            }).catch(error=>console.log(error))
    }

    function limpiar(){
        nombreR.current.value="";
        userR.current.value="";
        passR.current.value="";
        emailR.current.value="";
        cargoR.current.value="";
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
            <Link to="" className="col-6 nav-link fs-4 fw-bold my-3" style={{ color: "rgb(48, 2, 2)", width: "250px", height:"50px" }}>
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
            
                <h1 className="fw-bold col-12 col-sm-8 col-lg-8 text-start" style={{ color: "white" }}>Administrador</h1>

                <img className="col-6 col-sm-2 col-lg-2" src={foto} style={{ height:"65px", width: "85px" }} alt="user"/>

                <div className="col-6 col-sm-2 col-lg-2 fw-bold fs-4 text-center" style={{ color: "rgb(243, 7, 7)", backgroundColor: "white", borderRadius: "10px", height:"60px" }}>
                    <p className="my-2">{listaNombre}</p>
                </div>

            </div>

            <div className="row justify-content-center">
            <div className="col-md-6 col-lg-5">
            {guardado && <div class="alert alert-success" role="alert">{mensaje}
            </div>}
                <form className="mx-auto  w-100 bg-danger my-1  fw-bold fs-4" action="" style={{borderRadius: "12px"}}>
                    <div className="form-group">
                        <label className="form-label text-light" for="nom">Nombre</label>
                        <input ref={nombreR} className="form-control" type="text" name="nom" id="nom"/>
                    </div>
                    <div className="form-group">
                        <label className="form-label text-light" for="user">User</label>
                        <input ref={userR} className="form-control" type="text" name="user" id="user"/>
                    </div>
                    <div className="form-group">
                        <label className="form-label text-light" for="pass">Password</label>
                        <input ref={passR} className="form-control" type="text" name="pass" id="pass"/>
                    </div>
                    <div className="form-group">
                        <label className="form-label text-light" for="email">Email</label>
                        <input ref={emailR} className="form-control" type="text" name="email" id="email"/>
                    </div>
                    <div className="form-group">
                        <label className="form-label text-light" for="email">Cargo en la compañia</label>
                        <select  ref={cargoR} className="form-select" aria-label="Default select example">
                            <option value="inventario">Inventario</option>
                            <option value="produccion">Produccion</option>
                        </select>    
                    </div>
                    <br/>
                    <button className="btn d-grid gap-2 w-55 mx-auto my-2 fw-bold" style={{backgroundColor: "brown", color:"white", textAlign: "center"}} type="button" onClick={guardar}>Registrar</button>
                </form>
            </div>
            <div className="col-12 col-md-1 col-lg-1 d-flex align-items-end flex-wrap justify-content-end "></div>


            
            </div>
        </div>
    </div>
    </main>
  );
}

export default DashboardRegistrar;
