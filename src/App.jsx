import './App.css';
import Home from '../components/home';
import Nav from '../components/nav';
import Footer from '../components/footer';
import Courses from '../components/courses';
import Teacher from '../components/teacher';
import Blog from '../components/blog';
import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <div className='App'>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/courses' element={<Courses />} />
        <Route path='/teacher' element={<Teacher />} />
        <Route path='/blog' element={<Blog />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
