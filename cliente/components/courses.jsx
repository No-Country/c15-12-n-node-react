import '../src/styles/courses.css';
import separator from '../src/assets/images_project/Nueva carpeta/separator.svg';
import Modal from './modal';
import { useState } from 'react';

const courses = () => {
  const [isModalOpen, setIsModalOpen] = useState([false, false, false]);
  const openModal = (index) => {
    let newIsModalOpen = [...isModalOpen];
    newIsModalOpen[index] = true;
    setIsModalOpen(newIsModalOpen);
  };
  const closeModal = (index) => {
    let newIsmodalOpen = [...isModalOpen];
    newIsmodalOpen[index] = false;
    setIsModalOpen(newIsmodalOpen);
  };
  return (
    <div className='courses-component'>
      <h1 className='title-courses'> SELECT THE PLAN</h1>
      <img className='separator-img' src={separator} alt='' />
      <div className='container-courses'>
        <div className='item-courses'>
          <h1 className='title-card'>Basico</h1>
          <header className='header-courses'>
            <h1 className='header-title'>$20/USD</h1>
          </header>
          <div className=''>
            <ul className='ul'>
              <li>Certificado</li>
              <li>Curso Completo</li>
              <li>Todos los modulos</li>
              <li>Clases grupales</li>
            </ul>
          </div>
          <hr />
          <div className='container-botton'>
            <button onClick={() => openModal(0)} className='btn'>
              Selecciona tu plan
            </button>
          </div>
          {isModalOpen[0] && <Modal onClose={() => closeModal(0)} />}
        </div>
        <div className='item-courses standar'>
          <h1 className='title-card'>Intermedio</h1>
          <header className='header-courses'>
            <h1 className='header-title'>$50/USD</h1>
          </header>
          <div className=''>
            <ul className='ul'>
              <li>Certificado</li>
              <li>Curso Completo</li>
              <li>Todos los modulos</li>
              <li>Clases grupales</li>
              <li>Clases uno a uno 2 veces por semana</li>
            </ul>
          </div>
          <hr />
          <div className='container-botton'>
            <button onClick={() => openModal(1)} className='btn'>
              Selecciona tu plan
            </button>
          </div>
          {isModalOpen[1] && <Modal onClose={() => closeModal(1)} />}
        </div>
        <div className='item-courses'>
          <h1 className='title-card'>Avanzado</h1>
          <header className='header-courses'>
            <h1 className='header-title'>$90/USD</h1>
          </header>
          <div className='content-ul'>
            <ul className='ul'>
              <li>Certificado</li>
              <li>Curso Completo</li>
              <li>Todos los modulos</li>
              <li>Clases grupales</li>
              <li>Clases uno a uno 4 veces por semana</li>
              <li>Acceso a canal exclusivo</li>
            </ul>
          </div>
          <hr />
          <div className='container-botton'>
            <button onClick={() => openModal(2)} className='btn'>
              Selecciona tu plan
            </button>
          </div>
          {isModalOpen[2] && <Modal onClose={() => closeModal(2)} />}
        </div>
      </div>
    </div>
  );
};

export default courses;
