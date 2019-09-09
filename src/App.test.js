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
    <div >
     
        <a
          className="App-link"
          href="http://localhost:3000/ferdi"
          target="_blank"
          rel="noopener noreferrer"
        >
        
    </div>
  );
}

export default App_new;
