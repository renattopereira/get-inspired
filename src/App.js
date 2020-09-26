import React, { Component, useState } from 'react';
import api from './api/Api';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {}
    };
  }

  componentDidMount = async () => {
    const response = await api('/list?page=5&limit=1');
    this.setState({
      url: response.data[0].download_url
    });
  };


    render() {
      const { url } = this.state;

      return (
        <div className="App">
          <div className="Container">
              <figure>
                <img src={url} alt="Teste" />
                <figcaption>Titulo da imagem</figcaption>
              </figure>
              <span className="author">
                Renatto P. Silva
              </span>
              <a className="next" href="/next">
                <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-right-square-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm2.5 8.5a.5.5 0 0 1 0-1h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5z"/>
                </svg>
              </a>
          </div>
        </div>
      );
    }
  }
  
  export default App;