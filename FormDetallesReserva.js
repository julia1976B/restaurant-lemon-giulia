import React from 'react';

function FormDetallesReserva() {
  return (
    <div className="form-container">
      <form className="reservation-details-form">

      <img src="imagen-logo-litle-lemon.jpeg" alt="Logo" />
      <img src="imagen-detalles-del-cliente.jpeg" alt="detalles del cliente" /> 

        <h3 className="form-title">DETALLES DE SU RESERVA</h3>
        <h4>Puede Modificar su Reserva Hasta Dos (2) Horas Antes</h4>
        <label>Fecha</label>
        <input type="date" />
        <label>Hora</label>
        <input type="time" />
        <label>Número de Comensales</label>
        <input type="number" />
        <label>Datos de la Carta de Crédito</label>
        <input type="text" placeholder="Campo Requerido" required />
        <label>Nombre Completo</label>
        <input type="text" placeholder="Campo Requerido" required />
        <label>Apellidos</label>
        <input type="text" placeholder="Campo Requerido" required />
        <label>Fecha de Expiración (Día/Mes/Año)</label>
        <input type="text" placeholder="Campo Requerido" required />
        <label>CVV</label>
        <input type="text" placeholder="Campo Requerido" required />
        <div className="confirmation-options">
          <label>
            <input type="checkbox" /> Desea Confirmación via SMS
          </label>
          <label>
            <input type="checkbox" /> Desea Confirmación via Email
          </label>
        </div>
        <button className="confirm-button">ENVIAR</button>
      </form>
    </div>
  );
}

export default FormDetallesReserva;
