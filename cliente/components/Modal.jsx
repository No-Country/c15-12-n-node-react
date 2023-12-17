import React, { useState } from 'react';
import '../src/styles/modal.css';

const Modal = ({ onClose }) => {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    email: '',
    nivel: '', // Cambiado de 'contraseña' a 'password'
    precio: '',
    moneda: 'USD', // Valor predeterminado en USD
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3000/api/registerCourse', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // La solicitud fue exitosa, puedes realizar alguna acción si es necesario
        console.log('Solicitud POST exitosa');
      } else {
        // La solicitud no fue exitosa, maneja el error
        const errorData = await response.json();
        console.error('Error en la solicitud POST:', errorData);
      }
    } catch (error) {
      console.error('Error en la solicitud POST:', error.message);
    }
  };

  return (
    <div className='modal-overlay'>
      <div className='modal-content'>
        <h2 className='modal-title'>Plan Selection Course</h2>
        <form onSubmit={handleSubmit}>
        <label>Curso</label>
          <input type="text" name="curso" placeholder='Curso' value={formData.curso} onChange={handleChange} />
          <label>Nivel</label>
          <input type="text" name="nivel" placeholder='Nivel' value={formData.nivel} onChange={handleChange} />
          <div>
      <label>Precio</label>
      <div>
        <input
          type="text"
          name="precio"
          placeholder="Precio"
          value={formData.precio}
          onChange={handleChange}
        />
        <select name="moneda" value={formData.moneda} onChange={handleChange}>
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="GBP">GBP</option>
          {/* Agrega más opciones según sea necesario */}
        </select>
      </div>
      <p>{`Precio: ${formData.precio} ${formData.moneda}`}</p>
    </div>
          <label>Nombre</label>
          <input type="text" name="nombre" placeholder='Nombre' value={formData.nombre} onChange={handleChange} />
          <label>Apellido</label>
          <input type="text" name="apellido" placeholder='Apellido' value={formData.apellido} onChange={handleChange} />
          <label>Email</label>
          <input type="text" name="email" placeholder='Email' value={formData.email} onChange={handleChange} />
        
          <button type="submit" className='btn-modal'>
            Submit
          </button>
        </form>
        <button className='btn-modal' onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};



export default Modal;