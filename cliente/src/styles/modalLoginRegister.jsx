import '../src/styles/modalLoginRegister.css';
import { Link } from 'react-router-dom';
const modalLogin = ({ isOpen, closeModal }) => {
  if (!isOpen) return null;
  return (
    <div className='btn-modal-container'>
      <ul>
        <li>
          <Link
            id='btn-login'
            className='btn-modal register'
            to='/registrarse'
            onClick={closeModal}
          >
            <strong>REGISTRARSE</strong>
          </Link>
        </li>
        <li>
          <Link
            id='btn-register'
            className='btn-modal login'
            to='/Login'
            onClick={closeModal}
          >
            <strong>INICIAR SESION</strong>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default modalLogin;
