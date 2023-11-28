import '../src/styles/nav.css';
import portatoIcon from '../src/assets/images_project/Nueva carpeta/guitarra.png';
import userIcon from '../src/assets/images_project/Nueva carpeta/usuario.png';
import Courses from '../components/courses';
import Blog from '../components/blog';
import { Routes, Route, Link } from 'react-router-dom'

const Nav = () => {
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
        <Routes>
          <Route path='/courses' element={<Courses/>}/> 
          <Route path='/blog' element={<Blog/>}/> 
        </Routes>
          {/* <li>Home</li> */}
          <li>About</li>
          <li><Link to="/courses">Courses</Link></li>
          <li>Teacher</li>
          <li>Review</li>
          <li><Link to="/blog">blog</Link></li>
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
