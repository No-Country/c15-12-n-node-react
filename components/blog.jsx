import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import { useState, useEffect } from 'react';
import '../src/styles/blog.css';
import news from '../src/assets/images_project/Nueva carpeta/noticias.png';

const blog = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'https://newsapi.org/v2/everything?q=tesla&from=2023-11-05&sortBy=publishedAt&apiKey=6276b80e1e8e4cf5a56073969ffca1fc'
      );
      setData(result.data.articles);
      console.log(result.data.articles);
    };
    fetchData();
  }, []);

  return (
    <div className='container-blog'>
      <h1>NOTICIAS DESTACADAS </h1>
      <ul className='blog-list'>
        {data.slice(1, 5).map((item) => (
          <li key={uuidv4()}>
            <h2>
              <strong> {item.title.toUpperCase()} </strong>{' '}
            </h2>

            <br />
            <img
              className='img-blog'
              src={item.urlToImage ? item.urlToImage : news}
              alt='noticias'
            />
            <br />
            <p>{item.description}</p>
            <br />
            <a href={item.url} target='blank'>
              <strong>{item.url}</strong>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default blog;
