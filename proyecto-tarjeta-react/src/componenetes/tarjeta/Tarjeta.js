import React from "react";
import "./Tarjeta.css";
import TarjetaImagen from "./TarjetaImagen";
import TarjetaNombre from "./TarjetaNombre";
import TarjetaBoton from "./TarjetaBoton";
import TarjetaDescripcion from "./TarjetaDescripcion";
import TarjetaPrecio from "./TarjetaPrecio";
//import Estados from "./componenetes/Estado/Estados"//

const Tarjeta = ({producto}) => {
    return (
     
        <div className="tarjeta">
         <TarjetaImagen url = {producto.imagen} />
         <TarjetaNombre nombre={producto.producto} />
         <TarjetaDescripcion descripcion={ producto.descripcion}/>
         <TarjetaPrecio precio = { producto.precio}/>
         <TarjetaBoton/>
         
         </div>
        
         
    );
         
        
     
 
        
 }
export default Tarjeta
