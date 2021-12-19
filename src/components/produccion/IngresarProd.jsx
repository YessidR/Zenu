// import './App.css';
import logozenu from '../logo-zenu.png'
import foto from '../usuario.png'
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

export function Producto() {
    const [ListadoMaterias, setListadoMaterias] = useState([]);
    const nomRef = useRef();
    const mat1Ref = useRef();
    const mat2Ref = useRef();
    const mat3Ref = useRef();
    const mat4Ref = useRef();
    const mat5Ref = useRef();
    const can1Ref = useRef();
    const can2Ref = useRef();
    const can3Ref = useRef();
    const can4Ref = useRef();
    const can5Ref = useRef();

    useEffect(() => {
        fetch("http://localhost:8082/inventario/consultar")
            .then(res => res.json())
            .then(res => {
                if (res.estado == "ok")
                    setListadoMaterias(res.data);
            }).catch(error => console.log(error))
    }, []);

    function crear() {
        const nombre = nomRef.current.value;

        const materia1 = mat1Ref.current.value;
        const materia2 = mat2Ref.current.value;
        const materia3 = mat3Ref.current.value;
        const materia4 = mat4Ref.current.value;
        const materia5 = mat5Ref.current.value;

        const cant1 = can1Ref.current.value;
        const cant2 = can2Ref.current.value;
        const cant3 = can3Ref.current.value;
        const cant4 = can4Ref.current.value;
        const cant5 = can5Ref.current.value;

        
        fetch("http://localhost:8082/produccion/crear", {
            headers: { "content-type": "application/json" },
            method: "POST",
            body: JSON.stringify({ nombre, materia1, cant1, materia2, cant2, materia3, cant3, materia4, cant4, materia5, cant5})
        }).then(res => res.json())
            .then(res => {
                alert(res.msg);
            }).catch(error => console.log(error))
    }

    const listaNombre = JSON.parse(localStorage.getItem("nombreUsuario"));
    console.log(ListadoMaterias);
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
                    <h1 className="fw-bold col-12 col-sm-8 col-lg-8 text-start" style={{ color: "white" }}>Crear producto</h1>
                    <img className="col-6 col-sm-2 col-lg-2" src={foto} style={{ height:"65px", width: "85px" }} alt="user"/>
                    <div className="col-6 col-sm-2 col-lg-2 fw-bold fs-4 text-center" style={{ color: "rgb(243, 7, 7)", backgroundColor: "white", borderRadius: "10px", height:"60px" }}>
                        <p className="my-2">{listaNombre}</p>
                    </div>
                </div>
                

                {/*- contenido -*/}
                <div className="row mx-auto my-3 d-flex flex-row justify-content-center">
                        
                    <form>
                        <div className="form-group fw-bold fs-4" style={{ color: "white" }}>
                            <label for="nombre" style={{fontSize: "18px"}}>Nombre</label>
                            <input type="text" ref={nomRef} className="form-control" id="nombre" placeholder="Ingresar nombre del producto" />
                        </div>
                            
                        <div className="form-group fw-bold fs-4" style={{ color: "white" }}>
                            
                            <table className="table text-center" style={{ color: "white" }}>
                                <thead>
                                    <tr>
                                        <th scope="col" style={{fontSize: "18px"}}>Materia prima (Mínimo dos)</th>
                                        <th scope="col" style={{fontSize: "18px"}}>Cantidad</th>
                                    </tr>
                                </thead>

                                <tbody>
                                
                                    <tr>
                                        <td>                                           
                                            <select ref={mat1Ref} className="form-control" name="" id="">
                                            <option value="">-- Seleccione --</option>
                                            {
                                            ListadoMaterias.map(p => <option key={p._id} value={p._id}>{p.nombre}</option>)
                                            }
                                            </select>
                                        </td>
                                        <td>
                                            <input type="text" ref={can1Ref} className="form-control" id="nombre" placeholder="Digite la cantidad" />
                                        </td>
                                    </tr>
                                    
                                    <tr>
                                        <td>
                                            <select ref={mat2Ref} className="form-control" name="" id="">
                                            <option value="">-- Seleccione --</option>
                                            {
                                            ListadoMaterias.map(p => <option key={p._id} value={p._id}>{p.nombre}</option>)
                                            }
                                            </select>
                                        </td>
                                        <td>
                                            <input type="text" ref={can2Ref} className="form-control" id="nombre" placeholder="Digite la cantidad" />
                                        </td>
                                    </tr>
                                    
                                    <tr>
                                        <td>
                                            <select ref={mat3Ref} className="form-control" name="" id="">
                                            <option value="000000000000000000000000">-- Seleccione --</option>
                                            {
                                            ListadoMaterias.map(p => <option key={p._id} value={p._id}>{p.nombre}</option>)
                                            }
                                            </select>
                                        </td>
                                        <td>
                                            <input type="text" ref={can3Ref} className="form-control" id="nombre" placeholder="Digite la cantidad" />
                                        </td>
                                    </tr>
                                
                                    <tr>
                                        <td>  
                                            <select ref={mat4Ref} className="form-control" name="" id="">
                                            <option value="000000000000000000000000">-- Seleccione --</option>
                                            {
                                            ListadoMaterias.map(p => <option value={p._id}>{p.nombre}</option>)
                                            }
                                            </select>
                                            
                                        </td>
                                        <td>
                                            <input type="text" ref={can4Ref} className="form-control" id="nombre" placeholder="Digite la cantidad"/>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td>
                                            {/* no borrar este id: 61be6915d49a409225b1209d XD*/}
                                            <select ref={mat5Ref} className="form-control" name="" id="">
                                            <option value="000000000000000000000000">-- Seleccione --</option>
                                            {
                                            ListadoMaterias.map(p => <option key={p._id} value={p._id}>{p.nombre}</option>)
                                            }
                                            </select>
                                        </td>
                                        <td>
                                            <input type="text" ref={can5Ref} className="form-control" id="nombre" placeholder="Digite la cantidad" />
                                        </td>
                                    </tr>

                                </tbody> 
                            </table>
                        
                            <div className="form-group" style={{ textAlign:"center", paddingTop:"10px" }} >
                                <button type="button" className="fw-bold" onClick={crear} style= {{ border: "none", backgroundColor: "darkred", color: "white", borderRadius: "10px", height: "40px", width: "150px" }} > Crear </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </main>
  );
}

export default Producto;