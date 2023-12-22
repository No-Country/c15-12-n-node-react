import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import { useState, useEffect } from 'react';
import '../src/styles/blog.css';
import news from '../src/assets/images_project/Nueva carpeta/noticias.png';
import separator from '../src/assets/images_project/Nueva carpeta/separator.svg';
import Spinner from '../components/spinner';

const blog = () => {
  const [data, setData] = useState([null]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'https://www.alphavantage.co/query?function=NEWS_SENTIMENT&tickers=AAPL&apikey=demo'
      );
      setData(result.data.feed);
      setLoading(false);
      console.log(result.data.feed);
    };
    fetchData();
  }, []);

  return (
    <div className='container-spinner'>
      {loading ? (
        <Spinner />
      ) : (
        <div className='container-blog'>
          <h1>NOTICIAS DESTACADAS </h1>
          <img className='separator-img' src={separator} alt='' />
          <ul className='blog-list'>
            {data.slice(1, 5).map((item) => (
              <li key={uuidv4()}>
                <h2>
                  <strong>
                    {' '}
                    {item.title.toUpperCase().substring(0, 50)}...{' '}
                  </strong>{' '}
                </h2>

                <br />
                <img
                  id='img-blog'
                  className='img-blog'
                  src={item.banner_image ? item.banner_image : news}
                  alt='noticias'
                />
                <br />
                <p>{item.summary.substring(0, 200)}...</p>
                <br />
                <a href={item.url} target='blank'>
                  <strong>Ver mas...</strong>
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default blog;
