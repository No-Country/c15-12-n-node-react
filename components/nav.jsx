import '../src/styles/nav.css';
import portatoIcon from '../src/assets/images_project/Nueva carpeta/guitarra.png';
import userIcon from '../src/assets/images_project/Nueva carpeta/usuario.png';
import openMenuIcon from '../src/assets/images_project/barra-de-menus.png';
import closeMenuIcon from '../src/assets/images_project/borrar.png';
import { Link } from 'react-router-dom';
import ModalLoging from '../components/modalLoginRegister';
import { useState } from 'react';

const Nav = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <nav>
      <button onClick={toggleNav}>
        {isNavOpen ? (
          <img src={closeMenuIcon} alt='Cerrar menú' />
        ) : (
          <img src={openMenuIcon} alt='Abrir menú' />
        )}
      </button>
      <div className='container-logo'>
        <img
          className='portato-img-icon'
          src={portatoIcon}
          alt='portato-img-icon'
        />
        <h5 className='logo-portato-nav'>AC Portato</h5>
      </div>

      <ul className={isNavOpen ? 'open' : ''}>
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

      <div className='container-img' onClick={() => setIsModalOpen(true)}>
        <img className='user-img' src={userIcon} alt='user-img' />
      </div>
      <ModalLoging
        isOpen={isModalOpen}
        closeModal={() => setIsModalOpen(false)}
      />
    </nav>
  );
};

export default Nav;
