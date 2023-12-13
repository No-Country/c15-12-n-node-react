import '../src/styles/nav.css';
import portatoIcon from '../src/assets/images_project/Nueva carpeta/guitarra.png';
import userIcon from '../src/assets/images_project/Nueva carpeta/usuario.png';
import { Link } from 'react-router-dom';
import ModalLoging from '../components/modalLoginRegister';

const nav = () => {
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
        {/* <li>
          <Link to='/registrarse'>Registrarse</Link>
        </li>
        <li>
          <Link to='/Login'>Login</Link>
        </li> */}
      </ul>
      <ModalLogingyhujn022222222222222222222222222222222222222222t
      6 />
      <div className='container-img'>
        <img className='user-img' src={userIcon} alt='user-img' />
      </div>
    </nav>
  );
};

export default nav;
