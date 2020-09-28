import React, { Component } from 'react';
import api from './api/Api';
import iconNext from '@material-ui/core/IconButton/index'

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {}
    };
  }

  componentDidMount = async () => {
    const imageRadon = await await (await api(`/800/800?random=1`)).headers;
    const idImage = imageRadon['picsum-id'];
    console.log(idImage);
    const imageInfo = await await await api(`/id/${idImage}/info`);
    console.log(imageInfo);

    this.setState({
      data: imageInfo['data']
    });
  };
    render() {
      const { data } = this.state;

      return (
        <div className="App">
          <div className="Container">
              <figure id={data.id}>
                <img src={data.download_url} alt={data.author} />
                <figcaption>{data.author}</figcaption>
              </figure>
          </div>
          <p>
            
          </p>
        </div>
      );
    }
  }
  
  export default App;