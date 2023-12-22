import React, { useState } from 'react';
import '../src/styles/modal.css';
import closeImg from '../src/assets/images_project/borrar.png';

const Modal = ({ onClose }) => {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    email: '',
    nivel: '',
    precio: '',
    moneda: 'USD',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'nivel') {
      let precio;
      switch (value) {
        case 'Basico':
          precio = '20';
          break;
        case 'Intermedio':
          precio = '50';
          break;
        case 'Avanzado':
          precio = '90';
          break;
        default:
          precio = '';
      }
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
        precio,
      }));
    } else {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/registerCourse', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Solicitud POST exitosa');
        alert('registro de curso Correcto');
      } else {
        const errorData = await response.json();
        console.error('Error en la solicitud POST:', errorData);
        alert('Registro de curso Incorrecto');
      }
    } catch (error) {
      console.error('Error en la solicitud POST:', error.message);
    }
  };

  // ...resto del código...

  return (
    <div className='modal-overlay'>
      <div className='modal-content'>
        <h2 className='modal-title'>SELECCIONA TU PLAN</h2>
        <form className='formm' onSubmit={handleSubmit}>
          <div>
            <label>Curso</label>
            <input
              type='text'
              name='curso'
              placeholder='Curso'
              value={formData.curso}
              onChange={handleChange}
            />
            <label>Nivel</label>
            <select name='nivel' value={formData.nivel} onChange={handleChange}>
              <option value=''>Selecciona un nivel</option>
              <option value='Basico'>Basico</option>
              <option value='Intermedio'>Intermedio</option>
              <option value='Avanzado'>Avanzado</option>
            </select>
            <div>
              <label>Precio</label>
              <div>
                <input
                  type='text'
                  name='precio'
                  placeholder='Precio'
                  value={formData.precio}
                  readOnly
                />
                <br />
                <select
                  id='select-money'
                  name='moneda'
                  value={formData.moneda}
                  onChange={handleChange}
                >
                  <option value='USD'>USD</option>
                  <option value='EUR'>EUR</option>
                  <option value='GBP'>GBP</option>
                </select>
              </div>
              {/* <p>{`Precio: ${formData.precio} ${formData.moneda}`}</p> */}
            </div>
          </div>
          <div className='container-data'>
            <label>Nombre</label>
            <input
              type='text'
              name='nombre'
              placeholder='Nombre'
              value={formData.nombre}
              onChange={handleChange}
            />
            <label>Apellido</label>
            <input
              type='text'
              name='apellido'
              placeholder='Apellido'
              value={formData.apellido}
              onChange={handleChange}
            />
            <label>Email</label>
            <input
              type='text'
              name='email'
              placeholder='Email'
              value={formData.email}
              onChange={handleChange}
            />
            <button
              type='submit'
              className='btn-modal'
              style={{ gridColumn: 'span 2' }}
            >
              <strong>ENVIAR</strong>
            </button>
          </div>
        </form>
        <img
          className='btn-close-modal'
          onClick={onClose}
          src={closeImg}
          alt=''
        />
      </div>
    </div>
  );
};

export default Modal;
