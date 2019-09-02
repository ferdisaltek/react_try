import React from 'react';
import logo from './logo.svg';
import './App.css';
import {FirstComponent} from './first_comp';
import {FirstProps} from './props';

function App() {

  const propsabit="this is first prop";
  const liste=["birinci eleman","ikinci eleman","ücüncü eleman","dördüncü eleman"];

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <FirstComponent>this is my fisrt component</FirstComponent><br>
        </br>
        <FirstComponent firstprop={propsabit}></FirstComponent>
        <FirstProps myList={liste}></FirstProps>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React 
          hello world!!!
        </a>
      </header>
    </div>
  );
}

export default App;
