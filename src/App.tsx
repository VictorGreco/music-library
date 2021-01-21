import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import Search from './components/Search/Search';
import AdditionalParams from './components/AdditionalParams/AdditionalParams';
import SearchResultDisplayer from './components/SearchResult/SearchResultDisplayer';
import FavoriteCollection from './components/FavoriteCollection/FavoriteCollection';

const jsonp = require('jsonp');

function App(): JSX.Element {
  const favorites = JSON.parse(`${localStorage.getItem('favoriteItems')}`)  || []
  const [searchResponse, setSearchResponse]: any = useState([]);
  const [favoriteItems, setFavoriteItems]: any = useState(favorites);
  const [search, setSearch]: any = useState({ category: 'musicTrack', search_term: 'it\'s my life' });
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
      value: '6'
    }
  });


  useEffect(() => {
    (async () => {
      const config = {
        params: {
          term: search?.search_term,
          country: additionalParams?.country?.checked ? additionalParams?.country.value : 'ES',
          media: 'music',
          entity: search?.category,
          limit: additionalParams?.limit?.checked ? additionalParams?.limit.value : '6',
          lang: 'en_us',
          explicit: additionalParams?.explicit_content?.checked ? additionalParams?.explicit_content.value : 'No'
        },
        data: jsonp
      };

      setSearchResponse(await axios.get('https://itunes.apple.com/search', config));
    })();


  }, [search, additionalParams]);


  const onFilterUpdates = (state: Object): void => {
    setAdditionalParams(state)
  }

  const onSearchChange = (state: Object): void => {
    setSearch(state)
  }



  const updateFavorites = function (title: string , media: string, buyNow: string): void {
    setFavoriteItems([...favoriteItems, {...arguments}])
  }

  useEffect(() => {
    localStorage.setItem('favoriteItems', JSON.stringify(favoriteItems))
  }, [favoriteItems])

  return (
    <div className="App">
      <Search callback={onSearchChange} />
      <AdditionalParams callback={onFilterUpdates} />
      <div className="main_container">
        <SearchResultDisplayer onClick={updateFavorites} data={searchResponse?.data?.results} />
        <FavoriteCollection favorites={favoriteItems}/>
      </div>
    </div>
  );
}

export default App;
