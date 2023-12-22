import { useRef } from 'react';
import '../src/styles/about.css';
import Teacher2 from '../src/assets/images_project/Nueva carpeta/home-teacher2.png';
import videoTeacher1 from '../src/assets/images_project/video/b&gviolin.mp4';
import separator from '../src/assets/images_project/Nueva carpeta/separator.svg';

const about = () => {
  const videoRef = useRef(null);
  const imageRef = useRef(null);

  const handleMouseOver = () => {
    imageRef.current.style.display = 'none';
    videoRef.current.style.display = 'block';
    imageRef.current.classList.add('hide');
    videoRef.current.classList.remove('hide');
    videoRef.current.play();
  };

  const handleMouseOut = () => {
    imageRef.current.style.display = 'block';
    videoRef.current.style.display = 'none';
    imageRef.current.classList.remove('hide');
    videoRef.current.classList.add('hide');
    videoRef.current.pause();
  };
  return (
    <div className='about-container-principal'>
      <h1>NOSOTROS </h1>
      <img className='separator-img' src={separator} alt='' />
      <div className='about-container-secundary'>
        <div
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
          style={{ position: 'relative' }}
        >
          <img
            ref={imageRef}
            className='container-img-teacher'
            src={Teacher2}
            alt='Descripción de la imagen'
          />
          <video
            className='video-teacher1 hide'
            ref={videoRef}
            style={{ display: 'none' }}
          >
            <source src={videoTeacher1} type='video/mp4' />
          </video>
        </div>
        <p>
          <strong>¡Hola!</strong> Soy una apasionada instructora de instrumentos
          de cuerda, especializada en el violín. Me encanta la música y creo
          firmemente en su poder para conectar a las personas y expresar
          emociones profundas. Mi objetivo es ayudarte a descubrir tu propio
          amor por la música y a desarrollar tus habilidades con el violín.
          ¡Espero verte pronto en nuestras clases!..
        </p>
      </div>
    </div>
  );
};

export default about;
