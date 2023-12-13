import '../src/styles/nav.css';
import portatoIcon from '../src/assets/images_project/Nueva carpeta/guitarra.png';
import userIcon from '../src/assets/images_project/Nueva carpeta/usuario.png';
import { Link } from 'react-router-dom';
import ModalLoging from '../components/modalLoginRegister';
import { useState } from 'react';

const nav = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <nav>
      <img
        className='portato-img-icon'
        src={portatoIcon}
        alt='portato-img-icon'
      />
      <h5>AC Portato</h5>
      <ul>
        <li>
          <Link to='/'>Inicio</Link>
        </li>
        <li>
          <Link to='/about'>Nosotros</Link>
        </li>
        <li>
          <Link to='/courses'>Cursos</Link>
        </li>
        <li>
          <Link to='/blog'>Blog</Link>
        </li>
        <li>
          <Link to='/contacto'>Contacto</Link>
        </li>
      </ul>

      <button>
        <div className='container-img'>
          <img
            onClick={() => setIsModalOpen(true)}
            className='user-img'
            src={userIcon}
            alt='user-img'
          />
        </div>
        <ModalLoging
          isOpen={isModalOpen}
          closeModal={() => setIsModalOpen(false)}
        />
      </button>
    </nav>
  );
};

export default nav;
