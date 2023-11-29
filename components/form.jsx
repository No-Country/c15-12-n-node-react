import { useState } from 'react';
import '../src/styles/form.css';
import emails from '../src/assets/images_project/Nueva carpeta/form-email.png';

const Form = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, email, password });
  };

  return (
    <div className='container-form'>
      <img className='img-email' src={emails} alt='' />
      <form className='form' onSubmit={handleSubmit}>
        <h1>Envia un mensaje</h1>
        <input
          type='text'
          placeholder='Name'
          name='name'
          value={name}
          onChange={handleChange}
        />
        <br />
        <input
          type='email'
          placeholder='Email'
          name='email'
          value={email}
          onChange={handleChange}
        />
        <br />
        <input
          type='password'
          placeholder='Password'
          name='password'
          value={password}
          onChange={handleChange}
        />
        <br />
        <textarea
          placeholder='Description'
          name='description'
          value='Descripcion'
          onChange={handleChange}
        />
        <br />
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};

export default Form;
