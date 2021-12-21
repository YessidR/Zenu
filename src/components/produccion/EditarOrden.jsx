import logozenu from '../logo-zenu.png';
import foto from '../usuario.png';
import { useParams } from 'react-router';
import { useEffect } from 'react/cjs/react.development';
import { useRef } from 'react';
import { Link } from "react-router-dom";
import { useState } from 'react';

function EditarMat() {
    const [vistacod,setVistacod]=useState("");
    const [actua,setActualizar]=useState("");
    const [error,setActualizarerror]=useState(false);
    const codigo=useParams();
    const cod1=codigo._id;
    const _id=cod1;   
    
    const productoRef = useRef();
    const cantidadRef = useRef();
    const estadoRef = useRef();

    useEffect(async() => {
    await fetch("http://localhost:8081/produccion/consultar/listarorden",{
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({_id})
    }).then(res => res.json())
    .then(res =>{
        if (res.estado ==="ok"){
            setVistacod(res.data);
            
        }else{
            console.log(res.msg);
        }
            
    }).catch(error => console.log(error));
}, []);

function actualizar(){
    const producto =  productoRef.current.value;
    const cantidad = cantidadRef.current.value;
    const estado = estadoRef.current.value;
    const combo = document.getElementById("sproducto");
    const selected = combo.options[combo.selectedIndex].text;
    const nombre = selected;

   fetch("http://localhost:8081/produccion/editar",{
       method:"POST",
       headers:{ "content-type": "application/json" },
       body: JSON.stringify({ producto, nombre, cantidad, estado})
   }).then(res=>res.json()).then(res=>{
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

                <h1 className="fw-bold col-12 col-sm-8 col-lg-8 text-start" style={{ color: "white" }}>Editar Orden de producción</h1>

                <img className="col-6 col-sm-2 col-lg-2" src={foto} style={{ height:"65px", width: "85px" }} alt="user"/>

                <div className="col-6 col-sm-2 col-lg-2 fw-bold fs-4 text-center" style={{ color: "rgb(243, 7, 7)", backgroundColor: "white", borderRadius: "10px", height:"60px" }}>
                    <p className="my-2">{listaNombre}</p>
                </div>
            </div>

            {/* contenido */}

            <div className="row mx-auto my-3 d-flex flex-row justify-content-center col-md-6 col-lg-5" style={{width: "100%"}}>
                {error && <div class ="alert alert-success" role="alert">{actua}
                </div>}
                    <form>
                        <div className="form-group fw-bold mb-3" style= {{color: "white"}}>
                            <label style={{fontSize: "18px"}} className="fs-5">Código de la orden a editar: {vistacod._id}</label>
                        </div>
                        <table className="table text-center" style={{ color: "white" }} >
                                
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
                                        <label style={{fontSize: "18px"}} className="fs-5" ref={vistacod.nombre}>{vistacod.nombre}</label>
                                        </td>
                                        <td>
                                            <input type="number" className="form-control" id="nombre" placeholder={vistacod.cantidad} ref={cantidadRef} />
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
                        <div className="form-group" style={{ textAlign:"center", paddingTop:"10px" }}>
                        <button   onClick={actualizar}  type="button" className="btn btn-light rounded submit">Guardar</button>
                        </div>
                </form>
            </div>
        </div>
    </div>
    </main>
  );
}

export default EditarMat;
