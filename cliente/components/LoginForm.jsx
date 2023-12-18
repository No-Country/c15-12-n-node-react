import { useState } from 'react';
import '../src/styles/form.css';
import separator from '../src/assets/images_project/Nueva carpeta/separator.svg';
//import emails from '../src/assets/images_project/Nueva carpeta/form-email.png';

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      switch (name) {
        case 'email':
          setEmail(value);
          break;
        case 'password':
          setPassword(value);
          break;
      }
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      const response = await fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        // Aquí puedes manejar los datos de la respuesta como necesites
        console.log(data);
        alert('Inicio de sesión realizado con éxito');
      } else {
        alert('Inicio de sesión Incorrecto')
      }
    };
  
    return (
      <div className='form-container-prime'>
        <h1>INICIAR SESION</h1>
        <img className='separator-img' src={separator} alt='' />
        <div className='container-form'>
          <form className='form' onSubmit={handleSubmit}>
            <input
              type='email'
              placeholder='Email'
              name='email'
              value={email}
              onChange={handleChange}
              required
            />
            <br />
            <input
              type='password'
              placeholder='Password'
              name='password'
              value={password}
              onChange={handleChange}
              required
            />
            <br />
            <button type='submit' className='submit-button'>Iniciar Sesion</button>
          </form>
        </div>
      </div>
    );
  };
  
  export default LoginForm;