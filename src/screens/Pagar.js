import { CarritoContext } from "../context";
import { useContext } from "react";
export default function Pagar() {
    const [carrito, setCarrito] = useContext(CarritoContext);
    let montoTotal = 0;
    for(let i = 0; i < carrito.length; i++){
        montoTotal = montoTotal + carrito[i].valor
    }  
    
    if(carrito.length == 0){
        return <p>El carrito esta vacio, agregue productos para continuar.</p>
    }else
    {
    return (
        <>
            <div className="container">
                <div className="row">
                    {carrito.map(producto => (
                        <>
                            <div className="col-md-3">
                                <div className="card-wrapper">
                                    <div className="card card-top-left">
                                        <div className="card-inner">
                                            <img src={producto.foto} className="card-img-top" width="100" height="100" alt={producto.nombre} />
                                            <h3 className="card-title">{producto.nombre}</h3>
                                            <div className="card-body">Precio: ${producto.valor}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    ))}
                    <hr/>
                    <h3 style={{color: "purple"}}>Monto total: {montoTotal}</h3>
                    <hr></hr>
                    <h2 style={{color: "black"}}>Opciones de pago</h2>

                </div>
            </div>
        </>
    )}
} 