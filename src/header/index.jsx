import React, { useState } from 'react';
import './styles.css';



const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      <div className="navbar">
        <div className="menu-toggle" onClick={toggleMenu}>
          
          <div className={`bar ${isOpen ? 'active' : ''}`}></div>
          <div className={`bar ${isOpen ? 'active' : ''}`}></div>
          <div className={`bar ${isOpen ? 'active' : ''}`}></div>
        </div>
        <div className={`menu ${isOpen ? 'active' : ''}`}>
          <ul>
            <li><a href="#">Inicio</a></li>
            <li><a href="#">Acerca de</a></li>
            <li><a href="#">Servicios</a></li>
            <li><a href="#">Contacto</a></li>
          </ul>
        </div>
      </div>
    );
  };
  
  export default NavBar;