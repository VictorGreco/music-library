import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import Search from './components/Search/Search';
import AdditionalParams from './components/AdditionalParams/AdditionalParams';
import SearchResultDisplayer from './components/SearchResult/SearchResultDisplayer';

const jsonp = require('jsonp');

function App(): JSX.Element {
  const [searchResponse, setSearchResponse]: any = useState([]);
  const [search, setSearch]: any = useState({ category: 'music', search_term: '' });
  const [additionalParams, setAdditionalParams]: any = useState({
    country: {
      checked: false,
      value: 'ES'
    },
    explicit_content: {
      checked: false,
      value: 'yes'
    },
    limit: {
      checked: false,
      value: '10'
    }
  });


  useEffect(() => {

    (async () => {
      const config = {
        params: {
          term: search?.search_term,
          country: additionalParams?.country?.checked ? additionalParams?.country.value : 'ES',
          media: search?.category,
          limit: additionalParams?.limit?.checked ? additionalParams?.limit.value : '10',
          lang: 'en_us',
          explicit: additionalParams?.explicit_content?.checked ? additionalParams?.explicit_content.value : 'No'
        },
        data: jsonp
      };

      setSearchResponse(await axios.get('https://itunes.apple.com/search', config));
    })();

    searchResponse?.data?.results.map((item: any) => { console.log(item) });

  }, [search, additionalParams]);


  const onFilterUpdates = (state: Object): void => {
    setAdditionalParams(state)
  }

  const onSearchChange = (state: Object): void => {
    setSearch(state)
  }

  return (
    <div className="App">
      <Search callback={onSearchChange} />
      <AdditionalParams callback={onFilterUpdates} />
      <SearchResultDisplayer data={searchResponse?.data?.results} />
    </div>
  );
}

export default App;
