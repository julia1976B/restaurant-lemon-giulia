import React from 'react';

function FormContacto() {
  return (
    <div className="form-container">
      <form className="contact-form">

      <img src="imagen-logo-litle-lemon.jpeg" alt="Logo litle lemon" />
      <img src="imagen-detalles-del-cliente.jpeg" alt="detalles del cliente" /> 
     
      <h3 className="form-title">CONTACTO</h3>
      <label>Mensaje</label>
      <textarea rows="4" required></textarea>
      <label>Tu Nombre</label>
      <input type="text" placeholder="Campo Requerido" required />
      <label>Tu Correo Electrónico</label>
      <input type="email" placeholder="Campo Requerido" required />
      <button className="submit-button">ENVIAR</button>
         </form>
    </div>
    );
  }
  export default FormContacto;
