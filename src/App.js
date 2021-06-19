import React, { Component } from 'react';
import Player from './components/player/Player'

import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      urlToPlay: ''
    };
  }

  componentDidMount() {
    this.startClipOne();
  }

  // Update your m3u8 url's
  startClipTwo = () => {
    this.setState({
      urlToPlay: 'https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8'
    });
  }

  startClipOne = () => {
    this.setState({
      urlToPlay: 'https://bitdash-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8'
    });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h3>Welcome to react-shaka-player Demo</h3>
        </div>
        <h3 className="App-intro">
          Click buttons below to pass new props to the player!
        </h3>

        <button className="button" onClick={this.startClipOne}>Start Clip One</button>
        <button className="button" onClick={this.startClipTwo}>Start Clip Two</button>
        <Player url={this.state.urlToPlay} />
      </div>
    );
  }
}

export default App;
