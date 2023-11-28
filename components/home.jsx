import '../src/styles/home.css';
import portatoimg from '../src/assets/images_project/Nueva carpeta/portatoimg.png';
import teacher from '../src/assets/images_project/Nueva carpeta/home-teacher.png';
import violin from '../src/assets/images_project/Nueva carpeta/violin.png';
import violonchelo from '../src/assets/images_project/Nueva carpeta/violonchelo.png';
import contrabajo from '../src/assets/images_project/Nueva carpeta/contrabajo.png';
import Footer from '../components/footer';

function Home() {
  return (
    <>
      <div className='container-prime'>
        <div className='container-home-search'>
          <h1>
            El mejor curso
            <br /> lo encuentras aquì
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            <br />
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          </p>
          <button>Saber mas</button>
        </div>
        <div className='img-home-container'>
          <img className='img-home-portato' src={portatoimg} alt='' />
        </div>
      </div>
      <div className='container-aboutUs'>
        <h1>SOBRE NOSOTROS</h1>
        <div className='container-img-aboutUs'>
          <img className='img-aboutUs' src={teacher} alt='' />
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti
          numquam natus vitae maiores, totam reiciendis esse consectetur laborum
          velit, sunt, dolorum repellat hic magnam distinctio incidunt maxime
          ullam deserunt obcaecati?
        </p>
      </div>

      <div className='container-morePopular'>
        <h1>MAS POPULARES</h1>
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
      <Footer />
    </>
  );
}

export default Home;
