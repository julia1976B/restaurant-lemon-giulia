import React from 'react';

function FormCliente() {
  return (
    <div className="form-container">
      <form className="client-info-form">

      <img src="imagen-logo-litle-lemon.jpeg" alt="Logo litle lemon" /> 
      <img src="imagen-detalles-del-cliente.jpeg" alt="detalles del cliente" /> 

      <h3 className="form-title">Información del Cliente</h3>
      <label>PRIMER APELLIDO</label>
      <input type="text" placeholder="Campo Requerido" required />
      <label>NOMBRE</label>
      <input type="text" placeholder="Campo Requerido" required />
      <label>FECHA DE NACIMIENTO</label>
      <input type="date" />
      <label>GENERO</label>
      <div className="radio-options">
      <label>
      <input type="radio" name="gender" value="F" /> F
      </label>
      <label>
      <input type="radio" name="gender" value="M" /> M
      </label>
      </div>
      <label>NUMERO DE TELEFONO</label>
      <input type="tel" />
      <label>CORREO ELECTRONICO</label>
      <input type="email" placeholder="Campo Requerido" required />
      <label>SOLICITUD ESPECIAL</label>
      <textarea rows="4"></textarea>
      <label>CONTRASEÑA</label>
      <input type="password" minLength="5" />
      <button className="submit-button">ENVIAR</button>
      </form>
      </div>
      );
    }

    export default FormCliente;
