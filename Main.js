import React from 'react';

function Main() {
  return (
    <main className="main">
      <div className="menu-item">
        <img src="menu-image1.jpg" alt="Menu Item 1" />
        <div className="menu-details">
          <h3>Nombre del Plato 1</h3>
          <p>Descripción del Plato 1</p>
          <div className="price">$10.00</div>
        </div>
      </div>
      <div className="menu-item">
        <img src="menu-image2.jpg" alt="Menu Item 2" />
        <div className="menu-details">
          <h3>Nombre del Plato 2</h3>
          <p>Descripción del Plato 2</p>
          <div className="price">$12.00</div>
        </div>
      </div>
      <div className="menu-item">
        <img src="menu-image3.jpg" alt="Menu Item 3" />
        <div className="menu-details">
          <h3>Nombre del Plato 3</h3>
          <p>Descripción del Plato 3</p>
          <div className="price">$15.00</div>
        </div>
      </div>
    </main>
  );
}

export default Main;
