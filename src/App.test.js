import React from 'react';
import logo from './logo.svg';
import './App.css';
import {FirstComponent} from './first_comp';
import  User from './User';
import Navbar from './Navbar';
import PropsTry from './PropsTry';
import {FirstProps} from './props';

function App_new() {

  const propsabit="this is first prop";
  const liste=["birinci eleman","ikinci eleman","ücüncü eleman","dördüncü eleman"];

  return (
    <div className="App_new">
      <Navbar></Navbar>
    
        <p>
          Edit <code>src/App.test.js</code> and save to reload.
        </p>
     
        <User></User>
        <FirstComponent firstprop={propsabit}></FirstComponent>
        <FirstProps myList={liste}></FirstProps>
      <Navbar title="ferdi"/> 
        <a
          className="App-link"
          href="http://localhost:3000/ferdi"
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

export default App_new;
