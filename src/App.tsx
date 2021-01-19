import React, {useState} from 'react';
import ReactDom from 'react-dom';
import logo from './logo.svg';
import './App.css';
import env from 'react-dotenv';
import Search from './components/Search';

const jsonp = require('jsonp');

function App(): JSX.Element {

  return (
    <div className="App">
      <Search />
    </div>
  );
}

export default App;
