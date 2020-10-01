import React, { useState, useEffect } from 'react';
import api from './api/Api';

import './App.css';

export default function App() {
  
  const [imageInf, setImageInf] = useState({});

  async function getUrl() {
    const imageRadon = await (await api(`/800/800?random=1`)).headers;
    const idImage = imageRadon['picsum-id'];
    const data = await (await api(`/id/${idImage}/info`)).data;

    setImageInf(data);
  }

  useEffect(async () => {
    await getUrl();
  }, []);

  return (
      <div className="App">
        <div className="Container">
            <figure id={imageInf.id}>
              <img src={imageInf.download_url} alt={imageInf.author} />
              <figcaption>{imageInf.author}</figcaption>
            </figure>

            <button onClick={getUrl} className="next">
            Click
            </button>
        </div>
        <p>
        </p>
      </div>
  );
}