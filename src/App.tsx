import React, { useEffect, useState } from 'react';
import './App.css';
import env from 'react-dotenv';
import Search from './components/Search';
import AdditionalParams from './components/AdditionalParams';
import SearchResultDisplayer from './components/SearchResultDisplayer';
// import jsonp from 'jsonp';


const TEST_DATA_SONG = {
  "wrapperType": "track",
  "kind": "song",
  "artistId": 111051,
  "collectionId": 1440862963,
  "trackId": 1440862968,
  "artistName": "Eminem",
  "collectionName": "The Marshall Mathers LP2 (Deluxe)",
  "trackName": "Bad Guy",
  "collectionCensoredName": "The Marshall Mathers LP2 (Deluxe)",
  "trackCensoredName": "Bad Guy",
  "artistViewUrl": "https://music.apple.com/us/artist/eminem/111051?uo=4",
  "collectionViewUrl": "https://music.apple.com/us/album/bad-guy/1440862963?i=1440862968&uo=4",
  "trackViewUrl": "https://music.apple.com/us/album/bad-guy/1440862963?i=1440862968&uo=4",
  "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview128/v4/df/81/30/df8130ab-839a-6f73-0db6-6fcd9b3e22f3/mzaf_2891452124148385478.plus.aac.p.m4a",
  "artworkUrl30": "https://is3-ssl.mzstatic.com/image/thumb/Music118/v4/63/56/9f/63569ff8-ff9b-822d-0671-3fb7097978a5/source/30x30bb.jpg",
  "artworkUrl60": "https://is3-ssl.mzstatic.com/image/thumb/Music118/v4/63/56/9f/63569ff8-ff9b-822d-0671-3fb7097978a5/source/60x60bb.jpg",
  "artworkUrl100": "https://is3-ssl.mzstatic.com/image/thumb/Music118/v4/63/56/9f/63569ff8-ff9b-822d-0671-3fb7097978a5/source/100x100bb.jpg",
  "collectionPrice": 11.99,
  "trackPrice": 1.29,
  "releaseDate": "2013-01-01T08:00:00Z",
  "collectionExplicitness": "explicit",
  "trackExplicitness": "explicit",
  "discCount": 1,
  "discNumber": 1,
  "trackCount": 21,
  "trackNumber": 1,
  "trackTimeMillis": 434077,
  "country": "USA",
  "currency": "USD",
  "primaryGenreName": "Hip-Hop/Rap",
  "contentAdvisoryRating": "Explicit",
  "isStreamable": true
};

const TEST_DATA_ARTIST = {
  "wrapperType": "artist",
  "artistType": "Artist",
  "artistName": "Billie Eilish",
  "artistLinkUrl": "https://music.apple.com/us/artist/billie-eilish/1065981054?uo=4",
  "artistId": 1065981054,
  "amgArtistId": 3177510,
  "primaryGenreName": "Alternative",
  "primaryGenreId": 20
};

const TEST_DATA_ALBUM = {
  "wrapperType": "collection",
  "collectionType": "Album",
  "artistId": 3274302,
  "collectionId": 1473960872,
  "amgArtistId": 534825,
  "artistName": "Iron & Wine",
  "collectionName": "Live At Third Man Records",
  "collectionCensoredName": "Live At Third Man Records",
  "artistViewUrl": "https://music.apple.com/us/artist/iron-wine/3274302?uo=4",
  "collectionViewUrl": "https://music.apple.com/us/album/live-at-third-man-records/1473960872?uo=4",
  "artworkUrl60": "https://is4-ssl.mzstatic.com/image/thumb/Music113/v4/9a/b0/8c/9ab08cdb-e833-1d52-95c9-fce30ac88a36/source/60x60bb.jpg",
  "artworkUrl100": "https://is4-ssl.mzstatic.com/image/thumb/Music113/v4/9a/b0/8c/9ab08cdb-e833-1d52-95c9-fce30ac88a36/source/100x100bb.jpg",
  "collectionPrice": 9.90,
  "collectionExplicitness": "explicit",
  "contentAdvisoryRating": "Explicit",
  "trackCount": 10,
  "copyright": "℗ 2019 Third Man Records, LLC",
  "country": "USA",
  "currency": "USD",
  "releaseDate": "2019-07-26T07:00:00Z",
  "primaryGenreName": "Alternative"
};

const TEST_DATA_MUSIC_VIDEO = {
  "wrapperType": "track",
  "kind": "music-video",
  "artistId": 1065981054,
  "trackId": 1458003118,
  "artistName": "Billie Eilish",
  "trackName": "bad guy",
  "trackCensoredName": "bad guy",
  "artistViewUrl": "https://music.apple.com/us/artist/billie-eilish/1065981054?uo=4",
  "trackViewUrl": "https://music.apple.com/us/music-video/bad-guy/1458003118?uo=4",
  "previewUrl": "https://video-ssl.itunes.apple.com/itunes-assets/Video113/v4/0d/b4/83/0db483b4-aa40-c7d7-2aaa-3876a780fa5c/mzvf_2706812862443658313.640x478.h264lc.U.p.m4v",
  "artworkUrl30": "https://is2-ssl.mzstatic.com/image/thumb/Video113/v4/6a/09/5d/6a095d11-a7db-41a2-f605-829fbf62af59/source/30x30bb.jpg",
  "artworkUrl60": "https://is2-ssl.mzstatic.com/image/thumb/Video113/v4/6a/09/5d/6a095d11-a7db-41a2-f605-829fbf62af59/source/60x60bb.jpg",
  "artworkUrl100": "https://is2-ssl.mzstatic.com/image/thumb/Video113/v4/6a/09/5d/6a095d11-a7db-41a2-f605-829fbf62af59/source/100x100bb.jpg",
  "collectionPrice": 1.99,
  "trackPrice": 1.99,
  "releaseDate": "2019-03-29T07:00:00Z",
  "collectionExplicitness": "notExplicit",
  "trackExplicitness": "notExplicit",
  "trackTimeMillis": 205928,
  "country": "USA",
  "currency": "USD",
  "primaryGenreName": "Alternative"
};

const TEST_DATA = [
  TEST_DATA_SONG,
  TEST_DATA_ARTIST,
  TEST_DATA_ALBUM,
  TEST_DATA_MUSIC_VIDEO
]

function App(): JSX.Element {
  const [searchResponse, setSearchResponse]: any = useState([{}]);
  const [search, setSearch]: any = useState({ category: 'song', search_term: '' });
  const [additionalParams, setAdditionalParams]: any = useState({
    country: {
      checked: false,
      value: 'spain'
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
    console.log(search);
  }, [search]);

  useEffect(() => {
    console.log(additionalParams);
  }, [additionalParams]);


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
      <SearchResultDisplayer data={TEST_DATA} />
    </div>
  );
}

export default App;
