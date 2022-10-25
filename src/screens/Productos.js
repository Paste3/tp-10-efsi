import Prods from "../componentes/Prods"
import { CarritoContext } from "../context";
import { useContext } from "react";
import { v4 as uuidv4 } from 'uuid';
const mercadopago = require ('mercadopago');


export default function Productos() {
    const [carrito,setCarrito] = useContext(CarritoContext);

    return (
        <>
            <div className="container">
                <div className="row">
                {
                    Prods.map(producto => (
                        <>
                            <div className="col-md-6">
                                <div className="card-wrapper">
                                    <div className="card card-top-left">
                                        <div className="card-inner">
                                            <img src={producto.foto} className="card-img-top" width="300" height="300" alt={producto.nombre}/>
                                            <h3 className="card-title">{producto.nombre}</h3>
                                            <div className="card-body">Precio: ${producto.valor}</div>
                                        </div>
                                        <button style={{backgroundColor: "#24e357"}}onClick={() => setCarrito([...carrito, {...producto, id:uuidv4()}])}>Añadir producto</button>
                                    </div>
                                </div>
                            </div>
                        </>
                    ))
                }
                </div>
            </div>
        </>
    )
}