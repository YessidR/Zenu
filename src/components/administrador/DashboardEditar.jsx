import logozenu from '../logo-zenu.png';
import foto from '../usuario.png';
import { useParams } from 'react-router';
import { useEffect } from 'react/cjs/react.development';
import { useRef } from 'react';
import { Link } from "react-router-dom";
import { useState } from 'react';

function DashboardEditar() {
    const [vistauser,setVistauser]=useState("");
    const [actua,setActualizar]=useState("");
    const [error,setActualizarerror]=useState(false);
    const usuario=useParams();
    const user1=usuario.id;
    const user=user1;
    const nombreR=useRef();
    const userR=useRef();
    const passR=useRef();
    const emailR=useRef();
    const cargoR=useRef();

    //hacemos esta consulta para mostrar la info en los inputs
    useEffect(() => {
    fetch("http://localhost:8081/dashboard/consultar/usuarios",{
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({user})
    }).then(res => res.json())
    .then(res =>{
        if (res.estado ==="ok"){
            setVistauser(res.data);
            
        }else{
            console.log(res.msg);
        }
            
    }).catch(error => console.log(error));
}, []);

    function actualizar(){
        const nombre=nombreR.current.value;
        const user=vistauser.user;
        const password=vistauser.password;
        const email=emailR.current.value;
        const cargo=cargoR.current.value;      

        fetch("http://localhost:8081/dashboard/editarUsuarios", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({nombre,user,password,email,cargo})
        }).then(res => res.json())
            .then(res => {
                if(res.estado === "ok"){
                    setActualizar(res.msg);
                    setActualizarerror(true);
                    setTimeout(()=>setActualizarerror(false),2000);
                }else{
                    setActualizar(res.msg);
                    setActualizarerror(true);
                    setTimeout(()=>setActualizarerror(false),2000);
                }
            })
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
            
                <h1 className="fw-bold col-12 col-sm-8 col-lg-8 text-start" style={{ color: "white" }}>Editar Usuario</h1>

                <img className="col-6 col-sm-2 col-lg-2" src={foto} style={{ height:"65px", width: "85px" }} alt="user"/>

                <div className="col-6 col-sm-2 col-lg-2 fw-bold fs-4 text-center" style={{ color: "rgb(243, 7, 7)", backgroundColor: "white", borderRadius: "10px", height:"60px" }}>
                    <p className="my-2">{listaNombre}</p>
                </div>

            </div>

            {/* contenido */}

            <div className="row justify-content-center">
            <div className="col-md-6 col-lg-5">
            {error && <div class ="alert alert-success" role="alert">{actua}
            </div>}
                <form className="mx-auto  w-100 bg-danger my-1  fw-bold fs-4" action="" style={{borderRadius: "12px"}}>
                    <div className="form-group fw-bold mb-3" style= {{color: "white"}}>
                        <label style={{fontSize: "18px"}} className="fs-5">Usuario a  editar: {vistauser.user}</label>
                    </div>
                    
                    <div className="form-group">
                        <label className="form-label text-light" for="nom">Nombre</label>
                        <input ref={nombreR} placeholder={vistauser.nombre} className="form-control" type="text" name="nom" id="nom"/>
                    </div>

                    <div className="form-group">
                        <label className="form-label text-light" for="nom">Correo</label>
                        <input ref={emailR} placeholder={vistauser.email} className="form-control" type="text" name="nom" id="nom"/>
                    </div>

                    
                    <div className="form-group">
                        <label className="form-label text-light" for="email">Cargo en la compañia</label>
                        <select  ref={cargoR} className="form-select" aria-label="Default select example">
                            <option value="inventario">Inventario</option>
                            <option value="produccion">Produccion</option>
                        </select>    
                    </div>
                    <br/>
                    <button className="btn d-grid gap-2 w-55 mx-auto my-2 fw-bold" style={{backgroundColor: "brown", color:"white", textAlign: "center"}}
                     type="button" onClick={actualizar}>Actualizar</button>
                </form>
            </div>
            <div className="col-12 col-md-1 col-lg-1 d-flex align-items-end flex-wrap justify-content-end "></div>
            
            </div>
        </div>
    </div>
    </main>
  );
}

export default DashboardEditar;
