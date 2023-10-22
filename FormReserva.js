import React from 'react';

function FormReserva() {
  return (
    <div className="form-container">
      <form className="reservation-form">

      <img src="imagen-logo-litle-lemon.jpeg" alt="Logo" />
      <img src="imagen-reservas.jpeg" alt="reservas" /> 
      <img src="imagen-reservas-litle-lemon.jpeg" alt="reservas litle lemon" /> 

        <h3 className="form-title">RESERVA</h3>
        <span>Contactanos Ahora</span>
        <button>Plan de Reserva del Restaurante</button>
        <label>FECHA</label>
        <input type="date" />
        <label>HORA</label>
        <input type="time" />
        <label>NÚMERO DE COMENSALES</label>
        <input type="number" />
        <div className="seating-options">
          <label>OPCIONES DE ASIENTOS</label>
          <label>
            <input type="radio" name="seating" /> Estandar
          </label>
          <label>
            <input type="radio" name="seating" /> Exterior
          </label>
        </div>
        <button className="confirm-button">ENVIAR</button>
      </form>
    </div>
  );
}

export default FormReserva;
