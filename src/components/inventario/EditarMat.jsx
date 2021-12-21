import logozenu from '../logo-zenu.png';
import foto from '../usuario.png';
import { useParams } from 'react-router';
import { useEffect } from 'react/cjs/react.development';
import { useRef } from 'react';
import { Link } from "react-router-dom";
import { useState } from 'react';

function EditarMat() {
    const [vistacod,setVistacod]=useState("");//[{cod1},{cod2}], esta variable la uso para mostrar, la materia enviada desde el componente consultarMat.
    const [actua,setActualizar]=useState("");
    const [error,setActualizarerror]=useState(false);
    const codigo=useParams();
    const cod1=codigo.id;
    const cod=cod1;

    const nomR=useRef();
    const descR=useRef();
    const unidadR=useRef();
    const cantDisR=useRef();
    const valUniR=useRef();
    const estadoR=useRef();
    
    // hacemos esta consulta para mostrar la info en los inputs
    useEffect(() => {
    fetch("http://localhost:8081/inventario/consultar/materia",{
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({cod})
    }).then(res => res.json())
    .then(res =>{
        if (res.estado ==="ok"){
            setVistacod(res.data);
            
        }else{
            console.log(res.msg);
        }
            
    }).catch(error => console.log(error));
}, []);
// creamos la funcion de actualizar, enviamos el cod para el filtro y modificamos los campos seleccionados
function actualizar(){
   const nombre=nomR.current.value;
   const descripcion=descR.current.value;
   const unidad_medida=unidadR.current.value;
   const cantidad_disponible=cantDisR.current.value;
   const valor_unitario=valUniR.current.value;
   const estado=estadoR.current.value;

   fetch("http://localhost:8081/inventario/editar",{
       method:"POST",
       headers:{ "content-type": "application/json" },
       body:JSON.stringify({cod,nombre,descripcion,unidad_medida,cantidad_disponible,valor_unitario,estado})
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
                        <Link to="" className="col-6 nav-link fs-4 fw-bold my-3" style={{ color: "rgb(48, 2, 2)", width: "250px", height:"50px" }}>
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

                <h1 className="fw-bold col-12 col-sm-8 col-lg-8 text-start" style={{ color: "white" }}>Editar Materia Prima</h1>

                <img className="col-6 col-sm-2 col-lg-2" src={foto} style={{ height:"65px", width: "85px" }} alt="user"/>

                <div className="col-6 col-sm-2 col-lg-2 fw-bold fs-4 text-center" style={{ color: "rgb(243, 7, 7)", backgroundColor: "white", borderRadius: "10px", height:"60px" }}>
                    <p className="my-2">{listaNombre}</p>
                </div>
            </div>

            {/* contenido */}

            <div className="row mx-auto my-3 d-flex flex-row justify-content-center col-md-6 col-lg-5">
                {error && <div class ="alert alert-success" role="alert">{actua}
                </div>}
                    <form>
                        <div className="form-group fw-bold mb-3" style= {{color: "white"}}>
                            <label style={{fontSize: "18px"}} className="fs-5">Código de la materia a editar: {vistacod.cod}</label>
                        </div>
                        <div className="form-group fw-bold" style= {{color: "white"}}>
                        <label for="nombre" style={{fontSize: "18px"}}>Nombre: </label>
                        <input ref={nomR} type="text" className="form-control" id="nombreProducto" placeholder={vistacod.nombre} />
                        </div>
                    
                        <div className="form-group fw-bold fs-4" style= {{color: "white" }}>
                        <label for="nombre" style={{fontSize: "18px"}}>Descripción: </label>
                        <input ref={descR} type="text" className="form-control" id="descripcionProducto" placeholder={vistacod.descripcion} />
                        </div>
                        <div className="form-group fw-bold fs-4" style= {{color: "white" }}>
                        <label for="nombre" style={{fontSize: "18px"}}>Unidad de medida: </label>
                        <input ref={unidadR} type="text"  className="form-control" id="medidaProducto" placeholder={vistacod.unidad_medida} />
                        </div>
                        <div className="form-group fw-bold fs-4" style= {{color: "white" }}>
                        <label for="nombre" style={{fontSize: "18px"}}>Cantidad disponible: </label>
                        <input ref={cantDisR} type="text" className="form-control" id="disponibleProducto" placeholder={vistacod.cantidad_disponible} />
                        </div>
                        <div className="form-group fw-bold fs-4" style= {{color: "white" }}>
                        <label for="nombre" style={{fontSize: "18px"}}>Valor unitario</label>
                        <input ref={valUniR} type="text" className="form-control" id="valoProducto" placeholder={vistacod.valor_unitario} />
                        </div>
                        <div className="form-group fw-bold fs-4" style= {{color: "white" }}>
                        <label for="valorMateria" style={{fontSize: "18px"}}>Estado actual: {vistacod.estado}</label>
                            <select ref={estadoR} className="form-control">
                                <option value="despachado">Despachado</option>
                                <option value="Sin despachar">Sin despachar</option>
                            </select>
                        </div>
                        <div className="form-group" style={{ textAlign:"center", paddingTop:"10px" }}>
                        <button   onClick={actualizar}  type="button" className="btn btn-light rounded submit">Actualizar</button>
                        </div>
                </form>
            </div>
        </div>
    </div>
    </main>
  );
}

export default EditarMat;
