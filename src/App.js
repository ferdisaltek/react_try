import React from 'react';
import logo from './logo.svg';
import './App.css';
import {FirstComponent} from './first_comp';
import  User from './User';
import Context from './Context';
import Navbar from './Navbar';
import PropsTry from './PropsTry';
import AddUser from './AddUsers';
import Test from './component/Test';
import {FirstProps} from './props';

var uniqid = require('uniqid');

function App() {

  const propsabit="this is first prop";
  const liste=["birinci eleman","ikinci eleman","ücüncü eleman","dördüncü eleman"];

  return (
    <div className="App">
      <Context classname="users"></Context>
      <Navbar></Navbar>
       <Test test="deneme"/>
      <AddUser></AddUser>
      <header className="App-header" >
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App_new"
          href="http://localhost:3000/ferdi"
          target="_blank"
          rel="noopener noreferrer"
        ></a>   console.log(uniqid());
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {1+5}
        <FirstComponent>this is my fisrt component</FirstComponent><br>
        </br>
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
      <PropsTry
        name="ferdi"

        lastname="saltek"
             department="operasyom"
     />
    </div>
  );
}

export default App;
