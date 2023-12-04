import '../src/styles/footer.css';
import imgFacebook from '../src/assets/images_project/redes/facebook.png';
import imgX from '../src/assets/images_project/redes/x.png';
import imgInstagram from '../src/assets/images_project/redes/instagram.png';
import imgLinkdin from '../src/assets/images_project/redes/linkedin.png';

const footer = () => {
  return (
    <>
      <footer>
        <div className='container-footer'>
          <div className='footer colunm1'>
            <h1>Encuentranos aquì</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <br />
            <ul className='icon-social-container'>
              <li>
                <img className='imgSocial' src={imgFacebook} alt='' />
              </li>
              <li>
                <img className='imgSocial' src={imgX} alt='' />
              </li>
              <li>
                <img className='imgSocial' src={imgInstagram} alt='' />
              </li>
              <li>
                <img className='imgSocial' src={imgLinkdin} alt='' />
              </li>
            </ul>
          </div>
          <div className='footer colunm2'>
            <h1>Contactanos</h1>
            <ul>
              <li>+12345678</li>
              <li>correo@gmail.com </li>
            </ul>
          </div>
          <div className='footer localitation'>
            <h1>Localizacion</h1>
            <ul>
              <li>230 Points of the Pines</li>
              <li> Colorado Springs </li>
              <li> United States </li>
            </ul>
          </div>
          <hr />
          <q className='copyrigth'>Todos los derechos reservados</q>
        </div>
      </footer>
    </>
  );
};

export default footer;
