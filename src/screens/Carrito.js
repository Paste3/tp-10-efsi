import { CarritoContext } from "../context";
import { useContext } from "react";
import { Link } from 'react-router-dom';
export default function Carrito() {
    const [carrito, setCarrito] = useContext(CarritoContext);
    let montoTotal = 0;
    for(let i = 0; i < carrito.length; i++){
        montoTotal = montoTotal + carrito[i].valor
    }
    if(carrito.length == 0){
        return <p>El carrito esta vacio, agregue productos para continuar.</p>
    }else{
    return (
        <>
            <div className="container">
                <div className="row">
                    {carrito.map(producto => (
                        <>
                            <div className="col-md-6">
                                <div className="card-wrapper">
                                    <div className="card card-top-left">
                                        <div className="card-inner">
                                            <img src={producto.foto} className="card-img-top" width="300" height="300" alt={producto.nombre} />
                                            <h3 className="card-title">{producto.nombre}</h3>
                                            <div className="card-body">Precio: ${producto.valor}</div>
                                        </div>
                                        <button style={{backgroundColor: "red"}} onClick={() => setCarrito(carrito.filter(prod=>{return prod.id !== producto.id}))}>Eliminar producto</button>
                                    </div>
                                </div>
                            </div>
                            
                        </>
                    ))}
                    <hr/>
                    <h3 style={{color: "purple"}}>Monto total: {montoTotal}</h3>
                    <button style={{backgroundColor: "blue"}}><Link to="/pagar" style={{ textDecoration: 'none', fontSize: "20px", margin: "30px", color: "black" }}>Pagar</Link></button>
                </div>
            </div>
        </>
    )}
} 