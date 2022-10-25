import React from "react";
import Cards from "../componentes/Cards";
import Footer from "../componentes/Footer";
import Galery from "../componentes/Galery";
import Marcas from "../componentes/Marcas";

export default function Home() {    
    return (
        <>
            <Galery></Galery>
            <Cards></Cards>
            <Marcas></Marcas>
            <Footer></Footer>
        </>
    )
}