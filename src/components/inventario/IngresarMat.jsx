
import logozenu from '../logo-zenu.png'
import foto from '../usuario.png'
import { useRef, useState } from 'react';

import { Link } from "react-router-dom";

function IngresarMat() {
    
    const [guardado,setGuardado]=useState();
    const [mensaje,setmensaje]=useState();
    const nombreR=useRef();
    const descripcionR=useRef();
    const codigoR=useRef();
    const unidadR=useRef();
    const cantidadR=useRef();
    const valoruR=useRef();

    function guardar(){
        const nombre=nombreR.current.value;
        const descripcion=descripcionR.current.value;
        const cod=codigoR.current.value;
        const unidad_medida=unidadR.current.value;
        const cantidad_disponible=cantidadR.current.value;
        const valor_unitario=valoruR.current.value;

        fetch(`http://localhost:8082/inventario/ingresar`, {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({ nombre,descripcion,cod,unidad_medida,cantidad_disponible,valor_unitario })
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
        descripcionR.current.value="";
        codigoR.current.value="";
        unidadR.current.value="";
        cantidadR.current.value="";
        valoruR.current.value="";
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

                <h1 className="fw-bold col-12 col-sm-8 col-lg-8 text-start" style={{ color: "white" }}>Ingresar Materia Prima</h1>

                <img className="col-6 col-sm-2 col-lg-2" src={foto} style={{ height:"65px", width: "85px" }} alt="user"/>

                <div className="col-6 col-sm-2 col-lg-2 fw-bold fs-4 text-center" style={{ color: "rgb(243, 7, 7)", backgroundColor: "white", borderRadius: "10px", height:"60px" }}>
                <p className="my-2">{listaNombre}</p>
                </div>
            </div>

            {/* contenido */}

            <div className="row mx-auto my-3 d-flex flex-row justify-content-center col-md-6 col-lg-5">
                {guardado && <div class="alert alert-success" role="alert">{mensaje}
                </div>}
                <form>
                    <div className="form-group fw-bold" style= {{color: "white"}}>
                        <label for="nombreMateria" style={{fontSize: "18px"}}>Nombre: </label>
                        <input type="text" ref={nombreR} className="form-control" id="nombreMateria" placeholder="Ingresar nombre del producto" />
                    </div>

                    <div className="form-group fw-bold fs-4" style= {{color: "white" }}>
                        <label for="descripcionMateria" style={{fontSize: "18px"}}>Descripción: </label>
                        <input type="text" ref={descripcionR} className="form-control" id="descripcionMateria" placeholder="Ingresar descripción del producto" />
                    </div>

                    <div className="form-group fw-bold fs-4" style= {{color: "white" }}>
                        <label for="codigoMateria" style={{fontSize: "18px"}}>Código: </label>
                        <input type="text" ref={codigoR} className="form-control" id="codigoMateria" placeholder="Ingresar código del producto" />
                    </div>

                    <div className="form-group fw-bold fs-4" style= {{color: "white" }}>
                        <label for="medida" style={{fontSize: "18px"}}>Unidad de medida: </label>
                        <input type="text" ref={unidadR} className="form-control" id="medidaMateria" placeholder="Ingresar la unidad de medida ej: k(kilo), m(metro), gr(gramo)" />
                    </div>

                    <div className="form-group fw-bold fs-4" style= {{color: "white" }}>
                        <label for="cantidadMateria" style={{fontSize: "18px"}}>Cantidad disponible: </label>
                        <input type="text" ref={cantidadR} className="form-control" id="cantidadMateria" placeholder="Ingresar la cantidad disponible del producto" />
                    </div>

                    <div className="form-group fw-bold fs-4" style= {{color: "white" }}>
                        <label for="valorMateria" style={{fontSize: "18px"}}>Valor unitario</label>
                        <input type="text" ref={valoruR} className="form-control" id="valorMateria" placeholder="Ingresar el valor del producto" />
                    </div>

                    <div className="form-group" style={{ textAlign:"center", paddingTop:"10px" }} >
                        <button type="button" className="fw-bold" style= {{ border: "none", backgroundColor: "darkred", color: "white", borderRadius: "10px", height: "40px", width: "150px" }} onClick={guardar} > Guardar </button>
                    </div>


                </form>

            </div>




        </div>
    </div>

    </main>

  );
}

export default IngresarMat;
