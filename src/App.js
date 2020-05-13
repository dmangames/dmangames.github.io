import React from 'react';
import logo from './logo.svg';
import set3Images from './set3Images';
import './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <h1>Hi</h1>
      <ChampTile src={set3Images[0].src} alt={set3Images[0].title} />
      <ChampTile src={set3Images[1].src} alt={set3Images[1].title} />
      <ChampTile src={set3Images[2].src} alt={set3Images[0].title} />
      <ChampTile src={set3Images[3].src} alt={set3Images[0].title} />
      <ChampTile src={set3Images[4].src} alt={set3Images[0].title} />
    </div>
  );
}

function ChampTile(props) {
  return <img src={props.src} alt={props.alt}/>
}

export default App;
