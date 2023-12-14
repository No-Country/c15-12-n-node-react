import '../src/styles/modalLoginRegister.css';
import { Link } from 'react-router-dom';
const modalLogin = ({ isOpen, closeModal }) => {
  if (!isOpen) return null;
  return (
    <div className='btn-modal-container'>
      <ul>
        <li>
          <Link
            className='btn-modal register'
            to='/registrarse'
            onClick={closeModal}
          >
            REGISTRARSE
          </Link>
        </li>
        <li>
          <Link className='btn-modal login' to='/Login' onClick={closeModal}>
            INICIAR SESION
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default modalLogin;
