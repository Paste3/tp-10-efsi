import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react';
import Home from "./screens/Home";
import Layout from "./componentes/Layout";
import Contacto from "./screens/Contacto";
import QuienesSomos from "./screens/QuienesSomos";
import Productos from "./screens/Productos";
import { CarritoContext } from "./context";
import './css/bootstrap.min.css';
import './css/styles.css';
import Carrito from "./screens/Carrito";
import Pagar from "./screens/Pagar";

const App = () => {
  const [carrito,setCarrito] = React.useState([])
  return (
    <>
      <CarritoContext.Provider value={[carrito, setCarrito]}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />}></Route>
              <Route path="/home" element={<Home />}></Route>
              <Route path="/contacto" element={<Contacto />}></Route>
              <Route path="/productos" element={<Productos />}></Route>
              <Route path="/quienessomos" element={<QuienesSomos />}></Route>
              <Route path="/carrito" element={<Carrito />}></Route>
              <Route path="/pagar" element={<Pagar />}></Route>
              <Route path="*" element={<p className="colorB">404</p>}></Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </CarritoContext.Provider>
    </>
  );
};

export default App;