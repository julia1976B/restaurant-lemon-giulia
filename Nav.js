import React from 'react';

function Nav() {
  return (
    <nav className="nav">
      <div className="nav-item">
        <h2>Orden para Entrega a Domicilio</h2>
        <i className="triangle"></i>
      </div>
      <div className="nav-item">
        <h2>Almuerzo</h2>
        <i className="triangle"></i>
      </div>
      <div className="nav-item">
        <h2>Plato Principal</h2>
        <i className="triangle"></i>
      </div>
      <div className="nav-item">
        <h2>Bebidas</h2>
        <i className="triangle"></i>
      </div>
      <div className="nav-item">
        <h2>Otros</h2>
        <i className="triangle"></i>
      </div>
    </nav>
  );
}

export default Nav;
