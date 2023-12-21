import { useState } from 'react';
import '../src/styles/form.css';
import separator from '../src/assets/images_project/Nueva carpeta/separator.svg';
import emails from '../src/assets/images_project/Nueva carpeta/form-email.png';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
const Form = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [description, setDescription] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'description':
        setDescription(value);
        break;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:3000/contacto', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, description }),
    });

    if (response.ok) {
      const data = await response.json();
      // Aquí puedes manejar los datos de la respuesta como necesites
      console.log(data);
      alert('Contacto enviado Con éxito');
    } else {
      alert('Contacto enviado Sin éxito');
    }
  };

  return (
    <div className='form-container-prime' data-aos='zoom-in-up'>
      <h1>CONTACTO</h1>
      <img className='separator-img' src={separator} alt='' />
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
          <textarea
            placeholder='Description'
            name='description'
            value={description}
            onChange={handleChange}
          />
          <br />
          <button type='submit' className='submit-button'>
            Contactar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
