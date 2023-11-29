import '../src/styles/nav.css';
import portatoIcon from '../src/assets/images_project/Nueva carpeta/guitarra.png';
import userIcon from '../src/assets/images_project/Nueva carpeta/usuario.png';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav>
      <img
        className='portato-img-icon'
        src={portatoIcon}
        alt='portato-img-icon'
      />
      <h5>Academia Portato</h5>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>About</li>
        <li>
          <Link to='/courses'>Courses</Link>
        </li>
        <li>
          <Link to='/teacher'>Teacher</Link>
        </li>
        <li>Review</li>
        <li>
          <Link to='/blog'>blog</Link>
        </li>
        <li>Contact</li>
      </ul>
      <div className='container-img'>
        <img className='user-img' src={userIcon} alt='user-img' />
      </div>
    </nav>
  );
};

export default Nav;
