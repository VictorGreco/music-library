import React, { useEffect, useState } from 'react';
import './App.css';
import env from 'react-dotenv';
import Search from './components/Search/Search';
import AdditionalParams from './components/AdditionalParams/AdditionalParams';
import SearchResultDisplayer from './components/SearchResultDisplayer/SearchResultDisplayer';
import axios from 'axios';

const jsonp = require('jsonp');

function App(): JSX.Element {
  const [searchResponse, setSearchResponse]: any = useState([]);
  const [searchState, setSearchState]: any = useState({ category: 'music', search_term: '' });
  const [additionalParamsState, setAdditionalParamsState]: any = useState({
    country: {
      checked: false,
      value: 'es'
    },
    explicit_content: {
      checked: false,
      value: 'yes'
    },
    limit: {
      checked: false,
      value: 10
    }
  });


  useEffect(() => {

    (async () => {
      const config = {
        params: {
          term: searchState?.search_term,
          country: additionalParamsState?.country?.checked ? additionalParamsState?.country.value : 'es',
          media: searchState?.category,
          limit: additionalParamsState?.limit?.checked ? additionalParamsState?.limit.value : 10,
          lang: 'en_us',
          explicit: additionalParamsState?.explicit_content?.checked ? additionalParamsState?.explicit_content.value : 'No'
        },
        data: jsonp
      };

      setSearchResponse(await axios.get('https://itunes.apple.com/search', config));
    })();

    searchResponse?.data?.results.map((item: any) => { console.log(item) });

    console.log(additionalParamsState);
  }, [searchState, additionalParamsState]);

  return (
    <div className="App">
      <Search setState={setSearchState} />
      <AdditionalParams setState={setAdditionalParamsState} state={additionalParamsState} />
      <SearchResultDisplayer results={searchResponse?.data?.results} />
    </div>
  );
}

export default App;
