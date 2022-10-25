import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CarritoContext } from '../context';

const Header = () => {

    const [carrito,setCarrito] = useContext(CarritoContext);

    return(
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <Link to="/home" style={{ textDecoration: 'none', fontSize: "20px", margin: "30px", color: "black" }}>
                    <img src="img/Logo.png" alt="" width="65" height="64" />
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText"
                    aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">

                        </li>
                        <li className="nav-item">
                            <Link to="/home" style={{ textDecoration: 'none', fontSize: "20px", margin: "30px", color: "black" }}>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/productos" style={{ textDecoration: 'none', fontSize: "20px", margin: "30px", color: "black" }}>Productos</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/contacto" style={{ textDecoration: 'none', fontSize: "20px", margin: "30px", color: "black" }}>Contacto</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/quienessomos" style={{ textDecoration: 'none', fontSize: "20px", margin: "30px", color: "black" }}>Quienes somos</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/carrito" style={{ textDecoration: 'none', fontSize: "20px", margin: "30px", color: "black" }}>
                            <img width="60" height="60" src="img/Carrito.png" alt='carrito'></img>{carrito.length}
                            </Link>
                        </li>
                    </ul>

                </div>
            </div>
        </nav>
    )
}

export default Header;