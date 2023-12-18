import '../src/styles/courses.css';
import separator from '../src/assets/images_project/Nueva carpeta/separator.svg';

const courses = () => {
  return (
    <div className='courses-component'>
      <h1 className='title-courses'> SELECT THE PLAN</h1>
      <img className='separator-img' src={separator} alt='' />
      <div className='container-courses'>
        <div className='item-courses'>
          <h1 className='title-card'>Basic</h1>
          <header className='header-courses'>
            <h1 className='header-title'>$20/Mo</h1>
          </header>
          <div className=''>
            <ul className='ul'>
              <li>Certificated</li>
              <li>Full Courses</li>
              <li>All Modules</li>
              <li>Live Projects</li>
              <li>24 x 7 Support</li>
            </ul>
          </div>
          <hr />
          <div className='container-botton'>
            <button className='btn'>Select Plan</button>
          </div>
        </div>
        <div className='item-courses standar'>
          <h1 className='title-card'>Standard</h1>
          <header className='header-courses'>
            <h1 className='header-title'>$50/Mo</h1>
          </header>
          <div className=''>
            <ul className='ul'>
              <li>Certificated</li>
              <li>Full Courses</li>
              <li>All Modules</li>
              <li>Live Projects</li>
              <li>24 x 7 Support</li>
            </ul>
          </div>
          <hr />
          <div className='container-botton'>
            <button className='btn'>Select Plan</button>
          </div>
        </div>
        <div className='item-courses'>
          <h1 className='title-card'>Premium</h1>
          <header className='header-courses'>
            <h1 className='header-title'>$90/Mo</h1>
          </header>
          <div className=''>
            <ul className='ul'>
              <li>Certificated</li>
              <li>Full Courses</li>
              <li>All Modules</li>
              <li>Live Projects</li>
              <li>24 x 7 Support</li>
            </ul>
          </div>
          <hr />
          <div className='container-botton'>
            <button className='btn'>Select Plan</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default courses;
