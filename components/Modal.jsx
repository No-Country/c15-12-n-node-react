// Modal.js
import React from 'react';
import '../src/styles/modal.css';

const Modal = ({ onClose }) => {
  return (
    <div className='modal-overlay'>
      <div className='modal-content'>
        <h2>Plan Selection Form</h2>
            <form action="">
                <label htmlFor="">Nombre</label>
            </form>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default Modal;
