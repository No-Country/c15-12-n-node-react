import '../src/styles/modalLoginRegister.css';
import imgClose from '../src/assets/images_project/borrar.png';
import { Link } from 'react-router-dom';
const modalLogin = ({ isOpen, closeModal }) => {
  if (!isOpen) return null;
  return (
    <div className='btn-modal-container'>
      <img onClick={closeModal} src={imgClose} alt='' />
      <ul>
        <li>
          <Link to='/registrarse'>Registrarse</Link>
        </li>
        <li>
          <Link to='/Login'>Login</Link>
        </li>
      </ul>
    </div>
  );
};

export default modalLogin;
