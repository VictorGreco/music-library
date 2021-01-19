import React from 'react';
import './App.css';
import env from 'react-dotenv';
import Search from './components/Search';
import AdditionalParams from './components/AdditionalParams';

const jsonp = require('jsonp');

function App(): JSX.Element {

  return (
    <div className="App">
      <Search />
      <AdditionalParams />
    </div>
  );
}

export default App;
