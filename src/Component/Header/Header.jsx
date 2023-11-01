import React from "react";
import "./Header.css";
import logoGA from './logoGA.png';



const Header = () => {
  

  return (

    
    <nav>
      <div className="logo-container2">
      <img src={logoGA} className="App-logo" alt="logo" />
      </div>

      <div className="novegacion">

      <a href="/">INICIO</a>
      <a href="/#Nosotros">NOSOTROS</a> 
      <a href="/#Serv">SERVICIOS</a>
      <a href="/#Contacto">CONTACTO</a>
      </div>
     
    </nav>
    
  );
};
export default Header;