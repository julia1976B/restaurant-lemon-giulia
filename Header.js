import React from 'react';

function Header() {
  return (
    <header className="header">

    <img src="imagen-logo-litle-lemon.jpeg" alt="Logo litle lemon" />
    <img src="imagen-litle-lemon.jpeg" alt="Little Lemon" /> {/* Asegúrate de que la imagen esté en el mismo directorio */}

    <h1>Inicia Sección</h1>
    <span>Reserva tu Mesa con Nosotros <i className="arrow"></i></span>
    <button>Contactanos Ahora</button>
    <button>Plan de Reserva del Restaurante</button>
    </header>
    );
  }
  
  export default Header;

