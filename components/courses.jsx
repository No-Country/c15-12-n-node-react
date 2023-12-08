import '../src/styles/courses.css';
import separator from '../src/assets/images_project/Nueva carpeta/separator.svg';
import { useState } from 'react';
import Modal from './Modal';

const courses = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };
  return (
    <div className='courses-component'>
      <h1 className='title-courses'> SELECT THE PLAN</h1>
      <img className='separator-img' src={separator} alt='' />
      <div className='container-courses'>
        <div className='item-courses'>
          <h1 className='title-card'>Basic</h1>
          <header className='header-courses'>
            <h1 className='header-title'>$20/Mo</h1>
          </header>
          <div className=''>
            <ul className='ul'>
              <li>Certificated</li>
              <li>Full Courses</li>
              <li>All Modules</li>
              <li>Live Projects</li>
              <li>24 x 7 Support</li>
            </ul>
          </div>
          <hr />
          <div className='container-botton'>
            <button onClick={openModal} className='btn'>Select Plan</button>
          </div>
          {isModalOpen && <Modal onClose={closeModal} />}
        </div>
        <div className='item-courses'>
          <h1 className='title-card'>Standard</h1>
          <header className='header-courses'>
            <h1 className='header-title'>$50/Mo</h1>
          </header>
          <div className=''>
            <ul className='ul'>
              <li>Certificated</li>
              <li>Full Courses</li>
              <li>All Modules</li>
              <li>Live Projects</li>
              <li>24 x 7 Support</li>
            </ul>
          </div>
          <hr />
          <div className='container-botton'>
            <button onClick={openModal} className='btn'>Select Plan</button>
          </div>
        </div>
        <div className='item-courses'>
          <h1 className='title-card'>Premium</h1>
          <header className='header-courses'>
            <h1 className='header-title'>$90/Mo</h1>
          </header>
          <div className=''>
            <ul className='ul'>
              <li>Certificated</li>
              <li>Full Courses</li>
              <li>All Modules</li>
              <li>Live Projects</li>
              <li>24 x 7 Support</li>
            </ul>
          </div>
          <hr />
          <div className='container-botton'>
            <button onClick={openModal} className='btn'>Select Plan</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default courses;
