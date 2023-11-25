import '../src/styles/nav.css';
import portatoIcon from '../src/assets/images_project/Nueva carpeta/guitarra.png';
import userIcon from '../src/assets/images_project/Nueva carpeta/usuario.png';
function Nav() {
  return (
    <>
      <nav>
        <img
          className='portato-img-icon'
          src={portatoIcon}
          alt='portato-img-icon'
        />
        <h5>Academia Portato</h5>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Courses</li>
          <li>Teacher</li>
          <li>Review</li>
          <li>Blog</li>
          <li>Contact</li>
        </ul>
        <div className='container-img'>
          <img className='user-img' src={userIcon} alt='user-img' />
        </div>
      </nav>
    </>
  );
}

export default Nav;
