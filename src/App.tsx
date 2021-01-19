import React from 'react';
import './App.css';
import env from 'react-dotenv';
import Search from './components/Search';
import AdditionalParams from './components/AdditionalParams';

const jsonp = require('jsonp');

function App(): JSX.Element {
  const onFilterUpdates = (state: Object): void => {
    console.log(state)
  }

  const onSearchChange = (state: Object): void => {
    console.log(state)
  }

  return (
    <div className="App">
      <Search callback={onSearchChange} />
      <AdditionalParams callback={onFilterUpdates} />
    </div>
  );
}

export default App;
