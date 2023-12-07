import './App.css';
import Home from '../components/home';
import Nav from '../components/nav';
import Footer from '../components/footer';
import Courses from '../components/courses';
import Blog from '../components/blog';
import About from '../components/about';
import Review from '../components/review';
import Contact from '../components/form';
import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <div className='App'>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/courses' element={<Courses />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/about' element={<About />} />
        <Route path='/review' element={<Review />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;