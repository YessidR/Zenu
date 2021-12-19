// import './App.css';
import logoZ from './logo-zenu.png'

import { useRef, useState } from 'react';

function Main() {
  const passR = useRef();
  const userR = useRef();
  const [error,setError]=useState();
  const [msg,setMsgError]=useState();

  async function logueo() {
    
    const user = userR.current.value;
    const password = passR.current.value;
    const response=await fetch("http://localhost:8082/", {
      headers: { "content-type": "application/json" },
      method: "POST",
      body: JSON.stringify({ user, password })
      
    }).then(res=>res.json());
    
      if (response.estado === "ok") {
        if (response.data.cargo === "administrador") {
          { window.location.href = "/dashboard" }

            // Yessid: Almacenar nombre usuario en localStorage
            localStorage.setItem("nombreUsuario", JSON.stringify(user));
            const tipoUsuario = response.data.cargo;
            localStorage.setItem("tipoUsuario", JSON.stringify(tipoUsuario));
           
        }else if(response.data.cargo === "inventario"){
          { window.location.href = "/inventario" }

            // Yessid: Almacenar nombre usuario en localStorage
            localStorage.setItem("nombreUsuario", JSON.stringify(user));
            const tipoUsuario = response.data.cargo;
            localStorage.setItem("tipoUsuario", JSON.stringify(tipoUsuario));

        }else{
          { window.location.href = "/produccion" }

            // Yessid: Almacenar nombre usuario en localStorage
            localStorage.setItem("nombreUsuario", JSON.stringify(user));
            const tipoUsuario = response.data.cargo;
            localStorage.setItem("tipoUsuario", JSON.stringify(tipoUsuario));
        }
      } else {
        setError(true);
        setMsgError(response.msg)
        setTimeout(()=>setError(false),2000);
  }
  
}
  return (

    <main className="container-fluid" style={{ fontFamily: "sans-serif" }}>

      <div className="row vw-100 vh-100">

      <div className="col-12 col-sm-3 col-lg-3" style={{ backgroundColor: "white", borderRadius: "20px" }}>

      <nav className="navbar d-flex flex-column justify-content-center mx-auto vh-95 ">

      <ul className="navbar-nav" style={{ color: "floralwhite" }}>

      <li className="nav-item">
      <img className="mx-auto d-block" src={logoZ} style={{ height: "90px" }} alt="icono de la empresa zenu" />
      </li>

      <br />

      </ul>
      </nav>
      </div>

      <div className="col-12 col-sm-9 col-lg-9 border border-dark bg-danger" >

    {/* - head del contenido -  */}
      <div className="row mx-auto my-3 d-flex flex-row justify-content-center" style={{ marginBottom: "0px" }}>

      <h1 className="fw-bold col-12 col-sm-8 col-lg-8 text-center" style={{ color: "white" }}>Bienvenido</h1>

      </div>

    {/* - Formulario login -  */}
      <div className="row justify-content-center ">
      {error && <div class ="alert alert-success" role="alert">{msg}
      </div>}
      <div className="col-md-6 col-lg-6 ">
      <div className="login-wrap  p-4 p-md-5 rounded " style={{ color: "white", fontSize: "22px" }}>
      <div className="col-md-6 col-lg-12 ">
      <form action="#" className="login-form">

      <div className="mb-3">
      <label for="nombreUsuario" className="form-label "> Usuario </label>
      <input type ="email" ref={userR} className="form-control" id="nombreUsuario" placeholder="nombre@zenu.co" />
      </div>

      <div className="mb-3">
      <label for="passwordUsuario" className="form-label"> Contraseña </label>
      <input type ="password" ref={passR} className="form-control" id="passwordUsuario" placeholder="Contraseña" />
      </div>

      <div className="mb-3">
      </div>

      <div className="col-lg-12 form-group" >
        {/*style={{ paddingLeft: "20%" }}*/}
      <button type ="button" onClick={logueo} className="btn btn-light rounded " method="get">Iniciar Sesión</button>
      </div>
      </form>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
    </main>
  );
}

export default Main;
