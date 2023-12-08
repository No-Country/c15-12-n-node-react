// Modal.js
import React from 'react';
import '../src/styles/modal.css';

const Modal = ({ onClose }) => {
  return (
    <div className='modal-overlay'>
      <div className='modal-content'>
        <h2 className='modal-title'>Plan Selection Course</h2>
            <form action="">
                <label>Nombre</label>
                <input type="text" placeholder='Nombre' />
                <label>Apellido</label>
                <input type="text" placeholder='apellido' />
                <label htmlFor="">Email</label>
                <input type="text" placeholder='email' />
                <label>Contraseña</label>
                <input type="text" placeholder='password' />
            </form>
        <button className='btn-modal' onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default Modal;
