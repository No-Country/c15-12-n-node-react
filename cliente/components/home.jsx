import '../src/styles/home.css';
import portatoimg from '../src/assets/images_project/Nueva carpeta/portatoimg.png';
import teacher from '../src/assets/images_project/Nueva carpeta/home-teacher.png';
import violin from '../src/assets/images_project/Nueva carpeta/violin.png';
import violonchelo from '../src/assets/images_project/Nueva carpeta/violonchelo.png';
import contrabajo from '../src/assets/images_project/Nueva carpeta/contrabajo.png';
import woman from '../src/assets/images_project/Nueva carpeta/img-woman.jpg';
import comillas from '../src/assets/images_project/Nueva carpeta/comillas.png';
import zigzag from '../src/assets/images_project/Nueva carpeta/zigzag.png';
import separator from '../src/assets/images_project/Nueva carpeta/separator.svg';
import SignupForm from './form';
import { Link } from 'react-router-dom';

const home = () => {
  return (
    <>
      <div className='container-prime'>
        <div className='container-home-search'>
          <h1>La Mejor Enseñanza Esta Aquì</h1>
          <p>
            Impulsamos el amor por la música en todas las edades. Ofrecemos
            educación musical de alta calidad, fomentando la creatividad y el
            logro personal.
          </p>
          <Link to='/about' className='btn-learnMore'>
            <span className='text text-1'>Saber Mas</span>
            <span className='text text-2' aria-hidden='true'>
              Saber Mas
            </span>
          </Link>
        </div>
        <div className='img-home-container'>
          <img className='img-home-portato' src={portatoimg} alt='' />
        </div>
      </div>
      <div className='container-aboutUs'>
        <h1 className='titulo'>SOBRE NOSOTROS</h1>
        <img className='separator-img' src={separator} alt='' />
        <div className='container-img-aboutUs'>
          <img className='img-aboutUs' src={teacher} alt='' />
        </div>
        <p>
          Ofrecemos una amplia gama de cursos, desde lecciones individuales de
          instrumentos hasta clases de teoría musical y conjuntos de música de
          cámara. Nuestros profesores altamente calificados y apasionados por la
          música están comprometidos a ayudar a cada estudiante a alcanzar su
          máximo potencial musical. Únete a Nosotros Si estás listo para
          embarcarte en un viaje musical.
        </p>
      </div>

      <div className='container-morePopular'>
        <h1 className='titulo'>MAS POPULARES</h1>
        <img className='separator-img' src={separator} alt='' />
        <ul>
          <li>
            <img src={violin} alt='' />
            <p>Violin</p>
          </li>
          <li>
            <img src={violonchelo} alt='' />
            <p>Violonchelo</p>
          </li>
          <li>
            <img src={contrabajo} alt='' />
            <p>Contrabajo</p>
          </li>
        </ul>
      </div>
      <div className='container-card-reviews-principal'>
        <h1 className='titulo'>COMENTARIOS DE ESTUDIANTES</h1>
        <img className='separator-img' src={separator} alt='' />
        <div className='container-reviews'>
          <ul>
            <li>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Doloremque temporibus obcaecati
              </p>
              <img className='zigzag' src={zigzag} alt='' />
              <div className='container-cards-img'>
                <img className='profile-img' src={woman} alt='' />
                <img className='backtips-img' src={comillas} alt='' />
              </div>
            </li>
            <li>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Doloremque temporibus obcaecati
              </p>
              <img className='zigzag' src={zigzag} alt='' />
              <div className='container-cards-img'>
                <img className='profile-img' src={woman} alt='' />
                <img className='backtips-img' src={comillas} alt='' />
              </div>
            </li>
            <li>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Doloremque temporibus obcaecati
              </p>
              <img className='zigzag' src={zigzag} alt='' />
              <div className='container-cards-img'>
                <img className='profile-img' src={woman} alt='' />
                <img className='backtips-img' src={comillas} alt='' />
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div id='contact'>
        <SignupForm />
      </div>
    </>
  );
};

export default home;
